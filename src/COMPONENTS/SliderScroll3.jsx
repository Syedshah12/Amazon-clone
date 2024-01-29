
import React, { useRef } from 'react';
import headphone from '../assets/cardPics/headphone.jpg'
import { MakeUp1,MakeUp2,MakeUp3,MakeUp5,MakeUp6,MakeUp7,MakeUp8,MakeUp9,MakeUp10,MakeUp11,MakeUp12} from '../Imports/makeup_Pics.js'

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";


const data = [
    {
        id: 1,
        src: MakeUp1
    },
    {
        id: 2,
        src: MakeUp2
    },
    {
        id: 3,
        src: MakeUp3
    },
    {
        id: 4,
        src: MakeUp5
    },
    {
        id: 5,
        src:MakeUp6
    },
    {
        id: 6,
        src: MakeUp7
    },
    {
        id: 7,
        src: MakeUp8
    },
    {
        id: 8,
        src: MakeUp9
    },
    {
        id: 9,
        src:MakeUp10
    },
    {
        id: 10,
        src: MakeUp11
    },
    {
        id: 11,
        src: MakeUp12
    },
    
]








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
    <div className='main transition-all duration-300 ease-in-out px-3 mt-auto py-6 flex flex-col bg-white  relative gap-3 '>
    <div className='w-full flex overflow-hidden items-center  whitespace-nowrap'>
        <div className='text-xl md:text-2xl inline-block  font-bold text-black leading-relaxed'>{props.title}</div>
        <div className= 'inline-block text-blue-700 ml-2 mt-1'>Explore All deals</div>
    </div>
    <div  ref={containerRef} className='overflow-auto px-2  transition-all ease-in-out duration-500  whitespace-nowrap scrollbar'>
    
    
    
    {data.map(({id,src})=>(

<div key={id} className='inline-block card -mt-4 ml-3 '>
<div className='h-52 w-36 inline-block '>
    <img className='h-full  w-full object-contain transition-all ease-in-out duration-500' src={src} alt="" />
</div>

</div>






    ))}
   
    
  
    
    
   
    
    
  

    
    
    
    </div>
    
    <div onClick={moveLeft} className='absolute left-3 top-36 cursor-pointer'><FaChevronLeft color='black' size={40} /></div>
    <div onClick={moveRight} className='absolute right-3 top-[152px] cursor-pointer'><FaChevronRight color='black' size={40} /></div>
    
    </div>
  )
}

export default SliderScroll3