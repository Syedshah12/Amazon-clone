import React from 'react'
import AmazonLogo from '../assets/amazon_logo.svg'
import { IoMdArrowDropright } from "react-icons/io";

const Signin = () => {
  return (
    <>
  <div  className=' flex w-full justify-center'>
    <img className='h-20 ' src={AmazonLogo} alt="404" />
  </div>


  <div className='h-[370px] drop-shadow-md rounded-md flex flex-col w-[346px] mx-auto px-[26px] py-[20px]  border-[0.4px] border-gray-300' >
    <h1 className='text-3xl mb-2 font-md   w-full '>Sign in</h1>
    <p className='mt-2 text-sm font-medium'>Email or mobile phone number</p>
    <input placeholder='' className='w-full border-gray-400 p-[3px] bg-transparent focus:outline-none  rounded-sm border-[1px]  ' type="text" />
    <button className='bg-goldish mt-4 w-full rounded-md text-sm hover:bg-dark text-center px-4 py-[5px]'>Continue</button>
    <p className='text-xs py-6 '>By continuing, you agree to Amazon's <span className='text-xs text-blue-700'><a href="" className='hover:underline hover:text-orangish'>Conditions of use</a></span> and <span className='text-xs text-blue-700'><a className='hover:underline hover:text-orangish' href="">Privacy Notice</a></span></p>
    <div className='mt-2 flex  items-center '>
        <IoMdArrowDropright color='#808080'  className='mt-[2px]' />
        <p className='text-sm text-center flex    text-blue-700 ml-[1px]'><a href="">Need help?</a></p>
    </div>
    <hr className='mt-4' />
    <p className='mt-4 text-xs font-bold'>Buying for work?</p>
    <p className='text-blue-700 text-sm mt-1 hover:underline hover:text-orangish  '><a href="">Shop on Amazon Business</a></p>
    </div>  
    
    <div  className='w-[346px] flex flex-col  mx-auto  py-[20px]'>
  
        <div className="w-full flex items-center">
          <div className="w-[40%] h-[0.5px] bg-gray-200"></div>
          <button className="text-xs text-gray-500  w-[140px] ">New to Amazon?</button>
          <div className="w-[40%] h-[0.5px] bg-gray-200"></div>
        </div>
        
        <button className='bg-transparent border-[1px] border-gray-300  mt-2 w-full rounded-md text-sm text-center px-4 py-[3.5px]'>Create your Amazon account</button>



    </div>


{/* Footer */}
<section className=''>
<div className='h-[1px] bg-gradient-to-r from-white via-gray-300 to-white'>
</div>

<div className='h-24  '>
<div className='flex w-[346px] mx-auto py-4 gap-6 justify-center'>
<a className= '  text-blue-600 text-xs hover:underline hover:text-orangish ' href="">Conditions of use</a>
<a className='text-blue-600 text-xs hover:underline hover:text-orangish' href="">Privacy Notice</a>
<a className='text-blue-600 text-xs hover:underline hover:text-orangish' href="">Help</a>
    
</div>
<p className='text-xs text-gray-500  text-center'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
</div>
</section>


    </>
  



  )
}

export default Signin