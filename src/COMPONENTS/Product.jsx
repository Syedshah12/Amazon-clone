import React from 'react'
import first from '../assets/laptops/first.jpg'
import {Link} from 'react-router-dom'
import { IoIosStar } from "react-icons/io";

const Product = ({id,src,desc,prize}) => {
    console.log();
  return (
    <div key={id} className='max-w-[300px] p-1 hover:shadow-md hover:shadow-gray-500 drop-shadow-lg bg-white cursor-pointer  '>
<div className='w-full flex flex-col p-1'>
<div className=' w-32 md:w-40 h-32 mx-auto lg:w-64   sm:h-52'>
    <img className='w-full transition-all duration-300 hover:scale-105 h-full object-contain' src={src} alt="" />
</div>
<div className='mt-0 sm:mt-2 flex justify-center'>
<Link to={'/detail'} className='text-blue-700 hover:underline text-sm leading-tight' href="">See details</Link>
</div> 
<div className='text-wrap w-full max-w-40 mx-auto sm:max-w-none flex justify-center text-center text-sm leading-tight sm:leading-normal sm:text-lg font-semibold '>
    <p className='description '>{desc}</p>
</div>
<div className='flex justify-center lg:justify-start gap-x-1 ml-6'>
<div className="icon flex">
    <IoIosStar color='gold' />
    <IoIosStar color='gold' />
    <IoIosStar color='gold' />
    <IoIosStar color='gold' />
    <IoIosStar color='gold' />
</div>
<div className='hidden  lg:block text-sm leading-tight cursor-pointer text-blue-700 hover:underline'><Link to={'/detail'}>See customer reviews</Link></div>

</div>
<div className=' w-full sm:w-auto text-xl sm:text-2xl font-semibold text-center p-2 bg-none sm:bg-light-orangish rounded-lg'>
    <h1>{prize}</h1>
</div>




</div>





    </div>
  )
}

export default Product