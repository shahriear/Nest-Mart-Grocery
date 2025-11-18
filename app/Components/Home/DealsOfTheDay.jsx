
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const deals = [
  {
    id: 1,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "NestFood",
    price: 32.85,
    oldPrice: 33.8,
    rating: 4,
    img: "/images/banner-5.png",
    time: { days: 0, hours: 0, mins: 0, secs: 0 },
  },
  {
    id: 2,
    title: "Perdue Simply Smart Organics Gluten Free",
    brand: "Old El Paso",
    price: 24.85,
    oldPrice: 26.8,
    rating: 4,
    img: "/images/banner-6.png",
    time: { days: 157, hours: 9, mins: 42, secs: 33 },
  },
  {
    id: 3,
    title: "Signature Wood-Fired Mushroom and Caramelized",
    brand: "Progresso",
    price: 12.85,
    oldPrice: 13.8,
    rating: 3,
    img: "/images/banner-7.png",
    time: { days: 491, hours: 9, mins: 42, secs: 33 },
  },
  {
    id: 4,
    title: "Simply Lemonade with Raspberry Juice",
    brand: "Yoplait",
    price: 15.85,
    oldPrice: 16.8,
    rating: 3,
    img: "/images/banner-8.png",
    time: { days: 0, hours: 0, mins: 0, secs: 0 },
  },
];

// Countdown UI box
const TimeBox = ({ value, label }) => (
  <div className="bg-white/90 rounded-md p-3 shadow text-center min-w-[70px]">
    <p className="text-lg font-semibold">{value.toString().padStart(2, "0")}</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);


const DealsOfTheDay = () => {
  return (
    <section className="container mx-auto py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Deals Of The Day</h2>
        <button className="text-green-600 hover:text-green-800 transition">
          All Deals →
        </button>
      </div>

      {/* Deals Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />

              {/* Countdown */}
              <div className="absolute top-3 left-3 flex gap-2">
                <TimeBox value={item.time.days} label="Days" />
                <TimeBox value={item.time.hours} label="Hours" />
                <TimeBox value={item.time.mins} label="Mins" />
                <TimeBox value={item.time.secs} label="Sec" />
              </div>
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-700 text-sm leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">By {item.brand}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-sm ${
                      index < item.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">
                  ({item.rating}.0)
                </span>
              </div>

              {/* Price */}
              <div className="mt-2">
                <span className="text-green-600 font-semibold text-lg">
                  ${item.price}
                </span>
                <span className="ml-2 line-through text-gray-400 text-sm">
                  ${item.oldPrice}
                </span>
              </div>

              {/* Add Button */}
              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition">
                <FiShoppingCart />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DealsOfTheDay;
