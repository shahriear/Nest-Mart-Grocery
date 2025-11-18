"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const menuItems = [
  "All",
  "Milks & Dairies",
  "Coffes & Teas",
  "Pet Foods",
  "Meats",
  "Vegetables",
  "Fruits",
];

const products = [
  {
    id: 1,
    name: "Fresh Cow Milk",
    price: 4.5,
    oldPrice: 6.0,
    category: "Milks & Dairies",
    img: "/images/product-2-1.jpg",
    rating: 4,
    badge: "Hot",
  },
  {
    id: 2,
    name: "Organic Tea Pack",
    price: 6.2,
    oldPrice: 8.5,
    category: "Coffes & Teas",
    img: "/images/product-3-1.jpg",
    rating: 5,
    badge: "New",
  },
  {
    id: 3,
    name: "Dry Cat Food",
    price: 8.9,
    oldPrice: 11.5,
    category: "Pet Foods",
    img: "/images/product-6-1.jpg",
    rating: 4,
    badge: "Sale",
  },
  {
    id: 4,
    name: "Fresh Meat Pack",
    price: 12.3,
    category: "Meats",
    img: "/images/product-3-1.jpg",
    rating: 5,
    badge: "-20%",
  },
  {
    id: 5,
    name: "Vegetable Mixed",
    price: 3.8,
    category: "Vegetables",
    img: "/images/product-6-1.jpg",
    rating: 3,
    badge: "Sale",
  },
  {
    id: 6,
    name: "Seasonal Fruits",
    price: 5.0,
    category: "Fruits",
    img: "/images/product-3-1.jpg",
    rating: 4,
    badge: "Hot",
  },
];

const getBadgeColor = (badge) => {
  switch (badge) {
    case "Hot":
      return "bg-red-500";
    case "New":
      return "bg-blue-500";
    case "Sale":
      return "bg-yellow-400 text-black";
    default:
      return "bg-green-600";
  }
};

const PopularProduct = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="py-12 container mx-auto">
      {/* Heading + Filter Menu */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Products</h2>

        <div className="flex gap-7 text-gray-600 flex-wrap mt-4 md:mt-0">
          {menuItems.map((item) => (
            <span
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`cursor-pointer transition font-medium text-sm ${
                activeFilter === item
                  ? "text-green-600 border-b-2 border-green-600"
                  : "hover:text-green-600"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {filteredProducts.map((product) => (
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
              width={120}
              height={120}
              className="mx-auto mb-3 object-contain"
            />

            {/* Product Name */}
            <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Price */}
            <div className="mt-1">
              <span className="text-green-600 font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="ml-2 text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* Add to Cart */}
            <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              <FiShoppingCart />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
