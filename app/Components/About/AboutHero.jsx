'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutHero() {
  const sliderRef = useRef(null);

  const sliderImages = [
    '/images/about-4.png',
    '/images/about-2.png',
    '/images/about-4.png',
    '/images/about-3.png',
    '/images/about-4.png',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT SIDE IMAGE */}
      <div className="flex justify-center">
        <Image
          src="/images/about-1.png"
          width={500}
          height={500}
          alt="About"
          className="rounded-xl"
        />
      </div>

      {/* RIGHT SIDE TEXT + SLIDER */}
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
        <div className="relative w-full mt-6">
          <Slider ref={sliderRef} {...settings}>
            {sliderImages.map((img, i) => (
              <div key={i} className="px-2">
                <Image
                  src={img}
                  width={400}
                  height={300}
                  alt="Slider Image"
                  className="rounded-xl w-full object-cover"
                />
              </div>
            ))}
          </Slider>

          {/* CUSTOM LEFT BUTTON */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>

          {/* CUSTOM RIGHT BUTTON */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
