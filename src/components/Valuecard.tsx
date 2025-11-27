import { Zap, Layers, Shield, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const ValuePillars = () => {
  const pillars = [
    {
      id: 1,
      icon: <Zap className="h-12 w-12 text-indigo-600" />,
      title: "Performance & Cost Efficiency",
      description:
        "Run demanding analytics and AI with efficient execution, smart caching, and elastic scale.",
    },
    {
      id: 2,
      icon: <Layers className="h-12 w-12 text-indigo-600" />,
      title: "Open by Design",
      description:
        "Standardize on open table and columnar formats for portability across tools and clouds.",
    },
    {
      id: 3,
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: "Governance & Trust",
      description:
        "Fine-grained access control, lineage, and auditing help keep data secure and compliant.",
    },
    {
      id: 4,
      icon: <Code2 className="h-12 w-12 text-indigo-600" />,
      title: "Developer Velocity",
      description:
        "SQL, notebooks, APIs, and AI-assisted workflows accelerate delivery from idea to impact.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Value Pillars
        </h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
