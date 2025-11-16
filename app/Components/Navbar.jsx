import React from 'react';
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full shadow bg-white container mx-auto">
{/* Top Section */}
<div className="flex justify-between items-center px-10 py-4">
{/* Logo */}
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-green-600 rounded-xl"></div>
<div className="flex flex-col leading-tight">
<span className="font-bold text-xl">SWOO</span>
<span className="text-xs text-gray-500 -mt-1">TECH MART</span>
</div>
</div>


{/* Menu */}
<div className="flex gap-10 text-sm font-medium">
<button>HOMES</button>
<button>PAGES</button>
<button>PRODUCTS</button>
<button>CONTACT</button>
</div>


{/* Right Icons */}
<div className="flex items-center gap-6 text-sm">
<Heart className="w-5 h-5 text-gray-700" />
<div className="flex flex-col text-xs text-gray-600 leading-tight">
<span>WELCOME</span>
<span className="font-semibold text-black">LOG IN / REGISTER</span>
</div>
<div className="flex items-center gap-2 font-medium">
<ShoppingCart className="w-5 h-5" />
<span>$1,689.00</span>
<span className="w-5 h-5 text-xs bg-green-500 text-white flex justify-center items-center rounded-full">5</span>
</div>
</div>
</div>


{/* Green Search Bar Section */}
<div className="bg-green-600 w-full py-4 px-10 rounded-b-2xl text-white flex items-center justify-between">
{/* Search Bar */}
<div className="flex items-center bg-white text-black rounded-full px-4 py-2 w-1/2">
<select className="bg-transparent text-sm outline-none">
<option>All Categories</option>
</select>
<input
type="text"
placeholder="Search anything..."
className="flex-1 px-3 text-sm outline-none"
/>
<Search className="w-5 h-5" />
</div>


{/* Right Text */}
<div className="flex gap-10 text-sm">
<span>FREE SHIPPING OVER $199</span>
<span>30 DAYS MONEY BACK</span>
<span>100% SECURE PAYMENT</span>
</div>
</div>
</div>
  );
}

export default Navbar;
