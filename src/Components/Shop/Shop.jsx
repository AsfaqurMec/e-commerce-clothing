import { useEffect, useState } from 'react'
import axios from 'axios'
 import { CiHeart } from "react-icons/ci";
 import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import img1 from '../../assets/Screenshot 2024-08-15 194543.png'
import img2 from '../../assets/Screenshot 2024-08-15 194717.png'
import img3 from '../../assets/Screenshot 2024-08-15 194925.png'
import img4 from '../../assets/shoe.png'

const Shop = () => {

    const [latest, setLatest] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `https://e-commerce-server-eight-fawn.vercel.app/collection`
        )
        
       

        setLatest(data)
       // console.log(data);
        //console.log(latest);
      }
      getData()
    }, [latest])

    //const category = useParams();
    //console.log(category.category);
    
       const  women = latest.filter(item=> item.category == 'women');
   
       const  men = latest.filter(item=> item.category == 'man');

       const  watch = latest.filter(item=> item.category == 'watch');

       const  shoe = latest.filter(item=> item.category == 'shoe');

    //  console.log(men);
    // const [search, setSearch] = useState('')
    // const [items, setItems] = useState([]);
   
    // useEffect(() => {
    //   console.log(search);
      
    
    //     const fetchData = async () => {
    //       const { data } = await axios(
    //         `http://localhost:5000/search?search=${search}`
    //       )
          
    //       setItems(data);
    //      // console.log(items);
    //      // console.log(latest);
    //     }
  
    //     fetchData();
    //   // } else {
    //   //   setItems([]);
    //   //  }
    // }, [search]);

//     const handleSearch = e => {
//       e.preventDefault()
// // console.log(search);
//       setSearch(searchText)
//     }

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const { data } = await axios.get(`https://e-commerce-server-eight-fawn.vercel.app/search?search=${search}`);
  //         setItems(data);
  //       } catch (error) {
  //         console.error('Error fetching data:', error.message);
  //       }
  //     };
    
  //     fetchData();
  //   }, [search]);


  // console.log(items);
  
 // if (query) {
        // const fetchData = async () => {
        //   try {
        //     const response = await axios.get('https://e-commerce-server-eight-fawn.vercel.app/api/search', {
        //       params: { query },
        //     });
        //     setItems(response.data);
        //   } catch (error) {
        //     console.error('Error fetching data:', error);
        //   }
        // };
  
        // fetch(`https://e-commerce-server-eight-fawn.vercel.app/search?query=${query}`)
        //   .then(response => response.json())
        //   .then(data => {
        //     setItems(data);
        //     // console.log(data);
        //       // toast.success('Wishlist successfully');
        //   })
  


    return (
        <>
         <div className='bg-black text-center py-4  text-white'>
            <h1 className='text-4xl mb-2'>SHOP</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'><FaHome /> Home / Shop</h1>

         </div>
         {/* <form onSubmit={handleSearch}> */}
         {/* <input
                type='text'
                name='search'
                // onChange={e => setSearchText(e.target.value)}
                // value={searchText}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Here'
                className='w-full px-3 py-2  rounded-md  focus:outline-none  text-gray-900'
               
              /> */}
             {/* <button type='submit' className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-gray-800 focus:bg-none focus:outline-none rounded-l-none'>
                Search
              </button>
              </form> */}
         <section className='mb-10'>

         <div className=' flex justify-between  items-center mx-5'>
         <h1 className='flex justify-start text-lg items-center  my-10 gap-2'><FaHome /> Women</h1>
         <button className='bg-gray-400 py-1 px-2 rounded-md text-white'>See More</button>
            </div>   
         <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-5 lg:gap-0'>
          <img src={img1} className='w-[600px] h-screen' alt="" />
         <div className='grid grid-cols-2  gap-8'>
        { women?.map(latest => 
           <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 w-[90%] h-60'
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

         </section>



         <section className='mb-10'>

         <div className=' flex justify-between  items-center mx-5'>
         <h1 className='flex justify-start text-lg items-center  my-10 gap-2'><FaHome /> Men</h1>
         <button className='bg-gray-400 py-1 px-2 rounded-md text-white'>See More</button>
            </div>   
            <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-5 lg:gap-0'>
            <img src={img2} className='w-[600px] h-screen' alt="" />
         <div className='grid grid-cols-2  gap-8'>
        { men?.map(latest => 
           <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 w-[90%] h-60'
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

         </section>



         <section className='mb-10'>

         <div className=' flex justify-between  items-center mx-5'>
         <h1 className='flex justify-start text-lg items-center  my-10 gap-2'><FaHome /> Watch</h1>
         <button className='bg-gray-400 py-1 px-2 rounded-md text-white'>See More</button>
            </div>   

            <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-5 lg:gap-0'>
          <img src={img3} className='w-[600px] h-screen' alt="" />
         <div className='grid grid-cols-2  gap-8'>
        { watch?.map(latest => 
           <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 w-[90%] h-60'
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

         </section>



         <section className='mb-10'>

         <div className=' flex justify-between  items-center mx-5'>
         <h1 className='flex justify-start text-lg items-center  my-10 gap-2'><FaHome /> Shoe</h1>
         <button className='bg-gray-400 py-1 px-2 rounded-md text-white'>See More</button>
            </div>   

            <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-5 lg:gap-0'>
          <img src={img4} className='w-[600px] h-screen' alt="" />
         <div className='grid grid-cols-2  gap-8'>
        { shoe?.map(latest => 
           <Link to={`/latest/${latest._id}`} key={latest._id}><div  className="card rounded-none group">
            <figure className='relative'>
              <img className='transition-transform duration-300 ease-in-out transform hover:scale-125 w-[90%] h-60'
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

         </section>

        </>
    );
};

export default Shop;