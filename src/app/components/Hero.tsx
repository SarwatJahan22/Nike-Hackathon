import React from "react";
import Image from "next/image";
import { IoChevronForwardOutline, IoArrowBack } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-white text-black w-full mx-auto">
      {/* Header Section */}
      <div className="h-[58px] flex flex-col justify-center items-center bg-gray-200">
        <h1 className="font-bold text-lg md:text-2xl">Hello Nike App</h1>
        <div className="flex justify-center text-sm md:text-base font-normal">
          <p>Download the app to access everything Nike. </p>
          <p className="underline pl-1">Get your Great</p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center py-8">
        <Image
          src="/Image.png"
          alt="Nike"
          width={1344}
          height={700}
          className="w-full h-auto"
        />
      </div>

      {/* Intro Section */}
      <div className="text-center py-8">
        <h4 className="font-medium text-sm md:text-lg leading-[24px]">
          First Look
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium">
          NIKE AIR MAX PULSE
        </h2>
        <p className="text-sm md:text-base mt-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past limits and help you go to max.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-black rounded-full px-4 py-2 text-white text-sm">
            Notify Me
          </button>
          <button className="bg-black rounded-full px-4 py-2 text-white text-sm">
            Shop Air Max
          </button>
        </div>
      </div>

           {/* Best of Air Max Section */}
           <div className="py-8 px-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg">Best of Air Max</h3>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Shop</p>
            <div className="flex items-center gap-1">
              <button className="rounded-full bg-gray-100 w-[24px] h-[24px] flex items-center justify-center">
                <IoArrowBack />
              </button>
              <button className="rounded-full bg-gray-100 w-[24px] h-[24px] flex items-center justify-center">
                <IoChevronForwardOutline />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <Image
              src="/Image (1).png"
              alt="Nike Women  Shoes"
              width={441}
              height={441}
              className="mx-auto"
            />
            <p className="mt-2 text-sm font-medium">
              Nike Air Max Pulse <br /> Women&apos; Shoes - ₹13.995
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/Image (1).png"
              alt="Nike Men Shoes"
              width={441}
              height={441}
              className="mx-auto"
            />
            <p className="mt-2 text-sm font-medium">
              Nike Air Max Pulse <br /> Men&apos;s Shoes - ₹13.995
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/Image (2).png"
              alt="Nike Men's Air Max 97"
              width={441}
              height={441}
              className="mx-auto"
            />
            <p className="mt-2 text-sm font-medium">
              Nike Air Max 97 SE <br /> Men&apos;s Shoes - ₹16.995
            </p>
          </div>
        </div>
      </div>
      {/* Featured Section */}
      <div className="w-full bg-gray-50 py-8 px-4">
        
        <p className="font-semibold py-2 text-[23px]">Featured</p>
        
        <div className="flex justify-center">
          <Image
            src="/Image (3).png"
            alt="Nike Comfort Shoes"
            width={1344}
            height={700}
            className="w-full h-auto mx-auto"
          />
        </div>
        <div className="text-center mb-6">
          <h3 className="text-4xl font-medium py-6">STEP INTO WHAT FEELS GOOD</h3>
          <p className="mt-2 text-sm md:text-base">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <button className="bg-black rounded-full px-6 py-2 text-white mt-4">
            Find Your Shoe
          </button>
        </div>
      </div>



      {/* Gear Up Section */}
      <div className="py-8 px-4">
        <h4 className="text-lg font-medium mb-4">Gear Up</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 6, 7, 8].map((num) => (
            <Image
              key={num}
              src={`/Frame (${num}).png`}
              alt="Gear Up"
              width={300}
              height={393}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="py-8 px-4">
        <h3 className="font-semibold py-4 text-[22px]">Don&apos;t Miss</h3>
        <div className="text-center">
          <Image
            src="/Image (5).png"
            alt="Don't Miss"
            width={1344}
            height={700}
            className="w-full h-auto mx-auto"
          />
          <h3 className="text-4xl font-medium py-4">FLIGHT ESSENTIALS</h3>
          <p className="text-sm md:text-base">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="bg-black rounded-full px-4 py-2 text-white mt-4">
            Shop
          </button>
        </div>
      </div>

      {/* Essentials Section */}
      <div className="py-8 px-4">
        <h4 className="text-lg font-medium mb-4">The Essentials</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[6, 7, 8].map((num) => (
            <Image
              key={num}
              src={`/Image (${num}).png`}
              alt="Essential Item"
              width={440}
              height={540}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 py-10 px-6 text-sm text-gray-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Icons", "Shoes", "Clothing", "Kid's"].map((category, index) => (
            <ul key={index}>
              <h3 className="font-semibold text-black">{category}</h3>
              {["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"].map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
