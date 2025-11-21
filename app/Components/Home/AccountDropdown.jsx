
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

      <div className="absolute -right-15 mt-0 pt-5 w-48 bg-white text-black rounded-lg shadow z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
        {items.map(it => (
          <Link
            key={it.href}
            href={it.href}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
