"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Blue Diamond Almonds Lightly Salted",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 15%",
    img: "/images/product-2-1.jpg",
  },
  {
    id: 2,
    name: "Seeds of Change Organic Quinoa, Brown",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 15%",
    img: "/images/product-3-1.jpg",
  },
  {
    id: 3,
    name: "All Natural Italian-Style Chicken Meatballs",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 35%",
    img: "/images/product-6-1.jpg",
  },
  {
    id: 4,
    name: "Angie's Boomchickapop Sweet and Womnies",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Sale",
    img: "/images/product-2-1.jpg",
  },
   {
    id: 6,
    name: "Blue Diamond Almonds Lightly Salted",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 15%",
    img: "/images/product-2-1.jpg",
  },
  {
    id: 7,
    name: "Seeds of Change Organic Quinoa, Brown",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 15%",
    img: "/images/product-3-1.jpg",
  },
  {
    id: 8,
    name: "All Natural Italian-Style Chicken Meatballs",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Save 35%",
    img: "/images/product-6-1.jpg",
  },
  {
    id: 9,
    name: "Angie's Boomchickapop Sweet and Womnies",
    price: 238.85,
    oldPrice: 245.0,
    rating: 5,
    sold: "90/120",
    badge: "Sale",
    img: "/images/product-2-1.jpg",
  },
];

