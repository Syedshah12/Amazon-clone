import React from 'react'
import Navbar from '../../COMPONENTS/Navbar'

import CartItem from '../../COMPONENTS/CartItem'
import SideCartItem from '../../COMPONENTS/SideCartItem'
import SlideScrollBar from '../../COMPONENTS/SlideScrollBar'
import SlideScroll2 from '../../COMPONENTS/SlideScroll2'
import SliderScroll3 from '../../COMPONENTS/SliderScroll3'
import Corousel from '../../COMPONENTS/Corousel'
import ProductViewer from '../../COMPONENTS/ProductViewer'
import Footer from '../../COMPONENTS/Footer'

const Cart = () => {
  return (
   <>

  <Navbar/>
  <div className='w-full p-1  bg-gray-200'>

<div className="flex w-full px-4 sm:mt-0 gap-0 justify-center  sm:gap-8">
{/* left wrapper */}
<div className=' sm:w-2/3 bg-white mt-12 sm:mt-[15px]'>
<div className=''>
<div className="flex justify-between w-full p-4">
    <h1 className='text-[30px] font-[400] leading-tight'>Shopping Cart</h1>
    <p className='text-sm leading-tight text-gray-400'>Price</p>
</div>
<hr className='mt-2 h-px  bg-gray-300 border-0 ' />



< CartItem />
< CartItem />






</div>





<div>





</div>




<div className='bg-gray-200 py-6 mt-12 text-black text-wrap text-xs leading-none '>
The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <span className='text-blue-700 hover:underline'>Learn more</span><br/>

Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
</div>



</div>

<div className='w-[30%] hidden sm:block '>

<div className='w-full h-full flex flex-col gap-4 px-3 py-4 '>



{/* first box */}
<div className='p-4 bg-white flex flex-col gap-y-2 py-6 rounded-sm'>
<h1 className='text-xl'>Subtotal &#40;<span className='textlg'>2 items</span>&#41;: <span className='font-semibold text-xl  '> $108.15</span> </h1>
<div className='flex  items-center gap-2 ml-2'>
  <input className='-mt-[3px]' type="checkbox" name="" id="" />
  <label className='text-[14px] -mt-1  font-[500px] leading-tight' htmlFor="">This order contains a gift</label>
</div>
<div className='text-black mt-3 px-4 py-[6px] text-center bg-goldish hover:bg-goldish/85 cursor-pointer text-sm rounded-md w-full'>Proced To Checkout</div>
</div>


<div className='flex flex-col gap-y-2  bg-white p-4 '>




<SideCartItem/>
<SideCartItem/>
<SideCartItem/>





</div>








</div>




</div>













</div>



<ProductViewer/>
<Footer/>







</div>




   
   
   
   

   </>
  )
}

export default Cart