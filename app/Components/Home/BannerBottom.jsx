import Image from 'next/image';
import React from 'react'

const BannerBottom = () => {
  return (
    <section className="w-full mt-10">
      <div className="container mx-auto bg-[#EAF7E9] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Stay home & get your daily <br /> needs from our shop
          </h2>

          <p className="text-gray-500 mt-2">
            Start Your Daily Shopping with{' '}
            <span className="text-green-600 font-semibold">Nest Mart</span>
          </p>

          {/* Input + Button */}
          <div className="mt-6 flex items-center bg-white rounded-full shadow w-full max-w-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 outline-none text-sm"
            />
            <button className="bg-green-600 text-white px-6 py-3 text-sm font-semibold hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/images/bottom-banner-9.png"
            alt="Delivery Man"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
export default BannerBottom