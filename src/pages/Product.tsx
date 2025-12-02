import React from 'react';
import Valuecard from '../components/Valuecard'
import { Link } from "react-router-dom";
import { Link as LinkIcon, Cloud, Network, FolderTree, FileSearch, Server, Users, Brain, Zap, Database, Layers, Search, Shield, Settings, BarChart3, AlertCircle, Clock } from 'lucide-react';
import HeroButtons from '../components/btn';
import { Helmet } from 'react-helmet-async';
import Diagram1 from '../components/Diagram1';
import Diagram2 from '../components/Diagram2';

const Product = () => {
  const products = [
    {
      id: 'cloud',
      icon: <Cloud className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Cloud — Managed Lakehouse Platform',
      description:
        'Launch a production-ready, fully managed data lakehouse in minutes. Lightning-fast, enterprise-ready, multi-cloud (AWS & Azure), and auto-scaling by design.',
      features: [
        'Fully managed infrastructure',
        'Auto-scaling by design',
        'Enterprise-ready',
        'Multi-cloud (AWS & Azure)'
      ],
      svg: '/vector_svg/business-plan-animate.svg',
      primaryCta: { label: 'Start Free', link: '/cazpian-cloud' },
      secondaryCta: { label: 'Explore →', link: '/cazpian-cloud' }
    },
    {
      id: 'enterprise',
      icon: <Server className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Enterprise — Self-Hosted Lakehouse Platform',
      description:
        'Deploy anywhere and control everything—on-prem, private cloud, or hybrid. Kubernetes-native, multi-environment, and compliance-ready.',
      features: [
        'Full infrastructure control',
        'Kubernetes deployment',
        'Custom networking',
        'Compliance ready'
      ],
      svg: '/vector_svg/developer-activity-animate.svg',
      primaryCta: { label: 'Talk to Sales', link: '/cazpian-enterprise' },
      secondaryCta: { label: 'Explore →', link: '/cazpian-enterprise' }
    },
    {
      id: 'agent-studio',
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: 'Cazpian Agent Studio — AI Agents (Free version available)',
      description:
        'Design, deploy, and manage intelligent agents that operate directly on your governed data. No-code/low-code with pro extensibility.',
      features: [
        'Free version available',
        'No-code/low-code design',
        'Pro extensibility',
        'Data-governed AI agents'
      ],
      svg: '/vector_svg/programmer-animate.svg',
      primaryCta: { label: 'Start Building', link: '/agent-studio' },
      secondaryCta: { label: 'Explore →', link: '/agent-studio' }
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
      icon: <LinkIcon className="h-10 w-10 text-indigo-600" />,
      title: 'Connector Hub',
      description: 'Seamlessly connect to cloud storage, data lakes, SaaS apps, and on-prem systems. Supports streaming, batch, and CDC pipelines. Built-in connectors reduce time-to-data and eliminate fragile ETL workflows. Wherever your data is, Cazpian brings it in.',
      svg: '/Vector/strategic-consulting-not-css.svg'
    }
  ];

  const features = [
    {
      id: 1,
      icon: <Database className="h-12 w-12 text-indigo-600" />,
      title: "SQL Editor with AI Assistance",
      description:
        "Text-to-SQL, prepared questions, diagnostics, optimization, insights, and cost guidance.",
    },
    {
      id: 2,
      icon: <Search className="h-12 w-12 text-indigo-600" />,
      title: "Tagging & Discovery",
      description:
        "Business tags and global search across tables, filesets, and views.",
    },
  ];

  const Bi = [
    {
      id: 1,
      icon: <Network className="h-10 w-10 text-indigo-600" />,
      title: "JDBC & ODBC drivers",
      description:
        "Works with Tableau, Power BI, Excel, and more via a single endpoint.",
    },
    {
      id: 2,
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: "Fast & reliable",
      description:
        "Columnar transport, streaming results, and query cancel for large dashboards.",
    },
    {
      id: 3,
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      title: "Governed access",
      description:
        "RBAC, policies, and audit from the metalake—consistent across engines.",
    },
  ];

  const preview = [
    {
      id: 1,
      icon: <FolderTree className="h-10 w-10 text-indigo-600" />,
      title: "End-to-end navigation",
      description:
        "Catalog → Namespace → Table / Fileset → Files, with permissions and audit trails.",
    },
    {
      id: 2,
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: "Iceberg details",
      description:
        "Schemas, snapshots, properties, partition & sort specs, and operations history.",
    },
    {
      id: 3,
      icon: <FileSearch className="h-10 w-10 text-indigo-600" />,
      title: "Data preview",
      description:
        "Preview CSV, JSON, Parquet, ORC, and Avro with schema explorer and sampling support.",
    },
    {
      id: 4,
      icon: <Search className="h-10 w-10 text-indigo-600" />,
      title: "Tagging & Discovery",
      description:
        "Search across catalogs using business tags and keywords; quickly find tables, filesets, and views.",
    },
  ];
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cazpian Cloud",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "Contact for Pricing",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "12"
    },
    "url": "https://cazpian.ai/products/cloud",
    "description": "Cazpian Cloud is a managed lakehouse platform built on Apache Iceberg with governed compute and AI agents for enterprise analytics."
  };

  return (
    <>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </Helmet>

      <div className="bg-white dark:bg-gray-900">
        <section className="relative overflow-hidden bg-[#f8faff] dark:bg-gray-900">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e9ff_1px,transparent_1px),linear-gradient(to_bottom,#e5e9ff_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none dark:hidden"></div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Left Text Section */}
            <div>
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600 mb-4">
                Product Overview
              </span>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Products <span className="text-indigo-600">&nbsp;built for speed, governance, and AI.</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl">
                Choose a fully managed lakehouse, deploy it yourself, or add AI agents on top—without
                sacrificing open standards or control.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all">
                  Explore Products →
                </button>
                <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 px-6 py-3 rounded-xl font-medium transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <img
                src="/vector_svg/developer-activity-animate.svg"
                alt="Product illustration"
                className="w-72 sm:w-80 md:w-96 lg:w-[420px] h-auto mx-auto lg:mx-0 drop-shadow-xl"
              />
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

        {/* Platform Features */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Platform Features (Highlights)
            </h2>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Inline CTA */}
            <div className="mt-12">
              <Link
                to="/docs"
                className="inline-flex items-center text-indigo-600 font-semibold text-lg hover:text-indigo-700 transition-colors"
              >
                See Docs →
              </Link>
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

        <Valuecard></Valuecard>

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
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Link
                      to={product.primaryCta.link}
                      className="flex-1 text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
                    >
                      {product.primaryCta.label}
                    </Link>
                    <Link
                      to={product.secondaryCta.link}
                      className="flex-1 text-center border border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
                    >
                      {product.secondaryCta.label}
                    </Link>
                  </div>

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

        {/* Microcopy */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
              Microcopy <span className="text-indigo-600">Library</span>
            </h2>

            {/* Quotes Container */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Quote 1 */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-indigo-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  “A specialist will reach out within one business day.”
                </p>
              </div>

              {/* Quote 2 */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-indigo-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  “We’ll map the demo to your stack and use cases.”
                </p>
              </div>

              {/* Quote 3 */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-indigo-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  “Start with a small pilot and expand as value grows.”
                </p>
              </div>
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

        <Diagram1 />
        <Diagram2 />

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
    </>
  );
};

export default Product;