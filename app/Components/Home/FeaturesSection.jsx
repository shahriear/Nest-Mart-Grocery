'use client';
import {
  FaTags,
  FaShippingFast,
  FaGift,
  FaLayerGroup,
  FaUndo,
} from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaTags size={30} />,
    title: 'Best prices & offers',
    subtitle: 'Orders $50 or more',
  },
  {
    id: 2,
    icon: <FaShippingFast size={30} />,
    title: 'Free delivery',
    subtitle: '24/7 amazing services',
  },
  {
    id: 3,
    icon: <FaGift size={30} />,
    title: 'Great daily deal',
    subtitle: 'When you sign up',
  },
  {
    id: 4,
    icon: <FaLayerGroup size={30} />,
    title: 'Wide assortment',
    subtitle: 'Mega Discounts',
  },
  {
    id: 5,
    icon: <FaUndo size={30} />,
    title: 'Easy returns',
    subtitle: 'Within 30 days',
  },
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {features.map(item => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-md border border-gray-100 transition hover:-translate-y-2 duration-400 cursor-pointer"
          >
            <div className="text-green-600">{item.icon}</div>

            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
