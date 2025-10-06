import React from 'react';
import { Cloud, Server, Users, Brain, Zap, Database, Link, Layers, Search, Shield, Settings, BarChart3, AlertCircle, Clock } from 'lucide-react';

const Product = () => {
  const products = [
    {
      id: 'cloud',
      icon: <Cloud className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Cloud (Managed)',
      description: 'Launch a fully managed lakehouse in minutes on AWS or Azure. We handle scaling, security, and maintenance so your team can focus on data-driven results. Ideal for teams looking for speed, simplicity, and elasticity. Start fast, scale faster—with zero ops overhead.',
      features: ['Fully managed infrastructure', 'Auto-scaling', 'Built-in security', 'Multi-cloud support'],
      svg: '/vector_svg/business-plan-animate.svg'
    },
    {
      id: 'enterprise',
      icon: <Server className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Enterprise (Self-Hosted)',
      description: 'Run Cazpian on your own infrastructure with full control. Deploy on Kubernetes in your cloud, on-prem, or hybrid environment. Customize networking, access controls, and integrations to meet strict compliance needs. You own the deployment—Cazpian powers it.',
      features: ['Full infrastructure control', 'Kubernetes deployment', 'Custom networking', 'Compliance ready'],
      svg: '/vector_svg/developer-activity-animate.svg'
    },
    {
      id: 'community',
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Agent Studio (Free)',
      description: 'Get started for free with local Docker or Kubernetes deployments. Ideal for developers, data teams, and early-stage projects. All the core capabilities of Cazpian, with no cost and no limits to learning. Your sandbox for modern lakehouse experimentation.',
      features: ['Free forever', 'Docker & Kubernetes', 'Core capabilities', 'Perfect for learning', 'Create Precise',' Data-Driven Agents' ],
      svg: '/vector_svg/programmer-animate.svg'
    }
  ];

  const capabilities = [
    {
      id: 'semantic-fabric',
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      title: 'AI Semantic Fabric',
      description: 'Map complex schemas to intuitive business terms. Enable users to search, explore, and analyze data without writing SQL. AI-powered context bridges the gap between data engineering and decision-making. Self-service analytics, now truly self-serve.',
      svg: '/Vector/data-analysis-not-css.svg'
    },
    {
      id: 'hypersql',
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: 'HyperSQL Engine',
      description: 'Cazpian\'s high-speed engine delivers fast, reliable analytics on massive datasets. Supports ANSI SQL, vectorized execution, and intelligent caching. Engineered for concurrency, scale, and consistent response times. Just write the query—we handle the rest.',
      svg: '/Vector/development.svg'
    },
    {
      id: 'data-catalog',
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: 'Unified Data Catalog',
      description: 'A single source of truth for all your data assets—structured or unstructured. Track lineage, ownership, and metadata across sources. Integrated governance keeps sensitive data safe and discoverable. Search, audit, and manage—all from one pane.',
      svg: '/Vector/data-.svg'
    },
    {
      id: 'connector-hub',
      icon: <Link className="h-10 w-10 text-indigo-600" />,
      title: 'Connector Hub',
      description: 'Seamlessly connect to cloud storage, data lakes, SaaS apps, and on-prem systems. Supports streaming, batch, and CDC pipelines. Built-in connectors reduce time-to-data and eliminate fragile ETL workflows. Wherever your data is, Cazpian brings it in.',
      svg: '/Vector/strategic-consulting-not-css.svg'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Cazpian <span className="text-indigo-600">Product Suite</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Choose the deployment that fits your needs. Same powerful platform, flexible delivery options.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/vector_svg/developer-activity-animate.svg" 
                alt="Cazpian Product Suite"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metalake Layer Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-indigo-900 dark:to-purple-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl mb-6">
              <Layers className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Metalake layer — one source of truth
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unified metadata & governance platform that serves as the single source of truth for your entire data ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Unified metadata & governance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                One place for orgs, catalogs, roles, and policies; engines read from a single source of truth.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Discovery & lineage
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover data and AI assets with audit-ready lineage and access logs, and tag data assets for faster search.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Multi-tenant boundaries
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Org/workspace isolation with policies applied once and respected everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogs Unified Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl mb-6">
              <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Catalogs, unified
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Use any catalog with the Workspace Analytics Engine and run federated queries via Apache Spark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900 border border-blue-200 dark:border-blue-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <img src="/aws-s3.svg" alt="Storage" className="w-8 h-8 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Storage Catalogs</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Configure S3, MinIO or any S3-compatible object storages, Google Cloud Storage, or Azure Storage as catalogs and query alongside other sources.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-green-900 border border-green-200 dark:border-green-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <img src="/Polaris-p.svg" alt="Fileset" className="w-8 h-8 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fileset Catalogs</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Apache Gravitino filesets: represent objects as catalogs → namespaces → filesets → files; great for ML/AI data access.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-purple-900 border border-purple-200 dark:border-purple-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <img src="/icberg.svg" alt="Iceberg" className="w-8 h-8 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Iceberg Catalogs</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All Iceberg types (JDBC/Hive/REST) as external catalogs—or choose Cazpian Managed Polaris with policies, governance, and RBAC.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-orange-900 border border-orange-200 dark:border-orange-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-orange-600 dark:text-orange-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Relational Catalogs</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Connect any JDBC database (Postgres, MySQL, Oracle, and more) and federate via Spark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iceberg Performance Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-blue-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-2xl mb-6">
              <Settings className="h-8 w-8 text-slate-600 dark:text-slate-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Iceberg performance & maintenance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Policy-driven maintenance with reporting to keep queries fast and storage lean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Maintenance policies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Compaction, snapshot expiration, orphan-file cleanup, and metadata compaction.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Performance reporting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Read/write metrics, table & datafile stats, pruning effectiveness, and cost signals.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Automation & SLAs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Schedules, guardrails, and alerts to keep tables optimized over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Deployment Options
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From fully managed cloud to self-hosted enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="mb-6">
                  <img 
                    src={product.svg} 
                    alt={product.title}
                    className="w-full h-32 object-contain"
                  />
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful features that work across all deployment options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.id} id={capability.id} className="bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {capability.description}
                </p>
                <div className="flex justify-center">
                  <img 
                    src={capability.svg} 
                    alt={capability.title}
                    className="w-full h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Pay for what you use, scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Community */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Community</h3>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Free</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for learning and small projects</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Up to 10GB storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Community support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Core features</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Get Started Free
              </button>
            </div>

            {/* Cloud */}
            <div className="bg-white dark:bg-gray-800 border-2 border-indigo-600 dark:border-indigo-500 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Cloud</h3>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">$0.50/GB</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Fully managed, auto-scaling</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Unlimited storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Auto-scaling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">24/7 support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">All features</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Custom</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Self-hosted with full control</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">On-premise deployment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Dedicated support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">SLA guarantees</span>
                </li>
              </ul>
              <button className="w-full border border-indigo-600 text-indigo-600 dark:text-indigo-400 py-3 px-6 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the deployment option that best fits your needs and start transforming your data operations today.
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

export default Product;