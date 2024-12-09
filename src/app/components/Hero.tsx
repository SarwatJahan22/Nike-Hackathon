import React from 'react'
import Image from 'next/image'
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const Hero = () => {
  return (
    <div className='bg-[#FFFFFF]  text-black w-full mx-auto'>
      <div className=' h-[58px] w-[1440px] text-bold flex flex-col justify-center items-center bg-[#E5E5E5]'>
        <h1 className='font-bold text-2xl items-center justify-center'>Hello Nike App</h1>
        <div className='flex justify-center text-[11px] font-[400px]'>
        <p >Download the app to access the everything Nike.</p> 
        <p className='underline'>Get your Great</p>
      </div>
      </div>

      <div className='w-[1344px] h-[700px] py-1 flex items-center justify-center'>
<Image src='/Image.png' alt='' width={1344} height={700} style={{width:"auto" , height:"auto"}} className='mx-auto block'/>
      </div>
      

      <div className=' h-[58px] w-[1440px] text-bold flex flex-col justify-center items-center mt-16 px-8 py-16'>
        <h4 className='font-[500] text-[15px] leading-[24px]'>First Look</h4>
        <h2 className='text-[56px] font-[500px]'>NIKE AIR MAX PULSE</h2>
        <p className='font-[400px] text-[15px]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
        <p className='font-[400px] text-[15px]'>-designed to push your past limits and help you go to max.</p>

        <div className='w-[1008px] h-[45px] flex items-center justify-center pt-4 py-4 gap-2'>
        <button className='bg-black rounded-full w-[72px] h-[24px] text-white text-[12px]'>Notify Me</button>
        <button className='bg-black rounded-full w-[72px] h-[24px] text-white text-[12px]'>Shop Air Max</button>
        </div>
      </div>


<div className='w-[161px] h-[27px] font-[500px] text-[22px]'>
Best of Air Max

<div className='mr-auto flex items-center py-4 px-4 text-[15px] font-[500] gap-[12px]'>
  Shop </div>
 
 <div className='rounded-full bg-gray-100 w-[24px] h-[24px] items-center mr-auto'> 
  <IoIosArrowBack />
<IoChevronForwardOutline /> </div>

<div className='w-[1440px] h-[510px]'>
  <div className='grid grid-cols-3 gap-2 py-4'>
  
  <Image src="/Image (1).png" alt='Shoes' width={441} height={441} style={{width:'auto', height:'auto'}} className='block' />

  <Image src="/Image (1).png" alt='Shoes' width={441} height={441} style={{width:'auto', height:'auto'}} className='' />

  <Image src="/Image (2).png" alt='Shoes' width={441} height={441} style={{width:'auto', height:'auto'}} className='' />

  </div>

<div className='grid grid-cols-3 gap-2 py-4'>
  <p className='font-[500] text-[15px]'>Nike Air Max Pulse <br />
  Women's Shoes  13 995
  </p>


  <p className='font-[500] text-[15px]'>Nike Air Max Pulse <br /> 
  Men's Shoes   13 995
  </p>

<p className='font-[500] text-[15px]'>Nike Air Max 97 SE <br />
Men's Shoes  16 995
</p>
</div>

</div>

</div>




<div className='mt-96 py-6 px-16 w-[1344px] h-[925px]'>

<div className='w-[1344px] h-[700px] mt-96 py-10 px-10 '>
 <Image src="/Image (3).png" alt='' width={1344} height={700} style={{width:'auto', height:'auto'}} className='cover'/> </div>

<div className=' h-[58px] w-[1440px] text-bold flex flex-col justify-center items-center mt-16 px-6 py-10'>
<h3 className='font-[500px] text-[54px]'>Step Into What Feels Good</h3>
<p className='font-[400px] text-[15px] leading-[24px] py-2'>Cause everyone should know the feeling of running in that perfect pair</p>
<button className='bg-black rounded-full w-[152px] h-[39px] text-white text-[15px]'>Find Your Shoe</button>

</div>
</div>




<div className='w-[1344px] h-[900px] mt-96 py-10 px-10'>
  <h4 className='text-black font-[500px] text-[22px]'>Gear Up</h4>
<div className='flex items-center gap-2'>
<Image src="/Frame (1).png" alt='Men Shoes' width={300} height={393} style={{width:'auto', height:'auto'}} className='cover'/>
<Image src="/Frame (6).png" alt='Men Shoes' width={300} height={393} style={{width:'auto', height:'auto'}} className='cover'/>
<Image src="/Frame (7).png" alt='Women Shoes' width={300} height={393} style={{width:'auto', height:'auto'}} className='cover'/>
<Image src="/Frame (8).png" alt='Women Shoes' width={300} height={393} style={{width:'auto', height:'auto'}} className='cover'/>
</div>
</div>

<div className='w-[1344px] h-[700px] -mt-40 px-10'>
<h4 className='text-black font-[500px] text-[22px]'>Dont Miss</h4>
  <div className=''>
     <Image src="/Image (5).png" alt='' width={1344} height={700} style={{width:'auto', height:'auto'}} className='cover'/>
<div className='flex flex-col justify-center items-center mt-16 px-10 py-8 gap-2'>
<p className='font-semibold text-3xl'> FLIGHT ESSENTIALS </p>
<p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
<button className='bg-black rounded-full w-[80px] h-[30px] text-white text-[15px]'>Shop</button>
</div>
</div>
</div>



<div className='mt-40 py-20 px-6'>
<h3 className='font-[500px] text-[23px]'>The Essentials</h3>
  <div className='flex items-center gap-2'>
    

  <Image src="/Image (6).png" alt='' width={440} height={540} style={{width:'auto', height:'auto'}} className='cover'/>
<Image src="/Image (7).png" alt='' width={440} height={540} style={{width:'auto', height:'auto'}} className='cover'/>
<Image src="/Image (8).png" alt='' width={440} height={540} style={{width:'auto', height:'auto'}} className='cover'/>
  </div>
</div>

 
<div className='w-[880px] h-[192px] '>
  <div className='flex flex-cols-3 items-center justify-center gap-2  space-x-11 pl-28 py-4'> 
<ul className='text-[#757575]'>
  <h3 className='font-semibold text-[15px] text-black'>Icons</h3>
  <li>Air Force 1</li>
  <li>Huarache</li>
  <li>Air Max 90</li>
  <li>Air Max 95</li>
  
</ul>

<ul className='text-[#757575]'>
<h3 className='font-semibold text-[15px] text-black'>Shoes</h3>
  <li>All Shoes</li>
  <li>Custom Shoes</li>
  <li>Jordan Shoes</li>
  <li>Running Shoes</li>
</ul>


<ul className='text-[#757575]'>
  <h3 className='font-semibold text-[15px] text-black'>Clothing</h3>
  <li>All Clothing</li>
  <li>Modest Wear</li>
  <li>Hoodies & Pullovers</li>
  <li>Shirt & Tops</li>
</ul>


<ul className='text-[#757575]'>
  <h3 className='font-semibold text-[15px] text-black'>Kids</h3>
  <li>Infant & Toddler Shoes</li>
  <li>Kids' Shoes</li>
  <li>Kids' Jordan Shoes</li>
  <li>Kids' Basketball Shoes</li>
</ul>

  </div>
</div>


    </div>
  )
}

export default Hero

