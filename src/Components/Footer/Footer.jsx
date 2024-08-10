// import logo from '../../assets/logo.png'
import { CiLocationArrow1 } from "react-icons/ci";
import payment from "../../assets/Screenshot 2024-07-31 002307.png"
const Footer = () => {
    return (
        <div>
          
         <footer className="footer flex flex-col gap-5 lg:flex-row px-12 lg:px-32 py-14 mt-6 bg-black text-base-content">
         <nav className="w-full md:w-96">
    {/* <img className='w-20 h-20 rounded-sm' src={logo} alt="logo" /> */}
    <h1 className="font-semibold text-3xl text-white">Bostro</h1>
    <p className="font-semibold text-xl text-white">STORE-worldwide fashion store since 1995. We sell over 1000+ branded products on our web-site.</p>
                           <div className='flex gap-2 items-center text-white'>
                           <CiLocationArrow1 className='h-6 w-6'/>
                           <h1>20 Margaret St,London</h1>
                           </div>
                           <div className='flex gap-2 items-center text-white'>
                           <CiLocationArrow1 className='h-6 w-6'/>
                           <h1>01956230265</h1>
                           </div>       
  </nav> 
  <div className="footer grid grid-cols-1  lg:grid-cols-4">
  <nav className="flex flex-col gap-4 justify-center">
  <h6 className="footer-title  text-white  opacity-100 text-2xl">OUR STORES</h6> 
    <a className="link link-hover font-medium text-white">Dhaka</a>
    <a className="link link-hover font-medium text-white">Chittagong</a>
    <a className="link link-hover font-medium text-white">Rajshahi</a>
    <a className="link link-hover font-medium text-white">Khulna</a>
  </nav> 
  <nav className="flex flex-col gap-4 justify-center">
    <h6 className="footer-title text-white  opacity-100 text-2xl">INFORMATION</h6> 
    <a className="link link-hover font-medium text-white">About Store</a>
    <a className="link link-hover font-medium text-white">New Collection</a>
    <a className="link link-hover font-medium text-white">Women Dress</a>
    <a className="link link-hover font-medium text-white">Latest Sales</a>
  </nav> 
  <nav className="flex flex-col gap-4 justify-center">
    <h6 className="footer-title text-white opacity-100 text-2xl">USEFUL LINKS</h6> 
    <a className="link link-hover font-medium text-white">Terms of use</a>
    <a className="link link-hover font-medium text-white">Privacy policy</a>
    <a className="link link-hover font-medium text-white">Cookie policy</a>
    <a className="link link-hover font-medium text-white">Our Sitemap</a>
  </nav>
  
  <div className="flex flex-col gap-8 justify-center">
       <h1 className="footer-title text-white opacity-100 text-2xl">Social Media</h1>
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
    </div>
    </div>

</footer> 

<footer className="footer   border-gray-700  px-10 py-7 text-white border-t-2 bg-black">
  <aside className="grid-flow-col items-center">
   
    <p>
    Copyright © 2024 - All right reserved by OneBlood Ltd
      
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <img src={payment} alt="" />
  </nav>
</footer>



        </div>
    );
};

export default Footer;