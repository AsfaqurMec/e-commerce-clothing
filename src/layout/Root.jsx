import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import useAuth from "../hook/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Root = () => {

    const { user } = useAuth();
    // console.log(user);
    
   
     const [latest, setLatest] = useState([]);
     const [cart, setCart] = useState([]);
   
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
   
     useEffect(() => {
       const getData = async () => {
         const { data } = await axios(
           `https://e-commerce-server-eight-fawn.vercel.app/cart`
         )
         
         setCart(data)
        // console.log(data);
        // console.log(latest);
       }
       getData();
       
   
   
   
     }, [cart])
   
   const [message, setMessage] = useState([]);
   const [massage, setMassage] = useState([]);
     // const email = user.email;
     // console.log(email);
     // eslint-disable-next-line no-unused-vars
     const timer = setTimeout(() => {
       const email = user.email;
       const filter = latest.filter(item=> item.email == email);
       const filter1 = cart.filter(item=> item.email == email);
       setMessage(filter);
       setMassage(filter1);
     }, 3000);
      
       // const filter = latest.filter(item=> item.email == email);
       
      // console.log(message.length);
      // console.log(massage.length);
   





    return (
        <div >
       
            <div className='w-[100%] md:w-[90%] mx-auto '>
            <Navbar></Navbar>
               <Outlet></Outlet>
               <div className="w-[100%] md:w-[90%] mx-auto flex justify-around items-center lg:hidden bottom-0 bg-slate-100 fixed py-2 md:py-4 z-50">
            { user ? 
                  <Link to='/wishlist'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">{message.length}</span><CiHeart className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
                  : 
                  <Link to='/wishlist'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">0</span><CiHeart className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
                }

                { user ?
                  <Link to='/cart'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">{massage.length}</span><IoCartOutline className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
                  : 
                  <Link to='/cart'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-3 md:w-6 text-xs md:text-lg  bg-black text-white">0</span><IoCartOutline className="h-6 md:h-8 w-6 md:w-8"/></h1></Link>
                }
                { user ?
            <Link to="/account"><img className="w-7 md:w-10 rounded-full" src={user?.photoURL } /></Link>     
                   : 
            <Link to="/login"><img className="w-7 md:w-10 rounded-full" src={ "https://i.ibb.co/8mshvVT/666201.png" } /></Link>
                }
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;