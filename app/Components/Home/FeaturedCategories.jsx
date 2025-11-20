'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { getAllProducts } from '@/app/lib/getProducts';

const menuItems = ['All', 'groceries', 'laptops', 'fragrances', 'mens-shoes'];

const FeaturedCategories = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeMenu, setActiveMenu] = useState('All');
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null); 

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const handleMenuClick = menu => {
    setActiveMenu(menu);
    if (menu === 'All') setFilteredProducts(products);
    else setFilteredProducts(products.filter(p => p.category === menu));
  };

  
  const slideLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  if (loading) return <p className="text-center py-10">Loading products....</p>;

  return (
    <section className="py-8 container mx-auto">
      {/* Heading + Menu */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-10">
          <h2 className="text-2xl font-bold">Featured Categories</h2>

          <div className="flex gap-5 text-gray-600 cursor-pointer flex-wrap">
            {menuItems.map((item, i) => (
              <span
                key={i}
                className={`font-medium text-[16px] transition ${
                  activeMenu === item
                    ? 'text-green-600 underline'
                    : 'hover:text-green-500'
                }`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <FaArrowLeftLong
            onClick={slideLeft}
            className="text-3xl text-gray-500 bg-gray-200 hover:bg-green-500 hover:text-white p-2 rounded-xl cursor-pointer"
          />
          <FaArrowRightLong
            onClick={slideRight}
            className="text-3xl text-gray-500 bg-gray-200 hover:bg-green-500 hover:text-white p-2 rounded-xl cursor-pointer"
          />
        </div>
      </div>

      {/* Products Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto py-2 scrollbar-hide"
      >
        {filteredProducts.map((prod, i) => (
          <div
            key={i}
            className="min-w-[150px] rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer bg-gray-50"
          >
            <Image
              src={prod.thumbnail}
              alt={prod.title}
              width={80}
              height={80}
              className="mb-3"
            />
            <h3 className="font-semibold text-sm text-center">{prod.title}</h3>
            <p className="text-xs text-gray-500 mt-1">${prod.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
