'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingBag,
  LocateFixed,
  MapPin,
  Heart,
  Settings,
  LogOut,
} from 'lucide-react';

export default function AccountPage() {
  const params = useSearchParams();
  const tab = params.get('tab') || 'dashboard';

  const menu = [
    { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
    { key: 'orders', label: 'Orders', icon: <ShoppingBag /> },
    { key: 'track', label: 'Track Order', icon: <LocateFixed /> },
    { key: 'address', label: 'My Address', icon: <MapPin /> },
    { key: 'wishlist', label: 'My Wishlist', icon: <Heart /> },
    { key: 'settings', label: 'Settings', icon: <Settings /> },
    { key: 'logout', label: 'Logout', icon: <LogOut /> },
  ];

  const renderContent = () => {
    switch (tab) {
      case 'orders':
        return (
          <div>
            <h2 className="text-xl font-semibold">Your Orders</h2>
            <p>No orders yet.</p>
          </div>
        );
      case 'track':
        return (
          <div>
            <h2 className="text-xl font-semibold">Track Order</h2>
          </div>
        );
      case 'address':
        return (
          <div>
            <h2 className="text-xl font-semibold">Addresses</h2>
          </div>
        );
      case 'wishlist':
        return (
          <div>
            <h2 className="text-xl font-semibold">Wishlist</h2>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2 className="text-xl font-semibold">Settings</h2>
          </div>
        );
      case 'logout':
        // call logout and redirect
        if (typeof window !== 'undefined') {
          fetch('/api/logout').then(() => (window.location.href = '/login'));
        }
        return <div>Logging out...</div>;
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold">Hello!</h2>
            <p>Welcome to your dashboard.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* sidebar */}
        <div className="space-y-3">
          {menu.map(m => (
            <Link
              key={m.key}
              href={`/account?tab=${m.key}`}
              className={`flex items-center gap-3 p-3 rounded-lg border transition ${
                tab === m.key ? 'bg-green-600 text-white' : 'bg-white'
              }`}
            >
              <span className="w-5 h-5">{m.icon}</span>
              <span>{m.label}</span>
            </Link>
          ))}
        </div>

        {/* content */}
        <div className="col-span-3 bg-white p-6 rounded-xl shadow">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
