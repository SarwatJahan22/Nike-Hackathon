<<<<<<< HEAD
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
=======
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const TopBar = () => {
  return (
    <div className="container mx-auto h-[36px] bg-[#F5F5F5] md:flex items-center justify-between">
   
     <div className="container mx-auto justify-between">
     <div className='w-[19px] h-[18px] md:flex items-center justify-between'>
     <Image src='/Vector.png' alt='vector' width={19} height={18} style={{width:'auto', height: 'auto'}}/>
<div>
   
      <ul className='mx-auto flex gap-4'>
        
      <li className='whitespace-nowrap'><Link href="/productlist">Find a Store </Link></li>
      <span >|</span>

        <li><Link href="/contactus">Help</Link></li>
        <span>|</span>
    
        <li className='whitespace-nowrap'><Link href="/joinus">Join Us</Link></li>
        <span>|</span>

        <li><Link href="/login">Login</Link></li>
        <span>|</span>
      </ul>

     
        </div>
        </div>
        </div>
    </div>
  );
};

export default TopBar;
>>>>>>> 4160730 (uiuxhackathon)
