import { FaHome } from "react-icons/fa";
import img1 from '../../assets/Screenshot 2024-08-10 113723.png'
import img2 from '../../assets/Screenshot 2024-08-10 113651.png'
import img3 from '../../assets/Screenshot 2024-08-10 113706.png'
import img4 from '../../assets/Screenshot 2024-08-10 113640.png'

const Blog = () => {
    return (
        <>
        <div className='bg-black text-center py-4  text-white'>
            <h1 className='text-4xl mb-2'>MY BLOG</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'><FaHome /> Home / My Blog</h1>

         </div>

         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
           
           <div className="flex flex-col items-center gap-3">
               <img src={img1} alt="" />
               <h1>Venenatis veulum peus</h1>
               <p>By Nathan Nguyen / 18 comments</p>
               <p className="text-center">Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis</p>
               <p className="pb-1 border-b-2 border-b-slate-400 text-gray-400 text-xs md:text-base mb-10">Read more</p>
           </div>

           <div className="flex flex-col items-center gap-3">
               <img src={img2} alt="" />
               <h1>Venenatis veulum peus</h1>
               <p>By Nathan Nguyen / 18 comments</p>
               <p className="text-center">Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis</p>
               <p className="pb-1 border-b-2 border-b-slate-400 text-gray-400 text-xs md:text-base mb-10">Read more</p>
           </div>


           <div className="flex flex-col items-center gap-3">
               <img src={img3} alt="" />
               <h1>Venenatis veulum peus</h1>
               <p>By Nathan Nguyen / 18 comments</p>
               <p className="text-center">Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis</p>
               <p className="pb-1 border-b-2 border-b-slate-400 text-gray-400 text-xs md:text-base mb-10">Read more</p>
           </div>


           <div className="flex flex-col items-center gap-3">
               <img src={img4} alt="" />
               <h1>Venenatis veulum peus</h1>
               <p>By Nathan Nguyen / 18 comments</p>
               <p className="text-center">Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis</p>
               <p className="pb-1 border-b-2 border-b-slate-400 text-gray-400 text-xs md:text-base mb-10">Read more</p>
           </div>







         </div>

        </>
       
    );
};

export default Blog;