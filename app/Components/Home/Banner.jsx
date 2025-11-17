import React from 'react';
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Banner = () => {
    const slides = [
{ id: 1, img: "/images/slider1.jpg", title: "Fresh & Organic Groceries", subtitle: "Delivered to your doorstep" },
{ id: 2, img: "/images/slider2.jpg", title: "Big Discounts", subtitle: "Save more on daily essentials" },
{ id: 3, img: "/images/slider3.jpg", title: "Fast Delivery", subtitle: "Get items within hours" },
];


const [current, setCurrent] = useState(0);


useEffect(() => {
const timer = setInterval(() => {
setCurrent((prev) => (prev + 1) % slides.length);
}, 4000);
return () => clearInterval(timer);
}, []);
  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-2xl">
{/* Slides */}
{slides.map((slide, index) => (
<div
key={slide.id}
className={`absolute inset-0 transition-opacity duration-700 ${
index === current ? "opacity-100" : "opacity-0"
}`}
>
<Image
src={slide.img}
alt={slide.title}
fill
className="object-cover"
/>


{/* Text */}
<div className="absolute top-1/2 -translate-y-1/2 left-10 text-white drop-shadow-lg">
<h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
<p className="text-lg">{slide.subtitle}</p>
</div>
</div>
))}


{/* Dots */}
<div className="absolute bottom-5 w-full flex justify-center gap-3">
{slides.map((_, index) => (
<div
key={index}
onClick={() => setCurrent(index)}
className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
current === index ? "bg-white scale-125" : "bg-gray-400"
}`}
></div>
))}
</div>
</div>
  );
}

export default Banner;
