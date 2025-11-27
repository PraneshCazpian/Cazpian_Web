import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MultiEngineSection() {
  const [current, setCurrent] = useState(0);

  // Replace these with your actual SVG paths
  const cards = [
    { id: 1, img: "/Apache.svg", alt: "Apache Spark" },
    { id: 2, img: "/Trinocard.svg", alt: "Trino" },
    { id: 3, img: "/Spark.svg", alt: "Apache Flink" },
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 5000); // <-- this number controls the shuffle timing, 1000 is equals to 1sec
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden px-6 lg:px-20 py-20">
      {/* === Left Text === */}
      <div className="flex flex-col items-start text-center lg:ml-20 lg:text-center space-y-4">
        <h2 className="text-5xl font-bold text-gray-900">
          Multi-Engine <span className="text-blue-600">Ready</span>
        </h2>
        <p className="text-gray-600 max-w-md text-base leading-relaxed">
          Run your preferred analytics engines seamlessly with Apache Spark,
          Trino, and Flink.
        </p>
      </div>

      {/* === Right Animated Cards === */}
      <div className="flex justify-center lg:justify-end items-center w-full">
        <div className="relative w-[90%] max-w-[420px] aspect-[598/286] lg:max-w-[598px] lg:w-[598px] lg:h-[286px]">
          {cards.map((card, index) => {
            const position = (index - current + cards.length) % cards.length;

            // Set animation layers
            const zIndex = position === 0 ? 30 : position === 1 ? 20 : 10;
            const scale = position === 0 ? 1 : position === 1 ? 0.93 : 0.86;
            const x = position === 0 ? 0 : position === 1 ? 50 : -50;
            const y = position === 0 ? 0 : position === 1 ? 15 : 30;
            const opacity = position === 2 ? 0 : 1;
            const blur = position === 0 ? "blur(0px)" : "blur(1px)";
            const rotate = position === 0 ? 0 : position === 1 ? -3 : 3;

            return (
              <motion.img
                key={card.id}
                src={card.img}
                alt={card.alt}
                className="absolute inset-0 w-full h-full object-contain rounded-2xl shadow-2xl"
                style={{ zIndex }}
                animate={{
                  scale,
                  x,
                  y,
                  opacity,
                  rotate,
                  filter: blur,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
