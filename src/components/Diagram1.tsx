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
    <section
      className="
        relative w-full
        bg-gradient-to-br from-[#FBFBFF] via-[#F6F9FF] to-[#EEF6FF]
        dark:from-[#0b1220] dark:via-[#0f1724] dark:to-[#121827]
        py-20 overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-indigo-900 dark:text-gray-200 leading-tight">
            Cazpian Workbench: Unified, Governed,{" "}
            <span className="block text-indigo-700 dark:text-indigo-700">AI-Native Productivity</span>
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center lg:text-center w-full lg:mx-auto pb-3 pt-10">
            Query • Build • Visualize — governed by Polaris/Gravitino
          </p>
        </header>

        {/* Main row: left spacer / center diagram / right legend */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* left spacer */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* center circle */}
          <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-center">
            <motion.div
              variants={floatAnim}
              initial="initial"
              animate="animate"
              className="relative w-[420px] md:w-[520px] lg:w-[560px] max-w-full"
            >
              <img src="/diacir.svg" alt="Center Diagram" className="w-full h-auto object-contain select-none" />
            </motion.div>
          </div>

          {/* right legend (commented out in original) */}
          {/* <aside className="col-span-1 lg:col-span-3 ..."> ... </aside> */}
        </div>

        {/* Feature cards (icon on top, text below) */}
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {FEATURE_ITEMS.map((f, i) => (
              <motion.div
                key={f.id}
                variants={popIn(i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`
                  flex flex-col items-center justify-center gap-3
                  rounded-2xl p-3 md:p-5
                  transform transition-all duration-300
                  hover:-translate-y-1 hover:shadow-2xl
                  shadow-lg
                `}
              >
                {/* Card background + backdrop blur:
                    - light: soft white glass gradient
                    - dark: subtle dark glass gradient
                    Using Tailwind arbitrary gradient (v3.1+)
                */}
                <div
                  className="
                    w-full h-full rounded-2xl p-3 md:p-5 flex flex-col items-center
                    backdrop-blur-md
                    bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,255,255,0.65))]
                    dark:bg-[linear-gradient(135deg,rgba(22,24,38,0.45),rgba(12,14,25,0.55))]
                    dark:border dark:border-slate-700/60
                  "
                  aria-label={f.title}
                >
                  {/* ICON (top) */}
                  <div
                    className="
                      w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-1
                      bg-white/20 dark:bg-white/5
                      ring-0
                    "
                  >
                    <img src={f.icon} alt={f.title} className="w-8 h-8 md:w-9 md:h-9 object-contain" />
                  </div>

                  {/* TITLE (bottom) */}
                  <div className="text-center mt-1">
                    <div className="text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">
                      {f.title}
                    </div>
                    {f.subtitle && <div>{f.subtitle}</div>}
                  </div>
                </div>
              </motion.div>
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
                py-3 px-6
                rounded-full
                text-center
                font-semibold
                text-white
                bg-gradient-to-r from-[#3b5bbb] via-[#5c6fa8] to-[#7c4dff]
                shadow-[0_8px_40px_rgba(80,80,200,0.12)]
              "
            >
              {/* LEFT fade: from page background to transparent */}
              <div
                aria-hidden
                className="hidden lg:block absolute left-0 top-0 bottom-0 w-60 pointer-events-none rounded-l-full"
                // light/dark gradient fade using Tailwind classes and arbitrary colors
                style={{
                  background:
                    "linear-gradient(90deg, rgba(246,249,255,1) 0%, rgba(246,249,255,0.0) 100%)",
                  borderTopLeftRadius: 9999,
                  borderBottomLeftRadius: 9999,
                }}
              />

              {/* RIGHT fade: from page background to transparent */}
              <div
                aria-hidden
                className="hidden lg:block absolute right-0 top-0 bottom-0 w-60 pointer-events-none rounded-r-full"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(246,249,255,1) 0%, rgba(246,249,255,0.0) 100%)",
                  borderTopRightRadius: 9999,
                  borderBottomRightRadius: 9999,
                }}
              />

              <span className="relative z-10">Why We Win</span>
            </div>
          </div>

          {/* bullets under the pill */}
          <div className="mt-4 w-full max-w-3xl">
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 block" />
                Replaces tool sprawl
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 block" />
                Lakehouse-native governance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 block" />
                60% Faster iterations
              </li>
            </ul>
          </div>
        </div>

        {/* footer microcopy */}
        <div className="mt-6 text-center">
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Demo Proof: NL → SQL → Chart → Code gen → Run • RBAC end-to-end
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkbenchSection;
