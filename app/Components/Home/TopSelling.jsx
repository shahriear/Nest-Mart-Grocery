'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { getAllProducts } from '@/app/lib/getProducts';
import {
  filterTopSelling,
  filterTrending,
  filterRecentlyAdded,
  filterTopRated,
} from '@/app/lib/productFilters';

const ProductRow = ({ product }) => (
  <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <div className="w-16 h-16 flex-shrink-0 relative">
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        className="object-contain"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-gray-700 leading-tight">
        {product.title}
      </h3>
      <div className="flex items-center mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs ${
              i < Math.round(product.rating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
      </div>
      <div className="mt-1">
        <span className="text-green-600 font-semibold">${product.price}</span>
        {product.discountPercentage && (
          <span className="ml-2 line-through text-gray-400 text-sm">
            $
            {(
              product.price +
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default function TopSelling() {
  const [sections, setSections] = useState({});

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await getAllProducts();
      setSections({
        'Top Selling': filterTopSelling(allProducts),
        'Trending Products': filterTrending(allProducts),
        'Recently Added': filterRecentlyAdded(allProducts),
        'Top Rated': filterTopRated(allProducts),
      });
    }
    loadProducts();
  }, []);

  return (
    <section className="container flex  justify-center mx-auto py-10 gap-20 space-y-10">
      {Object.entries(sections).map(([sectionName, products]) => (
        <div key={sectionName}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-green-400 inline-block">
            {sectionName}
          </h2>
          <div className="flex flex-col gap-4">
            {products?.map(product => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
