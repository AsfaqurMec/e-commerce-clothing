/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from "../../hook/useAuth";
import { FaHome } from "react-icons/fa";

import { useState } from "react";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa6";
import toast from 'react-hot-toast';




const Login = () => {
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
         <div className='bg-black text-center py-4  text-white'>
            <h1 className='text-4xl mb-2'>MY ACCOUNT</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'><FaHome /> Home / My Account</h1>

         </div>
          
          <div className='hero h-full rounded-lg bg-white '>
                  <div className="w-full hero-content flex-col gap-14 lg:gap-28 lg:flex-row-reverse">
                      <div className="text-center flex flex-col justify-center items-center gap-5">
                          <h1 className="text-6xl mt-5 text-black text-center font-bold pb-1">Register!</h1>
                          <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and weâll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                          <Link to="/register"><button className="btn hover:bg-white hover:text-black hover:border-2  bg-black text-white font-semibold text-xl">Register</button></Link>
                          
                      </div>
                      <div data-aos="zoom-out-up" data-aos-duration="1000" className="card flex-shrink-0 w-full md:w-1/2 rounded-none bg-[#ffffff] border-r-2 border-r-black">
                        
                        
                          <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                          <div className='w-full flex flex-col justify-center items-center gap-2'>
                          <h1 className='font-semibold text-teal-900 text-3xl'>Login to your <span className='text-purple-500'>account</span></h1>
                          {/* <label className="label font-medium">
                                  New here? <Link to="/register" className="label-text-alt link link-hover font-medium text-blue-800 text-base ml-2">Sign Up Here!</Link>
                              </label> */}
                              </div> 
                              <div className="form-control">
                                  <label className="label">
                                      <span className="label-text font-medium">Email</span>
                                  </label>
                                  <input type="text" placeholder="email" className="input input-bordered"
                                  {...register("email", { required: true })}
                                  />
                                   {errors.email && <span className='text-red-500'>This field is required</span>}
                              </div>
                              <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />
                  <span className="absolute top-4 right-2 cursor-pointer" onClick={()=> setShow(!show)}>
                  {
                         show ?  <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> 
                      }
                  </span>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                              <div className="form-control mt-6 p-0">
                                  <button className="btn btn-neutral bg-white text-black hover:text-white font-semibold text-xl">Login</button>
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


export default Login;