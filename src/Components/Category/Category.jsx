
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import womens from '../../assets/women.png'
import mans from '../../assets/man.png'
import watchs from '../../assets/watch.png'
import shoes from '../../assets/shoe.png'
import bag from '../../assets/bag.png'
import { Link } from 'react-router-dom';




const Category = () => {

  const women = "women";
  const man = "man";
  const watch = "watch";
  const shoe = "shoe";

    return (
        <>
        <h1 className='text-center mb-2 mt-10 text-4xl font-bold uppercase'>TOP CATEGORIES</h1>
        <h1 className='text-center w-20 mx-auto h-1 my-4 bg-black'></h1>
         <p className='text-center mb-5 text-base font-semibold text-gray-500'>Checkout Our New & Arrival Products</p>
        <div className=''>

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide className=''>
        <Link to={`/collection/${women}`} className='flex flex-col justify-center items-center gap-2 mb-10'> 
          <img className='h-96 transition-transform duration-300 ease-in-out transform hover:scale-110'  src={womens} alt="" />
          <h1 className='text-4xl font-semibold'>Women</h1>
          <p className="pb-1 border-b-2 border-b-black text-gray-400 text-base">View Products</p>
          </Link>
        </SwiperSlide >
        
        <SwiperSlide className='flex flex-col justify-center items-center gap-2 mb-10'>
        <Link to={`/collection/${man}`} className='flex flex-col justify-center items-center gap-2 mb-10'> 
        <img className='h-96 transition-transform duration-300 ease-in-out transform hover:scale-110'  src={mans} alt="" />
          <h1 className='text-4xl font-semibold'>Man</h1>
          <p className="pb-1 border-b-2 border-b-black text-gray-400 text-base">View Products</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center gap-2 mb-10'>
        <Link to={`/collection/${watch}`} className='flex flex-col justify-center items-center gap-2 mb-10'> 
        <img className='h-96 transition-transform duration-300 ease-in-out transform hover:scale-110'  src={watchs} alt="" />
          <h1 className='text-4xl font-semibold'>Watch</h1>
          <p className="pb-1 border-b-2 border-b-black text-gray-400 text-base">View Products</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center gap-2 mb-10'>
        <Link to={`/collection/${shoe}`} className='flex flex-col justify-center items-center gap-2 mb-10'> 
        <img className='h-96 transition-transform duration-300 ease-in-out transform hover:scale-110'  src={shoes} alt="" />
          <h1 className='text-4xl font-semibold'>Shoe</h1>
          <p className="pb-1 border-b-2 border-b-black text-gray-400 text-base">View Products</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center gap-2 mb-10'>
        <img className='h-96 transition-transform duration-300 ease-in-out transform hover:scale-110'  src={bag} alt="" />
          <h1 className='text-4xl font-semibold'>Bag</h1>
          <p className="pb-1 border-b-2 border-b-black text-gray-400 text-base">View Products</p>
          
        </SwiperSlide>
        
        
      </Swiper>













        {/* { latest?.map(latest => 
            <div key={latest._id} className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 '
                src={latest.images[0]}
                alt="Shoes" />
                <h1 className='add absolute hidden group-hover:block bottom-0 bg-black w-full text-white text-center text-3xl py-5'>Add to Cart</h1>
                <h1 className='add absolute  hidden group-hover:block top-5 right-4 text-3xl'>W</h1>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{latest.title}</h2>
              <p>${latest.price}</p>
              
            </div>
          </div>
        )
        } */}
        </div>
        </>
    );
};

export default Category;