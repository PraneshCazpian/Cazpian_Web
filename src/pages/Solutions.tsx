import React from 'react';
import { BarChart3, Users, Brain, Zap, Building2, Heart, Factory, ShoppingCart, Shield, ArrowRight, Sparkles, Workflow, Database, Code, Terminal, Eye, Search, ExternalLink, Play, Settings, Monitor, FileText, GitBranch, Sparkles2, Layers, Network, BarChart, TrendingUp, CheckCircle, Clock, Star } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import SVGIllustration from '../components/SVGIllustration';

const Solutions = () => {
  const { solutionsContent } = useAdmin();

  // Icon mapping function
  const getIcon = (iconName: string) => {
    const iconMap = {
      BarChart3: <BarChart3 className="h-10 w-10 text-indigo-600" />,
      Users: <Users className="h-10 w-10 text-indigo-600" />,
      Brain: <Brain className="h-10 w-10 text-indigo-600" />,
      Zap: <Zap className="h-10 w-10 text-indigo-600" />,
      Building2: <Building2 className="h-10 w-10 text-indigo-600" />,
      Heart: <Heart className="h-10 w-10 text-indigo-600" />,
      Factory: <Factory className="h-10 w-10 text-indigo-600" />,
      ShoppingCart: <ShoppingCart className="h-10 w-10 text-indigo-600" />,
      Shield: <Shield className="h-10 w-10 text-indigo-600" />
    };
    return iconMap[iconName as keyof typeof iconMap] || <BarChart3 className="h-10 w-10 text-indigo-600" />;
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Enhanced Hero Section with SVG */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20 overflow-hidden">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="h-6 w-6 text-indigo-600 mr-2" />
                <span className="text-indigo-600 font-semibold">Enterprise Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {solutionsContent.heroTitle.split('Use Case').map((part, index) => (
                  <React.Fragment key={index}>
                    {part.trim()}
                    {index < solutionsContent.heroTitle.split('Use Case').length - 1 && (
                      <span className="text-indigo-600">Use Case</span>
                    )}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl lg:max-w-none mb-8">
                {solutionsContent.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200 font-semibold text-lg">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <SVGIllustration 
                  name="strategic-consulting" 
                  width={400} 
                  height={400}
                  animated={true}
                  hoverEffect={true}
                  className="opacity-90"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Workflow className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                How it works
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Three steps to governed analytics on your cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                    <Database className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect your catalogs
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Storage, Fileset, Iceberg (incl. managed Polaris), and Relational. Bring your own buckets, keys, and JDBC.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Launch compute (Spark, Trino, Flink)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Metalake catalogs auto-available in engines; Spark Connect workspaces or Spark jobs/streams via profiles and policies.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Apply governance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Policies, monitoring, audit trails, automated maintenance and rollbacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SQL Editor with AI Assistance Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Code className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                SQL Editor with AI Assistance
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Rich editor connected to T-shirt sized Analytics Engine clusters with end-to-end AI help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Brain className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Text-to-SQL & Prepared Questions</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Generate SQL from natural language, auto-draft prepared questions, and refine prompts inline.</p>
              </div>

              <div className="group bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Settings className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Diagnostics & Optimization</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Query failure analysis, plan recommendations, and compute resource optimization suggestions.</p>
              </div>

              <div className="group bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Monitor className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Observability & Insights</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Spark execution metrics & lineage, result-set analysis with AI, and instant insights summaries.</p>
              </div>
            </div>

            {/* Right Column - Additional Features */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Iceberg-aware Performance</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">AI recommendations for table stats, partition/sort hints, and pruning to improve read performance.</p>
              </div>

              <div className="group bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BarChart className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Right-sizing & Cost</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Cluster T-shirt sizing guidance (executors/CPU/memory) with cost impact estimates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web IDE & Notebooks Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-indigo-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Web IDE & Notebooks (coming soon)
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A full VS Code–style experience in the browser—polyglot notebooks on governed, right-sized compute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">VS Code-style editor</h3>
                <p className="text-gray-600 dark:text-gray-300">Tabs, terminals, Git, and smart autocomplete for SQL, Python, and Scala.</p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Polyglot notebooks</h3>
                <p className="text-gray-600 dark:text-gray-300">Mix SQL & code, preview DataFrames, and promote notebooks to scheduled jobs.</p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI pair-programmer</h3>
                <p className="text-gray-600 dark:text-gray-300">Text-to-code, error explain, plan recommendations, and instant visualizations.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center mx-auto">
              Join the Notebooks Preview
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* BI Connectivity Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Network className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                BI Connectivity
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect your favorite BI tools to governed data—without new silos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-xl border border-indigo-200 dark:border-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">JDBC & ODBC drivers</h3>
                <p className="text-gray-600 dark:text-gray-300">Works with Tableau, Power BI, Excel, and more via a single endpoint.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Fast & reliable</h3>
                <p className="text-gray-600 dark:text-gray-300">Columnar transport, streaming results, and query cancel for large dashboards.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Governed access</h3>
                <p className="text-gray-600 dark:text-gray-300">RBAC, policies, and audit from the metalake—consistent across engines.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center mx-auto">
              See BI setup guides
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Browse & Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50 to-blue-50 dark:from-gray-800 dark:via-indigo-900 dark:to-blue-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Eye className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Browse & Preview
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              End-to-end catalog explorer with Iceberg details and data previews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">End-to-end navigation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Catalog → Namespace → Table / Fileset → Files, with permissions and audit.</p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Iceberg details</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Schemas, snapshots, properties, partition/sort specs, and operations history.</p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Data preview</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Preview CSV, JSON, Parquet, ORC, and Avro with schema explorer and sampling.</p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Tagging & Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Search across catalogs with business tags and keywords; quickly find tables, filesets, and views.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Solutions Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <SVGIllustration name="data-analysis" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Core Solutions
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Accelerate your data initiatives with purpose-built capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsContent.solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(solution.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <SVGIllustration name="user-research" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Industry Solutions
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for your industry's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsContent.industries.map((industry) => (
              <div key={industry.id} id={industry.id} className="group relative bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(industry.icon)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-semibold flex items-center">
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <SVGIllustration name="visual-data" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Common Use Cases
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how teams are using Cazpian to solve real problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutionsContent.useCases.map((useCase, index) => (
              <div key={useCase.id} className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <SVGIllustration 
                    name={index === 0 ? "data-report" : "research-paper"} 
                    width={80} 
                    height={80}
                    className="text-indigo-600"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white overflow-hidden">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="cta-grid" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cta-grid)" />
          </svg>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <SVGIllustration name="development" width={64} height={64} className="text-white opacity-80" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {solutionsContent.ctaSection.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {solutionsContent.ctaSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center">
              {solutionsContent.ctaSection.primaryButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              {solutionsContent.ctaSection.secondaryButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;