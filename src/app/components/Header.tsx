import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";



const Header = () => {
  return (
<<<<<<< HEAD
    
    
  
    <div className='w-[100%] h-[58px] border-b-2 border-white'>
      <div className='mx-w-7xl mx-auto flex items-center justify-between'>
        
        <div className='w-[59px] h-[21px] flex items-center px-4'>
       <Image src='/Vector (1).png' alt='Nike' width={59} height={21} style={{width:'auto', height:'auto'}}/>
        </div>
        
        
        <div className='w-[1440px] h-[96px] font-semibold gap-4'> 
<div className='font-4xl py-2 px-8 hidden md:flex  items-center justify-center gap-4 text-black '>



      
          <Link href="/new" className='text-[16px] font-normal'>New & Featured</Link>
          <Link href="/CheckOut" className='text-[16px] font-normal'>Men</Link>
          <Link href="/JoinUs" className='text-[16px] font-normal'>Women</Link>
          <Link href="/new"className='text-[16px] font-normal'>Kids</Link>
          <Link href="/new" className='text-[16px] font-normal'>Sale</Link>
          <Link href="/new"className='text-[16px] font-normal'>SNKRS</Link>
        </div>
        </div>



            <div className='flex items-center space-x-6'>
              <div className='hidden lg-flex items-center bg-slate-500 rounded-md px-3 py-2'>
              <input type="text"
              placeholder="Search"
              className='bg-slate-100'/>
              </div>

              <button className='rounded-full'>
              <IoIosSearch />
              </button>

              <button className='rounded-full'>
              <IoIosHeartEmpty />
              </button>

              <button className='rounded-full'>
              <BiShoppingBag />
              </button>
            </div>
              
      </div>
    </div>
=======
  
    <div className='w-[1440px] h-[60px] mx-auto bg-[#FFFFFF]'>
      <div className='container mx-auto flex items-center justify-between'>
        
        <div className='w-[59px] h-[21px] flex items-center px-4'>
       <Image src="/Vector (1).png" alt='Nike' width={59} height={21} style={{width:'auto', height:'auto'}}/>
        </div>
      
<div className='mx-auto hidden md:flex items-center justify-center gap-4 text-black'>
      
          <Link href="/productdetail" className='text-[16px] font-normal'>New & Featured</Link>
          <Link href="/#" className='text-[16px] font-normal'>Men</Link>
          <Link href="/#" className='text-[16px] font-normal'>Women</Link>
          <Link href="/#"className='text-[16px] font-normal'>Kids</Link>
          <Link href="/cart" className='text-[16px] font-normal'>Sale</Link>
          <Link href="/#"className='text-[16px] font-normal'>SNKRS</Link>
        

            <div className='flex items-center justify-between gap-2'>
              <div className='lg-flex bg-slate-300 '>
              <input type="text"
              placeholder="Search"
              className='bg-[#F5F5F5]'/>
              </div>

              <button className='rounded-full w-[84px] h-[60px]'>
              <IoIosSearch />
              </button>

              <button className='rounded-full w-[84px] h-[60px]'>
              <IoIosHeartEmpty />
              </button>

              <button className='rounded-full w-[84px] h-[60px]'>
              <BiShoppingBag />
              </button>
            </div>
            </div>
        </div>
      </div>
 
>>>>>>> 4160730 (uiuxhackathon)
  )
}

export default Header
