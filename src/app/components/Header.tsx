import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className='w-full h-[58px] border-b-2 border-gray-200 bg-white'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4'>
        
        <div className='flex items-center'>
          <Image src='/Vector (1).png' alt='Nike' width={59} height={21} className='w-auto h-auto'/>
        </div>
        
        <div className='flex items-center space-x-6'>
          <div className='hidden md:flex space-x-4'>
            <Link href="/allproducts" className='text-[16px] font-normal'>New & Featured</Link>
            <Link href="/productdetail" className='text-[16px] font-normal'>Men</Link>
            <Link href="/#" className='text-[16px] font-normal'>Women</Link>
            <Link href="/#" className='text-[16px] font-normal'>Kids</Link>
            <Link href="/#" className='text-[16px] font-normal'>Sale</Link>
            <Link href="/#" className='text-[16px] font-normal'>SNKRS</Link>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-md px-3 py-2'>
              <input type="text" placeholder="Search" className='bg-white px-2'/>
              <IoIosSearch className='text-gray-600'/>
            </div>

            <button className='text-gray-600'>
              <IoIosHeartEmpty />
            </button>

            <button className='text-gray-600'>
            <Link href="/allproducts">  <BiShoppingBag /></Link>  
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
