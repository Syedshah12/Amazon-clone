
import React, { useRef } from 'react';
import headphone from '../assets/cardPics/headphone.jpg'
import { MakeUp1,MakeUp2,MakeUp3,MakeUp5,MakeUp6,MakeUp7,MakeUp8,MakeUp9,MakeUp10,MakeUp11,MakeUp12} from '../Imports/makeup_Pics.js'

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";



const SliderScroll3 = (props) => {
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
    <div  ref={containerRef} className='overflow-auto px-2  transition-all ease-in-out duration-500  whitespace-nowrap scrollbar'>
    
    
    
    
    {/* card starts here */}
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp1} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp2} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp3} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp5} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp6} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp7} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp8} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp9} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp10} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp11} alt="" />
    </div>
    
    </div>
    
  
    
    
    <div className='inline-block card -mt-4 ml-3'>
    <div className='h-52 w-44 inline-block'>
        <img className='h-full  w-full object-fit' src={MakeUp12} alt="" />
    </div>
    
    </div>
    
  
    
  

    
    
    
    </div>
    
    <div onClick={moveLeft} className='absolute -left-3 top-36 cursor-pointer'><FaChevronLeft color='black' size={80} /></div>
    <div onClick={moveRight} className='absolute right-0 top-36 cursor-pointer'><FaChevronRight color='black' size={80} /></div>
    
    </div>
  )
}

export default SliderScroll3