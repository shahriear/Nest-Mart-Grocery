"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const menuItems = [
  "All",
  "Fragrances",
  "Groceries",
  "Beauty",
  "Furniture",
  "mens-shoes",
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
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.log("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category.includes(activeFilter.toLowerCase()));

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

      {/* Loading State */}
      {loading && <p className="text-center py-10">Loading products...</p>}

      {/* Product Grid */}
      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredProducts.slice(0, 12).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition relative border"
            >
              {/* Badge */}
              {product.brand && (
                <span
                  className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-md ${getBadgeColor(
                    "Sale"
                  )}`}
                >
                  {product.brand}
                </span>
              )}

              {/* Product Image */}
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={120}
                height={120}
                className="mx-auto mb-3 object-contain"
              />

              {/* Product Name */}
              <h3 className="font-semibold text-sm line-clamp-2">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Price */}
              <div className="mt-1">
                <span className="text-green-600 font-bold">
                  ${product.price}
                </span>
                {product.discountPercentage && (
                  <span className="ml-2 text-gray-400 line-through">
                    ${(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}
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
      )}
    </section>
  );
};

export default PopularProduct;
