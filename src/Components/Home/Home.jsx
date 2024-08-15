/* eslint-disable no-unused-vars */
import Latest from "../Latest/Latest";
import Banner from "./Banner";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { FaThumbsUp } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import Category from "../Category/Category";
import axios from "axios";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Home = () => {

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
        <div className="">
            <Banner></Banner>
            <Latest></Latest>
            <Category></Category>
            <div>
            <h1 className='text-center mb-2 mt-10 text-4xl font-bold uppercase'>WHY US</h1>
            <h1 className='text-center w-20 mx-auto h-1 my-4 bg-black'></h1>

            <div className="flex flex-col md:flex-row justify-between gap-10 text-center my-10">

                <div className="flex flex-col justify-center items-center gap-2">
                <FaThumbsUp className="h-16 w-16"/>
                <h1 className="text-xl font-bold">20,000+Satisfied <br /> Customers</h1>
                <p className="text-base text-slate-500">Non fames duis fusce egestas dis convallis cras.</p>
                <p className="pb-1 border-b-2 border-b-black">Read More</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                <FaRocket className="h-16 w-16"/>
                <h1 className="text-xl font-bold">FREE WORLDWIDE <br /> SHIPPING</h1>
                <p className="text-base text-slate-500">Non fames duis fusce egestas dis convallis cras.</p>
                <p className="pb-1 border-b-2 border-b-black">Read More</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                <GiReturnArrow className="h-16 w-16"/>
                <h1 className="text-xl font-bold">30-Day <br /> Return Policy</h1>
                <p className="text-base text-slate-500">Non fames duis fusce egestas dis convallis cras.</p>
                <p className="pb-1 border-b-2 border-b-black">Read More</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                <FaShippingFast className="h-16 w-16"/>
                <h1 className="text-xl font-bold">Tax Free <br />
                Shopping</h1>
                <p className="text-base text-slate-500">Non fames duis fusce egestas dis convallis cras.</p>
                <p className="pb-1 border-b-2 border-b-black">Read More</p>
                </div>

            </div>


            </div>
















            {/* <div className="w-[100%] md:w-[90%] mx-auto flex justify-around items-center lg:hidden bottom-0 bg-slate-100 fixed py-2 md:py-4">
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
            <img className="w-7 md:w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8mshvVT/666201.png" } />     

            </div> */}
        </div>
    );
};

export default Home;