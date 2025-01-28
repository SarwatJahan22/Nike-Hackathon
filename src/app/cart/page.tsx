import React from "react";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-2/3 pr-6 space-y-6">
          {/* How to Get Your Order Section */}
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              How to Get Your Order
            </h2>
            <p>
              Customs regulation for India require a copy of the recipient&apos;s
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
            </p>
            <span className="underline">Learn More</span>
          </div>

          {/* Enter Your Name and Address Form */}
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Enter your name and address
            </h2>
            <form className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              {/* Add remaining form fields similarly */}
              <div className="mt-4">
                <button className="border p-2 w-full bg-white text-gray-600 rounded">
                  Continue
                </button>
                <p className="text-black font-semibold">Delivery</p>
                <p className="text-gray-600">Shipping</p>
                <p className="text-gray-600">Billing</p>
                <p className="text-gray-600">Payment</p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full lg:w-1/3 p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <p className="text-slate-600">Subtotal: ₹ 20,890.00</p>
          <p className="text-slate-600">Delivery/Shipping: Free</p>
          <p className="font-bold">Total: ₹ 20,890.00</p>
          <p>
            (The total reflects the price of your order, including all duties
            and taxes)
          </p>
          <p>Estimated delivery date: Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          <div className="flex flex-col space-y-4 mt-4">
            <Image
              src="/Auto Layout Horizontal.png"
              alt="men"
              width={320}
              height={208}
            />
            <Image src="/shoes.png" alt="shoes" width={320} height={208} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center w-full py-4 mt-8">
        <p className="text-sm">India 2023. Nikes, Inc. All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-sm hover:underline">
            Terms of Use
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Sales
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
