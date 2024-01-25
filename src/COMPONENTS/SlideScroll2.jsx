import React, { useRef } from 'react';
import headphone from '../assets/cardPics/headphone.jpg'
import { FaAngleRight } from "react-icons/fa6";
import { Book1,Book2,Book3,Book4,Book5,Book6,Book7,Book8,Book9,Book10,Book11,Book12 } from '../Imports/books_Pics_.js';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
const SlideScroll2 = (props) => {
    console.log(props);
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
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book1} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3 '>
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book2} alt="" />
</div>

</div>



{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book3} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book4} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book5} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book6} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book7} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book8} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book9} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book10} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book11} alt="" />
</div>

</div>





{/* card starts here */}
<div className='inline-block card -mt-4 ml-3' >
<div className='h-48 w-32 inline-block'>
    <img className='h-full  w-full object-fit' src={Book12} alt="" />
</div>

</div>









</div>

<div onClick={moveLeft} className='absolute left-3 top-36 cursor-pointer'><FaAngleLeft color='black' size={50} /></div>
<div onClick={moveRight} className='absolute right-3 top-36 cursor-pointer'><FaAngleRight color='black' size={50} /></div>

</div>
  )
}

export default SlideScroll2