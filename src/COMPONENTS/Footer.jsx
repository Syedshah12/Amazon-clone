import React,{useState} from 'react'
import Amazonlogo from '../assets/logo.png'
import { CiGlobe } from "react-icons/ci";
import Usflag from '../assets/USFlag.png'
import { BiSolidUpArrow } from "react-icons/bi";


const Footer = () => {
    const [isShownSecond, setIsShownSecond] = useState(false);
      return (
<section>
<div className="main">
<div className="upFooter">
<div className="wrapper flex flex-col">
<div className='backToTop w-screen h-12 '>
    <div className='px-3 h-full w-full text-center flex items-center bg-light-bluish/95 hover:bg-light-bluish/90 cursor-pointer  justify-center hover: text-white'>
     Back to top
    </div>
    </div>    


<div className='px-14 py-8 sm:py-16 justify-around flex gap-6 sm:gap-0 items-start bg-light-bluish '>


<div className='flex flex-col'>
<ul className='flex flex-col gap-4 items-center justify-center text-white'>
    <li className='font-semibold'>Get To Know US</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Careers</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Blogs</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>About Amazon</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Investors Relation</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Amazon Devices</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Amazon Science</li>
</ul>
</div>





<div className='flex flex-col'>
<ul className='flex flex-col gap-4 items-center justify-center text-white'>
    <li className='font-semibold'>Make Money With Us</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Sell Products on Amazon</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Sell apps on Amazon</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Become an Affiliate</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Advertise Your Products</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Self-Publish with Us</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Host On Amazon Hub</li>
</ul>
</div>








<div className=' flex-col hidden sm:flex '>
<ul className='flex flex-col gap-4 items-center justify-center text-white'>
    <li className='font-semibold'>Amazon Payment Products</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Amazon Business Card</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Shop with Points</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Reload Your Balance</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Amazon Currency Converter</li>

  
</ul>
</div>








<div className=' flex-col hidden sm:flex '>
<ul className='flex flex-col gap-4 items-center justify-center text-white'>
    <li className='font-semibold'>Let Us Help You</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Amazon and COVID-19</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Your Account</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Your Orders</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Shipping Rates & Policies</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Returns & Replacements</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Manage Your Content and Devices</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Amazon Assistant</li>
    <li className='text-white text-sm leading-tight cursor-pointer hover:underline'>Help
</li>
</ul>
</div>
</div>
<hr />



<div className='down-tab flex px-14 py-8 justify-center bg-light-bluish'>
<div className='flex flex-col sm:flex-row gap-5 sm:gap-0 items-center   ' >
<div className='logo w-24 mt-3 hidden sm:block mr-16'><img className='w-full h-full' src={Amazonlogo} alt="" /></div>
<div className='btns flex-col sm:flex-row flex gap-6'>
    <div className='flex items-center'>
    <div 
    
    onMouseEnter={() => setIsShownSecond(true)}
    onMouseLeave={() => setIsShownSecond(false)}

    
    className='text-white relative text-sm sm:border sm:text-sm  px-3 py-1 rounded-md items-center  border-white  flex mx-2'>






    <div className='mr-2'><CiGlobe />
</div>
English




{isShownSecond && (

<div className='z-50 hidden sm:block  rounded-md'>

  <div className=' w-[210px]  rounded-md -left-12   bg-white absolute top-9'>
    {/* Arrow icon */}
    <div className='absolute left-[100px] -top-4'>
      <BiSolidUpArrow size={18} color='white' />
    </div>




    <div className='flex items-center justify-center mt-2 gap-4'>
      <p className='text-sm text-black' >Change Language</p>
      <a className='text-xs leading-tight text-blue-700' href="">Learn More</a>
    </div>




    <div className='flex flex-col text-black mt-4 gap-2'>

      <div className='ml-12'>
        <input type="radio" id="huey" name="drone" value="huey" checked />
        <label for="huey">Eng-en</label>
      </div>

      <div className='ml-12'>
        <input type="radio" id="dewey" name="drone" value="dewey" />
        <label for="dewey">españo-es</label>
      </div>

      <div className='ml-12'>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">العربية-AR</label>
      </div>

      <div className='ml-12'>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">Deutsch-DE</label>
      </div>

      <div className='ml-12'>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">עברית-HE</label>
      </div>

      <div className='ml-12'>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">한국어-KO</label>
      </div>


      <div className='ml-12'>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">português-PT</label>
      </div>


      <div className='ml-12'>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">中文 (简体)-ZH</label>
      </div>




    </div>






  </div>
</div>


)}




</div>
<div className='text-white text-sm sm:text-sm   px-3 py-1 rounded-md items-center sm:border border-white  flex mx-2'>
$USD - U.S
</div>













    </div>


<div className='text-white hidden   text-sm sm:text-sm  px-4 sm:px-6  rounded-md items-center border border-white   sm:flex mx-2'>
<div className='flex items-center'><div className='w-4 h-3'><img className="w-full h-full" src={Usflag} alt="" /></div>
United States
</div>
</div>
<div className='sm:hidden flex justify-center  items-center'>
<div className='w-4 h-3 '><img className='w-full h-full' src={Usflag} alt="" /></div>
<div className='text-white    text-sm sm:text-sm   sm:px-6   items-center  border-white   sm:flex mx-1'>
 
 United States
 </div>
</div>


</div>



</div>












</div>












</div>




















<div className='down-footer hidden sm:block'>
    <div className="wrapper bg-darkBlusish ">


<div className="container gap-32 hidden
 items-start justify-center px-8 py-8 sm:flex">

{/* First col */}
<div className="col1 flex  flex-col  gap-4 justify-start">
<div className='hover:underline cursor-pointer  '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>


<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>



<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>




</div>







<div className="col1 flex  flex-col  gap-4 justify-start">
<div className='hover:underline cursor-pointer  '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>


<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>



<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>




<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>




</div>








<div className="col1 flex  flex-col  gap-4 justify-start">
<div className='hover:underline cursor-pointer  '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>


<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>



<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>




<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>




</div>








<div className="col1 flex  flex-col  gap-4 justify-start">
<div className='hover:underline cursor-pointer  '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>


<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>



<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>




<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>




</div>








<div className="col1 flex  flex-col  gap-4 justify-start">
<div className='hover:underline cursor-pointer  '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>


<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>



<div className='hover:underline cursor-pointer '>
<a className='font-semibold text-white text-xs leading-tight' href="">Amazon music</a><br />
<span className='hover:underline cursor-pointer    text-[12px] text-wrap text-white'>Stream million <br /> of songs</span>
</div>






</div>












</div>


<div className='bg-darkBlusish hidden sm:block'>
<div className=''>
<div className="cont flex justify-center gap-6 text-white text-sm items-center">
    <p>Conditions of use</p>
    <p>Privacy Notice</p>
    <p>Your ads privacy Choices</p>

</div>
<div className="cont mt-2 flex justify-center gap-6 text-white text-sm items-center">
    <p className='text-xs  mb-3 leading-tight'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
</div>
</div>
</div>







    </div>

</div>

</div>
</div>
</section>
    )
}

export default Footer