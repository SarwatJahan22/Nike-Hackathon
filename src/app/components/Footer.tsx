import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black w-full text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between space-x-4 md:space-x-11 px-4 md:pl-28 py-4'>
        <ul className='space-y-2 md:space-y-4 px-2 py-2 text-sm'>
          <li>FIND A STORE</li>
          <li>BECOME A MEMBER</li>
          <li>SIGN UP FOR EMAIL</li>
          <li>SEND US FEEDBACK</li>
          <li>STUDENT DISCOUNT</li>
        </ul>

        <ul className='text-gray-600'>
          <h3 className='text-white'>GET HELP</h3>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Payment Options</li>
          <li>Contact Us On Nike.com Inquiries</li>
          <li>Contact Us On All Other Inquiries</li>
        </ul>

        <ul className='text-gray-600'>
          <h3 className='text-white'>ABOUT NIKE</h3>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Sustainability</li>
        </ul>

        <p className='text-center md:text-left'>India 2023. Nikes, Inc. All Rights Reserved</p>

        <div className='flex flex-col md:flex-row md:space-x-4 text-sm'>
          <a href="#" className='text-sm hover:underline'>Guides</a>
          <a href="#" className='text-sm hover:underline'>Terms of Sales</a>
          <a href="#" className='text-sm hover:underline'>Nike Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
