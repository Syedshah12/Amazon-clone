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

const data = [
  {
    id: 1,
    src: keyboard,
    prize: '$24',
    listprize: '$99.99',
    desc: 'Corsair Dark Core RGB Pro SE, FPS/M…'
  },
  {
    id: 2,
    src: Computer,
    prize: '$44',
    listprize: '$95.99',
    desc: 'Corsair Dark Computer RGB Pro SE, FPS/M…'
  },

  {
    id: 3,
    src: headphone,
    prize: '$47',
    listprize: '$98.99',
    desc: 'Corsair Dark headphone RGB Pro SE, FPS/M…'
  },

  {
    id: 4,
    src: chairs,
    prize: '$41',
    listprize: '$92',
    desc: 'Corsair Dark headphone RGB Pro SE, FPS/M…'
  },



  {
    id: 5,
    src: kitchen,
    prize: '$28',
    listprize: '$99',
    desc: 'Corsair Dark headphone RGB Pro SE, FPS/M…'
  },



  {
    id: 6,
    src: chairs,
    prize: '$48',
    listprize: '$99',
    desc: 'Corsair Dark headphone RGB Pro SE, FPS/M…'
  },



  {
    id: 7,
    src: kitchen,
    prize: '$58',
    listprize: '$99',
    desc: 'Corsair Dark headphone RGB Pro SE, FPS/M…'
  },



  {
    id: 8,
    src: stuftoys,
    prize: '$98',
    listprize: '$99',
    desc: 'Corsair Dark headphone RGB Pro SE, FPS/M…'
  },


]










const img = [cpu, keyboard, Computer, headphone, chairs, stuftoys, , dining, home, kitchen, health]


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

    <div className='main transition-all duration-300 ease-in-out px-3 mt-auto py-6 flex flex-col bg-white  relative gap-3 '>
      <div className='w-full flex overflow-hidden items-center  whitespace-nowrap'>
        <div className='text-xl md:text-2xl inline-block  font-bold text-black leading-relaxed'>{props.title}</div>
        <div className='inline-block text-blue-700 ml-2 mt-1'>Explore All deals</div>
      </div>
      <div ref={containerRef} className='overflow-auto  transition-all ease-in-out duration-500  whitespace-nowrap scrollbar'>
        {/* card starts here */}
        {data.map(({ id, src, prize, listprize, desc }) => (
          <div key={id} className='inline-block card -mt-4 transition-all ease-in-out duration-500'>
            <div className='flex flex-col w-64  py-6  px-3 '>
              <div className='mb-2'>
                <img className='w-full h-full max-h-36 object-cover ' src={src} alt="" />
              </div>
              <div className='flex items-center'>
                <div className='flex bg-red_darkish text-white text-sm rounded-sm px-1'><div className='leading-relaxed w-full h-full rounded-sm'>20% off</div></div>
                <div className='w-[80%] flex text-sm text-red-800 font-semibold  items-start ml-2 leading-tight'>Deal</div>
              </div>
              <div className='flex items-center'>
                <div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full rounded-sm'>{prize}</div></div>
                <div className='w-[80%] flex text-sm text-gray-500 font-semibold  items-start ml-2 leading-tight'>{`List prize ${listprize}`}</div>
              </div>
              <div className='flex items-center text-xs font-semibold leading-tight'>{desc}</div>
            </div>
          </div>
        ))

        }






        <div onClick={moveLeft} className='absolute left-3 top-36 cursor-pointer'><FaAngleLeft color='black' size={50} /></div>
        <div onClick={moveRight} className='absolute right-3 top-36 cursor-pointer'><FaAngleRight color='black' size={50} /></div>





      </div>



    </div>
  )
}

export default SlideScrollBar;