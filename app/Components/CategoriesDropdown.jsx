'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const categories = [
  { icon: '/images/icon-1.svg', label: 'Milks and Dairies' },
  { icon: '/images/icon-1.svg', label: 'Wines & Drinks' },
  { icon: '/images/icon-1.svg', label: 'Clothing & beauty' },
  { icon: '/images/icon-1.svg', label: 'Fresh Seafood' },
  { icon: '/images/icon-1.svg', label: 'Pet Foods & Toy' },
  { icon: '/images/icon-1.svg', label: 'Fast food' },
  { icon: '/images/icon-1.svg', label: 'Baking material' },
  { icon: '/images/icon-1.svg', label: 'Vegetables' },
  { icon: '/images/icon-1.svg', label: 'Fresh Fruit' },
  { icon: '/images/icon-1.svg', label: 'Bread and Juice' },

  // Extra items (Show More)
  { icon: '/images/icon-1.svg', label: 'Organic Foods' },
  { icon: '/images/icon-1.svg', label: 'Frozen Snacks' },
  { icon: '/images/icon-1.svg', label: 'Tea & Coffee' },
  { icon: '/images/icon-1.svg', label: 'Spices & Oil' },
];

const CategoriesDropdown = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleItems = showMore ? categories : categories.slice(0, 10);

  return (
    <div className="relative">
      {/* ---------- BUTTON ---------- */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 bg-green-600 text-white px-5 py-2 rounded-md"
      >
        <span className="font-semibold">Browse All Categories</span>
        <ChevronDown
          className={`w-4 h-4 transform transition-all duration-500 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* ---------- SMOOTH DROPDOWN ---------- */}
      <div
        className={`
          absolute left-0 w-[500px] bg-white mt-5 shadow-2xl rounded-lg overflow-hidden z-50 
          transition-all duration-700 
          ${open ? 'max-h-[700px] p-6 opacity-100' : 'max-h-0 p-0 opacity-100'}
        `}
      >
        <div className="grid grid-cols-2 gap-4 transition-opacity duration-500 text-[15px]">
          {visibleItems.map((item, index) => (
            <CategoryItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* ---------- SHOW MORE / LESS BUTTON ---------- */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center mt-5 mx-auto text-green-600 font-medium hover:underline"
        >
          {showMore ? (
            <>
              <span className="mr-2 text-xl">−</span> Show less
            </>
          ) : (
            <>
              <span className="mr-2 text-xl">＋</span> Show more...
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CategoriesDropdown;

/* ---------- CATEGORY ITEM COMPONENT ---------- */
const CategoryItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-300
      ${
        active
          ? 'bg-green-50 border-green-500'
          : 'border-gray-200 hover:bg-green-50'
      }
    `}
  >
    <img src={icon} className="w-10 h-10" />
    <span className="font-medium text-gray-700">{label}</span>
  </div>
);
