import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import React, { useRef } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import cpu from '../assets/cardPics/cpu.jpg'
import keyboard from '../assets/cardPics/keyboard.jpg'
import Computer from '../assets/cardPics/Computer.jpg'
import headphone from '../assets/cardPics/headphone.jpg'
import chairs from '../assets/cardPics/chairs.jpg'
import stuftoys from '../assets/cardPics/stuftoys.jpg'
import dining from '../assets/cardPics/dining.jpg'
import home from '../assets/cardPics/home.jpg'
import kitchen from '../assets/cardPics/kitchen.jpg'
import health from '../assets/cardPics/health.jpg'

const img=[cpu,keyboard,Computer,headphone,chairs,stuftoys,,dining,home,kitchen,health]


const SlideScrollBar = (props) => {
    const containerRef = useRef(null);
    const moveLeft = () => {
        if (containerRef.current) {
          const scrollAmount = 250; 
          containerRef.current.scrollLeft -= scrollAmount;
        }
      };

      const moveRight = () => {
        if (containerRef.current) {
          const scrollAmount = 250; 
          containerRef.current.scrollLeft += scrollAmount;
        }
      };
    
  return (

<div className='main px-3 mt-auto py-6 flex flex-col bg-white  relative gap-3 '>
<div className='w-full flex overflow-hidden items-center  whitespace-nowrap'>
    <div className='text-xl md:text-2xl inline-block  font-bold text-black leading-relaxed'>{props.title}</div>
    <div className= 'inline-block text-blue-700 ml-2 mt-1'>Explore All deals</div>
</div>
<div  ref={containerRef} className='overflow-auto  transition-all ease-in-out duration-500  whitespace-nowrap scrollbar'>

{/* card starts here */}
<div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover '  src={headphone} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>

<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={keyboard} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>



<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={headphone} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>



<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={chairs} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>






<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={stuftoys} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>






<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={Computer} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>



<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={dining} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>







<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={home} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>






<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={kitchen} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>






<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={headphone} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>






<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={health} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>







<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={headphone} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>



<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={chairs} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>






<div className='inline-block card'>
<div className='flex flex-col w-64  py-3 px-3 '>
<div className='mb-2'>
<img className='w-full h-full max-h-36 object-cover'   src={stuftoys} alt="" />
</div>
<div className='flex items-center'>
<div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
<div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
</div>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>$79.99</div></div>
<div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>List Price $99.99</div>
</div>
<div className='flex items-center text-xs font-semibold leading-tight'>Corsair Dark Core RGB Pro SE, FPS/M…</div>
</div>
</div>





<div onClick={moveLeft} className='absolute left-3 top-36 cursor-pointer'><FaAngleLeft color='black' size={50} /></div>
<div onClick={moveRight} className='absolute right-3 top-36 cursor-pointer'><FaAngleRight color='black' size={50} /></div>





</div>



</div>
  )
}

export default SlideScrollBar;