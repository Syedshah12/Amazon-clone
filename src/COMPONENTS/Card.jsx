import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({id,src1,src2,src3,src4,title,tag1,tag2,tag3,tag4}) => {
    return (


<div key={id} className='w-40 xs:w-48 sm:w-64 md:w-60 lg:w-72 md:h-96 py-3  h-60 sm:h-72 bg-white px-3 drop-shadow-lg  overflow-hidden   '> 
    <div className='h-[15%] w-full flex items-end mb-2 text-[1.4rem] -mt-4 md:-mt-5 sm:text-2xl  text-black font-semibold'><h2 >{title}</h2></div>
    <div className='h-[70%] w-full grid grid-rows-2 grid-cols-2 gap-2 '>
        <Link to={'/detail'} className='cursor-pointer' >
            <img className='w-[90%] h-[90%] object-cover' src={src1} alt="" />
        <p className='h-[10%] text-xs leading-tight'>{tag1}</p>
        </Link>
        <div>
            <img className='w-[90%] h-[90%] object-cover' src={src2} alt="" />
            <p className='h-[10%] text-xs leading-tight'>{tag2}</p>
            </div>
        <div>
            <img className='w-[90%] h-[90%] object-cover' src={src3} alt="" />
            <p className='h-[10%] text-xs leading-tight'>{tag3}</p>
            </div>
        <div>
            <img className='w-[90%]  h-[90%] object-cover' src={src4} alt="" />
            <p className='h-[10%] text-xs leading-tight'>{tag4}</p>
            </div>
    </div>
    <div className='h-[15%] w-full flex items-center text-blue-700 '><a className='hover:underline cursor-pointer' href='#'>See more</a></div>
</div>






        


  )
}

export default Card