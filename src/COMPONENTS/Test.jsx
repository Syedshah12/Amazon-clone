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
  images:[keyboard,headphone,Computer,chairs],
  tags:["keyboard","Headphone","Computer","Chairs"],
  title:"Gaming accessories"
    },
 
  
    {
        id: 2,
  images:[stuftoys],
  title:'Toy under $25'
    },
 
    {
        id: 3,
  images:[cpu],
  title:"Deals in Pcs"
    },
 

    {
        id: 4,
  images:[dining,home,kitchen,health],
  tags:["Dining","Home","Kitchen","Health"],
  title:'Refresh your Space'
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




 {data.map(item => {
                if (item.images.length === 1) {
                    return <Card2 id={item.id} title={item.title} src={item.images[0]} />;
                } else if (item.images.length === 4) {
                    return <Card id={item.id} title={item.title} src1={item.images[0]} src2={item.images[1]} src3={item.images[2]} src4={item.images[3]}
                    
                    tag1={item.tags[0]}
                    tag2={item.tags[1]}
                    tag3={item.tags[2]}
                    tag4={item.tags[3]}
                    
                    
                    
                    
                    
                    />;
                } else {
                    // Handle other cases if needed
                    return null;
                }
            })}


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

<Card2 title={"Best Deals in Watches"} src={card17}/>
<Card2 title={"Best GamingTech"}  src={card18}/>
<Card id={90} title={'Furniture And Home'} src1={obj.first} src2={obj.second} src3={obj.third} src4={obj.fourth} />
<Card  id={90} title={'Logitech Products'} src1={obj2.first} src2={obj2.second} src3={obj2.third} src4={obj2.fourth}  />

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