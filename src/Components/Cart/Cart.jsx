import { FaHome } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// import toast from "react-hot-toast";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Cart = () => {


  

    const { user } = useAuth();
    // console.log(user);
    
   
     const [latest, setLatest] = useState([]);
     
   
     useEffect(() => {
       const getData = async () => {
         const { data } = await axios(
           `https://e-commerce-server-eight-fawn.vercel.app/cart`
         )
         
         setLatest(data)
        // console.log(data);
        // console.log(latest);
       }
       getData();
       
   
   
   
     }, [latest])

//console.log(latest);


     const [message, setMessage] = useState([]);
     
       // const email = user.email;
       // console.log(email);
       // eslint-disable-next-line no-unused-vars
       const timer = setTimeout(() => {
         const email = user.email;
         const filter = latest.filter(item=> item.email == email);
         
         setMessage(filter);
        
       }, 1000);
   
        const totalPrice = message.reduce((total, item) => total + item.price*item.quantity, 0)
      // console.log(totalPrice);
      const totalQuantity = message.reduce((total, item) => total + item.quantity, 0) 
      //console.log(totalQuantity);
      const total = totalPrice + totalQuantity*50;
      //console.log(total);
  
      const handleDelete = id => {
        // console.log(id);
         // make sure user is confirmed to delete
         Swal.fire({
             title: 'Are you sure?',
             text: "You won't be able to revert this!",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Yes, delete it!'
         })
         .then((result) => {
             if (result.isConfirmed) {
      
         fetch(`https://e-commerce-server-eight-fawn.vercel.app/latest/cart/${id}`, {
             method: 'DELETE'
         })
             .then(res => res.json())
             .then(data => {
                 if (data.deletedCount > 0) {
                   //  console.log('deleted successfully');
                   Swal.fire(
                     'Deleted!',
                     'Your request has been deleted.',
                     'success'
                 )
               //  refetch();
                      // toast.success('deleted successfully');
                     // remove the user from the UI
                     const remainingUsers = message.filter(spot => spot._id !== id);
                     setMessage(remainingUsers);
                 }
             })
         }
      })
      }
       
 
       
    return (
        <>
        <div className='bg-black text-center py-4  text-white'>
            <h1 className='text-4xl mb-2'>MY CART</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'><FaHome /> Home / My Cart</h1>

         </div>
         {
            user ? 
            <h1 className='flex justify-start my-10 text-lg items-center gap-2'>Total Item({totalQuantity})</h1>
            :
            <h1 className='flex justify-start my-10 text-lg items-center gap-2'>Total Item(0)</h1>
         }
         
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="overflow-x-auto min-h-[46vh] w-full lg:w-2/3 bg-[#f6f5f5]">
    <table className="table rounded-none bg-[#f6f5f5] w-full border-2">
        {/* head */}
        <thead className="border-b-2">
            <tr>
                
                <th className="px-[5px] md:px-3 text-stone-950 text-lg  font-bold">Product</th>
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Price</th>
                
                
                
                
            </tr>
      
      </thead>
    { user ?
        <tbody>
            {
              message.map(user => 
                <tr key={user?.title} className="border-b-2">
                
                <td className="px-[5px] md:px-3 font-bold text-lg ">
                    <div className="flex gap-5 items-center">
                    <img className="w-12 h-12" src={user.image} alt="" />
                    <div className="flex flex-col gap-3">

                        <h1 className="text-2xl">{user.title}</h1>
                        
                        <p>Category : {user?.category}</p>
                        <div className="flex flex-col md:flex-row gap-2">
                        <h1 className=""> Color : {user?.color}</h1>
                        <h1 className="">Size : {user?.size}</h1>
                    </div>
                    </div>
                    <button onClick={() => handleDelete(user._id)}  
                        className="btn md:mr-2 bg-transparent hover:bg-transparent shadow-none  text-black text-2xl"><MdDelete /></button>
                    </div>
                    </td>
                <td className="px-[5px] md:px-3 font-bold text-lg flex flex-col md:flex-row "><h1 className="flex">{user.quantity} X {user.price}</h1><h1> = ${user.quantity * user.price}</h1></td>
                
                
                
                
            </tr>
              )
          }
        </tbody> 
        :
        <h1 className="text-center text-5xl w-full">No data</h1>
        
    }
          
    </table>
</div>

{
    user ?
 
    <div className="w-full lg:w-1/3 bg-[#f6f5f5] p-5 h-96 rounded-md">

<h1 className="font-medium text-lg">Location</h1>
<p className="pb-5 border-b-2">ghutrghrg,grwir</p>

<h1  className="font-medium text-2xl my-3">Order Summery</h1>
<div className="flex justify-between mb-3">
    <h1 className="font-medium text-lg">Subtotal( {totalQuantity} items )</h1>
    <h1 className="font-medium text-lg">${totalPrice}</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between">
    <h1 className="font-medium text-lg">Shipping Fee</h1>
    <h1 className="font-medium text-lg">${totalQuantity*50}</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between mt-3">
    <h1 className="font-medium text-lg">Total</h1>
    <h1 className="font-medium text-lg">${total}</h1>
</div>

<button className="btn w-full mt-5 bg-black text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>PROCEED TO CHECKOUT ( {totalQuantity} )</button>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box bg-black">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle text-white text-xl btn-ghost absolute right-2 top-2">✕</button>
    </form>
    

               <Elements stripe={stripePromise}>
               <CheckoutForm total={total} ></CheckoutForm>
                </Elements>




  </div>
</dialog>

</div>

      :

      <div className="w-full lg:w-1/3 bg-[#f6f5f5] p-5 h-96 rounded-md">

<h1 className="font-medium text-lg">Location</h1>
<p className="pb-5 border-b-2">ghutrghrg,grwir</p>

<h1  className="font-medium text-2xl my-3">Order Summery</h1>
<div className="flex justify-between mb-3">
    <h1 className="font-medium text-lg">Subtotal( 0 items )</h1>
    <h1 className="font-medium text-lg">$0</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between">
    <h1 className="font-medium text-lg">Shipping Fee</h1>
    <h1 className="font-medium text-lg">$0</h1>
</div>

<div className="pb-5 border-b-2 flex justify-between mt-3">
    <h1 className="font-medium text-lg">Total</h1>
    <h1 className="font-medium text-lg">$0</h1>
</div>

<button className="btn w-full mt-5 bg-black text-white">PROCEED TO CHECKOUT ( 0 )</button>

</div>

}






        </div>
        </>
    );
};

export default Cart;