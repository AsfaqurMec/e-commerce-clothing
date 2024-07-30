
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hook/useAuth'

import { imageUpload } from '../../api/utils'
import { useState } from 'react'
import useAxiosPublic from '../../hook/useAxiosPublic'
import toast from 'react-hot-toast'

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(true);
 
// const [disable, setDisable] = useState(true);
const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
  const {
    createUser,
    
    updateUserProfile,
    
  } = useAuth();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };


  
  const handleSubmit = async e => {
   // console.log(e);
    e.preventDefault();

    if (password === confirmPassword) {
      console.log('Form submitted');
      const form = e.target
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value
      const confirmPassword = form.confirmPassword.value
      const photo = form.image.files[0]
     
     let value;
  
      try {
        // 1. Upload image and get image url
        const image_url = await imageUpload(photo)
      //  console.log(image_url)
       
       value = image_url; 
      // console.log(value);
        //2. User Registration
        const result = await createUser(email, password)
      //  console.log(result)
  
        // 3. Save username and photo in firebase
        await updateUserProfile(name, image_url)
        navigate('/')
        toast.success('Signup Successful')
        
        
      } catch (err) {
       // console.log(err)
        setError(false);
       navigate('/')
        toast.error(err.message)
      }
    //  console.log(dictrict,blood,upazila);
//  console.log(image);
     const info = {
      photo : value,
      name : name,
      email : email,
      
     }
     const user = await axiosPublic.post('/user', info);
     console.log(user);
     if (error) {
         console.log(user);
     }

           //  console.log(user.data)
    } else {
      setError('Passwords do not match');
    }

    

  }
    return (
        <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col w-[80%] p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to OneBlood</p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
              


            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
              //  autoComplete='new-password'
                id='password'
                required
                value={password}
          onChange={handlePasswordChange}
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                 Confirm Password:
                </label>
              </div>
              <input
                type='password'
                name='confirmPassword'
               // autoComplete='new-password'
                id='confirmPassword'
                value={confirmPassword}
          onChange={handleConfirmPasswordChange}
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          
            {error && <p>{error}</p>}

          <div>
            
              
            <button
           disabled={password !== confirmPassword}
           type='submit'
          className='bg-rose-500 hover:bg-rose-900 w-full rounded-md py-3 text-white btn'
         >Register</button>
            
           </div> 
        </form>
        
        <p className='px-6 text-sm text-center text-gray-400 mt-4'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600 ml-2 text-xl'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Register;