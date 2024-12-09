import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopBar = () => {
  return (
 
    <div className='w-full h-[36px] bg-[#F5F5F5]'>
    <div className='max-w-7xl mx-auto'>
        <div className='text-black flex items-between justify-between'>

<div className='flex items-start w=[24px] h-[24px] items-between justify-between'>
    <Image src="/Vector.png" alt='vector' width={24} height={24} style={{width:'auto', height:'auto'}} className=''/>
</div>



            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
                <Link href="/new" className='text-[16px] font-normal'>Find a Store</Link>
                <span className='text-gray-500 hidden md:inline'>|</span>

                <a href="#" className='text-black'>Help</a>
                <span className='text-gray-500 hidden md:inline'>|</span>

                <a href="#" className='text-black'>Join Us</a>
                <span className='text-gray-500 hidden md:inline'>|</span>

                <a href="#" className='text-black'>Sign In</a>
                <span className='text-gray-500 hidden md:inline'>|</span>


            </div>
            


        </div>

      </div>
    </div>
  )
}

export default TopBar
