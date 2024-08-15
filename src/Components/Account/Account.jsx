import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hook/useAuth";
import { useContext } from "react";




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
                      <h1 className="mb-10 text-xl">Hello {user?.displayName}</h1>

                       <h1 className="mb-10 font-serif text-xl">Order History :</h1>

                       <div className="flex flex-col gap-5">
                       <h1 className="font-serif text-xl">Account Details :</h1>
                        <h1 className="text-xl pb-5 border-b-2">Name : <span className="ml-10">{user?.displayName}</span></h1>
                        <h1 className="text-xl pb-5 border-b-2">Email : <span className="ml-10">{user?.email}</span></h1>
                        <h1 className="text-xl pb-5 border-b-2 mb-10">Address : <span className="ml-10 ">{user?.address}</span></h1>
                       </div>
                    </div>
                </div>

            </div>

       </>
    );
};

export default Account;