import React from 'react';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main Content */}
      <main className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Bag</h1>
          <p className="text-gray-500">
            Free Delivery on orders of ₹14,000.00 or more. 
            <a href="#" className="text-blue-500">View details</a>
          </p>
        </div>

        <div className="space-y-4">
          {/* Cart Item 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/Frame.png" alt="Nike Dri-FIT ADV TechKnit Ultra" width={208} height={208}  className="h-16 w-16" />
              <div>
                <h2 className="text-lg font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h2>
                <p className="text-gray-500">Men&apos;s Short-Sleeve Running Top</p>
                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-gray-500">Size L</p>
                <p className="text-gray-500">Quantity 1</p>
              </div>
            </div>
            <p className="text-lg font-semibold">₹ 3,895.00</p>
          </div>

          {/* Cart Item 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/shoe.png" alt="Nike Air Max 97 SE" width={208} height={208} className="h-16 w-16" />
              <div>
                <h2 className="text-lg font-semibold">Nike Air Max 97 SE</h2>
                <p className="text-gray-500">Men&apos;s Shoes</p>
                <p className="text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-gray-500">Size 8</p>
                <p className="text-gray-500">Quantity 1</p>
              </div>
            </div>
            <p className="text-lg font-semibold">₹ 16,995.00</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Summary</h2>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-lg font-semibold">₹ 20,890.00</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-500">Estimated Delivery & Handling</p>
            <p className="text-lg font-semibold">FREE</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Checkout</button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
