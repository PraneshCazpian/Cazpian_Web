import React from 'react';
import { Cloud, Server, Users, Brain, Zap, Database, Link } from 'lucide-react';

const Product = () => {
  const products = [
    {
      id: 'cloud',
      icon: <Cloud className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Cloud (Managed)',
      description: 'Launch a fully managed lakehouse in minutes on AWS or Azure. We handle scaling, security, and maintenance so your team can focus on data-driven results. Ideal for teams looking for speed, simplicity, and elasticity. Start fast, scale faster—with zero ops overhead.',
      features: ['Fully managed infrastructure', 'Auto-scaling', 'Built-in security', 'Multi-cloud support']
    },
    {
      id: 'enterprise',
      icon: <Server className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Enterprise (Self-Hosted)',
      description: 'Run Cazpian on your own infrastructure with full control. Deploy on Kubernetes in your cloud, on-prem, or hybrid environment. Customize networking, access controls, and integrations to meet strict compliance needs. You own the deployment—Cazpian powers it.',
      features: ['Full infrastructure control', 'Kubernetes deployment', 'Custom networking', 'Compliance ready']
    },
    {
      id: 'community',
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Community Edition (Free)',
      description: 'Get started for free with local Docker or Kubernetes deployments. Ideal for developers, data teams, and early-stage projects. All the core capabilities of Cazpian, with no cost and no limits to learning. Your sandbox for modern lakehouse experimentation.',
      features: ['Free forever', 'Docker & Kubernetes', 'Core capabilities', 'Perfect for learning']
    }
  ];

  const capabilities = [
    {
      id: 'semantic-fabric',
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      title: 'AI Semantic Fabric',
      description: 'Map complex schemas to intuitive business terms. Enable users to search, explore, and analyze data without writing SQL. AI-powered context bridges the gap between data engineering and decision-making. Self-service analytics, now truly self-serve.'
    },
    {
      id: 'hypersql',
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: 'HyperSQL Engine',
      description: 'Cazpian\'s high-speed engine delivers fast, reliable analytics on massive datasets. Supports ANSI SQL, vectorized execution, and intelligent caching. Engineered for concurrency, scale, and consistent response times. Just write the query—we handle the rest.'
    },
    {
      id: 'data-catalog',
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: 'Unified Data Catalog',
      description: 'A single source of truth for all your data assets—structured or unstructured. Track lineage, ownership, and metadata across sources. Integrated governance keeps sensitive data safe and discoverable. Search, audit, and manage—all from one pane.'
    },
    {
      id: 'connector-hub',
      icon: <Link className="h-10 w-10 text-indigo-600" />,
      title: 'Connector Hub',
      description: 'Seamlessly connect to cloud storage, data lakes, SaaS apps, and on-prem systems. Supports streaming, batch, and CDC pipelines. Built-in connectors reduce time-to-data and eliminate fragile ETL workflows. Wherever your data is, Cazpian brings it in.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cazpian <span className="text-indigo-600">Product Suite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the deployment that fits your needs. Same powerful platform, flexible delivery options.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deployment Options
            </h2>
            <p className="text-xl text-gray-600">
              From fully managed cloud to self-hosted enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that work across all deployment options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.id} id={capability.id} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your deployment option and start building with Cazpian today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg">
              Start Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;