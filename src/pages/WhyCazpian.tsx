import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Brain, DollarSign, Shield, Layers,} from 'lucide-react';

const WhyCazpian = () => {
  const features = [
    {
      id: "open-data",
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: "Open Data Architecture",
      what: "Cazpian is built on open standards—Apache Iceberg, Apache Arrow, and Apache Polaris—so your data stays portable, queryable, and future-proof.",
      why: "Avoid lock-in while you migrate or modernize. Keep optionality across engines, clouds, and tools.",
      seeAlso: [
        { label: "Architecture", link: "/architecture" },
        { label: "Cazpian Cloud", link: "/cazpian-cloud" },
        { label: "Cazpian Enterprise", link: "/cazpian-enterprise" }
      ],
      svg: "/vector_svg/business-plan-animate.svg"
    },
    {
      id: "ai-performance",
      icon: <Brain className="h-12 w-12 text-indigo-600" />,
      title: "AI-Driven Performance",
      what: "AI copilots assist from natural-language search to query optimization and right-sizing guidance.",
      why: "Less time spelunking schemas or hand-tuning queries; more time on outcomes.",
      seeAlso: [
        { label: "SQL Editor with AI Assistance (Cloud)", link: "/cazpian-cloud" },
        { label: "Agent Studio", link: "/agent-studio" }
      ],
      svg: "/vector_svg/developer-activity-animate.svg"
    },
    {
      id: "cost-optimization",
      icon: <DollarSign className="h-12 w-12 text-indigo-600" />,
      title: "Cost Optimization",
      what: "Scale compute and storage independently with profile-driven clusters, right-size hints, and policy-aware scheduling.",
      why: "Use what you need, when you need it—reduce waste and improve predictability.",
      seeAlso: [
        { label: "Cost Optimization & Right-Sizing", link: "/solutions" }
      ],
      svg: "/vector_svg/business-deal-animate.svg"
    },
    {
      id: "governance",
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: "Governance & Security",
      what: "Governance is foundational: RBAC/ABAC, column-level controls, lineage, audit, and policy enforcement across catalogs, queries, and access patterns.",
      why: "Consistent controls across engines prevent drift and reduce risk.",
      seeAlso: [
        { label: "Architecture", link: "/architecture" }
      ],
      svg: "/vector_svg/file-searching-animate.svg"
    },
    {
      id: "deployment",
      icon: <Layers className="h-12 w-12 text-indigo-600" />,
      title: "Deployment Flexibility",
      what: "Run fully managed (AWS today; Azure/GCP roadmap) or self-hosted on Kubernetes across cloud, hybrid, or on-prem—same experience, centralized control.",
      why: "Keep sovereignty where required; place compute next to your data; standardize globally.",
      seeAlso: [
        { label: "Cazpian Enterprise (On-prem & VPC)", link: "/cazpian-enterprise" }
      ],
      svg: "/vector_svg/low-code-development-animate.svg"
    }
  ];
  

  return (
    <div className="bg-white dark:bg-gray-900">
     {/* Hero Section */}
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side (Text Content) */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <p className="text-indigo-600 font-semibold mb-3 uppercase tracking-wide">
              Why Choose Cazpian
            </p>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Built for modern data teams—speed, intelligence, flexibility.
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Launch governed compute, unify catalogs, and add AI agents to automate engineering—so analytics and pipelines ship faster across cloud and on-prem.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              {/* Primary CTA */}
              <Link
                to="/start-free"
                className="px-8 py-4 rounded-xl font-semibold text-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Free
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/schedule-demo"
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-indigo-600 text-indigo-600 hover:bg-transparent hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Demo
              </Link>

              {/* Tertiary CTA */}
              <Link
                to="/tour"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6h8m0 0v8m0-8l-8 8"
                  />
                </svg>
                See 2-min Tour
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              Your workspace respects existing catalog permissions. No credit card required.
            </p>
          </div>

          {/* Right Side (Illustration) */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/vector_svg/business-plan-animate.svg" 
              alt="Why Choose Cazpian"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>


      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="space-y-20">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          id={feature.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-12`}
        >
          {/* Left side: Text content */}
          <div className="flex-1">
            <div className="mb-6">{feature.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {feature.title}
            </h2>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-semibold text-indigo-600">What it means:</span>{" "}
                {feature.what}
              </li>
              <li>
                <span className="font-semibold text-indigo-600">Why it matters:</span>{" "}
                {feature.why}
              </li>
              <li>
                <span className="font-semibold text-indigo-600">See also:</span>{" "}
                {feature.seeAlso.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="text-indigo-600 hover:underline ml-2"
                  >
                    {item.label}
                    {i < feature.seeAlso.length - 1 ? " ·" : ""}
                  </Link>
                ))}
              </li>
            </ul>

            <Link
              to="/contact"
              className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Right side: Image */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-8 h-80 flex items-center justify-center">
              <img
                src={feature.svg}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Comparison Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Cazpian Compares
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See why teams are choosing Cazpian over traditional solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Traditional Data Warehouses</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Vendor lock-in</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">High costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Complex setup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Limited flexibility</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl border-2 border-indigo-600 dark:border-indigo-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">Recommended</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cazpian</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Open standards (Iceberg/Arrow/Polaris)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Cost effective profiles & automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Quick deployment (Start Free or guided)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Maximum flexibility (cloud & on‑prem)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">DIY Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">High maintenance for engines, catalogs, security</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Complex integrations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Security gaps & inconsistent governance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Limited support</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 flex justify-center">
                <Link
                  to="/architecture"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition"
                >
                  Explore Architecture
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real metrics from teams using Cazpian in production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10x</div>
              <div className="text-gray-700 dark:text-gray-300">Faster Queries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">60%</div>
              <div className="text-gray-700 dark:text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">90%</div>
              <div className="text-gray-700 dark:text-gray-300">Faster initial deploymen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
              <div className="text-gray-700 dark:text-gray-300">uptime under standard SLOs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Open, governed, AI-driven and ready for Day-2 operations.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          From Spark Connect workspaces to Iceberg maintenance automation and AI agents, Cazpian helps teams move faster without sacrificing governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCazpian;