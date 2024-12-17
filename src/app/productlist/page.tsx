import React from 'react';
import Image from 'next/image';

const ProductList = () => {
  return (
    <main className="container mx-auto px-4 py-8">
    

        {/* Sidebar */}
        <div className="hidden md:block w-full lg:w-1/5 border-r border-gray-200 p-4">
        <header className="text-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">New (500)</h1>
      </header>
        
          <ul className="space-y-2 text-gray-700">
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
        </div>

    
    <div className=" min-h-screen">
  
    
      <div >
        {/* Sidebar */}
        <aside>
        
          <div className="mb-6">
            <h3 className="font-medium mb-2">Gender</h3>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Men
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Women
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Unisex
            </label>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Kids</h3>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Boys
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Girls
            </label>
          </div>

          <div>
            <h3 className="font-medium mb-2">Shop By Price</h3>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Under ₹ 2,500.00
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> ₹ 2,501.00 to ₹ 5,000.00
            </label>
          </div>
        </aside>

          {/* Products Grid */}
          <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(30)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg p-2">
                <Image
                  src={`/Frame (${index + 2}).png`}
                  alt={`Product ${index + 1}`}
                  width={348}
                  height={348}
                  className="w-full h-auto mx-auto"
                />
                <h3 className="mt-4 text-center text-gray-700 font-semibold"></h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
