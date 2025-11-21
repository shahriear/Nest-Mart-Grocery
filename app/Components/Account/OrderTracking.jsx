'use client';
import React from 'react';

const orderStatus = [
  { step: 'Order Placed', completed: true },
  { step: 'Processing', completed: true },
  { step: 'Shipped', completed: false },
  { step: 'Delivered', completed: false },
];

export default function OrderTracking() {
  return (
    <div className="p-6 bg-gray-200 min-h-scre flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Order Tracking</h1>
      <p className='text-gray-500 pb-10 max-w-11/12'>
        To track your order please enter your OrderID in the box below and press
        "Track" button. This was given to you on your receipt and in the
        confirmation email you should have received.
      </p>

      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md">
        <div className="relative flex justify-between items-center mb-8">
          {/* Connector Line */}
          <div className="absolute top-3 left-0 w-full h-1 bg-gray-300 z-0"></div>

          {orderStatus.map((status, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative z-10"
            >
              {/* Circle */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-white transition-colors duration-500"
                style={{
                  backgroundColor: status.completed ? '#16a34a' : '#d1d5db',
                  transform: status.completed ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.5s ease',
                }}
              >
                {index + 1}
              </div>
              {/* Label */}
              <p className="text-sm mt-2 text-center">{status.step}</p>

              {/* Animated filled connector */}
              {index < orderStatus.length - 1 && (
                <div
                  className="absolute top-3 left-1/2 h-1 z-0 transition-all duration-500"
                  style={{
                    width: status.completed ? '100%' : '0%',
                    backgroundColor: status.completed ? '#16a34a' : '#d1d5db',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Current Status:{' '}
            <span className="font-semibold text-green-600">
              {orderStatus.filter(s => s.completed).length ===
              orderStatus.length
                ? 'Delivered'
                : orderStatus.find(s => !s.completed)?.step}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
