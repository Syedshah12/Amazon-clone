import SamplePic from '../../assets/detail.jpg'
import pic1 from '../../assets/MakeUp/MakeUp1.jpg'
import pic2 from '../../assets/MakeUp/MakeUp2.jpg'
import pic3 from '../../assets/MakeUp/MakeUp3.jpg'
import pic4 from '../../assets/MakeUp/MakeUp5.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Navbar from '../../COMPONENTS/Navbar'


const Detail = () => {


    return (
  <div className="w-full h-screen  ">
    <Navbar/>
<div className="flex justify-center py-0 sm:py-8  gap-4 w-full">
    {/* for image left flex div */}
    <div className="container-1 w-1/3 ">
<div className='flex '>
<div className='w-[20%] flex flex-col mt-3 gap-4 items-center'>
<div className='w-12 h-10 rounded-md ring-1  cursor-pointer'>
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
    <img className='py-8 px-4 object-cover w-full h-full' src={SamplePic} alt="" />

</div>
</div>
</div>
    </div>
    {/* centered div */}
<div className='w-[44%]'>
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
       <hr className='mt-2 h-px  bg-black border-0 ' />
        </div>
 
    </div>
</div>
{/* left div */}
<div className='w-[20%] mr-2'>
<div className='w-full  rounded-md ring-slate-300/90 ring-1 p-1 '>
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




</div>
</div>
  </div>
  )
}

export default Detail