import React, { useState } from 'react';
import Amazonlogo from '../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidUpArrow } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Usflag from '../assets/USFlag.png'
import { HiBars3 } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [showSidebar, setShowSidebar] = useState('hidden')
  const [isShownSecond, setIsShownSecond] = useState(false);

  const showSidebarFunc = () => {
    if (showSidebar === 'hidden') {
      setShowSidebar('block')
    } else {
      setShowSidebar('hidden')
    }
  }
  return (
    <section className='h-[102px] '>
      <nav>
        <div className='nav-belt relative  h-[60px] bg-light-bluish justify-between  sm:bg-darkBlusish flex items-center   sm:justify-around p-1'>

          <div onClick={showSidebarFunc} className='flex items-center justify-center gap-4 sm:hidden'>
            <RxHamburgerMenu size={25} color='white' />
            <img className='w-[94px] h-9 mt-4' src={Amazonlogo} alt="Nothing to show" />
          </div>

          <a className='hidden  sm:block p-1  mt-4 border border-transparent   hover:border-white' href="#">
            <img className='w-[94px] h-9' src={Amazonlogo} alt="Nothing to show" />
          </a>


          <div className='hidden sm:flex h-10   border border-transparent  hover:border-white cursor-pointer  p-1'>
            <div className='flex items-center mt-4'><CiLocationOn size={20} color='white' /></div>
            <div>
              <p className='text-xs flex flex-col text-white'>Deliver to <span className='text-white text-sm font-bold'> Pakistan</span></p>
            </div>
          </div>



          {/* Search input full */}
          <div className='hidden   h-[40px] w-[630px]   sm:flex items-center rounded-md   bg-white'>
            <select className='cursor-pointer text-gray-500 font-semibold hover:bg-dark-gray w-[7%] h-full text-xs rounded-l-md bg-light-gray '>
              <option value="">All</option>
            </select>
            <input type="text" placeholder='Search Amazon' className='focus:outline-none py-2 px-4  w-[86%] ' />
            <div className='w-[7%] cursor-pointer hover:bg-dark-orangish  bg-light-orangish flex items-center justify-center rounded-r-md h-full'>
              <IoSearch size={25} />
            </div>
          </div>



          <div
            onMouseEnter={() => setIsShownSecond(true)}
            onMouseLeave={() => setIsShownSecond(false)}


            className='hidden sm:flex relative p-2 items-center border border-transparent  hover:border-white cursor-pointer h-12'>
            <div className='w-5 h-4 '><img className='w-full h-full' src={Usflag} alt="nothing to show" /></div>
            <select className='bg-transparent text-xs font-bold leading-tight text-white' >
              <option value="">EN</option>
            </select>



            {isShownSecond && (

              <div className='z-50  rounded-md'>

                <div className=' w-[210px]  rounded-md -left-12   bg-white absolute top-14'>
                  {/* Arrow icon */}
                  <div className='absolute left-[100px] -top-4'>
                    <BiSolidUpArrow size={18} color='white' />
                  </div>




                  <div className='flex items-center justify-center mt-2 gap-4'>
                    <p className='text-sm' >Change Language</p>
                    <a className='text-xs leading-tight text-blue-700' href="">Learn More</a>
                  </div>




                  <div className='flex flex-col mt-4 gap-2'>

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



                  <div className='flex items-center justify-center mt-4 gap-4'>
                    <p className='text-sm' >Change Language</p>
                    <a className='text-xs leading-tight text-blue-700' href="">Learn More</a>
                  </div>

                  <div className='flex items-center justify-between px-4 mt-4 gap-4'>
                    <p className='text-sm' >$-USD-US Dollar</p>
                    <a className='text-xs leading-tight text-blue-700' href="">Change</a>
                  </div>


                  <div>
                    <div className='flex items-center mt-2 '>
                      <img className='h-3 w-4' src={Usflag} alt="" />
                      <p className='leading-tight text-sm  '>You are Shopping on</p>
                    </div>
                    <p className='text-sm'>Amzon.com</p>
                  </div>

                  <div className='flex items-center p-3 justify-center'>
                    <a className='text-blue-700 text-sm leading-tight hover:underline' href="">Change Contry/region</a>
                  </div>




                </div>
              </div>


            )}





          </div>



          <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}

            className='hidden  sm:flex flex-col  border border-transparent  hover:border-white cursor-pointer items-start justify-center  h-12'>
            <p className='text-white leading-tight text-xs ml-1 font bold'>Hello,sign in</p>
            <select className='text-sm font-bold leading-tight bg-transparent  text-white'>
              <option value="">Account & Lists</option>
            </select>



            {/*1st for modal showing on hover */}
            {isShown && (

              <div className='z-50 rounded-md'>

                <div className=' w-[480px] right-12 rounded-md    bg-white absolute top-14'>
                  <div className='absolute left-[333px] -top-3'>
                    <BiSolidUpArrow size={18} color='white' />

                  </div>
                  <div className='flex flex-col items-center p-2 gap-2'>
                    <a href='/signin' className='px-24 py-1 text-center rounded-md  mx-auto bg-goldish'>Sign in</a>
                    <p className='text-xs leading-tight text-black'>New Customer?<span className='text-xs hover:underline text-blue-700'>Start Here.</span></p>
                  </div>

                  <div className='wrapper flex mt-2'>
                    {/* first div */}
                    <div className='flex flex-col w-[50%]  items-center'>
                      <h1 className='text-lg font-semibold self-start ml-10 text-black'>Your Lists</h1>
                      <ul className='flex flex-col gap-2 p-3'>
                        <li className='text-gray-400 hover:underline'>Create a list</li>
                        <li className='text-gray-400 hover:underline'>Find a List or Registry</li>
                      </ul>

                    </div>
                    {/* second div */}
                    <div className='flex flex-col w-[50%]  items-center '>
                      <h1 className='text-lg font-semibold self-start ml-8 text-black'>Your Account</h1>
                      <ul className='flex flex-col gap-2 p-2  '>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Accounts</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Orders</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Recomendations</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Browsing History</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>WatchList</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Video Purchases & Rentals</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Kindle Unlimited</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Content & Devices</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Subscribe & Save Items</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Membership & Subscription</li>
                        <li className='text-gray-400 text-sm hover:underline leading-tight'>Music Library</li>
                      </ul>

                    </div>



                  </div>


                </div>
              </div>


            )}


            {/*1st for modal showing on hover */}




          </div>





          <div className='hidden   sm:flex flex-col border border-transparent  hover:border-white cursor-pointer'>
            <p className='text-white text-xs'>Returns</p>
            <h1 className='font-bold text-white leading-tight'><a href="">& Orders</a></h1>
          </div>


          <div className=' sm:hidden ml-10 flex items-center'>
            <div className='flex items-center'>
              <p className='text-xs leading-tight text-white'>Signin</p>
              <IoIosArrowForward color='white' size={10} />
            </div>
            <div className='flex items-center gap-4 '>
              <VscAccount color='white' size={30} />
              <BsCart color='white' size={30} />
            </div>

          </div>
          {/* <div className='flex items-center'>

</div> */}


          <div className='hidden   h-12 sm:flex items-center border border-transparent   hover:border-white cursor-pointer'>
            <BsCart color='white' size={30} />
            <h3 className=' text-md leading-tight font-md text-white'>Cart</h3>
          </div>

          {/* Sidebar */}
          <aside className={`${showSidebar} z-50 h-[720px]   w-96 absolute inset-0 bg-white`} >
            <div className="top h-40 bg-darkBlusish">
              <div className='flex h-[60%] w-full justify-end items-start'>
                <div className='flex items-center mt-4'>
                  <p className='text-xs mt-2 font-semibold leading-tight text-white'>Signin</p>
                  <IoIosArrowForward className='mt-2' color='white' size={10} />
                </div>
                <div className='flex mt-4 items-center gap-4 '>
                  <VscAccount color='white' size={30} />
                </div>

              </div>

              <div className=' w-full ml-4 flex items-center justify-between'>
                <div className=''>
                  <p className='text-lg leading-tight text-white font-semibold'>Browse</p>
                  <h1 className='text-xl leading-tight text-white font-bold'>Amazon</h1>
                </div>
                <RxCross1 onClick={showSidebarFunc} className='mr-8' color='white' size={30} />


              </div>
            </div>

            <div className='w-full flex justify-between p-4'>
              <h2 className='text-lg font-bold leading-tight text-black'>Amazon Home</h2>
              <a href="#">  <IoHomeOutline color='black' size='30' />
              </a>

            </div>

            <div className='bg-gray-300 h-1' ></div>

            <div className='flex flex-col px-4 py-2 h-24 justify-between '>
              <h1 className='leading-relaxed text-lg font-bold text-black'>Trending</h1>
              <a href='#' className='font-semibold'>Movers & Shakers</a>

            </div>
            <div className='bg-gray-300 h-1' ></div>


          
            <div className='flex flex-col px-4 py-2justify-between '>
              <h1 className='leading-relaxed text-lg font-bold text-black'>Top Departments</h1>
