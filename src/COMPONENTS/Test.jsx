import React,{useState} from 'react'
import cpu from '../assets/cardPics/cpu.jpg'
import keyboard from '../assets/cardPics/keyboard.jpg'
import Computer from '../assets/cardPics/Computer.jpg'
import headphone from '../assets/cardPics/headphone.jpg'
import chairs from '../assets/cardPics/chairs.jpg'
import one from '../assets/one.jpg'
import two from '../assets/one.jpg'
import stuftoys from '../assets/cardPics/stuftoys.jpg'
import three from '../assets/two.jpg'
import four from '../assets/three.jpg'
import dining from '../assets/cardPics/dining.jpg'
import home from '../assets/cardPics/home.jpg'
import kitchen from '../assets/cardPics/kitchen.jpg'
import health from '../assets/cardPics/health.jpg'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import Card from './Card'
import Card2 from './Card2'
import SlideScrollBar from './SlideScrollBar'


const obj ={first:dining,second:kitchen,third:home,fourth:health};
const obj2 ={first:keyboard,second:headphone,third:chairs,fourth:Computer};
const slides=[one,two,three,four];
const Test = () => {
    const [curr, setCurr] = useState(0)
    const next=()=>{
        setCurr((curr)=>(curr===slides.length-1?0:curr+1))
        }

        const prev=()=>{
            setCurr((curr)=>(curr===0?slides.length-1:curr-1));
            }
            

  return (

    <div className=' h-screen  flex flex-col bg-cover bg-center transition-all ease-out duration-500'  style={{ backgroundImage: `url(${slides[curr]})` }}>
<div className=' flex justify-between  '>
<div onClick={next} className='w-10 h-40 hover:border border-black flex items-center cursor-pointer'><FaChevronLeft color='black' size={40} /></div>
    <div onClick={prev} className='w-10 h-40 hover:border border-black flex items-center cursor-pointer'><FaChevronRight color='black'  size={40}/></div>

</div>
 <div className='   mt-8  bg-gradient-to-b from-transparent via-slate-200 to-light-gray  grid gap-4 px-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
<Card {...obj2} />
<Card2 src={cpu}/>
<Card2 src={stuftoys}/>
<Card  {...obj} />
<Card {...obj} />
<Card {...obj2} />
<Card2 src={stuftoys}/>
<Card2 src={cpu}/>

 </div>
 
 <div className=''>
<SlideScrollBar/>
 </div>

    </div>
 
  )
}

export default Test