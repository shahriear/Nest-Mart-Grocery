"use client";
import { useState } from "react";
import { X } from "lucide-react";

const CartDropdown = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Daisy Casual Bag",
      qty: 1,
      price: 800.0,
      img: "/images/products/bag.png", // replace with your image path
    },
    {
      id: 2,
      name: "Corduroy Shirts",
      qty: 1,
      price: 3200.0,
      img: "/images/products/shirt.png", // replace with your image path
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4">
      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="text-gray-700">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.qty} × ${item.price.toLocaleString()}</p>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)}>
              <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between mt-4 font-semibold text-gray-700">
        <span>Total</span>
        <span className="text-green-600">${total.toLocaleString()}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 border border-green-600 text-green-600 py-2 rounded hover:bg-green-50 transition">
          View Cart
        </button>
        <button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;  