const getBadgeColor = (badge) => {
  switch (badge) {
    case "Save 15%":
      return "bg-pink-500 text-white";
    case "Save 35%":
      return "bg-green-500 text-white";
    case "Sale":
      return "bg-blue-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const DailyBestSellsWithBanner = () => {
  const visibleProducts = 4; // ekshathe kotogulo product dakhabe
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(null); // 'next' | 'prev' | null
  const [trackTranslate, setTrackTranslate] = useState("0%"); // '0%' or '-50%' or '50%'
  const transitionDuration = 1000; // ms
  const intervalRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // only trigger next when not currently animating
      if (!isAnimating) {
        triggerNext();
      }
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAnimating]);

  const getSet = (startIndex) =>
    Array.from({ length: visibleProducts }).map((_, i) =>
      products[(startIndex + i) % products.length]
    );

  const triggerNext = () => {
    if (isAnimating) return;

    const nextIndex =
      currentIndex < products.length - visibleProducts ? currentIndex + 1 : 0;

    setAnimationDirection("next");
    setIsAnimating(true);

    // initial position 0 -> animate to -50%
    setTrackTranslate("0%");
    // allow DOM to update then start transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTrackTranslate("-50%");
      });
    });

    // after transition end, update index (also handled in onTransitionEnd)
    // fallback in case transitionend not fired
    setTimeout(() => {
      if (isAnimating) {
        // perform reset
        setCurrentIndex(nextIndex);
        setIsAnimating(false);
        setAnimationDirection(null);
        setTrackTranslate("0%");
      }
    }, transitionDuration + 50);
  };

  const triggerPrev = () => {
    if (isAnimating) return;
    if (currentIndex <= 0) return; // match previous behavior: do not wrap backwards

    const prevIndex = currentIndex - 1;

    setAnimationDirection("prev");
    setIsAnimating(true);

    // For prev we render [prevSet, currentSet] and start with transform -50% (showing current),
    // then animate to 0 to reveal prev.
    setTrackTranslate("-50%");
    // allow DOM to update then animate to 0
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTrackTranslate("0%");
      });
    });

    setTimeout(() => {
      if (isAnimating) {
        setCurrentIndex(prevIndex);
        setIsAnimating(false);
        setAnimationDirection(null);
        setTrackTranslate("0%");
      }
    }, transitionDuration + 50);
  };

  const onTrackTransitionEnd = () => {
    if (!isAnimating) return;

    if (animationDirection === "next") {
      const nextIndex =
        currentIndex < products.length - visibleProducts ? currentIndex + 1 : 0;
      setCurrentIndex(nextIndex);
    } else if (animationDirection === "prev") {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      setCurrentIndex(prevIndex);
    }

    // reset track to neutral state without animation
    setIsAnimating(false);
    setAnimationDirection(null);
    setTrackTranslate("0%");
  };

  // prepare frames depending on direction (so visual stays identical but animates)
  const currentSet = getSet(currentIndex);
  const nextStartIndex =
    currentIndex < products.length - visibleProducts ? currentIndex + 1 : 0;
  const nextSet = getSet(nextStartIndex);
  const prevStartIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  const prevSet = getSet(prevStartIndex);

  // when not animating, we still render currentSet only (but wrapped as first frame)
  const frameA = animationDirection === "prev" ? prevSet : currentSet;
  const frameB = animationDirection === "prev" ? currentSet : nextSet;

  return (
    <section className="py-12 container mx-auto">
      <div className="flex gap-6">
        {/* Left: Ads Banner */}
<div className="w-1/3 relative">
  <Image
    src="/images/banner-4.png"
    alt="Ads Banner"
    width={400}
    height={600}
    className="rounded-xl object-cover h-fit"
  />

  {/* Text Overlay */}
  <div className="absolute -top-18 left-0 w-full h-full flex flex-col justify-center items-start px-8">
    <h2 className="text-3xl font-bold text-green-900 leading-snug mb-3">
      Bring nature <br /> into your home
    </h2>

    <button className="px-5 py-2 mt-20 bg-emerald-500 text-white rounded-lg hover:bg-red-400 transition">
      Shop Now
    </button>
  </div>
</div>


        {/* Right: Products Carousel */}
        <div className="w-2/3 relative">
          {/* Carousel Arrows */}
          <button
            onClick={triggerPrev}
            className="absolute top-1/2 -left-13 transform -translate-y-1/2 bg-amber-400 p-2 rounded-full shadow hover:bg-green-500 hover:text-white"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={triggerNext}
            className="absolute top-1/2 -right-13 transform -translate-y-1/2 bg-amber-400 p-2 rounded-full shadow hover:bg-green-500 hover:text-white"
          >
            <FiChevronRight className="text-2xl" />
          </button>

          {/* Sliding viewport */}
          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              onTransitionEnd={onTrackTransitionEnd}
              style={{
                width: "200%", // two frames side-by-side
                display: "flex",
                transform:
                  // trackTranslate is '0%' or '-50%' or '0%'; convert to translateX
                  `translateX(${trackTranslate})`,
                transition: isAnimating
                  ? `transform ${transitionDuration}ms linear`
                  : "none",
              }}
            >
              {/* Frame A */}
              <div className="w-1/2">
                <div className="grid grid-cols-4 gap-6">
                  {frameA.map((product, idx) => (
                    <div
                      key={`${product.id}-a-${idx}`}
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition relative border border-gray-400"
                    >
                      {product.badge && (
                        <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-md bg-green-600 text-white">
                          {product.badge}
                        </span>
                      )}

                      <Image
                        src={product.img}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="mx-auto mb-3 object-contain"
                      />

                      <h3 className="font-semibold text-sm line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className={`text-sm ${
                              starIndex < product.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="mt-1">
                        <span className="text-green-600 font-bold">
                          ${product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="ml-2 text-gray-400 line-through">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{
                            width: `${
                              (parseInt(product.sold.split("/")[0]) /
                                parseInt(product.sold.split("/")[1])) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs mt-1">{`Sold: ${product.sold}`}</p>

                      <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                        <FiShoppingCart />
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frame B */}
              <div className="w-1/2">
                <div className="grid grid-cols-4 gap-6">
                  {frameB.map((product, idx) => (
                    <div
                      key={`${product.id}-b-${idx}`}
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition relative border border-gray-400"
                    >
                      {product.badge && (
                        <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-md bg-green-600 text-white">
                          {product.badge}
                        </span>
                      )}

                      <Image
                        src={product.img}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="mx-auto mb-3 object-contain"
                      />

                      <h3 className="font-semibold text-sm line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className={`text-sm ${
                              starIndex < product.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="mt-1">
                        <span className="text-green-600 font-bold">
                          ${product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="ml-2 text-gray-400 line-through">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{
                            width: `${
                              (parseInt(product.sold.split("/")[0]) /
                                parseInt(product.sold.split("/")[1])) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs mt-1">{`Sold: ${product.sold}`}</p>

                      <button className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                        <FiShoppingCart />
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBestSellsWithBanner;
