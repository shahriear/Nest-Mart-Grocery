'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function ProductCompare() {
  const products = [
    {
      img: '/images/compare-1.png',
      name: "J.Crew Mercantile Women's Short",
      price: 12.0,
      rating: 121,
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      stock: 'In Stock',
      weight: '320 gram',
      dimensions: 'N/A',
    },
    {
      img: '/images/compare-2.png',
      name: "Amazon Essentials Women's Tanks",
      price: 14.0,
      rating: 25,
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
      stock: 'Out of stock',
      weight: '370 gram',
      dimensions: 'N/A',
    },
    {
      img: '/images/compare-3.png',
      name: 'Amazon Brand - Daily Ritual Wom',
      price: 15.0,
      rating: 125,
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
      stock: 'In Stock',
      weight: '380 gram',
      dimensions: 'N/A',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2">Products Compare</h2>
      <p className="text-gray-600 mb-6">
        There are <span className="font-semibold">{products.length}</span>{' '}
        products to compare
      </p>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse text-center">
          <tbody>
            {/* Row: Preview */}
            <tr className="border-b bg-white">
              <td className="font-semibold py-4">Preview</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4">
                  <div className="mx-auto w-40 h-40 relative">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </td>
              ))}
            </tr>

            {/* Row: Name */}
            <tr className="border-b bg-gray-50">
              <td className="font-semibold py-4">Name</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4 text-green-600 font-semibold">
                  {p.name}
                </td>
              ))}
            </tr>

            {/* Row: Price */}
            <tr className="border-b bg-white">
              <td className="font-semibold py-4">Price</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4 text-green-600 font-bold">
                  ${p.price.toFixed(2)}
                </td>
              ))}
            </tr>

            {/* Row: Rating */}
            <tr className="border-b bg-gray-50">
              <td className="font-semibold py-4">Rating</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4 flex justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-500">({p.rating})</span>
                </td>
              ))}
            </tr>

            {/* Row: Description */}
            <tr className="border-b bg-white">
              <td className="font-semibold py-4">Description</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4 text-gray-600 text-sm px-4">
                  {p.desc}
                </td>
              ))}
            </tr>

            {/* Row: Stock */}
            <tr className="border-b bg-gray-50">
              <td className="font-semibold py-4">Stock Status</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      p.stock === 'In Stock'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {p.stock}
                  </span>
                </td>
              ))}
            </tr>

            {/* Row: Weight */}
            <tr className="border-b bg-white">
              <td className="font-semibold py-4">Weight</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4">
                  {p.weight}
                </td>
              ))}
            </tr>

            {/* Row: Dimensions */}
            <tr className="border-b bg-gray-50">
              <td className="font-semibold py-4">Dimensions</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4">
                  {p.dimensions}
                </td>
              ))}
            </tr>

            {/* Row: Buy Now */}
            <tr className="border-b bg-white">
              <td className="font-semibold py-4">Buy Now</td>
              {products.map((p, idx) => (
                <td key={idx} className="py-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 duration-200">
                    Add to cart
                  </button>
                </td>
              ))}
            </tr>

            {/* Row: Remove */}
            <tr className="bg-gray-50">
              <td className="font-semibold py-4"> </td>
              {products.map((_, idx) => (
                <td
                  key={idx}
                  className="py-4 text-gray-500 cursor-pointer hover:text-red-600"
                >
                  Remove
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
