// src/components/MultiEngineSection.tsx
import React from "react";

export default function MultiEngineSection() {
  const cards = [
    { id: 1, img: "/Apache.svg", alt: "Apache Spark" },
    { id: 2, img: "/Trinocard.svg", alt: "Trino" },
    { id: 3, img: "/Spark.svg", alt: "Apache Flink" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading (Centered) */}
        <div className="w-full text-center mb-14"> 
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Multi-Engine <span className="text-blue-600 dark:text-blue-300">Ready</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-indigo-300 max-w-2xl mx-auto">
            Run your preferred analytics engines seamlessly with Apache Spark, Trino, and Flink.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center w-full max-w-6xl">
            {cards.map((card) => (
              <div key={card.id} className="flex items-center justify-center w-full">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="
                    w-64 sm:w-100 md:w-100 lg:w-[560px] 
                    h-auto object-contain
                    transition-transform duration-200
                    hover:scale-[1.03]
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
