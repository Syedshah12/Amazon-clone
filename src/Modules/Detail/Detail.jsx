import SamplePic from '../../assets/detail.jpg'
import pic1 from '../../assets/MakeUp/MakeUp1.jpg'
import { IoIosArrowForward } from "react-icons/io";
import pic2 from '../../assets/MakeUp/MakeUp2.jpg'
import pic3 from '../../assets/MakeUp/MakeUp3.jpg'
import pic4 from '../../assets/MakeUp/MakeUp5.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Navbar from '../../COMPONENTS/Navbar'
import ProductViewer from '../../COMPONENTS/ProductViewer';


const Detail = () => {
let sidebar=document.getElementsByClassName("sidebar")[0];
let sidebar_content=document.getElementsByClassName("content-wrapper")[0];
window.onscroll=()=>{
    let scrollTop=window.scrollY;
    let viewportHeight=window.innerHeight;
    let contentHeight=sidebar_content.getBoundingClientRect().height;
    let sidebarTop=sidebar.getBoundingClientRect().top + window.pageYOffset;    

    if(scrollTop >= contentHeight - viewportHeight){
        sidebar_content.style.transform=`translateY(-${contentHeight-viewportHeight+sidebarTop}px)`
        sidebar_content.style.position="fixed";
    }
    else{
        sidebar_content.style.transform=""
sidebar_content.style.position="";
    }
}

    return (
        <>
        <Navbar/>
  <div className="w-full h-auto ">
  
<div className="flex flex-col sm:flex-row justify-center  py-0 sm:py-8  gap-4 w-full">
    {/* for image left flex div */}
    <div className="container-1 mt-12 sm:mt-0 h-auto w-full sm:w-1/3 ">
<div className='flex  sticky top-0 '>
<div className='w-[20%] flex flex-col mt-3 gap-4 items-center'>
<div className='w-12 h-10 rounded-md ring-1  cursor-pointer '>
    <img className='w-full h-full object-contain' src={pic1} alt="" />
</div>
<div className='w-12 h-10 rounded-md ring-1 cursor-pointer '>
    <img className='w-full h-full object-contain' src={pic2} alt="" />
</div>
<div className='w-12 h-10 rounded-md ring-1  cursor-pointer'>
    <img className='w-full h-full object-contain' src={pic3} alt="" />
</div>
<div className='w-12 h-10 rounded-md ring-1  cursor-pointer'>
    <img className='w-full h-full object-contain' src={pic4} alt="" />
</div>

</div>
<div className='w-[80%]'>
<div className='w-full h-full '>
    <img className='py-8 px-4 object-cover w-full h-full hover:scale-125 cursor-pointer' src={SamplePic} alt="" />

</div>
</div>
</div>
    </div>
    {/* centered div */}
<div className='w-full sm:w-[44%]'>
    <div className='w-full px-2'>
        <div className='flex flex-col gap-y-3'>
        <h1 className='text-2xl font-semibold  '>Neutrogena Cleansing Fragrance Free Makeup Remover Face Wipes, Cleansing Facial Towelettes for Waterproof Makeup, Alcohol-Free, Unscented, 100% Plant-Based Fibers, Twin Pack, 2 x 25 ct</h1>
        <p className='text-sm leading-tight text-blue-700 hover:underline'><a href="#">Visit the Neutrogena Store</a></p>
        <div className='flex'>


            <p>4.8</p>
            <div className='flex items-center'>
            <div className='flex items-center justify-center' style={{ color: "#FFA41C" }}><CiStar fill='#FFA41C' size={15}/></div>
            <div className='flex items-center justify-center' style={{ color: "#FFA41C" }}><CiStar size={15}/></div>
            <div className='flex items-center justify-center' style={{ color: "#FFA41C" }}><CiStar size={15}/></div>
            <div className='flex items-center justify-center' style={{ color: "#FFA41C" }}><CiStar size={15}/></div>
            <div className='flex items-center justify-center' style={{ color: "#FFA41C" }}><CiStar size={15}/></div>
            </div>
     <div className='px-4 text-center'> 103,872 ratings </div>
     <div className='px-4 text-center border-gray-600 border-l-2'>Search this page</div>
        </div>
        <div><p className='text-green-700 leading-relaxed font-semibold'>Climate Pledge Friendly</p></div>
        <div><p className='text-sm leading-tight '>100K+ bought in past month</p></div>
       <hr className='mt-2 h-px  bg-gray-300 border-0 ' />

       <div className=''>
        <p className='text-2xl leading-relaxed font-md'>$10.27<span className='text-xs font-semibold leading-[1rem]'>	&#40;  $0.21 / Count &#41;</span></p>
        </div>
        </div>
 <div>
    <p className='text-md leading-tight text-gray-600'>No Import Fees Deposit & $44.73 Shipping to Pakistan</p>
    <div className="flex items-center gap-2 mt-2">

        <div className='text-center py-[1px]  px-2 rounded-sm bg-light-green text-sm leading-tight font-[400]'>Savings</div>
    <p className='text-sm leading-tight'>Get 3 for the price of 2</p>
    </div>
 </div>

<div className="flex py-2">
    <div className='flex flex-col text-base font-semibold  leading-tight '>
        <h1 className='mt-1'>Brand</h1>
        <h1 className='mt-1'>Skin Type</h1>
        <h1 className='mt-1'>Material Feature</h1>
        <h1 className='mt-1'>Unit Count</h1>
        <h1 className='mt-1'>Number of Items</h1>
    </div>
    <div className='flex flex-col text-base ml-10 leading-tight '>
        <h1 className='mt-1'>Neutrogena</h1>
        <h1 className='mt-1'>Sensitive</h1>
        <h1 className='mt-1'>Compostable</h1>
        <h1 className='mt-1'>50 Count</h1>
        <h1 className='mt-1'>2</h1>
    </div>
    
</div>
<hr className='mt-2 h-px  bg-gray-300 border-0 ' />


<div className='flex flex-col py-2'>
    <h1 className='text-lg font-bold '>About this item</h1>
    <ul  className='px-3 py-1 list-disc'>
        <li>Two 25-ct twin pack of ultra-soft, pre-moistened Neutrogena Fragrance-Free Makeup Remover Wipes with a micellar infused, triple emollient formula removes waterproof makeup & cleanses facial skin while leaving it feeling refreshed, smooth & conditioned</li>
        <li>Makeup remover facial cleansing towelettes work to dissolve all traces of dirt, removes bacteria, impurities, oil & makeup on skin while also removing pollution, sweat & sunscreen, for superior cleansing & makeup removing power at your fingertips</li>
        <li>Facial cleansing wet wipes are ophthalmologist-, dermatologist-, & allergy-tested & gentle around the eye area. The effective formula removes up to 99% of makeup--even stubborn waterproof mascara--without tugging</li>
        <li>These unscented makeup wipes are disposable & thoroughly cleanse skin, leaving behind no heavy residue so there's no need to rinse</li>
        <li>Facial cleansing wipes are great to use in a daily beauty or skincare routine for a refreshing self-care experience at-home</li>
    </ul>
</div>
<hr className='mt-2 h-px  bg-gray-300 border-0 ' />

    </div>
</div>

{/* right div */}
<div className='w-[80%] sm:max-w-72 min-w-64 px-4 py-2 sm:px-0 sm:py-0 sm:w-[20%]  mx-auto sm:mr-2  '>
    <div className='sticky top-0'>
    <div className='w-full  rounded-md  ring-slate-300/90 ring-1 p-1 '>
    <div className='flex flex-col   px-2 gap-y-2 w-full'>
        <div className='px-2'>
        <p className='text-2xl leading-relaxed font-md'>$10.27<span className='text-xs font-semibold leading-[1rem]'>	&#40;  $0.21 / Count &#41;</span></p>
        </div>


<div className='px-2'>
<p className='text-sm leading-relaxed font-semibold text-gray-600 text-wrap'>$89.62 Shipping & Import Fees  Deposit to Pakistan Details 
Delivery <span className='text-black font-bold'>Thursday, January 25.</span> Order within <span className='text-green-600'>4 hrs 40 mins</span></p>

</div>
<div className='flex gap-1 px-2'>
<div><IoLocationOutline /></div>
<div className=''><p className='text-blue-700 text-xs leading-tight  font-semibold'>Deliver to Pakistan</p></div>
</div>
<div className="px-2">
    <h1 className='text-green-700 text-lg leading-relaxed font-[500]'>In Stock</h1>
</div>


<div className= "  w-full px-2 ">
<select className=' rounded-md w-full font-semibold border-spacing-2   focus:border-blue-400 border-2 text-xs ring-1   focus:outline-none' name="cars" id="cars">
  <option value="volvo">Quantity: 1</option>
  <option value="saab">2</option>
  <option value="mercedes">3</option>
  <option value="audi">4</option>
</select>
</div>


<div className="px-2 flex flex-col w-full ">
    <div className='flex items-center flex-col w-full py-2 gap-y-2'>
    <button className='py-[7px] text-sm leading-tight text-center rounded-full w-full bg-goldish/90 hover:bg-goldish'>Add to cart</button>
<button className='py-[7px] text-sm text-center leading-tight  rounded-full w-full bg-orangish_2/95 hover:bg-orangish_2/100'>Buy Now</button>
    </div>

</div>

<div className="w-full flex flex-col gap-y-[2px] px-2">
<div className="flex items-center">
    <p className='text-slate-700 text-xs leading-tight w-[30%]'>Ships from</p>
    <p className='ml-2 text-[12px]  leading-relaxed '>Amazon.com</p>
</div>
<div className="flex items-center">
    <p className='text-slate-700 text-xs leading-tight w-[30%]'>Sold by</p>
    <p className='ml-2 text-[12px]  leading-relaxed '>Amazon.com</p>
</div>
<div className="flex items-center">
    <p className='text-slate-700 self-start text-xs leading-tight w-[30%]'>Returns</p>
    <p className='ml-[31.5px] text-blue-600 text-[12px] font-[500] leading-relaxed '>
Eligible for Return,<br /> Refund or Replacement within 30 days of receipt</p>
</div>


<div className="flex items-center">
    <p className='text-slate-800 text-xs leading-tight w-[30%]'>Payment</p>
    <p className='ml-[8px] text-[12px] text-blue-600 font-[500] cursor-pointer  leading-relaxed '>Secure transaction</p>
</div>
<div className="flex items-start mt-2">
    <input className='self-start mt-1 ml-1' type="checkbox" name="" id="" />
    <p className='ml-2 text-sm  font-medium]'>Add a gift receipt for easy returns</p>
    
</div>
<hr className='mt-2 ' />
<div className="w-full mb-[13px]  ">
        <button className='w-full py-[4px] cursor-pointer text-[14px] text-gray-800 px-4 bg-transparent border-gray-600 flex font-[400]  border rounded-md'>
            Add to list
        </button>
   
</div>
</div>

    </div>



 

</div>
<div className='w-full  sticky  top-0' >
<div className='rounded-md p-2  font-[400] cursor-pointer ring-slate-300/90 flex justify-between items-center flex-grow ring-1  w-full mt-4'>
<p className='leading-normal'>New <span>&#40;2&#41;</span> from <span>$10.25</span></p>
<IoIosArrowForward className='ml-auto'  size={20}/>
</div>
    </div> 


    </div>




</div>
</div>
  </div>
  <hr className='mt-2 h-px  bg-gray-300 border-0 ' />
  <ProductViewer/>

 
  </>
  )
}

export default Detail