<div className='flex flex-col  gap-6 mt-3'>
  
             <a href='#' className='font-semibold'>Home</a>
              <a href='#' className='font-semibold'>Health and Household</a>
              <a href='#' className='font-semibold'>Books</a>
              <a href='#' className='font-semibold'>PC</a>
              <select className='w-20 mb-2 font-semibold' name="" id="">
                <option value="">See All</option>
              </select>
</div>

            </div>
            <div className='bg-gray-300 h-1' ></div>



            <div className='flex flex-col px-4 py-2 h-24 justify-between '>
              <h1 className='leading-relaxed text-lg font-bold text-black'>Setting</h1>
              <div className='flex flex-col gap-4 mt-3' >
              <div className='flex items-center gap-2 '>
       <CiGlobe className='mt-[2px]' />
       <h2>English</h2>
       </div>
       <div className='flex items-center gap-2 '>
      <img className='w-4 h-3' src={Usflag} alt="" />
       <h2 className='font-semibold'>United States</h2>
       </div>

              </div>
      
            </div>




          </aside>



        </div>


        <div className='flex sm:hidden  overflow-hidden  items-center bg-light-bluish '>
          <div className='  h-[40px] w-[100%]  xs:w-[100%] mx-auto xs:mx-0   flex items-center  overflow-hidden  rounded-md   bg-white'>

            <input type="text" placeholder='Search Amazon' className='focus:outline-none py-2 px-1 xs:px-4  mx-auto   w-[90%] xs:w-[84%]  ' />
            <div className=' w-[10%] cursor-pointer hover:bg-dark-orangish  bg-light-orangish flex items-center justify-center rounded-md h-full'>
              <IoSearch  size={25} />
            </div>
          </div>
        </div>




        <div className='bg-light-bluish flex relative overflow-hidden items-center px-2   h-12'>
          <div className='ml-3'><HiBars3 size={25} color='white' /></div>
          <ul className='flex items-center p-1  gap-6'>
            <li className='text-sm font-semibold text-white'>All</li>
            <li className='text-sm font-semibold text-white'>Todays Deals</li>
            <li className='text-sm font-semibold text-white'>Registry</li>
            <li className='text-sm font-semibold text-white'>Customer Service</li>
            <li className='text-sm font-semibold text-white'>Gift Cards</li>
            <li className='text-sm font-semibold text-white'>Sell</li>
          </ul>
        </div>



      </nav>


    </section>
  )
}

export default Navbar