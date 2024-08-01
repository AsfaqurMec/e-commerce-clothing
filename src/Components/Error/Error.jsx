import { useNavigate } from 'react-router-dom'
import img from '../../assets/404-error-6102829-5052784.png'


const Error = () => {
    const navigate = useNavigate()

    return (
      <section className='bg-white '>
        <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
          <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
            <p className='p-3 text-sm font-medium text-rose-500 rounded-full bg-blue-50 '>
              <img src={img} alt="" />
            </p>
            <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-5xl w-full'>
              Page Not Found
            </h1>
            <p className='mt-4 text-gray-500 '>Here are some helpful links:</p>
  
            <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
              <button
                onClick={() => navigate(-1)}
                className='flex items-center justify-center w-1/2 px-5 py-1 text-xl hover:bg-white hover:text-black text-white transition-colors duration-200 bg-black  border-2 border-black rounded-lg gap-x-2 sm:w-auto'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2.5'
                  stroke='currentColor'
                  className='w-6 h-6 rtl:rotate-180 text-rose-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>
  
                <span>Go back</span>
              </button>
  
              <button label={'Take Me Home'} onClick={() => navigate('/')} />
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Error;