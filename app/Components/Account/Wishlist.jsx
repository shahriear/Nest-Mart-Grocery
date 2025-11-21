'use client';
import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

// Dummy API endpoints (replace with your actual API)
const WISHLIST_API = '/api/wishlist';
const CART_API = '/api/cart';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishlist from API
  const fetchWishlist = async () => {
    setLoading(true);
    try {
      const res = await fetch(WISHLIST_API);
      const data = await res.json();
      setWishlist(data);
    } catch (err) {
      toast.error('Failed to fetch wishlist');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  // Add item to cart
  const addToCart = async item => {
    try {
      const res = await fetch(CART_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (res.ok) {
        toast.success(`${item.name} added to cart!`);
      } else {
        toast.error('Failed to add to cart');
      }
    } catch (err) {
      toast.error('Network error');
      console.error(err);
    }
  };

  // Remove item from wishlist
  const removeItem = async id => {
    try {
      const res = await fetch(`${WISHLIST_API}/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setWishlist(prev => prev.filter(item => item.id !== id));
        toast.success('Item removed from wishlist');
      } else {
        toast.error('Failed to remove item');
      }
    } catch (err) {
      toast.error('Network error');
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-gray-200 min-h-scree">
      <Toaster position="bottom-center" />
      <h1 className="text-2xl font-bold mb-2">Your Wishlist</h1>
      <p className="text-gray-500 mb-6">
        There are {wishlist.length} products in this list
      </p>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-3 px-4">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Stock Status</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(item => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={item.image || '/images/default-product.png'}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-green-600 font-semibold">
                        {item.name}
                      </p>
                      <p className="text-yellow-400 text-sm">
                        ★ {item.rating || 4.0}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    ${item.price}
                  </td>
                  <td className="py-3 px-4">
                    {item.inStock ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                        In Stock
                      </span>
                    ) : (
                      <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-sm">
                        Out Stock
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {item.inStock ? (
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                        onClick={() => addToCart(item)}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <button className="bg-blue-900 text-white px-3 py-1 rounded">
                        Contact Us
                      </button>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => removeItem(item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
