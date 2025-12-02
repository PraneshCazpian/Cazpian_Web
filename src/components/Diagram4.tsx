import React from "react";
import { Zap, Database, Layers } from "lucide-react";

const Slide8: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-900 py-16 transition-colors">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-center text-[#2a145f] dark:text-indigo-200">
            Cazpian Arrow Flight SQL: One Engine for All Workloads
          </h2>

          {/* Problem + Breakthrough */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700">
              <div className="text-sm font-bold mb-3 text-slate-800 dark:text-slate-100">PROBLEM</div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Modern query engines (Trino, Starburst, Dremio) are read-only, leading to dual runtimes,
                double costs, redundant governance, and data latency.
              </p>
            </div>

            <div className="rounded-lg border-2 border-cyan-200 bg-cyan-50 p-6 shadow-sm dark:bg-cyan-900/20 dark:border-cyan-700/30">
              <div className="flex items-center gap-4">
                <Zap className="h-8 w-8 text-cyan-700 dark:text-cyan-200" />
                <div className="text-sm font-bold text-cyan-800 dark:text-cyan-200">BREAKTHROUGH</div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mt-3">
                Standardize on Spark Connect; Arrow Flight SQL exposes it for BI, while Orchestrator handles ETL/streaming.
              </p>

              <p className="text-sm text-cyan-800 font-medium mt-3 dark:text-cyan-200">
                80% lower latency vs. Thrift/JDBC • 10x faster transfers via Arrow columnar
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 mb-6 shadow-sm dark:bg-slate-800 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-cyan-800 dark:text-cyan-300 mb-4">CAPABILITIES</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 mt-1 text-cyan-700 dark:text-cyan-300 flex-shrink-0" />
                <div>ETL/Batch via Orchestrator</div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 mt-1 text-cyan-700 dark:text-cyan-300 flex-shrink-0" />
                <div>Streaming on Spark</div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 mt-1 text-cyan-700 dark:text-cyan-300 flex-shrink-0" />
                <div>Interactive SQL via Flight SQL</div>
              </div>

              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 mt-1 text-cyan-700 dark:text-cyan-300 flex-shrink-0" />
                <div>AI/ML reuse • Pluggable engines (future: DuckDB, Trino)</div>
              </div>
            </div>
          </div>

          {/* Why it matters header */}
          <div className="text-center mb-4">
            <h4 className="text-base font-semibold text-cyan-800 dark:text-cyan-300">WHY IT MATTERS</h4>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="max-w-3xl mx-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="pb-3 pr-6 text-slate-500 dark:text-slate-400">Capability</th>
                    <th className="pb-3 pr-6 text-slate-500 text-center dark:text-slate-400">Trino/Starburst</th>
                    <th className="pb-3 pr-6 text-slate-500 text-center dark:text-slate-400">Dremio</th>
                    <th className="pb-3 text-slate-500 text-center dark:text-slate-400">Cazpian</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    { cap: "Query Analytics", t: "yes", d: "yes", c: "yes" },
                    { cap: "ETL/Batch", t: "no", d: "no", c: "yes" },
                    { cap: "Streaming", t: "no", d: "no", c: "yes" },
                    { cap: "ML/AI", t: "limited", d: "limited", c: "yes" },
                    { cap: "Unified Governance", t: "partial", d: "built-in", c: "yes" },
                  ].map((row) => (
                    <tr key={row.cap} className="border-t border-gray-100 dark:border-slate-700">
                      <td className="py-4 pr-6 text-slate-700 dark:text-slate-300">{row.cap}</td>

                      <td className="py-4 pr-6 text-center">
                        {row.t === "yes" ? (
                          <span className="text-emerald-600 dark:text-emerald-400">✔️</span>
                        ) : row.t === "no" ? (
                          <span className="text-rose-500 dark:text-rose-400">✖️</span>
                        ) : (
                          <span className="text-slate-500 dark:text-slate-400">Limited</span>
                        )}
                      </td>

                      <td className="py-4 pr-6 text-center">
                        {row.d === "yes" ? (
                          <span className="text-emerald-600 dark:text-emerald-400">✔️</span>
                        ) : row.d === "no" ? (
                          <span className="text-rose-500 dark:text-rose-400">✖️</span>
                        ) : (
                          <span className="text-slate-500 dark:text-slate-400">Limited</span>
                        )}
                      </td>

                      <td className="py-4 text-center">
                        {row.c === "yes" ? (
                          <span className="text-emerald-600 dark:text-emerald-400">✔️</span>
                        ) : (
                          <span className="text-slate-500 dark:text-slate-400">{row.c}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="text-sm font-semibold text-cyan-800 dark:text-cyan-300">
              Strategic Advantage:{" "}
              <span className="font-normal text-slate-700 dark:text-slate-300">
                Read-write platform, unified compute/governance/cost, zero duplication
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide8;
