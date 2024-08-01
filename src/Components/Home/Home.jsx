import Latest from "../Latest/Latest";
import Banner from "./Banner";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaThumbsUp } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import Category from "../Category/Category";


const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

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
















            <div className="w-[100%] md:w-[90%] mx-auto flex justify-around lg:hidden bottom-0 bg-slate-100 fixed py-4">
            <h1><CiHeart className="h-8 w-8"/></h1>
            <h1><IoCartOutline className="h-8 w-8"/></h1>
            <img className="w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8mshvVT/666201.png" } />     

            </div>
        </div>
    );
};

export default Home;