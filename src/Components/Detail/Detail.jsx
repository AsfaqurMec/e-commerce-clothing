/* eslint-disable no-unused-vars */
import {  Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import { CiHeart } from "react-icons/ci";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const Detail = () => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const id = useParams();
     
    const [latest, setLatest] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `http://localhost:5000/latest/${id.id}`
        )
        
        setLatest(data)
       // console.log(data);
       // console.log(latest);
      }
      getData()
    }, [id.id, latest])

    const { _id, title, category, images, price, size, color} = latest;
  // console.log(images);
 
  const [late, setLate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `http://localhost:5000/latest`
      )
      
     

      setLate(data)
     // console.log(data);
      //console.log(latest);
    }
    getData()
  }, [late])

    
     const filter = late.filter(item=> item._id != _id);
     //  console.log(filter);


    return (
        <div>
         <div className="flex flex-col lg:flex-row gap-8 items-center w-[85%] mx-auto my-10 py-10 md:pl-5 bg-[#fffffffd]">

        <div data-aos="flip-right" data-aos-duration="2000">
         
        {/* <img src={images[0]} alt="" /> */}

       {/* <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
       
      </Swiper>  */}




         </div> 
     <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" className="flex flex-col gap-4">
         <h2 className="text-4xl font-bold primary-font">{title}</h2>
          {/* <p className="pb-5  text-xl font-medium border-[#13131326]">#{category}</p>
         
         <p className="pb-3  text-xl font-medium border-[#13131326]">quantity : {quantity}</p>
         <p className="pb-3  text-xl font-medium border-[#13131326]">Made By : {email}</p> */}
         
          {/* <p className="my-4"><span className=" font-bold">Description :</span> {img1}</p>  */}
         <div className="w-Full flex flex-col gap-2 pb-6 border-b-2  border-[#13131326]">
         </div>
        <div className="flex flex-row justify-between">
        
        <h3 className='text-[#0a76be] font-medium'>Cost: ${price}</h3>
        {/* <div className="flex gap-3">
           {
            size.map((s, index) => <h1 key={index}>{s}</h1>)
           }
        </div> */}
        </div>
        
        <div><button className="btn bg-black text-white">Add to Cart</button></div>
        <div><button className="btn text-black bg-white">Buy Now</button></div>
        
        
       
        </div> 
        </div> 


        <h1 className='text-center mb-2 mt-10 text-4xl font-bold uppercase'>Related Products</h1>
        <h1 className='text-center w-20 mx-auto h-1 my-4 bg-black'></h1>
         

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20'>
        { filter.slice(0, 4).map(latest => 
           <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 '
                src={latest.images[0]}
                alt="Shoes" />
                <h1 className='add absolute hidden group-hover:block bottom-0 bg-black w-full text-white text-center text-3xl py-3'>Add to Cart</h1>
                <h1 className='add absolute  hidden group-hover:block top-5 right-4 text-3xl'><CiHeart className="h-8 w-8"/></h1>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{latest.title}</h2>
              <p>${latest.price}</p>
              
            </div>
          </div> </Link> 
        )
        }
        </div>






        </div>
    );
};

export default Detail;