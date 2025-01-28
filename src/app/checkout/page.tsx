import React from "react";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-2/3 space-y-6">
          {/* How to Get Your Order */}
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              How would you like to get your order?
            </h2>
            <p>
              Customs regulation for India require a copy of the recipient&apos;
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
              <div className="space-y-1">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="address1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="space-y-1">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="locality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Locality
                </label>
                <input
                  type="text"
                  id="locality"
                  name="locality"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State/Territory
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  What’s your contact information?
                </h2>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">What’s your PAN?</h2>
                <div>
                  <label htmlFor="pan" className="block text-sm font-medium">
                    PAN
                  </label>
                  <input
                    type="text"
                    id="pan"
                    name="pan"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="save-pan"
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Save PAN details to Nike Profile
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="consent" className="rounded" />
                  <span className="text-sm text-gray-700">
                    I have read and consent to eShopWorld processing my
                    information in accordance with the Privacy Statement and
                    Cookie Policy.
                  </span>
                </label>
              </div>
              </div>
            
              {/* Add remaining fields as per your original form */}
              <div className="mt-4">
                <button className="border p-2 w-full bg-white text-gray-600 rounded">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full lg:w-1/3 p-8 shadow-lg flex flex-col space-y-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <p className="text-slate-600">Subtotal: ₹ 20,890.00</p>
          <p className="text-slate-600">Delivery/Shipping: Free</p>
          <p className="font-bold">Total: ₹ 20,890.00</p>
          <p>
            (The total reflects the price of your order, including all duties
            and taxes)
          </p>
          <p>Estimated delivery date: Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          <div className="flex flex-col space-y-4">
            <Image
              src="/Auto Layout Horizontal.png"
              alt="men"
              width={320}
              height={208}
              className="rounded"
            />
            <Image
              src="/shoes.png"
              alt="shoes"
              width={320}
              height={208}
              className="rounded"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
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
