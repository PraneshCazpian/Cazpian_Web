import React from 'react';
import { Settings, TrendingUp, Shield, Globe, Link, Zap, CheckCircle } from 'lucide-react';

const CazpianCloud = () => {
  const keyCapabilities = [
    {
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
      title: 'End-to-End Managed Infrastructure',
      description: 'Forget about clusters, provisioning, or patching. Cazpian Cloud automates deployment, scaling, maintenance, and upgrades—so your team stays focused on delivering outcomes, not maintaining infrastructure.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: 'Intelligent Auto-Scaling & Elastic Compute',
      description: 'Cazpian dynamically adjusts compute power in real time based on your workload—ensuring optimal performance for everything from BI dashboards to complex AI/ML pipelines, while keeping costs in check.'
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Robust, Built-In Security',
      description: 'Enterprise-grade protection with encryption at rest and in transit, fine-grained role-based access control, SSO support (Okta, Azure AD), and full audit trails. Cazpian is compliant with major standards including SOC 2, HIPAA, and GDPR.'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Multi-Cloud & Hybrid Flexibility',
      description: 'Run across AWS and Azure with a unified experience. Cazpian connects effortlessly with on-premises and cloud data sources, enabling seamless hybrid architectures and cross-region deployments.'
    },
    {
      icon: <Link className="h-8 w-8 text-indigo-600" />,
      title: 'Seamless Integration with Your Stack',
      description: 'Out-of-the-box compatibility with popular tools like Power BI, Tableau, dbt, Jupyter, and Apache Arrow. Use our open APIs and standard connectors to plug into your existing ecosystem—no rework, no lock-in.'
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Accelerated Time-to-Insight',
      description: 'Get started in minutes, not weeks. Cazpian auto-discovers data, generates metadata, and optimizes performance using intelligent indexing and caching—so you can start querying and analyzing faster than ever.'
    }
  ];

  const benefits = [
    'Start fast. Scale on demand. Stay secure—without lifting a finger.',
    'Cazpian Cloud gives you the simplicity of SaaS with the power of a next-generation lakehouse architecture—so your data teams can move at the speed of business.'
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cazpian Cloud <span className="text-indigo-600">(Managed Lakehouse Platform)</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-gray-700/50 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Main Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Managed Lakehouse Platform
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Launch a production-ready, fully managed data lakehouse in minutes
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cazpian Cloud simplifies the complexity of modern data infrastructure. It provides a powerful, scalable, and secure lakehouse environment—without the burden of infrastructure management.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Whether you're processing terabytes or petabytes of structured or semi-structured data, Cazpian Cloud delivers high-performance SQL and machine learning workloads at scale—seamlessly and efficiently.
                </p>
              </div>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Lightning Fast</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deploy in minutes, not weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Enterprise Ready</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">SOC 2, HIPAA, GDPR compliant</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">☁️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Multi-Cloud</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AWS & Azure support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Auto-Scaling</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Intelligent resource management</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-white text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ready in Minutes</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      No complex setup required. Get your lakehouse running on AWS or Azure with just a few clicks.
                    </p>
                    <div className="flex justify-center space-x-2 pt-4">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyCapabilities.map((capability, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cazpian Cloud Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Cazpian Cloud?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 mb-6">
                <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Launch your production-ready lakehouse in minutes and start focusing on insights, not infrastructure.
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

export default CazpianCloud;
