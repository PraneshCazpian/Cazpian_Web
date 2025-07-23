import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Brain, BarChart3, Users } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const HomePage = () => {
  const { siteConfig } = useAdmin();

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "AI-Driven Performance",
      description: "Natural language queries, automatic optimization, and intelligent insights powered by AI."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Open Data Architecture",
      description: "Built on Apache Iceberg, Arrow, and Polaris. No vendor lock-in, complete portability."
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Lightning Fast",
      description: "HyperSQL engine delivers consistent performance at scale with intelligent caching."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Enterprise Security",
      description: "Built-in governance, RBAC/ABAC, and full lineage tracking across all data assets."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      title: "Cost Optimization",
      description: "Scale compute and storage independently. Pay only for what you use."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Self-Service Analytics",
      description: "Empower every team member with intuitive, governed access to data insights."
    }
  ];

  const trustBadges = [
    "Apache Iceberg", "Apache Arrow", "Apache Polaris", "AWS", "Azure", "Kubernetes"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {siteConfig.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/book-meeting"
                className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ backgroundColor: siteConfig.primaryColor }}
              >
                {siteConfig.ctaPrimary}
              </Link>
              <Link
                to="/book-meeting"
                className="border-2 px-8 py-4 rounded-lg hover:opacity-80 transition-all duration-200 font-semibold text-lg"
                style={{ 
                  borderColor: siteConfig.primaryColor, 
                  color: siteConfig.primaryColor 
                }}
              >
                {siteConfig.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white dark:bg-gray-900 py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8 font-medium">Trusted by teams using</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustBadges.map((badge) => (
              <div key={badge} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Teams Choose Cazpian
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern data teams need more than just storage. They need intelligence, speed, and flexibility built in.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Deploy Your Way
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Whether you need fully managed cloud, self-hosted enterprise, or free community edition - Cazpian adapts to your infrastructure needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Cazpian Cloud</h4>
                    <p className="text-gray-600 dark:text-gray-400">Fully managed on AWS or Azure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Cazpian Enterprise</h4>
                    <p className="text-gray-600 dark:text-gray-400">Self-hosted on your infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Community Edition</h4>
                    <p className="text-gray-600 dark:text-gray-400">Free for developers and small teams</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/product" 
                className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold mt-6 group"
              >
                <span>Explore all products</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="mb-2 text-green-400">$ cazpian deploy --cloud aws</div>
                <div className="text-green-400">✓ Provisioning lakehouse...</div>
                <div className="text-green-400">✓ Configuring AI semantic layer...</div>
                <div className="text-green-400">✓ Setting up connectors...</div>
                <div className="text-green-400">✓ Cazpian ready in 3 minutes!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Platform?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking teams who've already made the switch to faster, smarter, and more cost-effective data analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/book-meeting"
              className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              {siteConfig.ctaPrimary}
            </Link>
            <Link
              to="/book-meeting"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg"
            >
              {siteConfig.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;