import { FaHome } from "react-icons/fa";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Wishlist = () => {

    const { user } = useAuth();
    // console.log(user);
    
   
     const [latest, setLatest] = useState([]);
     
   
     useEffect(() => {
       const getData = async () => {
         const { data } = await axios(
           `https://e-commerce-server-eight-fawn.vercel.app/wishlist`
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


//console.log(message);



const handleCart =  (title,image,category,price,size) => {
       
  const email = user.email;

  const info = {

    title : title,
   image : image,
    price : price,
    email : email,
    quantity : 1,
    category : category,
    color : "Black",
    size : size
  }
 // console.log(info);



 fetch('https://e-commerce-server-eight-fawn.vercel.app/latest/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
    
    
  })
    .then(response => response.json())
    // eslint-disable-next-line no-unused-vars
    .then(data => {
      // console.log(data);
      toast.success('Added to Cart successfully');  
    })


 }


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

   fetch(`https://e-commerce-server-eight-fawn.vercel.app/latest/wishlist/${id}`, {
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
            <h1 className='text-4xl mb-2'>MY WISHLIST</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'><FaHome /> Home / My Wishlist</h1>

         </div>
       
         <div className="overflow-x-auto min-h-[46vh] mt-10">
    <table className="table rounded-none bg-[#ffffff]  border-2">
        {/* head */}
        <thead>
            <tr>
                
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Product</th>
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Price</th>
                
                
                <th className="px-[5px] md:px-3 text-stone-950 text-lg font-bold">Add to Cart </th>
                
            </tr>
      
      </thead>
    { user ?
        <tbody>
            {
              message.map(user => 
                <tr key={user?.title} className="">
                
                <td className="px-[5px] md:px-3 font-bold text-lg">
                    <div className="flex gap-5 items-center">
                    <img className="w-12 h-12" src={user.image} alt="" />
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl md:text-2xl">{user.title}</h1>
                        <p className="text-base md:text-xl">Category : {user?.category}</p>
                        <h1 className="text-base md:text-xl"> Color Family : {user.color1} {user?.color2} {user?.color3}
                       
                    </h1>
                    </div>
                    </div>
                    </td>
                <td className="px-[5px] md:px-3 font-bold text-lg">${user.price}</td>
                
                
                
                <td className="flex flex-col gap-2 md:flex-row">
                 
        
                   <button onClick={()=>handleCart(user.title,user.image,user.category,user.price,user.size)}
                        className="btn md:mr-2 btn-success text-white  text-2xl"><FaCartPlus /></button>

                     <button   onClick={() => handleDelete(user._id)}
                        className="btn md:mr-2 btn-error text-white text-2xl"><MdDelete /></button>
                
                </td>
            </tr>
              )
          }
        </tbody> 
        :
        <h1 className="text-center text-5xl w-full">No data</h1>
        
    }
          
    </table>
</div>

        </>
    );
};

export default Wishlist;