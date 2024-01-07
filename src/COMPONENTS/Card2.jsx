import React from 'react'
import stufImg from '../assets/cardPics/stuftoys.jpg'
import keyboard from '../assets/cardPics/keyboard.jpg'
const Card2 = ({src}) => {
  return (
   


<div className='w-56 sm:w-64 md:w-64 md:h-96 lg:w-72 drop-shadow-md  h-80 bg-white px-3  overflow-hidden  '>
<div className='h-[15%] w-full flex items-end mb-2 text-2xl text-black font-semibold'><h2>Gaming accesories</h2></div>
    <div className='h-[70%] w-full gap-2 '>
        <img className='w-full h-full object-cover' src={src} alt="" />
    </div>
    <div className='h-[15%] w-full flex items-center text-blue-700 '><a className='hover:underline cursor-pointer' href='#'>See more</a></div>
</div>


  )
}

export default Card2