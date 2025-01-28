import React from 'react';
import Image from 'next/image';

const AllProducts = () => {
  return (
    <div className="flex">
  {/* Sidebar */}
  <aside className="w-1/4 p-4 hidden sm:block border-r border-gray-300">
    <h1 className="text-2xl font-semibold mb-6">New (500)</h1>
    <ul className="space-y-2">
      <li>Shoes</li>
      <li>Sports Bras</li>
      <li>Tops & T-Shirts</li>
      <li>Hoodies and Sweatshirts</li>
      <li>Jackets</li>
      <li>Trousers & Tights</li>
      <li>Shorts</li>
      <li>Tracksuits</li>
      <li>Jumpsuits & Rompers</li>
      <li>Skirts & Dresses</li>
      <li>Socks</li>
      <li>Accessories</li>
      <li>Equipment</li>
    </ul>
  </aside>

  {/* Products Grid */}
  <div className="w-full sm:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    {[...Array(30)].map((_, index) => (
      <div key={index} className="bg-white rounded-lg p-4">
        <Image
          src={`/Frame (${index + 2}).png`}
          alt={`Product ${index + 1}`}
          width={348}
          height={348}
          className="w-full h-auto mx-auto"
        />
        <h3 className="mt-4 text-center text-gray-700 font-semibold"> {index}</h3>
      </div>
    ))}
  </div>
</div>

  )}

export default AllProducts
