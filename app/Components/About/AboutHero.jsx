"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutHero() {
  const sliderImages = [
    "/images/about-4.png",
    "/images/about-2.png",
    "/images/about-4.png",
    "/images/about-3.png",
    "/images/about-4.png",
  ];

  const [index, setIndex] = useState(0);

  // Move to next slide
  const nextSlide = () => {
    setIndex((prev) =>
      prev + 1 >= sliderImages.length - 2 ? 0 : prev + 1
    );
  };

  // Move to previous slide
  const prevSlide = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? sliderImages.length - 3 : prev - 1
    );
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT STATIC IMAGE */}
      <div className="flex justify-center">
        <Image
          src="/images/about-1.png"
          width={500}
          height={500}
          alt="About"
          className="rounded-xl"
        />
      </div>

      {/* RIGHT TEXT + SLIDER */}
      <div>
        <h4 className="text-green-600 font-semibold mb-2">About Us</h4>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We do Creative <br /> Things for Success
        </h1>

        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed
          id elementum lectus adipiscing.
        </p>

        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* SLIDER */}
        <div className="relative w-full overflow-hidden mt-6">

          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
              width: `${(sliderImages.length / 3) * 100}%`,
            }}
          >
            {sliderImages.map((img, i) => (
              <div key={i} className="w-1/3 px-2">
                <Image
                  src={img}
                  width={400}
                  height={300}
                  alt="Slider Images"
                  className="rounded-xl w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
