// "use client";
// import Link from "next/link";
// import { User, ChevronDown } from "lucide-react";

// const accountItems = [
//   { label: 'My Profile', href: '/account#profile' },
//   { label: 'Order Tracking', href: '/account#orders' },
//   { label: 'My Voucher', href: '/account#voucher' },
//   { label: 'My Wishlist', href: '/account#wishlist' },
//   { label: 'Settings', href: '/account#settings' },
//   { label: 'Sign Out', href: '/api/logout' },
// ];


// export default function AccountDropdown() {
//   return (
//     <div className="relative group">
//       {/* Trigger */}
//       <div className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:text-green-600">
//         <User className="w-6 h-6" />
//         Account
//       </div>

//       {/* Dropdown */}
//       <div className="absolute right-0 mt-0 bg-white shadow-2xl rounded-lg overflow-hidden w-44 z-50 opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 origin-top text-sm">
//         {accountItems.map((item, i) => (
//           <Link
//             key={i}
//             href={item.href}
//             className="block px-4 py-2 hover:bg-green-50"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';
import { User } from 'lucide-react';

const items = [
  { label: 'My Account', href: '/account?tab=dashboard' },
  { label: 'Order Tracking', href: '/account?tab=track' },
  { label: 'My Voucher', href: '/account?tab=voucher' },
  { label: 'My Wishlist', href: '/account?tab=wishlist' },
  { label: 'Settings', href: '/account?tab=settings' },
  { label: 'Sign Out', href: '/account?tab=logout' }, // logout handled by account page
];

export default function AccountDropdown() {
  return (
    <div className="relative group">
      <div className="flex items-center gap-2 cursor-pointer">
        <User className="w-5 h-5" />
        {/* <span>Account</span> */}
        <Link href={'/account?tab=dashboard'}>Account</Link>
      </div>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
        {items.map(it => (
          <Link
            key={it.href}
            href={it.href}
            className="block px-4 py-2 hover:bg-gray-50"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
