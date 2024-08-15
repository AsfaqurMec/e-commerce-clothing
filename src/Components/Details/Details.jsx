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


const Details = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const id = useParams();
    const { user } = useAuth()
   // console.log(user);
    
  
    const [latest, setLatest] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `https://e-commerce-server-eight-fawn.vercel.app/collections/${id.id}`
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
        `https://e-commerce-server-eight-fawn.vercel.app/collection`
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
    const [toggle, setToggle] = useState(false);
    const handleToggle = ()=> {
           setToggle(false);
    }
    const handleToggles = ()=> {
      setToggle(true);
}




    return (
        <div>
         <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start w-[95%] gap-10 lg:gap-0 mx-auto my-10 py-10 md:pl-5 bg-[#f3f2f28c]">

        <div data-aos="flip-right" data-aos-duration="2000" className="w-full md:w-1/2 flex justify-center">
         
        {/* <img src={img1} alt="" /> */}

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

<div className="carousel w-[70%]  relative">
{
  !toggle ?
  <div id="item1" className="carousel-item w-full ">
  <img
    src={img1}
    className="w-full " />
</div>
:
<div id="item2" className="carousel-item w-full">
<img
  src={img2}
  className="w-full" />
</div>
}
 
 
  {/* <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div> */}
  <div className="flex w-full absolute flex-col gap-2 py-1">
  <a  className=""><img onClick={handleToggle}
      src={img1}
      className="h-20 w-20" /></a>
      {
        img2 ? <a  className=""><img onClick={handleToggles}
        src={img2}
        className="h-20 w-20" /></a>
       : ""
      }
  
  {/* <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a> */}
</div>
</div>



         </div> 
     <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" className="flex flex-col w-full md:w-1/2 gap-8">
         <h2 className="text-4xl font-bold primary-font">{title}</h2>
         <h3 className='text-4xl ml-1 font-medium'><span className=" ml-1"> ${price}</span></h3>

         <div className="flex gap-3 items-center">
      <h2 className="text-2xl font-semibold">Size :</h2>
      
      {
  size1 ?   
      <div>
        <input 
          type="radio" name="radio-7" className="radio w-3 h-3 radio-info" 
          
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
          type="radio" name="radio-7" className="radio w-3 h-3 radio-info"
         
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
          type="radio" name="radio-7" className="radio w-3 h-3 radio-info"  
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
      <h2 className="text-2xl font-semibold">Color :</h2>
      {
  color1 ?   
      <div className="flex items-center gap-2">
        <input 
          type="radio" name="radio-7" className="radio w-3 h-3 radio-info" 
          
          value={color1} 
          // checked={selectedValue =={size1}} 
          onChange={handleChanges} 
        />
        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color1 }}></div> 
          
       
      </div>
: ''
}
{
  color2 ?
      <div className="flex items-center gap-2">
        <input 
          type="radio" name="radio-7" className="radio w-3 h-3 radio-info"
         
          value={color2} 
          // checked={selectedValue == {size2}} 
          onChange={handleChanges} 
        />
       <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color2 }}></div>
      </div>
      : ''
    }
     {
  color3 ?
      <div className="flex items-center gap-2">
        <input 
          type="radio" name="radio-7" className="radio w-3 h-3 radio-info"  
          value={color3} 
          // checked={selectedValue =={size3}} 
          onChange={handleChanges} 
        />
      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color3 }}></div>
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
          <div className="flex justify-between items-center  w-28 border-2 ml-5 lg:ml-0 text-2xl font-semibold">
            {/* <h1>Quantity :</h1> */}
            <button className=" w-8 rounded-sm text-black flex items-center justify-center bg-gray-300" onClick={decreaseQuantity}>-</button>
            <span className="mx-2 text-2xl">{quantity}</span>
             <button className="w-8 rounded-sm text-black flex items-center justify-center bg-gray-300" onClick={increaseQuantity}>+</button>
             </div>
         
        <div className="flex flex-row justify-between">
        
        <h3 className='text-3xl font-medium'>Cost : <span className="text-sky-600 ml-1"> ${price}</span></h3>
        {/* <div className="flex gap-3">
           {
            size.map((s, index) => <h1 key={index}>{s}</h1>)
           }
        </div> */}
        </div>
        <div className="flex flex-col mx-5 lg:mx-0 gap-5">
        <div><button onClick={handleCart} className="btn w-full bg-emerald-600 hover:bg-green-800 text-white text-xl">Add to Cart</button></div>
        <div><button className="btn text-white text-xl w-full bg-cyan-400 hover:bg-cyan-700">Buy Now</button></div>
        </div>
        <div className="ml-6 lg:ml-0 space-y-5">
       <h1 className="text-xl text-gray-500 mb-8 flex gap-2"><CiHeart className="h-8 w-8"/> Add to Wishlist</h1>
       <h1 className="text-xl font-semibold">Vendor : <span className="text-xl text-gray-500">Basel</span></h1>
       <h1 className="text-xl font-semibold">SKU : <span className="text-xl text-gray-500">N/A</span></h1>
       <h1 className="text-xl font-semibold">Category : <span className="text-xl text-gray-500">{category}</span></h1>
       
       <h1 className="text-xl font-semibold flex gap-5">Share : <div className="flex  gap-4 ">
       
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className="fill-current text-sky-500 ">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className="fill-current text-red-600">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className="fill-current text-blue-800">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div></h1>
       </div>



        </div> 

       {/* <div className=" flex flex-col gap-4 bg-white p-7 rounded-md">
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
       </div> */}





        </div> 



        <div className="flex justify-center w-full ">
        <div role="tablist" className="tabs tabs-bordered my-10 overflow-x-scroll">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-2xl font-semibold" aria-label="Description" />
  <div role="tabpanel" className="tab-content p-10">
    <h1>Viverra a consectetur</h1>
    <p>Enim in malesuada fusce dolor mi massa leo taciti nulla vestibulum dignissim senectus vitae elit ullamcorper primis.</p>
  </div>

  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab text-2xl font-semibold pb-2 "
    aria-label="Additional Information"
    defaultChecked />
  <div role="tabpanel" className="tab-content p-10">
    <h1 className="flex pb-5 border-b-2">Color : <span>{color1}</span>, <span>{color2}</span>, <span>{color3}</span></h1>
    <h1 className="flex pb-5 border-b-2">Size : <span>{size1}</span>, <span>{size2}</span>, <span>{size3}</span></h1>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab text-2xl font-semibold" aria-label="Reviews (0)" />
  <div role="tabpanel" className="tab-content p-10">Tab content 3</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab text-2xl font-semibold" aria-label="Shipping & Delivery" />
  <div role="tabpanel" className="tab-content p-10">
        <div className=" flex flex-col gap-4 bg-white p-7 rounded-md">
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
</div>
</div>





        <h1 className='text-center mb-2 mt-10 text-4xl font-bold uppercase'>Related Products</h1>
        <h1 className='text-center w-20 mx-auto h-1 my-4 bg-black'></h1>
         

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20 mx-5'>
        { filter.slice(0, 4).map(latest => 
           <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 h-72 md:h-full'
                src={latest.images[0]}
                alt="Shoes" />
                <h1 className='add absolute hidden group-hover:block bottom-0 bg-black w-full text-white text-center text-3xl py-3'>Add to Cart</h1>
                <h1 className='add absolute  top-3 right-6  md:top-5 md:right-5 hover:bg-slate-200 rounded-full text-3xl'><CiHeart className="h-8 w-8"/></h1>
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

export default Details;