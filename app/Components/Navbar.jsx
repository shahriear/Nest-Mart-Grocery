"use client";
import Link from "next/link";
import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { SlFire } from "react-icons/sl";
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

import CategoriesDropdown from "./CategoriesDropdown";
import AllCategories from "./Home/AllCategories";
import LocationDropdown from "./Home/LocationDropdown";
import AccountDropdown from "./Home/AccountDropdown";
import CartDropdown from "./Home/CartDropdown";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const dropdownMenus = {
    Shop: [
      { label: "Shop Grid", href: "/shop" },
      { label: "Shop List", href: "/shop-list" },
      { label: "Shop Single", href: "/shop-single" },
    ],
    Vendors: [
      { label: "Vendor List", href: "/vendors" },
      { label: "Vendor Single", href: "/vendor-single" },
    ],
    MegaMenu: [
      { label: "Category 1", href: "/cat-1" },
      { label: "Category 2", href: "/cat-2" },
      { label: "Category 3", href: "/cat-3" },
    ],
    Blog: [
      { label: "Blog Grid", href: "/blog" },
      { label: "Blog Details", href: "/blog-single" },
    ],
    Pages: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  };

  return (
    <header className="w-full bg-white">
      {/* ---------------- TOP AREA ---------------- */}
      <div className="border-b border-gray-300">
        <div className="flex items-center justify-between px-4 py-4 gap-10 container mx-auto">
          {/* Logo */}
          <img
            src="/images/logo.svg"
            alt="Nest Logo"
            className="w-auto h-auto"
          />

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-green-300 rounded-full w-1/2 ">
            <AllCategories />
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
          {/* Location */}
          <div className="hidden md:flex">
            <LocationDropdown />
          </div>

          {/* <button className="hidden md:flex items-center px-4 py-2 border rounded-md text-green-500 text-sm whitespace-nowrap">
            <MapPin className="w-4 h-4 mr-2" />
            Your Location <ChevronDown className="w-4 h-4 ml-1" />
          </button> */}

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-gray-500 font-medium">
            <div className="relative flex items-center cursor-pointer">
              <GitCompare className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full px-1">
                3
              </span>
              <span className="ml-1 text-[16px]">Compare</span>
            </div>
            <div className="relative flex items-center cursor-pointer">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full px-1">
                6
              </span>
              <span className="ml-1 text-[16px]">Wishlist</span>
            </div>
            <div
              className="relative flex items-center cursor-pointer"
              onMouseEnter={() => setCartOpen(true)}
              onMouseLeave={() => setCartOpen(false)}
            >
              <ShoppingCart className="w-6 h-6 " />
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full px-1">
                2
              </span>
              <span className="ml-1 text-[16px]">Cart</span>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div className="absolute top-full -right-40 mt-0 z-50 ">
                  <CartDropdown />
                </div>
              )}
            </div>
            <div className="flex items-center cursor-pointer">
              {/* <User className="w-6 h-6" />
              <span className="ml-1 text-[16px]">Account</span> */}
              <AccountDropdown />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ---------------- NAVIGATION ---------------- */}
      <nav className="border-b border-gray-300">
        <div className="hidden md:flex items-center bg-white text-gray-700 px-4 py-3 text-[18px] font-medium space-x-6 container mx-auto">
          {/* Left Categories */}
          <div className="flex items-center space-x-2 bg-green-500 text-white px-5 py-2 rounded-md cursor-pointer">
            <Menu className="w-5 h-5" />
            <CategoriesDropdown />
          </div>

          <Link href="/" className="flex items-center space-x-1">
            <SlFire className="text-xl text-green-700" />
            <span>Deals</span>
          </Link>

          <Link href="/" className="text-green-600 font-semibold">
            Home
          </Link>
          <Link href="/about">About</Link>

          {/* Hover Dropdown Menus */}
          {Object.keys(dropdownMenus).map((menuName) => (
            <div key={menuName} className="relative group cursor-pointer">
              <span className="flex items-center gap-1 hover:text-green-600">
                {menuName}
                <ChevronDown className="w-4 h-4" />
              </span>
              <div className="absolute left-0 mt-3 bg-white shadow-xl rounded-lg p-4 w-44 z-50 opacity-0 scale-95 -translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-400 top-4 text-[15px]">
                {dropdownMenus[menuName].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block py-1 hover:text-green-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link href="/contact">Contact</Link>

          {/* Support */}
          <div className="ml-auto flex items-center space-x-2 font-bold text-green-500">
            <span className="text-4xl text-gray-600">
              <BiSupport />
            </span>
            <div>
              <span className="text-2xl">1900 - 888</span>
              <p className="text-xs font-medium text-gray-500">
                24/7 Support Center
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* ---------------- MOBILE MENU ---------------- */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-50 p-4 space-y-3 text-gray-700 text-sm border-t">
          <Link href="/">Deals</Link>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Vendors</Link>
          <Link href="/">Mega Menu</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Pages</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
