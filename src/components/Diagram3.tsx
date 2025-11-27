
import React from "react";

const DiaboxMinimal: React.FC = () => {
  // I included your uploaded preview path below as an explicit fallback for preview:
  const svgPrimary = "/diabox2.svg";
  const svgFallback = "/mnt/data/b5fdae1b-a486-4756-afc4-5ddb69eb287b.png";

  return (
    <section className="w-full bg-gradient-to-br from-[#FBFDFF] via-[#F6F9FF] to-[#EEF6FF] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl lg:text-left font-bold text-indigo-900 leading-tight">
         Stop Paying Cluster Taxes for Tiny ETL {" "}
          <span className="block text-indigo-700">(≤10GB)</span>
        </h2>

        {/* Subhead */}
        <p className="mt-10 text-sm text-gray-500 max-w-2xl mx-auto">
        Small jobs incur cold-starts, over-provisioning, and small-files waste
        </p>

        {/* Diagram */}
        <div className="mt-5 lg:pl-10 flex justify-center items-center">
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
          <div className="text-xs md:text-sm text-gray-500 mb-4">
          Cost Model: Savings = avoided startup + optimized run - idle
          </div>
          <div className="text-xs md:text-sm text-gray-500 mb-4">
          Proof: Dashboards for latency, idle%, bytes
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaboxMinimal;
