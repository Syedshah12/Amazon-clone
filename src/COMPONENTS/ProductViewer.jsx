import React, { useRef,useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import headphone from '../assets/cardPics/headphone.jpg'
import {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11} from '../Imports/prod_viewPics.js'
import { MdStarRate } from "react-icons/md";

const ProductViewer = () => {
    const containerRef = useRef(null);
    const [page, setPage] = useState(1)
    const moveLeft = () => {
        if (containerRef.current) {
          const scrollAmount = 1200; 
          containerRef.current.scrollLeft -= scrollAmount;
          page>=2?setPage(page-1):setPage(1);
        }
      };

      const moveRight = () => {
        if (containerRef.current) {
          const scrollAmount = 1200; 
          containerRef.current.scrollLeft += scrollAmount;
          page<=4?setPage(page+1):setPage(5);

        }
      };

  return (
    <div className='h-full'>
   <section className='px-4 py-6'>





   
<div className='main px-6 mt-auto py-6 flex flex-col bg-white  relative gap-3 '>
    <hr />
<div className='w-full flex  items-center justify-center   '>
        <div className='text-lg sm:text-xl  md:text-2xl inline-block  font-bold text-black leading-relaxed'>Customers who viewed items in your browsing history also viewed</div>
        <div className= ' text-sm w-1/3 -mt-6 ml-3 leading-tight font-semibold flex  text-end xs:ml-2 xs:mt-1'><div className='self-end w-full'>Page <span>{page}</span> of <span>5</span></div></div>
    </div> 

    <div  ref={containerRef} className='overflow-auto  whitespace-nowrap transition-all ease-in-out duration-500 scrollbar2 '>

 {/* card starts here */}
    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img1} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>


    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img2} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>


    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img3} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img4} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img5} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img6} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img7} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img8} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img9} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





    <div className='inline-block card -mt-4'>
<div className='flex flex-col w-64  py-6  px-3 '>
<div className='mb-2 py-2'>
<img className='w-36 h-40   max-h-36 object-cover '  src={img10} alt="" />
<div className='w-36 '>
<a className='text-blue-700 hover:underline text-wrap ' href="">The Eden Project: In Search of the Magical Other (Studies in Jungian Psychology By Jungian Analysis, 79)</a>
</div>
<a href=""><div className='text-blue-700 hover:underline leading-3 text-xs '>	&gt;James Holis</div></a>
<div className='flex items-center'>
<div className='flex  text-black text-sm'><div className='leading-relaxed w-full h-full flex items-center rounded-sm'>
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    <MdStarRate color='gold' />
    </div></div>
<div className='w-[80%] flex text-sm text-blue-700 font-semibold  items-start ml-2 leading-tight'>198</div>
</div>
<p className='text-xs text-gray-500 leading-3'> Paperback</p>
<p className='font-semibold'> $24.27</p>
<div className='flex items-center'>
<p className='text-sm  leading-tight'> $14.98</p>
<p className='text-xs  leading-3  '>Shipping</p>
</div>
</div>
</div>
</div>





</div>







<div onClick={moveLeft} className='absolute border shadow-sm hover:shadow-blue-700 border-black bg-gray-200 rounded-md px-1 py-2 -left-3 top-36 cursor-pointer'><IoIosArrowBack size={30} /></div>
<div onClick={moveRight} className='absolute border shadow-sm hover:shadow-blue-700 border-black bg-gray-200 rounded-md px-1 py-2 right-0 top-36 cursor-pointer'><IoIosArrowForward size={30} />
</div>

</div>










<hr />


   </section>
   <div className='py-6'>
<div className='flex flex-col items-center p-2 gap-2'>
    <p className='text-xs font-medium '>See Personalized Recomendation</p>
                    <a href='/signin' className='px-24 leading-3 text-sm py-2 font-semibold text-center rounded-md  mx-auto bg-light-goldish    '>Sign in</a>
                    <p className='text-xs font-semibold leading-tight text-black'>New Customer?<span className='text-xs hover:underline text-blue-700'>Start Here.</span></p>
                  </div>

</div>
<hr />
   </div>
  )
}

export default ProductViewer