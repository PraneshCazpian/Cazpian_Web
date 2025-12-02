
import React from "react";

const DiaboxMinimal: React.FC = () => {
  // I included your uploaded preview path below as an explicit fallback for preview:
  const svgPrimary = "/diabox.svg";
  const svgFallback = "/mnt/data/b5fdae1b-a486-4756-afc4-5ddb69eb287b.png";

  return (
    <section className="w-full bg-gradient-to-br from-[#FBFDFF] via-[#F6F9FF] to-[#EEF6FF] dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl lg:text-left font-bold text-indigo-900 dark:text-gray-200 leading-tight">
          The Autonomous Control Plane for Iceberg{" "}
          <span className="block text-indigo-700">(Polaris-First)</span>
        </h2>

        {/* Subhead */}
        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Keeps Polaris-governed Iceberg fast, cheap, and compliant—automatically.
        </p>

        {/* Diagram */}
        <div className="mt-5 lg:pl-20 flex justify-center items-center">
          {/* Use the real SVG in public/ first; fallback to uploaded preview file path if needed */}
          <img
            src={svgPrimary}
            alt="Diabox diagram"
            onError={(e) => {
              // show fallback image if primary svg not found
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== svgFallback) target.src = svgFallback;
            }}
            className="w-full max-w-[900px] h-auto object-contain"
          />
        </div>

        {/* Bullets / end text */}
        <div className="mt-3 max-w-4xl mx-auto text-center">
          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4">
            • Completes Polaris with fixes &nbsp;&nbsp; • Applies on shared compute &nbsp;&nbsp; • Lower spend, unified SLAs
          </div>
          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4">
            • Pilot on 10–20 tables for measurable result improvements
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaboxMinimal;
