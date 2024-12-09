import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";

const New = () => {
  return (
   
      <main className='container mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row lg:space-x-6'>
          </div>

          {/* side bar */}
          <div className='flex items center justify-center px-10'>
      <div className='max-w-[1440px] flex gap-6 justify-center'>
  <div className='border-r-2 border-neutral-200 p-10 hidden md:block'>
    <ul className='space-y-0'> 

     <li>Shoes</li>
     <li>Sports Bras</li>
     <li>Tops & Tshirts</li>
     <li>Hoodies and Sweatshirts</li>
     <li>Jackets</li>
     <li>Trousers & Tights</li>
     <li>Shorts</li>
     <li>Tracksuit</li>
     <li>Jumpsuits & Rompers</li>
     <li>Skirts & Dresses</li>
     <li>Socks</li>
     <li>Accessories &</li>
     <li>Equipments</li>
    
    </ul>
  </div>
</div>
          <div className='bg-white rounded-lg p-4 shadow-sm w-full lg:w-1/4'>
            <h2 className='text-lg font-semibold mb-4'>Filters</h2>
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-700'>Gender</h3>
                  <ul className='space-y-2 mt-2'>
                    <li> <input type="checkbox" /> <label htmlFor="men"></label>Men</li>
                    <li><input type="checkbox" /> <label htmlFor="women"></label>Women</li>
                    <li><input type="checkbox" /> <label htmlFor="Unisex"></label>Unisex</li>
                  </ul>
              </div>

              <div className='bg-white rounded-lg p-4 shadow-sm w-full lg:w-1/4'>
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-700'>Kids</h3>
                  <ul className='space-y-2 mt-2'>
                    <li> <input type="checkbox" /> <label htmlFor="boys"></label>Boys</li>
                    <li><input type="checkbox" /> <label htmlFor="girs"></label>Girls</li>
                  </ul>
              </div>


              <div className='bg-white rounded-lg p-4 shadow-sm w-full lg:w-1/4'>
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-700'>Shop By Price</h3>
                  <ul className='space-y-2 mt-2'>
                    <li> <input type="checkbox" /> <label htmlFor="under ₹ 2500.00"></label></li>
                    <li><input type="checkbox" /> <label htmlFor="₹ 2 501.00 - ₹ 7 500.00"></label></li>
                  </ul>
              </div>
</div>

{/* main Heading */}

<div>
  <div>
    <h1 className='font-bold text-4xl'>New (500) </h1>
   <span>Hide Filters</span>
   <LuSettings2 />
   <span>Sorts</span>
   <FaAngleDown />
  </div>
</div>


{/* Shoes Images */}

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  <div>
<div>
<Image src='/Frame (2).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame (3).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame (4).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame (5).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame (6).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame (7).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame (8).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame (9).png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame ().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
<Image src='/Frame().png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>

</div>
  </div>
</div>















          </div>
        </div>
</div>
      </main>

  )
}

export default New

