import React from 'react'
import HomePage from './HomePage/page'
import Link from 'next/link'



const page = () => {
  return (
    <div className='max-w-7xl mx-auto min-h-screen'>

<Link href="/HomePage"></Link>
<HomePage/>

    </div>
   
    
  )
}

export default page
