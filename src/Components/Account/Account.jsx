/* eslint-disable no-unused-vars */
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hook/useAuth";
import { useContext, useEffect, useState } from "react";
import axios from "axios";




const Account = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const { user } = useAuth();

    const handleLogOut = () => {
    
        logout()
           .then(() => { 
            navigate('/');
           })
           .catch(error => console.log(error))
           
    }
    const [latest, setLatest] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `https://e-commerce-server-eight-fawn.vercel.app/payment`
        )
        
       

        setLatest(data);
       // setLoading(false);
       // console.log(data);
        //console.log(latest);
      }
      getData()
    }, [latest])

    const [message, setMessage] = useState([]);
    const timer = setTimeout(() => {
        const email = user.email;
        const filter = latest.filter(item=> item.email == email);
        
        setMessage(filter);
       
      }, 1000);

    return (
       <>
<div className='bg-black text-center py-4  text-white'>
            <h1 className='text-4xl mb-2'>MY ACCOUNT</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'><FaHome /> Home / My Account</h1>
         </div>
         <div className="w-[80%] mx-auto mt-10">
                <div className="flex flex-col-reverse lg:flex-row gap-14">
                    <div className="w-full lg:w-96 space-y-2">
                        <h1 className="text-4xl mb-2 h-20 flex items-center justify-center bg-black text-white w-full">MY ACCOUNT</h1> 
                        <Link to="/wishlist"><div><button className="mb-2 btn text-white text-xl w-full bg-cyan-800 hover:bg-cyan-700">My Wishlist</button></div></Link>
                        <Link to="/cart"><div><button className="btn mb-2 text-white text-xl w-full bg-teal-800 hover:bg-cyan-700">My Cart</button></div></Link>
                        
                        <div><button onClick={handleLogOut} className="btn text-white text-xl w-full bg-black hover:bg-cyan-700">Logout</button></div>    
                    </div>

                    <div className="w-full">
                      <h1 className="mb-10 text-xl">Hello, <span className="text-2xl text-green-500 font-medium">{user?.displayName}</span></h1>

                       <h1 className="mb-5 font-serif text-xl">Order History :</h1>
                       <div className="flex flex-col gap-5 mb-10">
                       {
              message?.map(user =><div key={user._id} className="flex flex-col gap-2 border-2 p-2">
                       <div className="flex  gap-20">
                          <h1 className="font-semibold">Date : {user?.date} | {user?.time}</h1>
                          <h1 className="font-semibold">Cost : ${user?.price}</h1>
                       </div>
                       <h1 className="font-semibold">TransactionId: {user?.transactionId}</h1>
              </div>

              )}
              </div>
                       <div className="flex flex-col gap-5">
                       <h1 className="font-serif text-xl">Account Details :</h1>
                        <h1 className="text-xl pb-5 border-b-2">Name : <span className="ml-10">{user?.displayName}</span></h1>
                        <h1 className="text-xl pb-5 border-b-2">Email : <span className="ml-10">{user?.email}</span></h1>
                       
                       </div>
                    </div>
                </div>

            </div>

       </>
    );
};

export default Account;