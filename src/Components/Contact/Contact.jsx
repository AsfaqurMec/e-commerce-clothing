/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from "../../hook/useAuth";
import { FaHome } from "react-icons/fa";

import { useState } from "react";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa6";
import toast from 'react-hot-toast';
import { IoIosMail } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";

const Contact = () => {
    const [success, setSuccess] = useState('');

    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('');
      const [show, setShow] = useState(false);
      const { signInUser, setLoading, loading, } = useAuth();
      const { register, handleSubmit, formState: { errors } } = useForm();
  
      // navigation system
    const navigate = useNavigate();
    const location = useLocation();
      const from = location?.state || "/";
  
      // handle register
      const onSubmit = data => {
          const { email, password } = data;
  
          
          signInUser(email, password)
          
          .then((result) => {
            
              if (result.user) {
                // toast.success('logged in successfully');
                setSuccess('User logged in successfully');
                 toast.success("User logged in Successfully!!");
  
                setTimeout(()=>{ navigate(from);}, "500");
               
                
              } else {
                setError('email & password desnot match');
            }
            })
            .catch((error) => {
               console.error(error);
               toast.error('password & email invalid');
              setLoading(false);
          })
      }
      // console.log(user);
  
   
      return (
          <>
         <div className=' py-2 '>
            
            <h1 className='flex justify-start text-lg items-center gap-2'><FaHome /> Home / Contact Us</h1>

         </div>
          
          <div className='hero h-full rounded-lg bg-white '>
                  <div className="w-full hero-content flex-col items-start gap-14 lg:gap-16 lg:flex-row-reverse">
                      <div className=" flex flex-col justify-start items-start gap-5 ">
                          <h1 className="text-3xl mt-5 text-black font-bold pb-1">INFORMATION ABOUT US	</h1>
                          <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and weâll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                          <h1 className="text-3xl mt-5 text-black font-bold pb-1">CONTACT US</h1>
                          <div className='grid grid-cols-2 gap-5'>

                           <div className='flex gap-2 items-center'>
                           <IoIosMail className='h-10 w-10' />
                            <h1>Tel: 877-45-44-33 <br />E-Mail: shop@store.uk

</h1>
                           </div>

                         <div className='flex gap-2 items-center'>
                           <CiLocationArrow1 className='h-10 w-10'/>
                           <h1>20 Margaret St, London <br />Great Britain, 3NM98-LK </h1>
                           </div>

                           <div className='flex gap-2 items-center'>
                           <IoTimeOutline className='h-10 w-10'/>
                           <h1>Support forum <br />
                           for over 24h</h1>
                           </div>

                           <div className='flex gap-2 items-center'>
                           <IoRocketOutline className='h-10 w-10'/>
                           <h1>Free standard shipping <br />
                           on all orders.</h1>
                           </div>

                          </div>
                          

                          <div className="grid grid-cols-3 gap-8 mt-8">
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
                      <div data-aos="zoom-out-up" data-aos-duration="1000" className="card flex-shrink-0 w-full lg:w-1/2 rounded-none bg-[#ffffff] lg:border-r-2 border-r-black">
                        
                        
                      <form  
             onSubmit={handleSubmit} className='space-y-6 bg-[#ffffff] p-8 rounded-md'
          >
            <div className='space-y-4'>
              <div className=' h-16'>
                <h1 className=' text-3xl  font-semibold text-center mb-2 h-full flex justify-center items-center'>GET IN TOUCH WITH US</h1>
              </div>

              <div className='flex gap-2 w-full'>
            <div className='w-1/2'>
              <label htmlFor='email' className='block mb-2 text-sm'>
               Your Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div className='w-1/2'>
              <label htmlFor='email' className='block mb-2 text-sm'>
               Your Email 
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            </div>

            <div >
              <label htmlFor='email' className='block mb-2 text-sm'>
                Your Phone Number
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                required
                placeholder='Enter Your Phone Number Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            <div>
              <label htmlFor='massage' className='block mb-2 text-sm'>
                Your massage
              </label>
              {/* lg */}
<textarea placeholder="your massage" className="textarea bg-white textarea-bordered textarea-lg w-full " ></textarea>
            </div>
<div className='w-full flex justify-start'><button className='btn bg-red-700 text-white rounded-sm hover:bg-none hover:border-red-700 hover:border-2 hover:text-red-700 px-5 font-medium  text-2xl uppercase'>SEND MASSAGE</button></div>
            </div> 
          </form>
                          {/* {
                  error && <p className="text-red-600 text-center mt-4">{error}</p>
               }
                          {
                  success && <p className="text-green-600 text-center mt-4">{success}</p>
               } */}
                              
                      </div>
                  </div>
                  
              </div>
            
              </>
      );
  };


export default Contact;