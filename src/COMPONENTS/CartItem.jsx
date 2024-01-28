import React from 'react'
import pic from '../assets/Books/Book1.jpg'

const CartItem = ({id,stock,title,image,prize}) => {
  return (
<>
<div key={id} className="flex flex-col items-center sm:items-start sm:flex-row ml-4 gap-4  p-4">







<div className='w-40 sm:w-48  h-40 sm:h-48 px-4 sm:px-6'>
  <img className='w-full object-contain h-full ' src={image} alt="" />
</div>


<div className='w-2/3 flex flex-col '>
<div className='py-4' >
  <h1 className='text-xl font-[500] leading-none'>{title}</h1>
  <p className='text-sm leading-tight mt-2 text-slate-800'>by Dr. Dr. Tasha Taylor</p>
  <p className='text-sm leading-tight font-bold mt-2 text-slate-800'>Paperback</p>
  <p className='text-xs leading-tight mt-2 text-green-800 font-semibold'>{stock}</p>
  <div className='flex gap-2 mt-2'>
    <input type="checkbox" name="" id="" />
    <label className='text-xs font-[400] leading-tight' for="vehicle1">This is a gift</label>
    <a className='text-sm font-[400] hover:underline  cursor-pointer leading-tight text-blue-700' href="#">Learn more</a>
  </div>

<div className='mt-2 flex items-center gap-3'>
  
<select className='rounded-md visited:shadow-md shadow-blue-700 px-[6px] py-[2px] text-sm leading-tight border border-1 border-black  active:border-blue-700' id="quantity">
  <option value="volvo">Qty:1</option>
  <option value="saab">2</option>
  <option value="opel">3</option>
  <option value="audi">4</option>
</select>

<div className='text-blue-700 text-sm hover:underline cursor-pointer'>Delete</div>
</div>


  </div>

</div>

<div className='flex justify-end flex-grow '><h2 className='font-semibold text-xl '>{prize}</h2></div>

</div>
<hr className='mt-2 h-px  bg-gray-300 border-0 ' />
</>
  )
}

export default CartItem