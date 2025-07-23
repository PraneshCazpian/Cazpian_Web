import React from 'react';
import { Globe, Brain, DollarSign, Shield, Layers } from 'lucide-react';

const WhyCazpian = () => {
  const features = [
    {
      id: 'open-data',
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: 'Open Data Architecture',
      description: 'Cazpian is built on open standards—Apache Iceberg, Arrow, and Polaris—ensuring complete freedom and flexibility. Your data remains portable, queryable, and future-proof, with no vendor lock-in. Whether you\'re migrating or modernizing, our open stack adapts to your evolving architecture. Stay in control without compromise.'
    },
    {
      id: 'ai-performance',
      icon: <Brain className="h-12 w-12 text-indigo-600" />,
      title: 'AI-Driven Performance',
      description: 'Cazpian infuses AI across the platform—from natural-language search to automatic query optimization. AI copilots help teams uncover insights faster, reduce repetitive work, and boost data literacy. No more combing through complex schemas or hand-tuning queries—AI handles the heavy lifting. Your analysts and engineers get to focus on outcomes, not overhead.'
    },
    {
      id: 'cost-optimization',
      icon: <DollarSign className="h-12 w-12 text-indigo-600" />,
      title: 'Cost Optimization',
      description: 'Scale compute and storage independently. Use just what you need, when you need it, and cut infrastructure waste. Cazpian optimizes workloads and minimizes cloud spend automatically. Get enterprise-grade performance without the enterprise-grade bill.'
    },
    {
      id: 'governance',
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: 'Governance & Security',
      description: 'Cazpian embeds security and governance at every layer. Define, enforce, and audit policies across catalogs, queries, and access patterns. Support RBAC/ABAC, column-level access, and full lineage without additional tools. Governance isn\'t an add-on—it\'s foundational.'
    },
    {
      id: 'deployment',
      icon: <Layers className="h-12 w-12 text-indigo-600" />,
      title: 'Deployment Flexibility',
      description: 'Deploy Cazpian your way—fully managed in AWS or Azure, or self-hosted on Kubernetes. Run across cloud, hybrid, or on-prem environments with a consistent experience. Centralized control meets decentralized execution for maximum performance and flexibility. Wherever your data lives, Cazpian runs with it.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-indigo-600">Cazpian</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern data teams who demand speed, intelligence, and flexibility without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={feature.id} id={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 opacity-20">
                        {feature.icon}
                      </div>
                      <p className="text-gray-500 italic">Visual representation</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Cazpian Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See how our open, AI-driven platform can transform your data operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCazpian;