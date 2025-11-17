'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: '/images/slider-1.png',
      title: ['Do not miss amazing', 'grocery deals'],
      subtitle: 'Sign up for daily newsletter',
    },
    {
      id: 2,
      img: '/images/slider-2.png',
      title: ['Fresh Vegetables', 'Big Discount'],
      subtitle: 'Save up to 50% off on your first order',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % slides.length);
  };

  const handleSubscribe = () => {
    console.log('Subscribed email:', email);
    setEmail(''); // clear after subscribe (optional)
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-4xl container mx-auto my-10 group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title.join(' ')}
            fill
            className="object-cover"
          />

          {/* Text Section */}
          <div className="absolute top-1/2 -translate-y-1/2 left-5 md:left-16 lg:left-24 text-black drop-shadow-lg flex flex-col justify-between h-[300px] md:h-[320px]">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight text-cyan-900 w-full md:w-[560px]">
                {slide.title.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-md sm:text-lg md:text-xl font-medium text-gray-500 mb-4">
                {slide.subtitle}
              </p>
            </div>

            {/* Email input + Subscribe button */}
            <div className="flex flex-col sm:flex-row w-full md:w-[460px] gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-l-full rounded-r-full sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-amber-50 w-full"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-emerald-400 text-white font-medium rounded-r-full sm:rounded-l-none hover:bg-emerald-500 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-300 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <BiLeftArrow className="text-2xl text-gray-500" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-300 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <BiRightArrow className="text-2xl text-gray-500" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
              current === index ? 'bg-emerald-400 scale-125' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
