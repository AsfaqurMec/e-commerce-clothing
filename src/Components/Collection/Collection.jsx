import { useEffect, useState } from 'react'
import axios from 'axios'
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Collection = () => {

    const [latest, setLatest] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `http://localhost:5000/collection`
        )
        
       

        setLatest(data)
       // console.log(data);
        //console.log(latest);
      }
      getData()
    }, [latest])

    const category = useParams();
    //console.log(category.category);
    
       const  filter = latest.filter(item=> item.category == category.category);
    
    //console.log(filter);

    return (
        <>
         <h1 className='flex justify-start text-lg items-center  my-14 gap-2'><FaHome /> Home / {category.category}</h1>
        <h1 className='text-center mb-2 mt-10 text-4xl font-bold uppercase'>Latest Products</h1>
        <h1 className='text-center w-20 mx-auto h-1 my-4 bg-black'></h1>
         <p className='text-center mb-5 text-base font-semibold text-gray-500'>Checkout Our New & Arrival Products</p>
        <div className='grid grid-cols-2 md:grid-cols-3  gap-8'>
        { filter?.map(latest => 
           <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 w-full h-96'
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
        </>
    );
};

export default Collection;