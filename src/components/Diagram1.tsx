// src/components/WorkbenchSection.tsx
import React from "react";
import { motion } from "framer-motion";

const FEATURE_ITEMS = [
  { id: "sql", title: "SQL Editor + AI Copilot", icon: "/brain.svg" },
  { id: "code", title: "Code Workbench", icon: "/code.svg" },
  { id: "viz", title: "Unified Viz", icon: "/Graph.svg" },
  { id: "vscode", title: "VS Code IDE", icon: "/code.svg" },
  { id: "vibe", title: "Vibe Coding Assistant", icon: "/Lighting.svg" },
  { id: "govern", title: "Governed by Polaris RBAC", icon: "/govern.svg" },
];

const floatAnim = {
  initial: { y: 0 },
  animate: { y: [0, -8, 0], transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" } },
};

const popIn = (i = 0) => ({
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" } },
});

const WorkbenchSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#FBFBFF] via-[#F6F9FF] to-[#EEF6FF] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl lg:text-left font-bold text-indigo-900 leading-tight">
        Cazpian Workbench: Unified, Governed,{" "}
          <span className="block text-indigo-700">AI-Native Productivity</span>
        </h2>
          <p className="text-sm text-gray-500 text-center lg:text-center w-full lg:mx-auto pb-3 pt-10">
            Query • Build • Visualize — governed by Polaris/Gravitino
          </p>
        </header>

        {/* Main row: left spacer / center diagram / right legend */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* left spacer (keeps same footprint as design) */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* center circle */}
          <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-center">
            <motion.div
              variants={floatAnim}
              initial="initial"
              animate="animate"
              className="relative w-[420px] md:w-[520px] lg:w-[560px] max-w-full"
            >
              {/* NOTE: remove the overlay center text if your diacir.svg already contains it */}
              <img src="/diacir.svg" alt="Center Diagram" className="w-full h-auto object-contain select-none" />
            </motion.div>
          </div>

          {/* legend on the right */}
          {/* <aside className="col-span-1 lg:col-span-3 flex flex-col items-start gap-6 pl-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-8 rounded-l-full bg-gradient-to-b from-blue-300 to-blue-500 block" />
              <div>
                <div className="text-sm font-semibold text-gray-800">Data Engineers</div>
                <div className="text-xs text-gray-500">ETL Tuning</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-8 rounded-l-full bg-gradient-to-b from-purple-400 to-purple-600 block" />
              <div>
                <div className="text-sm font-semibold text-gray-800">Analysts</div>
                <div className="text-xs text-gray-500">NL-to-SQL</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-8 rounded-l-full bg-gradient-to-b from-cyan-300 to-blue-500 block" />
              <div>
                <div className="text-sm font-semibold text-gray-800">Data Scientists</div>
                <div className="text-xs text-gray-500">Python Iteration</div>
              </div>
            </div>
          </aside> */}
        </div>

       {/* Feature cards (icon on top, text below) */}
        <div className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {FEATURE_ITEMS.map((f, i) => (
                <div
                    key={f.id}
                    className={`
                    flex flex-col items-center justify-center gap-3
                    rounded-2xl p-3 md:p-5
                    shadow-lg
                    transform transition-all duration-300
                    hover:-translate-y-1 hover:shadow-2xl
                    `}
                    // set inline background style per-item (see features array below)
                    style={{
                    background: f.bg || "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.65))",
                    WebkitBackdropFilter: "blur(6px)",
                    backdropFilter: "blur(6px)"
                    }}
                    aria-label={f.title}
                >
                    {/* ICON (top) */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-1"
                        style={{ background: "rgba(255,255,255,0.15)" }}>
                    <img src={f.icon} alt={f.title} className="w-8 h-8 md:w-9 md:h-9 object-contain" />
                    </div>

                    {/* TITLE (bottom) */}
                    <div className="text-center">
                    <div className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                        {f.title}
                    </div>
                    {f.subtitle && <div className="text-xs text-gray-500">{f.subtitle}</div>}
                    </div>
                </div>
                ))}
            </div>
        </div>

       {/* Why We Win pill */}
        <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex justify-center mt-10 mb-6">
                <div
                className="
                    relative
                    w-[85%] lg:w-[60%]
                    py-3
                    rounded-full
                    text-center
                    font-semibold
                    text-white
                    bg-gradient-to-r from-[#3b5bbb] via-[#5c6fa8] to-[#7c4dff]
                    shadow-[0_8px_40px_rgba(80,80,200,0.12)]
                "
                style={{ overflow: "visible" }}
                >
                {/* LEFT fade: from page background to transparent */}
                <div
                    aria-hidden
                    className="hidden lg:block absolute left-0 top-0 bottom-0 w-60 pointer-events-none"
                    style={{
                    background: "linear-gradient(90deg, #F6F9FF 0%, rgba(251,251,255,0.0) 100%)",
                    borderTopLeftRadius: "9999px",
                    borderBottomLeftRadius: "9999px",
                    }}
                />

                {/* RIGHT fade: from page background to transparent */}
                <div
                    aria-hidden
                    className="hidden lg:block absolute right-0 top-0 bottom-0 w-60 pointer-events-none"
                    style={{
                    background: "linear-gradient(270deg, #F6F9FF 0%, rgba(251,251,255,0.0) 100%)",
                    borderTopRightRadius: "9999px",
                    borderBottomRightRadius: "9999px",
                    }}
                />

                {/* label (above fades) */}
                <span className="relative z-10">Why We Win</span>
            </div>
        </div>

  {/* bullets under the pill */}
  <div className="mt-4 w-full max-w-3xl">
    <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-600">
      <li className="flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-gray-400 block" />
        Replaces tool sprawl
      </li>
      <li className="flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-gray-400 block" />
        Lakehouse-native governance
      </li>
      <li className="flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-gray-400 block" />
        60% Faster iterations
      </li>
    </ul>
  </div>
</div>

        {/* footer microcopy */}
        <div className="mt-6 text-center">
          <div className="text-xs text-gray-500">
            Demo Proof: NL → SQL → Chart → Code gen → Run • RBAC end-to-end
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkbenchSection;
