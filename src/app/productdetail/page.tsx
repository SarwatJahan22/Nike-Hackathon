import React from 'react'
import Image from 'next/image'

const ProductDetail = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Product Image Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Image src="/Rectangle (2).png" alt="Product Image" width={653} height={653} className="w-full rounded-lg"/>
          </div>

          {/* Product Details Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Nike Air Force 1 PLT.AF.ORM</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside-out&quot;-inspired construction,
              including unique layering and exposed foam accents, puts a new edge on this timeless Jordan Brand silhouette.
              Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture
              of materials, and aged midsole aesthetic give this release an artisan finish.
            </p>

            {/* Price */}
            <div className="mt-6">
              <span className="text-2xl font-bold text-gray-800">₹8,695.00</span>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail
