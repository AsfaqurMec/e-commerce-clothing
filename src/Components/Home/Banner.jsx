/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { IoWoman } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { MdWatch } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FaBaby } from "react-icons/fa6";

const Banner = () => {

  const women = "women";
  const man = "man";
  const watch = "watch";
  const shoe = "shoe";

    return (
        <div className="flex gap-5">
           <div className="w-1/4 bg-blue-950  text-white font-semibold text-lg hidden lg:flex">
            <div className="flex flex-col justify-center items-start w-full ">
         
               <Link to={`/collection/${women}`} className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><IoWoman /> WOMEN'S CLOTHING</Link>
               <Link to={`/collection/${man}`} className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><IoIosMan /> MEN'S CLOTHING</Link>
               <Link to={`/collection/${watch}`} className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><MdWatch /> WATCHES</Link>
               <Link  className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><GiShoppingBag /> BAGS</Link>
               <Link to={`/collection/${shoe}`} className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><GiRunningShoe /> SHOES</Link>
               <Link  className="flex gap-5 mb-5 text-xl w-full hover:bg-orange-600 pl-10 py-2"><IoDiamond /> JEWELLERY</Link>
               <Link  className="flex gap-5  text-xl w-full hover:bg-orange-600 pl-10 py-2"><FaBaby /> TOYS, KIDS & BABY</Link>

            </div>
            </div>


            <div className='rounded-sm w-full lg:w-3/4'>
           <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-none"
      >
        <SwiperSlide className='rounded-sm w-full h-[60vh] md:h-[61vh] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/5Mh71sb/Screenshot-2024-08-01-193713.pnghttps://i.ibb.co/MsRhtd6/Screenshot-2024-08-01-235858.png")]'>
           
            <div className='w-full gap-2 md:gap-4 h-[60vh] md:h-[61vh] flex flex-col justify-center items-start pl-8 bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/MsRhtd6/Screenshot-2024-08-01-235858.png")]'>
            
            <h1 className='  text-white font-bold text-5xl mb-1 md:text-7xl space-y-2 md:space-y-6'>NEW</h1>
            <h1 className='  text-white font-bold text-5xl  md:text-7xl space-y-2 md:space-y-6'>ARRIVALS</h1>
            <h1 className='  text-white font-medium tracking-[.12em] text-2xl md:text-3xl'>SUMMER COLLECTION!!</h1>
            <h1 className='   font-medium tracking-[.12em] mt-4 md:mt-5 text-2xl md:text-3xl text-red-600'>Hot Trending</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            <Link to="/shop"><button className='btn text-white bg-black border-none rounded-sm hover:bg-sky-700 px-5 font-semibold  text-2xl'>Shop Now</button></Link>
            {/* <Link to="/search"><button className='btn btn-info px-8 text-xl'>Search Donors</button></Link> */}
            </div>

            </div>
        </SwiperSlide>
        
        <SwiperSlide className='rounded-sm w-full h-[60vh] md:h-[61vh] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/YhB3dRR/Screenshot-2024-08-02-000407.png")]'>
           
            <div className='w-full gap-1 md:gap-4 h-[60vh] md:h-[61vh] flex flex-col justify-center items-start pl-8 bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/YhB3dRR/Screenshot-2024-08-02-000407.png")]'>
            
            <h1 className='  text-white font-bold text-5xl mb-1 md:text-7xl space-y-6 uppercase'>Men's</h1>
            <h1 className='  text-white font-bold text-5xl  md:text-7xl space-y-6 uppercase'>Fashion</h1>
            <h1 className='  text-white font-medium tracking-[.12em] text-2xl md:text-3xl'>SUMMER COLLECTION!!</h1>
            <h1 className='   font-medium tracking-[.12em]  mt-4 md:mt-5 text-2xl md:text-3xl text-red-600'>Hot Trending</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            <Link to="/shop"><button className='btn text-white bg-black border-none rounded-sm hover:bg-sky-700 px-5 font-semibold  text-2xl'>Shop Now</button></Link>
            </div>

            </div>
        </SwiperSlide>
        
        
      </Swiper>

     



        </div>
            
        </div>
    );
};

export default Banner;