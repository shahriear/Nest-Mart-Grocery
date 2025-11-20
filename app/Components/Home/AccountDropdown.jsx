"use client";
import Link from "next/link";
import { User, ChevronDown } from "lucide-react";

const accountItems = [
  { label: "My Profile", href: "/profile" },
  { label: "Order Tracking", href: "/order-tracking" },
  { label: "My Voucher", href: "/voucher" },
  { label: "My Wishlist", href: "/wishlist" },
  { label: "Settings", href: "/settings" },
  { label: "Sign Out", href: "/logout" },
];

export default function AccountDropdown() {
  return (
    <div className="relative group">
      {/* Trigger */}
      <div className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:text-green-600">
        <User className="w-6 h-6" />
        Account
      </div>

      {/* Dropdown */}
      <div className="absolute right-0 mt-0 bg-white shadow-2xl rounded-lg overflow-hidden w-44 z-50 opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 origin-top text-sm">
        {accountItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block px-4 py-2 hover:bg-green-50"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
