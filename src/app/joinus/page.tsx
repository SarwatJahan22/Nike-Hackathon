import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JoinUs = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <Image
              src="/Vector (1).png"
              alt="Nike Logo"
              width={54}
              height={54}
              className="w-16 h-16"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">Become a Nike Member</h1>
          <p className="text-gray-600 text-sm mt-2">
            Create your Nike Member profile and get access to the very best of <br />
            Nike products, inspiration, and community.
          </p>
        </div>

        {/* Form */}
        <form action="#" method="POST" className="space-y-4">
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-gray-700 text-sm font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first_name"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-gray-700 text-sm font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last_name"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-gray-700 text-sm font-semibold">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-gray-700 text-sm font-semibold">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          {/* Gender */}
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                className="text-black focus:ring-2 focus:ring-black"
              />
              <label htmlFor="male" className="ml-2 text-gray-700 text-sm">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                className="text-black focus:ring-2 focus:ring-black"
              />
              <label htmlFor="female" className="ml-2 text-gray-700 text-sm">
                Female
              </label>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className="text-black focus:ring-2 focus:ring-black"
            />
            <label htmlFor="newsletter" className="ml-2 text-gray-700 text-sm">
              Sign up for emails
            </label>
          </div>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-600 mt-4">
            By creating an account, you agree to Nike&apos;s{' '}
            <Link href="#" className="text-blue-500 underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-blue-500 underline">
              Terms of Use
            </Link>
            .
          </p>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Join Us
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already a Member?{' '}
          <Link href="#" className="text-blue-500 underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
