"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  MapPin,
  Heart,
  ShoppingCart,
  User,
  GitCompare,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white border-b container mx-auto">
      {/* ---------------- MIDDLE AREA (LOGO + SEARCH + ICONS) ---------------- */}
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-green-700 text-3xl font-bold">
          {/* <img src="/logo.png" alt="Nest Logo" className="w-12 h-12" /> */}
          <div className="leading-5">
            <span>Nest</span>
            <div className="text-xs text-gray-600">MART & GROCERY</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-green-300 rounded-full w-1/2 overflow-hidden">
          <button className="flex items-center px-4 py-2 text-sm text-gray-700 bg-gray-50 border-r">
            All Categories
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 px-3 py-2 outline-none"
          />

          <button className="px-4">
            <Search className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Location */}
        <button className="hidden md:flex items-center px-4 py-2 border rounded-md text-gray-700 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          Your Location
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <div className="relative flex items-center cursor-pointer">
            <GitCompare className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full px-1">
              3
            </span>
            <span className="ml-1 text-sm">Compare</span>
          </div>

          <div className="relative flex items-center cursor-pointer">
            <Heart className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full px-1">
              6
            </span>
            <span className="ml-1 text-sm">Wishlist</span>
          </div>

          <div className="relative flex items-center cursor-pointer">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full px-1">
              2
            </span>
            <span className="ml-1 text-sm">Cart</span>
          </div>

          <div className="flex items-center cursor-pointer">
            <User className="w-6 h-6" />
            <span className="ml-1 text-sm">Account</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* ---------------- NAVIGATION MENU ---------------- */}
      <nav className="hidden md:flex items-center bg-white text-gray-700 px-4 py-3 text-sm space-x-6 border-t">
        <button className="flex items-center space-x-2 bg-green-600 text-white px-5 py-2 rounded-md">
          <Menu className="w-5 h-5" />
          <span className="font-semibold">Browse All Categories</span>
        </button>

        <Link href="/" className="flex items-center space-x-1">
          <span>🔥</span>
          <span>Deals</span>
        </Link>

        <Link href="/" className="text-green-600 font-semibold">
          Home
        </Link>

        <Link href="/">About</Link>
        <Link href="/">Shop ▾</Link>
        <Link href="/">Vendors ▾</Link>
        <Link href="/">Mega Menu ▾</Link>
        <Link href="/">Blog ▾</Link>
        <Link href="/">Pages ▾</Link>
        <Link href="/">Contact</Link>

        <div className="ml-auto flex items-center space-x-2 font-bold text-green-700">
          <span className="text-2xl">1900 - 888</span>
          <span className="text-xs text-gray-500">24/7 Support Center</span>
        </div>
      </nav>

      {/* ---------------- MOBILE MENU ---------------- */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-50 p-4 space-y-3 text-gray-700 text-sm border-t">
          <Link href="/">Deals</Link>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Vendors</Link>
          <Link href="/">Mega Menu</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Pages</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
