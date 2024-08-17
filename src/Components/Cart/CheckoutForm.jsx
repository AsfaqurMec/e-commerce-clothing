import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";


const CheckoutForm = (total) => {
   // console.log(total);
    
    
const stripe = useStripe();
const elements = useElements();
const [error, setError] = useState('');
const axiosPublic = useAxiosPublic();
// eslint-disable-next-line no-unused-vars
const [transactionId, setTransactionId] = useState('');
const [clientSecret, setClientSecret] = useState('')

const { user } = useAuth();

//console.log(user);
    
//console.log(inputValue);
 let value = Number(total.total);

 // Create a new Date object
 const currentDate = new Date();

 // Format the date and time as needed
 const formattedDate = currentDate.toLocaleDateString(); // e.g., "8/15/2024"
 const formattedTime = currentDate.toLocaleTimeString(); // e.g., "3:15:30 PM"
//console.log(total.total);

useEffect(() => {
    if (value>0) {
      
        axiosPublic.post('/create-payment-intent', { price: value })
            .then(res => {
               // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }

}, [axiosPublic, value ])

//console.log(clientSecret);



const handleSubmit = async(event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

const card = elements.getElement(CardElement)

if (card == null) {
    return;
  }

const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card
})

if(error){
    console.log('error',error);
    setError(error.message);
} else {
    console.log('payment', paymentMethod);
    setError('');
}

// confirm payment
const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment (clientSecret, {
    payment_method: {
        card: card,
        billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
        }
    }
})

if (confirmError) {
    console.log('confirm error')
}
else {
    console.log('payment intent', paymentIntent)

    if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);


// now save the payment in the database
const payment = {
    email: user?.email,
    name: user?.displayName,
    price: value,
    transactionId: paymentIntent.id,
    date: formattedDate,
    time :  formattedTime,// utc date convert. use moment js to 
    status: 'pending',
   
}

const res = await axiosPublic.post('/confirm', payment);
                console.log('payment saved', res.data);

                toast.success('Payment successfully');
                   
                fetch(`https://e-commerce-server-eight-fawn.vercel.app/delete`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {console.log(data);
                    })                   

    }

}

}



    return (
        <>
        <div className="bg-black w-[98%] mx-auto rounded-md mt-5 p-2">
        
        <form onSubmit={handleSubmit} className="mt-10 bg-[#000]">
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#ffff',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button  className="btn btn-primary text-lg mt-16 text-white my-5 w-full mx-auto" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
        </form>
        </div>
        </> );
};

export default CheckoutForm;