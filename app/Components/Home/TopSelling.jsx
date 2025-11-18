"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const productsData = {
  "Top Selling": [
    {
      id: 1,
      img: "/images/carrot.png",
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 2,
      img: "/images/bell-pepper.png",
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 3,
      img: "/images/juice.png",
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
  ],
  "Trending Products": [
    {
      id: 4,
      img: "/images/banana.png",
      title: "Organic Cage-Free Grade A Large Brown Eggs",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 5,
      img: "/images/watermelon.png",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 6,
      img: "/images/durian.png",
      title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
  ],
  "Recently Added": [
    {
      id: 7,
      img: "/images/mango.png",
      title: "Pepperidge Farm Farmhouse Hearty White Bread",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 8,
      img: "/images/frozen-fruits.png",
      title: "Organic Frozen Triple Berry Blend",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 9,
      img: "/images/corn.png",
      title: "Oroweat Country Buttermilk Bread",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
  ],
  "Top Rated": [
    {
      id: 10,
      img: "/images/pomegranate.png",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 11,
      img: "/images/avocado.png",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
    {
      id: 12,
      img: "/images/orange.png",
      title: "All Natural Italian-Style Chicken Meatballs",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4,
    },
  ],
};

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow p-4 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-full h-24 relative">
      <Image
        src={product.img}
        alt={product.title}
        fill
        className="object-contain"
      />
    </div>
    <h3 className="mt-2 text-sm font-semibold text-gray-700">{product.title}</h3>
    <div className="flex items-center mt-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          className={`text-xs ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">({product.rating}.0)</span>
    </div>
    <div className="mt-1">
      <span className="text-green-600 font-semibold">${product.price}</span>
      <span className="ml-2 line-through text-gray-400 text-sm">${product.oldPrice}</span>
    </div>
  </div>
);

const TopSelling = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(productsData).map(([section, products]) => (
          <div key={section}>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-green-400 inline-block">
              {section}
            </h2>
            <div className="flex flex-col gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSelling;
