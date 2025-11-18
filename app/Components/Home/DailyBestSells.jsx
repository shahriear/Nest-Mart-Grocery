"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Blue Diamond Almonds Lightly Salted",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 15%",
    img: "/images/product-2-1.jpg",
  },
  {
    id: 2,
    name: "Seeds of Change Organic Quinoa, Brown",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 15%",
    img: "/images/product-3-1.jpg",
  },
  {
    id: 3,
    name: "All Natural Italian-Style Chicken Meatballs",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 35%",
    img: "/images/product-6-1.jpg",
  },
  {
    id: 4,
    name: "Angie's Boomchickapop Sweet and Womnies",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Sale",
    img: "/images/product-2-1.jpg",
  },
];
const getBadgeColor = (badge) => {
  switch (badge) {
    case "Save 15%":
      return "bg-pink-500 text-white";
    case "Save 35%":
      return "bg-green-500 text-white";
    case "Sale":
      return "bg-blue-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const DailyBestSells = () => {
  return (
    <section className="py-12 container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Daily Best Sells</h2>
        <div className="flex gap-4 text-gray-600 text-sm">
          <span className="cursor-pointer hover:text-green-600">Featured</span>
          <span className="cursor-pointer hover:text-green-600">Popular</span>
          <span className="cursor-pointer hover:text-green-600">New added</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition relative border"
          >
            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-md ${getBadgeColor(
                  product.badge
                )}`}
              >
                {product.badge}
              </span>
            )}

            {/* Product Image */}
            <Image
              src={product.img}
              alt={product.name}
              width={150}
              height={150}
              className="mx-auto mb-3 object-contain"
            />

            {/* Product Name */}
            <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>

            {/* Price */}
            <div className="mt-1">
              <span className="text-green-600 font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="ml-2 text-gray-400 line-through">${product.oldPrice}</span>
              )}
            </div>

            {/* Sold Progress */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${(parseInt(product.sold.split("/")[0]) / parseInt(product.sold.split("/")[1])) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs mt-1">{`Sold: ${product.sold}`}</p>

            {/* Add to Cart */}
            <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              <FiShoppingCart />
              Add to Cart
            </button>
            <div className="test"></div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default DailyBestSells;
