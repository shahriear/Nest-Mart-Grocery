"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

const DailyBestSellsWithBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 3; // ekshathe kotogulo product dakhabe

  const nextProduct = () => {
    if (currentIndex < products.length - visibleProducts) {
      setCurrentIndex(currentIndex + 1); 
    }
  };

  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-12 container mx-auto">
      <div className="flex gap-6">
        {/* Left: Ads Banner */}
        <div className="w-1/3">
          <Image
            src="/images/product-2-1.jpg"
            alt="Ads Banner"
            width={400}
            height={600}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Right: Products Carousel */}
        <div className="w-2/3 relative">
          {/* Carousel Arrows */}
          <button
            onClick={prevProduct}
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextProduct}
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <FiChevronRight />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-3 gap-6">
            {products
              .slice(currentIndex, currentIndex + visibleProducts)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition relative border"
                >
                  {product.badge && (
                    <span
                      className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-md ${getBadgeColor(
                        product.badge
                      )}`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <Image
                    src={product.img}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="mx-auto mb-3 object-contain"
                  />

                  <h3 className="font-semibold text-sm line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-1">
                    <span className="text-green-600 font-bold">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="ml-2 text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{
                        width: `${
                          (parseInt(product.sold.split("/")[0]) /
                            parseInt(product.sold.split("/")[1])) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1">{`Sold: ${product.sold}`}</p>

                  <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    <FiShoppingCart />
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBestSellsWithBanner;
