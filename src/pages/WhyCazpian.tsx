import React from 'react';
import { Globe, Brain, DollarSign, Shield, Layers } from 'lucide-react';

const WhyCazpian = () => {
  const features = [
    {
      id: 'open-data',
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: 'Open Data Architecture',
      description: 'Cazpian is built on open standards—Apache Iceberg, Arrow, and Polaris—ensuring complete freedom and flexibility. Your data remains portable, queryable, and future-proof, with no vendor lock-in. Whether you\'re migrating or modernizing, our open stack adapts to your evolving architecture. Stay in control without compromise.',
      svg: '/vector_svg/business-plan-animate.svg'
    },
    {
      id: 'ai-performance',
      icon: <Brain className="h-12 w-12 text-indigo-600" />,
      title: 'AI-Driven Performance',
      description: 'Cazpian infuses AI across the platform—from natural-language search to automatic query optimization. AI copilots help teams uncover insights faster, reduce repetitive work, and boost data literacy. No more combing through complex schemas or hand-tuning queries—AI handles the heavy lifting. Your analysts and engineers get to focus on outcomes, not overhead.',
      svg: '/vector_svg/developer-activity-animate.svg'
    },
    {
      id: 'cost-optimization',
      icon: <DollarSign className="h-12 w-12 text-indigo-600" />,
      title: 'Cost Optimization',
      description: 'Scale compute and storage independently. Use just what you need, when you need it, and cut infrastructure waste. Cazpian optimizes workloads and minimizes cloud spend automatically. Get enterprise-grade performance without the enterprise-grade bill.',
      svg: '/vector_svg/business-deal-animate.svg'
    },
    {
      id: 'governance',
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: 'Governance & Security',
      description: 'Cazpian embeds security and governance at every layer. Define, enforce, and audit policies across catalogs, queries, and access patterns. Support RBAC/ABAC, column-level access, and full lineage without additional tools. Governance isn\'t an add-on—it\'s foundational.',
      svg: '/vector_svg/file-searching-animate.svg'
    },
    {
      id: 'deployment',
      icon: <Layers className="h-12 w-12 text-indigo-600" />,
      title: 'Deployment Flexibility',
      description: 'Deploy Cazpian your way—fully managed in AWS or Azure, or self-hosted on Kubernetes. Run across cloud, hybrid, or on-prem environments with a consistent experience. Centralized control meets decentralized execution for maximum performance and flexibility. Wherever your data lives, Cazpian runs with it.',
      svg: '/vector_svg/low-code-development-animate.svg'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {content.hero_title || 'Why Choose'} <span className="text-indigo-600">Cazpian</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0">
                {content.hero_subtitle || 'Built for modern data teams who demand speed, intelligence, and flexibility without compromise.'}
              </p>
            </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={feature.id} id={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span className="text-gray-700 dark:text-gray-300">Open standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Cost-effective</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Quick deployment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Maximum flexibility</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">DIY Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">High maintenance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Complex integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Security risks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Limited support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-gray-700 dark:text-gray-300">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
              <div className="text-gray-700 dark:text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Cazpian Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See how our open, AI-driven platform can transform your data operations.
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