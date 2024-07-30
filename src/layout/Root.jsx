import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div >
       
            <div className='w-[100%] md:w-[90%] mx-auto '>
            <Navbar></Navbar>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;