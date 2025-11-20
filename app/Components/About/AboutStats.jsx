"use client";

import CountUp from "react-countup";

export default function AboutStats() {
  const stats = [
    { number: 0, label: "Years of Experience", suffix: "+" },
    { number: 15000, label: "Satisfied Clients", suffix: "+" },
    { number: 120, label: "Completed Projects", suffix: "+" },
    { number: 20, label: "Winning Awards", suffix: "+" },
  ];

  return (
    <div className="bg-green-100 py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h2 className="text-4xl font-bold text-green-600">
              <CountUp
                start={0}
                end={s.number}
                duration={2.5}
                separator=","
              />
              {s.suffix}
            </h2>
            <p className="text-gray-600 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
