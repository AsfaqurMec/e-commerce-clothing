/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import logo from '../../assets/logo.png'
import { LuMenuSquare } from "react-icons/lu";
import './Nav.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import useAuth from "../../hook/useAuth";
import axios from "axios";

import img from '../../assets/Screenshot 2024-08-14 223840.png'

import { IoWoman } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { MdWatch } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FaBaby } from "react-icons/fa6";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const Navbar = () => {

  const women = "women";
  const man = "man";
  const watch = "watch";
  const shoe = "shoe";


  const { logout } = useContext(AuthContext);
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

  const handleLogOut = () => {
    
    
   
   
    logout()
       .then(() => { 
        
       })
       .catch(error => console.log(error))
       
}

const [toggle, setToggle] = useState(false);

   const handleToggle = () => {
          setToggle(true);
   }
  
//    const handleTogle = () => {
//     setToggle(false);
// }

    const navLinks = <>
       
                       <li  className="mr-3  group rounded-md hover:scale-125 transition duration-300 hover-underline shop"><NavLink to="/shop" >Shop</NavLink></li>
                       <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><NavLink to="/blog" >Blog</NavLink></li>


                      <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><NavLink to="/contact" >Contact Us</NavLink></li>
          
                       
        
        
    </>
    

    const [isSticky, setIsSticky] = useState(false);
  const [showUpperNavbar, setShowUpperNavbar] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const lowerNavbar = document.getElementById('lower-navbar');

    if (lowerNavbar) {
      const lowerNavbarOffset = lowerNavbar.offsetTop;
      
      // Set sticky state for lower navbar
      setIsSticky(scrollY >= lowerNavbarOffset);

      // Show upper navbar when scrolling back to the top
      setShowUpperNavbar(scrollY < lowerNavbarOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);









   return (
       <>
       <div className=" ">
        {/* UPPER NAVBAR */}
        
       <div className="flex justify-center lg:justify-between px-2 lg:px-16 bg-white text-black py-2 md:py-2 items-center w-full border-b-2 ">
        <div>
              <h1 className="text-xs md:text-lg">OUR PHONE NUMBER : 01956230265</h1>
        </div>

        <div className="flex justify-end gap-5 items-center">
          
        {
                       user? <div className=" flex items-center justify-center gap-2">
                        <div className="dropdown block dropdown-end">
                               <div className="w-10  rounded-full dropdown dropdown-end">
                               <label tabIndex={0} className="btn w-14 bg-transparent shadow-none hover:bg-transparent border-none  text-black p-1">
                               {/* <LuMenuSquare className="md:w-8 w-6 h-6 md:h-7"/> */}
                              <Link to="/account"> <img className="w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } /> </Link>
                       </label> 
                               </div>
                           
                           {/* <ul tabIndex={0} className='menu menu-sm dropdown-content mt-1 z-[1000] p-[2px] shadow bg-black rounded-sm w-52'
           > */}
             
             {/* <li className="hover:bg-green-300 rounded-md">
               <Link className="text-base font-semibold" to='/dashboard'>Dashboard</Link>
             </li> */}
             
            {/* <li> <button onClick={handleLogOut}className="btn btn-sm bg-sky-400 hover:bg-blue-500 text-white rounded-sm  btn-ghost">Logout</button></li> */}
           {/* </ul> */}
                           </div>
                        {/* <img className="w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />  */}
                           
                           </div>  
                           :
                           <div className="lg:flex justify-end hidden">
                            {
                              user ? 
                          
                           <Link to='/account'>
                               {/* <button className="btn btn-sm bg-green-500 hover:bg-blue-500 text-white mr-2  btn-ghost">Login</button> */}
                               <h1 className="flex gap-1 items-center uppercase"> <img className="w-6 rounded-full" src={ "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />  My Account</h1>
                           </Link>
                           :
                           <Link to='/login'>
                               {/* <button className="btn btn-sm bg-green-500 hover:bg-blue-500 text-white mr-2  btn-ghost">Login</button> */}
                               <h1 className="flex gap-1 items-center uppercase"> <img className="w-6 rounded-full" src={ "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />  My Account</h1>
                           </Link>
                            } 
                       </div>
                   }

{ user ? 
                  <Link to='/wishlist'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{message.length}</span><CiHeart className="h-8 w-8"/></h1></Link>
                  : 
                  <Link to='/wishlist'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge  mt-1 w-6 text-lg  bg-black text-white">0</span><CiHeart className="h-8 w-8"/></h1></Link>
                }

                { user ?
                  <Link to='/cart'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{massage.length}</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                  : 
                  <Link to='/cart'> <h1 className="indicator hidden lg:flex"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">0</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                }



        </div>

       </div>
       
       {/* Some placeholder content to create scroll effect */}
      

       {/* LOWER NAVBAR */}
       <div >
       <div  className="navbar mb-2 shadow-sm bg-white  px-1 md:px-2  ">
               <div className="w-[50%] ">
                   {/* <div className="dropdown">
                       <label tabIndex={0} className="btn btn-ghost text-black p-1 md:hidden">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                       </label>
                       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-200 z-50 rounded-box w-52">
                       {navLinks}
                       
                       </ul>
                   </div> */}
<div className="flex justify-start gap-1 md:gap-5">
<div className="drawer  lg:hidden justify-start p-0">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn p-0 bg-transparent border-none text-slate-50 hover:bg-transparent text-2xl">
    {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>   */}
          {/* {
            !toggle ?  */}
            <GiHamburgerMenu onClick={handleToggle} className='md:w-10 w-5 h-5 md:h-10 text-black' /> 
             {/* :
             <h1 onClick={handleTogle} className="text-3xl ml-1 border-2 px-3 text-black">X</h1>
          } */}
             
    </label>
  </div>
  <div className="drawer-side z-50 mt-28 overflow-y-scroll">
  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className=" menu bg-[#ffffffef] border-2 border-sky-200 text-base-content min-h-[150vh] w-80 py-10 px-5 z-50 space-y-5">
      {/* Sidebar content here */}
      <div className="flex items-center p-1 mb-10 rounded-md bg-slate-300">
      <input
                type='text'
                name='name'
                id='name'
                placeholder='Search Here'
                className='w-full px-3 py-2  rounded-md  focus:outline-none  text-gray-900'
                data-temp-mail-org='0'
              />

                <IoIosSearch className="h-8 w-8 " />
          </div>

          <ul className="menu lg:menu-horizontal bg-base-100 rounded-lg lg:mb-64">

          <li>
    <details >
      <summary className="text-lg font-bold">Category</summary>
      <ul className="p-0 m-0">
        <li className="p-0 m-0"><Link to={`/collection/${women}`} className="flex justify-start gap-5 mb-5 text-lg w-full hover:bg-orange-600 pl-10 py-2"><IoWoman className="h-10 w-10"/> <h1>WOMEN'S CLOTHING</h1></Link></li>
        <li className="p-0 m-0"><Link to={`/collection/${man}`} className="flex gap-5 mb-5 text-lg w-full hover:bg-orange-600 pl-10 py-2"><IoIosMan className="h-10 w-10"/> MEN'S CLOTHING</Link></li>
        <li className="p-0 m-0"><Link to={`/collection/${watch}`} className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><MdWatch /> WATCHES</Link></li>
        <li className="p-0 m-0"><Link  className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><GiShoppingBag /> BAGS</Link></li>
        <li className="p-0 m-0"><Link to={`/collection/${shoe}`} className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><GiRunningShoe /> SHOES</Link></li>
        <li className="p-0 m-0"><Link  className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><IoDiamond /> JEWELLERY</Link></li>
        <li className="p-0 m-0"> <Link  className="flex gap-5  text-xl w-full hover:bg-orange-600 pl-10 py-2"><FaBaby /> TOYS, KIDS & BABY</Link></li>
        </ul>

        </details>
        </li>

          </ul>





      <li  className="mr-3  rounded-md hover:scale-105 transition duration-300 bg-white text-center text-xl font-medium "><NavLink to="/shop" >Shop</NavLink></li>
                       <li  className="mr-3   rounded-md hover:scale-105 transition duration-300 bg-white text-center text-xl font-medium"><NavLink to="/blog" >Blog</NavLink></li>


                      <li  className="mr-3   rounded-md hover:scale-105 transition duration-300 bg-white text-center text-xl font-medium"><NavLink to="/contact" className="text-center">Contact Us</NavLink></li>
    </ul>
  </div>
</div>


                   <Link to='/' className="btn hover:bg-transparent border-none bg-transparent text-black p-0 font-bold normal-case text-xl md:text-2xl lg:text-5xl" >
                      <img src={img} className="h-12 w-32 rounded-md" alt="" />
                      {/* <h1>Bostro</h1> */}
                      </Link>
                 </div>   
               </div>


               <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="navbar-center hidden lg:flex">
                   <ul className="menu-horizontal px-1 text-lg font-normal flex gap-10">
                   {navLinks}
                   </ul>
               </div>



               <div className="navbar-end ">
               
               
                <div className="flex items-center justify-center gap-5 mr-5">
                <div className="flex items-center p-1 rounded-md ">
                <IoIosSearch className="h-8 w-8 text-black mr-1" />
      <input
                type='text'
                name='name'
                id='name'
                placeholder='Search Here . . . '
                className='w-full px-3 py-2 border-b-2 border-b-black  rounded-sm  focus:outline-none  text-gray-900'
                data-temp-mail-org='0'
              />

               
          </div>
                 {/* { user ? 
                  <Link to='/wishlist'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{message.length}</span><CiHeart className="h-8 w-8"/></h1></Link>
                  : 
                  <Link to='/wishlist'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">0</span><CiHeart className="h-8 w-8"/></h1></Link>
                }

                { user ?
                  <Link to='/cart'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">{massage.length}</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                  : 
                  <Link to='/cart'> <h1 className="indicator"><span className="indicator-item badge mt-1 w-6 text-lg  bg-black text-white">0</span><IoCartOutline className="h-8 w-8"/></h1></Link>
                } */}

                </div>



                   {/* {
                       user? <div className=" flex items-center justify-center gap-2">
                        <div className="dropdown block dropdown-end">
                               <div className="w-10  rounded-full dropdown dropdown-end">
                               <label tabIndex={0} className="btn btn-ghost text-black p-1">
                               <LuMenuSquare className="w-8 h-7"/>
                       </label> 
                               </div>
                           
                           <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-sky-100 rounded-box w-52'
           >
             
             <li className="hover:bg-green-300 rounded-md">
               <Link className="text-base font-semibold" to='/dashboard'>Dashboard</Link>
             </li>
             
            <li> <button onClick={handleLogOut}className="btn btn-sm bg-sky-400 hover:bg-blue-500 text-white  btn-ghost">Logout</button></li>
           </ul>
                           </div>
                        <img className="w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } /> 
                           
                           </div>  
                           :
                           <div className="flex">
                           <Link to='/login'>
                               <button className="btn btn-sm bg-green-500 hover:bg-blue-500 text-white mr-2  btn-ghost">Login</button>
                           </Link>
                           
                       </div>
                   } */}
               </div>
           </div>
           </div>
           <div className=" hidden group-hover:block  bg-black text-white">
             <h1>ghroughtrklgjr</h1>
             <h1>ghroughtrklgjr</h1>
             <h1>ghroughtrklgjr</h1>
             <h1>ghroughtrklgjr</h1>
             <h1>ghroughtrklgjr</h1>
           </div>

           </div>
       </>
   );
};


export default Navbar;



