import React from 'react'
import Product from '../../COMPONENTS/Product'
import first from '../../assets/laptops/first.jpg'
import second from '../../assets/laptops/second.jpg'
import third from '../../assets/laptops/third.jpg'
import fourth from '../../assets/laptops/fourth.jpg'
import fifth from '../../assets/laptops/fifth.jpg'
import Footer from '../../COMPONENTS/Footer'

const data=[
{
    id:1,
src:first,
desc:"Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works",
star:"5",
prize:"$749.99"
},

{
    id:2,
src:second,
desc:"Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works",
star:"5",
prize:"$749.99"
},

{
    id:3,
src:third,
desc:"Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works",
star:"5",
prize:"$749.99"
},

{
    id:4,
src:fourth,
desc:"Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works",
star:"5",
prize:"$749.99"
},

{
    id:5,
src:fifth,
desc:"Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works",
star:"5",
prize:"$749.99"
},






]




const Show = () => {
  return (
    <>
<section className='w-full h-full mb-2'>
   
<div className='w-full text-3xl sm:text-4xl  leading-tight flex justify-center font-semibold rounded-full p-4 bg-orangish/60 ' >
 <h1>Laptops</h1>
</div>


<div className='container p-6 '>
<div className='grid justify-center items-center bg-gray-400/20 gap-3  grid-cols-2 md:grid-cols-4 p-2  sm:grid-cols-2 '>
{data.map(({id,src,desc,prize})=>(
    <Product  id={id} desc={desc} src={src} prize={prize}  />



))}




</div>
</div>






</section>

<Footer/>
</>
  )
}

export default Show