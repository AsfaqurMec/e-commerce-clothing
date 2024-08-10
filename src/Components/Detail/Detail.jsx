/* eslint-disable no-unused-vars */
import {  Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiHeart } from "react-icons/ci";
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { TbCircleDashedNumber7 } from "react-icons/tb";
import { FiShieldOff } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
//import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const Detail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const id = useParams();
    const { user } = useAuth()
   // console.log(user);
    
  
    const [latest, setLatest] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `https://e-commerce-server-eight-fawn.vercel.app/latest/${id.id}`
        )
        
        setLatest(data)
       // console.log(data);
       // console.log(latest);
      }
      getData()
    }, [id.id, latest])

    const { _id, title, category,images, img1, img2, price, size1, size2, size3, color1, color2, color3} = latest;
  // console.log(images);
 
  
// let var1, var2;

//  images.map((value, index) => {
//   if (index === 0) var1 = value;
//   if (index === 1) var2 = value;
// });


// console.log(var1); 
// console.log(var2); 



  const [late, setLate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://e-commerce-server-eight-fawn.vercel.app/latest`
      )
      
     

      setLate(data)
     // console.log(data);
      //console.log(latest);
    }
    getData()
  }, [late])

    
     const filter = late.filter(item=> item._id != _id);
     //  console.log(filter);


     const [quantity, setQuantity] = useState(1);

     const increaseQuantity = () => {
       setQuantity(prevQuantity => prevQuantity + 1);
     };
   
     const decreaseQuantity = () => {
       setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
     };




     const [selectedValue, setSelectedValue] = useState('');

     const handleChange = (event) => {
       setSelectedValue(event.target.value);
     };

     const [selectedValues, setSelectedValues] = useState('');

     const handleChanges = (event) => {
       setSelectedValues(event.target.value);
     };



     const handleCart =  () => {
       
      const email = user.email;

      const info = {

        title : title,
       image : images[0],
        price : price,
        email : email,
        quantity : quantity,
        size : selectedValue,
        color : selectedValues,
        category : category
      }
    //s  console.log(info);



     fetch('https://e-commerce-server-eight-fawn.vercel.app/latest/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
        
        
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          toast.success('Added to Cart successfully');  
        })


     }







    return (
        <div>
         <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start w-[95%] gap-10 lg:gap-0 mx-auto my-10 py-10 md:pl-5 bg-[#f3f2f2]">

        <div data-aos="flip-right" data-aos-duration="2000">
         
        <img src={img1} alt="" />

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
        slidesPerView={2}
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


         <div className="flex gap-3 items-center">
      <h2>Size :</h2>
      {
  size1 ?   
      <div>
        <input 
          type="radio" name="radio-7" className="radio w-4 h-4 radio-info" 
          
          value={size1} 
          // checked={selectedValue =={size1}} 
          onChange={handleChange} 
        />
        <label htmlFor="option1" className="ml-1 text-2xl">{size1}</label>
      </div>
      : ''
}
{
  size2 ?

      <div>
        <input 
          type="radio" name="radio-7" className="radio w-4 h-4 radio-info"
         
          value={size2} 
          // checked={selectedValue == {size2}} 
          onChange={handleChange} 
        />
        <label htmlFor="option2 " className="ml-1 text-2xl">{size2}</label>
      </div>
      : ''
}

{
  size3 ?
      <div>
        <input 
          type="radio" name="radio-7" className="radio w-4 h-4 radio-info"  
          value={size3} 
          // checked={selectedValue =={size3}} 
          onChange={handleChange} 
        />
        <label htmlFor="option3" className="ml-1 text-2xl">{size3}</label>
      </div>
: ''
}
      <div>
        <p className="ml-1 text-xl">Selected size: {selectedValue}</p>
      </div>
    </div>
    

    <div className="flex gap-3 items-center">
      <h2>Color :</h2>
      {
  color1 ?   
      <div>
        <input 
          type="radio" name="radio-7" className="radio w-4 h-4 radio-info" 
          
          value={color1} 
          // checked={selectedValue =={size1}} 
          onChange={handleChanges} 
        />
        <label htmlFor="option1" className="ml-1 text-xl">{color1} 
          
        </label>
      </div>
: ''
}
{
  color2 ?
      <div>
        <input 
          type="radio" name="radio-7" className="radio w-4 h-4 radio-info"
         
          value={color2} 
          // checked={selectedValue == {size2}} 
          onChange={handleChanges} 
        />
        <label htmlFor="option2"  className="ml-1 text-xl">{color2}</label>
      </div>
      : ''
    }
     {
  color3 ?
      <div>
        <input 
          type="radio" name="radio-7" className="radio w-4 h-4 radio-info"  
          value={color3} 
          // checked={selectedValue =={size3}} 
          onChange={handleChanges} 
        />
       <label htmlFor="option3" className="ml-1 text-xl">{color3}</label>
      </div>
      : ''
    }
      <div>
        <p className="ml-1 text-xl">Selected color: {selectedValues}</p>
      </div>
    </div>









          {/* <p className="pb-5  text-xl font-medium border-[#13131326]">#{category}</p>
         
         <p className="pb-3  text-xl font-medium border-[#13131326]">quantity : {quantity}</p>
         <p className="pb-3  text-xl font-medium border-[#13131326]">Made By : {email}</p> */}
         
          {/* <p className="my-4"><span className=" font-bold">Description :</span> {img1}</p>  */}
          <div className="flex items-center gap-2 w-72 text-2xl font-semibold">
            <h1>Quantity :</h1>
            <button className="px-2 rounded-lg text-white bg-red-500" onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
             <button className="px-2 rounded-lg text-white bg-green-500" onClick={increaseQuantity}>+</button>
             </div>
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
        <div className="flex gap-5">
        <div><button onClick={handleCart} className="btn bg-emerald-600 hover:bg-green-800 text-white text-xl">Add to Cart</button></div>
        <div><button className="btn text-white text-xl bg-cyan-400 hover:bg-cyan-700">Buy Now</button></div>
        </div>
        
       
        </div> 

       <div className="flex flex-col gap-4 bg-white p-7 rounded-md">
        <h3 className="text-gray-500 font-semibold">Delivery Options</h3>
        <h1 className="text-xl font-semibold flex gap-1 items-center"><FaLocationDot /> sgdegfkerfbcrkfr,fehfgehfbre</h1>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-semibold flex gap-1 items-center mt-2"><TbTruckDelivery /> Standard Delivery</h1>
          <h1 className="text-xl font-semibold">$ 50</h1>
        </div>
        <h1 className="text-xl font-semibold mb-6 flex gap-1 items-center mt-2"><BsCashCoin /> Cash on Delivery Available</h1>
        <h3 className="text-base text-gray-500 font-semibold">Returns & Warranty</h3>
        <h1 className="text-xl font-semibold mb-3 flex gap-1 items-center"><TbCircleDashedNumber7 /> 7 Days Returns</h1>
        <h1 className="text-xl font-semibold flex gap-1 items-center"><FiShieldOff /> Warranty not available</h1>
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