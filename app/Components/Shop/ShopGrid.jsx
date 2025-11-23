import React from 'react'
export const products = [
  {
    id: 1,
    title: 'Classic Leather Jacket',
    price: 129.99,
    rating: 4.6,
    sold: 120,
    image:
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=60',
    description:
      'Premium genuine leather jacket with soft lining and classic fit.',
  },
  {
    id: 2,
    title: 'Minimalist Watch',
    price: 79.99,
    rating: 4.4,
    sold: 310,
    image:
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=60',
    description:
      'Slim stainless-steel watch with leather strap and 50m water resistance.',
  },
];

function Star() {
  return (
    <svg
      className="w-4 h-4 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export function ShopGrid({ items = products, onView }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map(p => (
        <div
          key={p.id}
          className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
        >
          <img src={p.image} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-sm">{p.title}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-lg">${p.price}</span>
              <div className="flex items-center gap-1">
                <Star /> {p.rating}
              </div>
            </div>
            <button
              className="mt-3 w-full py-2 rounded-lg border text-sm"
              onClick={() => onView && onView(p)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}