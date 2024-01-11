import React from 'react'


const Card = ({first,second,third,fourth}) => {
    return (


<div className='w-40 xs:w-48 sm:w-64 md:w-60 lg:w-72 md:h-96 py-3  h-60 sm:h-72 bg-white px-3 drop-shadow-md  overflow-hidden   '> 
    <div className='h-[15%] w-full flex items-end mb-2 text-[1.4rem] -mt-4 md:-mt-5 sm:text-2xl  text-black font-semibold'><h2 >Gaming accesories</h2></div>
    <div className='h-[70%] w-full grid grid-rows-2 grid-cols-2 gap-2 '>
        <div>
            <img className='w-[90%] h-[90%] object-cover' src={first} alt="" />
        <p className='h-[10%] text-xs leading-tight'>Headset</p>
        </div>
        <div>
            <img className='w-[90%] h-[90%] object-cover' src={second} alt="" />
            <p className='h-[10%] text-xs leading-tight'>Computer mice</p>
            </div>
        <div>
            <img className='w-[90%] h-[90%] object-cover' src={third} alt="" />
            <p className='h-[10%] text-xs leading-tight'>Chairs</p>
            </div>
        <div>
            <img className='w-[90%]  h-[90%] object-cover' src={fourth} alt="" />
            <p className='h-[10%] text-xs leading-tight'>Computers</p>
            </div>
    </div>
    <div className='h-[15%] w-full flex items-center text-blue-700 '><a className='hover:underline cursor-pointer' href='#'>See more</a></div>
</div>






        


  )
}

export default Card