"use client";
import React from "react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const categories = [
  {
    name: "Cake & Milk",
    items: "26 items",
    img: "/images/cat-12.png",
    color: "bg-red-50",
  },
  {
    name: "Organic Kiwi",
    items: "28 items",
    img: "/images/cat-12.png",
    color: "bg-green-50",
  },
  {
    name: "Peach",
    items: "54 items",
    img: "/images/cat-12.png",
    color: "bg-yellow-50",
  },
  {
    name: "Red Apple",
    items: "56 items",
    img: "/images/cat-12.png",
    color: "bg-pink-50",
  },
  {
    name: "Snack",
    items: "56 items",
    img: "/images/cat-12.png",
    color: "bg-orange-50",
  },
  {
    name: "Vegetables",
    items: "72 items",
    img: "/images/cat-12.png",
    color: "bg-green-100",
  },
  {
    name: "Strawberry",
    items: "26 items",
    img: "/images/cat-12.png",
    color: "bg-red-100",
  },
  {
    name: "Black Plum",
    items: "12 items",
    img: "/images/cat-12.png",
    color: "bg-purple-100",
  },
  {
    name: "Custard Apple",
    items: "34 items",
    img: "/images/cat-12.png",
    color: "bg-teal-100",
  },
  {
    name: "Coffe & Tea",
    items: "89 items",
    img: "/images/cat-12.png",
    color: "bg-yellow-100",
  },
];
const menuItems = ["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"];

const FeaturedCategories = () => {
  return (
    <section className="py-8 container mx-auto">
      {/* Heading + Right Filter Menu */}
      <div className="flex items-center justify-between mb-5">
        {/* Left: Title + Menu */}
        <div className="flex items-center gap-15">
          <h2 className="text-2xl font-bold">Featured Categories</h2>

          {/* Menu Items */}
          <div className="flex gap-7 text-gray-600 cursor-pointer flex-wrap">
            {menuItems.map((item, i) => (
              <span
                key={i}
                className="hover:text-green-600 transition font-medium text-[16px] "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Arrows */}
        <div className="flex gap-3">
          <FaArrowLeftLong className="text-3xl text-gray-500 bg-gray-200 hover:bg-green-500 hover:text-white p-2 rounded-xl cursor-pointer" />
          <FaArrowRightLong className="text-3xl text-gray-500 bg-gray-200 hover:bg-green-500 hover:text-white p-2 rounded-xl cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer ${cat.color}`}
          >
            <Image
              src={cat.img}
              alt={cat.name}
              width={60}
              height={60}
              className="mb-3"
            />
            <h3 className="font-semibold text-sm">{cat.name}</h3>
            <p className="text-xs text-gray-500">{cat.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
