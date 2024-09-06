/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast';
//import useAxiosPublic from '../../hook/useAxiosPublic';



const Latest = () => {
  //const axiospublic = useAxiosPublic();
     const { user } = useAuth();
    // console.log(user);
    const [load, setLoad] = useState(false);
    const [loading, setLoading] = useState(true);
    const [latest, setLatest] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `https://e-commerce-server-eight-fawn.vercel.app/latest`
        )
        
       

        setLatest(data);
        setLoading(false);
       // console.log(data);
        //console.log(latest);
      }
      getData()
    }, [latest])

//console.log(latest);


   // const [latest, setLatest] = useState([]);
   const handleAdd = async (id) => {
   // setLoad(true);
  // URL of the API endpoint
  const url = `https://e-commerce-server-eight-fawn.vercel.app/latest/${id}`;

  // Fetch data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
    //  console.log(data);
if (user) {
      
  const email = user.email;

      const info = {

        title : data.title,
        image : data.images[0],
        category : data.category,
        price : data.price,
        email : email,
        quantity : 1,
        color1 : data.color1,
        color2 : data.color2,
        color3 : data.color3,
        size : 'XL'
      }
     // console.log(info);
     //const request = axiospublic.post('/latest/wishlist', info);
      // const url = `https://e-commerce-server-eight-fawn.vercel.app/wishlist`;
      fetch('https://e-commerce-server-eight-fawn.vercel.app/latest/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
        
        
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
         // setLoad(false);
            toast.success('Wishlist successfully');
        })

  //     //toast.success('Donate successfully');

}

     })
    

   }





    return (
        <>
       
        <h1 className='text-center mb-2 mt-10 text-4xl font-bold uppercase'>Latest Products</h1>
        <h1 className='text-center w-20 mx-auto h-1 my-4 bg-black'></h1>
         <p className='text-center mb-5 text-base font-semibold text-gray-500'>Checkout Our New & Arrival Products</p>



         {
          loading ? <h1 className='text-center mt-10 text-xl'>Loading ...</h1>
          
          : 
        
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-5'>
          { latest?.map(latest => 
             <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
              <figure className='relative'>
                <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 h-60 md:h-full'
                  src={latest.images[0]}
                  alt="Shoes" />
               {/* <h1 className='add absolute hidden group-hover:block bottom-0 bg-black w-full text-white text-center text-3xl py-3'>Add to Cart</h1> */}
                 <Link to='#'><h1 onClick={()=>handleAdd(latest._id)} className='add absolute top-3 right-2  md:top-5 md:right-5 bg-white hover:bg-slate-200 rounded-full text-3xl'>
                 {
                  load ? <span className="loading loading-spinner text-info"></span>
                 : <CiHeart className="h-8 w-8 "/>
                 }
                  
                  </h1></Link> 
              </figure>
              <div className="card-body p-3 md:p-5">
                <h2 className="card-title">{latest.title}</h2>
                <p>${latest.price}</p>
                
              </div>
            </div> </Link> 
          )
          }
          </div>

        }



        
        </>
    );
};

export default Latest;