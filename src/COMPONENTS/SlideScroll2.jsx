import React, { useRef } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10, Book11, Book12 } from '../Imports/books_Pics_.js';
import { FaAngleLeft } from "react-icons/fa6";

const data = [
    {
        id: 1,
        src: Book1
    },
    {
        id: 2,
        src: Book2
    },
    {
        id: 3,
        src: Book3
    },
    {
        id: 4,
        src: Book4
    },
    {
        id: 5,
        src: Book5
    },
    {
        id: 6,
        src: Book6
    },
    {
        id: 7,
        src: Book7
    },
    {
        id: 8,
        src: Book8
    },
    {
        id: 9,
        src: Book9
    },
    {
        id: 10,
        src: Book10
    },
    {
        id: 11,
        src: Book11
    },
    {
        id: 12,
        src: Book12
    },



]



const SlideScroll2 = (props) => {

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

        <div className='main  transition-all duration-300 ease-in-out px-3 mt-auto py-6 flex flex-col bg-white  relative gap-3 '>
            <div className='w-full flex overflow-hidden items-center  whitespace-nowrap'>
                <div className='text-xl md:text-2xl inline-block  font-bold text-black leading-relaxed'>{props.title}</div>
                <div className='inline-block text-blue-700 ml-2 mt-1'>Explore All deals</div>
            </div>
            <div ref={containerRef} className='overflow-auto px-2  transition-all ease-in-out duration-500  whitespace-nowrap scrollbar'>


                {/* card starts here */}
                {data.map(({ id, src }) => (
                    <div key={id} className='inline-block card -mt-4 ml-3'>
                        <div className='h-48 w-32 inline-block'>
                            <img className='h-full  w-full object-fit' src={src} alt="" />
                        </div>

                    </div>

                ))}

            </div>

            <div onClick={moveLeft} className='absolute left-3 top-36 cursor-pointer'><FaAngleLeft color='black' size={50} /></div>
            <div onClick={moveRight} className='absolute right-3 top-36 cursor-pointer'><FaAngleRight color='black' size={50} /></div>
        </div>
    )
}

export default SlideScroll2