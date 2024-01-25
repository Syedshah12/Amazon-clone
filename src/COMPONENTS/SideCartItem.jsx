import React from 'react'
import pic from '../assets/Books/Book1.jpg'

const SideCartItem = () => {
  return (
    <>
    
  <div className='p-1'>
    <h1 className='text-xl font-bold leading-none text-wrap'>
    New international customers purchased
    </h1>
  </div>


<div className='w-full px-2 gap-2 flex mb-4'>
  <div className='w-1/3 px-2'>
    <img className='w-full h-full object-contain' src={pic} alt="" />
  </div>
  <div className='flex flex-col gap-[2px] flex-grow'>
  <a className='text-blue-700 hover:underline cursor-pointer text-sm '>Pre Med Track for 1st...</a>
<p className='text-sm '>Dr.Dr. Tasha Taylor</p>
<p className='text-sm  text-gray-600'>Paperback</p>
<p className='text-sm  text-red-900 font-[500]'>$98.18  </p>
<div className='text-xs mt-1 leading-tight w-[80px] rounded-full text-center px-1 py-1 bg-goldish'>Add to cart</div>
  </div>
</div>




    </>
  )
}

export default SideCartItem