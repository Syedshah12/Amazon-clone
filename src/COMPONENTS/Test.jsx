import React,{useState} from 'react'
import cpu from '../assets/cardPics/cpu.jpg'
import keyboard from '../assets/cardPics/keyboard.jpg'
import {card12,card13,card14,card16,card17,card18} from '../Imports/card_Imports.js'
import Computer from '../assets/cardPics/Computer.jpg'
import headphone from '../assets/cardPics/headphone.jpg'
import chairs from '../assets/cardPics/chairs.jpg'
import one from '../assets/one.jpg'
import two from '../assets/one.jpg'
import stuftoys from '../assets/cardPics/stuftoys.jpg'
import SliderScroll3 from './SliderScroll3'
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
import SlideScroll2 from './SlideScroll2'
import ProductViewer from './ProductViewer.jsx'

const data = [
    {
        id: 1,
        src1: keyboard,
        src2: headphone,
        src3: chairs,
        src4: Computer,
    },
 
  
    {
        id: 2,
        src1: keyboard,
        src2: headphone,
        src3: chairs,
        src4: Computer,
    },
 
  
    {
        id: 3,
        src1: keyboard,
        src2: headphone,
        src3: chairs,
        src4: Computer,
    },
 
    {
        id: 3,
        src1: keyboard,
        src2: headphone,
        src3: chairs,
        src4: Computer,
    },
 
  
]







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
    <div className='h-full bg-light-gray'>

    <div className=' h-full  flex flex-col bg-cover bg-center transition-all ease-in-out duration-500'  style={{ backgroundImage: `url(${slides[curr]})` }}>
<div className=' flex justify-between  '>
<div onClick={next} className='w-10 h-40 hover:border border-black flex items-center cursor-pointer'><FaChevronLeft color='black' size={40} /></div>
    <div onClick={prev} className='w-10 h-40 hover:border border-black flex items-center cursor-pointer'><FaChevronRight color='black'  size={40}/></div>

</div>
 <div className=' mt-8  bg-gradient-to-b from-transparent via-slate-200 to-light-gray  grid gap-4 px-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>



{data.map(({id,src1,src2,src3,src4})=>(


<Card  id={id} src1={src1} src2={src2} src3={src3} src4={src4}  />
))} 





{/* 

<Card {...obj2} />
<Card2 src={cpu}/>
<Card2 src={stuftoys}/>
<Card  {...obj} />
<Card {...obj} />
<Card {...obj2} />
<Card2 src={stuftoys}/>
<Card2 src={cpu}/>

 */}




 </div>
    </div>
 <div className='mt-6'>
<SlideScrollBar  title={'Deals on Electronic Gadgets & accessories'}  />
</div>
 <div className='mt-6'>
<SlideScroll2   title='Best Sellers in Books' />
</div>
 <div className='mt-6'>
<SliderScroll3   title='Best Sellers in Beauty & Personal Care' />
</div>

<div className=' mt-8  bg-gradient-to-b from-transparent via-slate-200 to-light-gray  grid gap-4 px-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>

<Card2 src={card17}/>
<Card2 src={card18}/>
<Card {...obj2} />
<Card  {...obj} />

 </div>

<div className='mt-6'>
    <SliderScroll3  title='Best Sellers in Toys & Games'/>
</div>


<div className='mt-6'>
<SlideScrollBar  title={'Deals Under $25'}  />
</div>



<div className=' mt-8  bg-gradient-to-b from-transparent via-slate-200 to-light-gray  grid gap-4 px-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>

<Card2 src={card12}/>
<Card2 src={card13}/>
<Card2 src={card14}/>
<Card2 src={card16}/>



 </div>

 <div className='mt-6'>
    <SlideScroll2  title='Most wished for in Movies & TV'/>
</div>

 <div className='mt-6'>
    <SliderScroll3  title='Popular products in Beauty internationally'/>
</div>

<div className='mt-6'>
    <SlideScroll2  title='Top Sellers in Books for you'/>
</div>


<div className='mt-6'>
<ProductViewer/>
</div>


    </div>
  )
}

export default Test