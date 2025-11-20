"use client";
import Image from "next/image";

export default function AboutPerformance() {
  return (
    <div className="container mx-auto px-4 py-20 flex justify-evenly gap-2 items-center">
      <div>
        <Image
          src="/images/about-5.png"
          width={500}
          height={500}
          alt="Performance"
          className="rounded-xl"
        />
      </div>

      <div>
        <h4 className="text-green-600 font-semibold mb-2">Our Performance</h4>
        <h2 className="text-4xl font-bold leading-snug">
          Your Partner for Breathtaking Results
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed
          id elementum lectus adipiscing. Curabitur sagittis.
        </p>
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a arcu eget
          urna, malesuada libero.
        </p>
      </div>
    </div>
  );
}
