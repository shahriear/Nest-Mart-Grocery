'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShopList } from '@/app/Components/Shop/ShopList';
import { ShopGrid } from '@/app/Components/Shop/ShopGrid';
import { ShopSingle } from '@/app/Components/Shop/ShopSingle';

export default function ShopPageContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab'); // get ?tab=shop-list or ?tab=Shop-Single
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>

      {(!tab || tab === 'shop') && <ShopGrid />}
      {tab === 'shop-list' && <ShopList />}
      {tab === 'Shop-Single' && <ShopSingle />}
    </div>
  );
}
