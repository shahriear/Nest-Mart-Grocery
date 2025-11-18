import Image from "next/image";
import React from "react";

const AdsBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 container mx-auto">

      {/* Banner 1 */}
      <div className="relative rounded-2xl overflow-hidden  h-48 md:h-56">
        <Image
          src="/images/banner-1.png"
          alt="Banner"
          fill
          className="object-cover"
        />

        <div className="absolute top-0 left-0 p-6">
          <h2 className="text-[#253D4E] text-xl font-bold leading-snug drop-shadow-lg">
            Everyday Fresh & Clean <br /> with Our Products
          </h2>
          <button className="mt-10 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="relative rounded-2xl overflow-hidden h-48 md:h-56">
        <Image
          src="/images/banner-2.png"
          alt="Banner"
          fill
          className="object-cover"
        />

        <div className="absolute top-0 left-0 p-6">
          <h2 className="text-[#253D4E] text-xl font-bold leading-snug drop-shadow-lg">
            Make your Breakfast <br /> Healthy and Easy
          </h2>
          <button className="mt-10 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Banner 3 */}
      <div className="relative rounded-2xl overflow-hidden h-48 md:h-56">
        <Image
          src="/images/banner-3.png"
          alt="Banner"
          fill
          className="object-cover"
        />

        <div className="absolute top-0 left-0 p-6">
          <h2 className="text-[#253D4E] text-xl font-bold leading-snug drop-shadow-lg">
            The best Organic <br /> Products Online
          </h2>
          <button className="mt-10 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default AdsBanner;
