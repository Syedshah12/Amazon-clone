import React,{useState} from 'react'
import one from '../assets/banner.jpg'
import two from '../assets/one.jpg'
import three from '../assets/two.jpg'
import four from '../assets/three.jpg'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const slides=[one,two,three,four];




const Corousel = () => {
    const [curr, setCurr] = useState(0);

const next=()=>{
setCurr((curr)=>(curr===slides.length-1?0:curr+1))
}

const prev=()=>{
setCurr((curr)=>(curr===0?slides.length-1:curr-1));
}

  return (
<div className='h-screen relative mt-[38.5px] sm:-mt-0.5'>
  <div className='w-full  h-full overflow-hidden relative'>
<div style={{transform:`translateX(-${curr*100}%)`}} className='w-full h-full transition-transform ease-out duration-500 flex'>
    {slides.map((s)=>(
        <img className='object-cover  w-full h-full bg-cover ' src={s} alt="" />
     
    ))}
</div>

<div  onClick={next} className='  flex items-center h-40 w-20 hover:border border-black cursor-pointer  absolute top-60 right-0'><FaChevronRight color='black'  size={30}/></div>

<div onClick={prev}  className=' flex justify-end items-center h-40 w-20 hover:border border-black  cursor-pointer  absolute top-60 '><FaChevronLeft color='black' size={30} /></div>

  </div>
</div>
  )
}

export default Corousel