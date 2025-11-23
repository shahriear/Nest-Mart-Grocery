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
import OrdersPage from '@/app/Components/Account/Order';
import OrderTracking from '@/app/Components/Account/OrderTracking';
import MyAddress from '@/app/Components/Account/MyAddress';
import Wishlist from '@/app/Components/Account/Wishlist';
import SettingsUi from '@/app/Components/Account/SettingsUi';


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
            <OrdersPage />
          </div>
        );
      case 'track':
        return (
          <div>
            
            <OrderTracking/>
          </div>
        );
      case 'address':
        return (
          <div>
            
            <MyAddress/>
          </div>
        );
      case 'wishlist':
        return (
          <div>
            
            <Wishlist/>
          </div>
        );
      case 'settings':
        return (
          <div>
            
            <SettingsUi/>
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
            <h2 className="text-2xl font-bold">Hello Shuvo!</h2>
            <p className=" w-1/2 mt-10 text-gray-500">
              From your account dashboard. you can easily check & view your
              recent orders, manage your shipping and billing addresses and edit
              your password and account details.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto py-10 md:px-40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* sidebar */}
        <div className="space-y-3">
          {menu.map(m => (
            <Link
              key={m.key}
              href={`/account?tab=${m.key}`}
              className={`flex items-center gap-3 p-3 rounded-lg border border-gray-300 transition ${
                tab === m.key ? 'bg-green-600 text-white' : 'bg-white'
              }`}
            >
              <span className="w-5 h-5">{m.icon}</span>
              <span>{m.label}</span>
            </Link>
          ))}
        </div>

        {/* content */}
        <div className="col-span-3 bg-gray-100 p-6 rounded-xl shadow">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
