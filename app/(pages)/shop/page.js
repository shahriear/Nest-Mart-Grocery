import { Suspense } from 'react';
import ShopPageContent from '@/app/Components/Shop/ShopPageContent';

function ShopPageFallback() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopPageFallback />}>
      <ShopPageContent />
    </Suspense>
  );
}
