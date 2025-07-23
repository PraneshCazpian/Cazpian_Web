import React from 'react';
import { BarChart3, Users, Brain, Zap, Building2, Heart, Factory, ShoppingCart, Shield } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      id: 'analytics',
      icon: <BarChart3 className="h-10 w-10 text-indigo-600" />,
      title: 'Analytics Acceleration',
      description: 'Turn slow dashboards into instant insights. Cazpian\'s engine reduces query latency while its semantic layer removes complexity. BI teams gain speed without data duplication. Modern analytics, minus the workarounds.'
    },
    {
      id: 'self-service-bi',
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: 'Self-Service BI',
      description: 'Empower every stakeholder with governed access to data. Business users get intuitive tools while IT keeps oversight. Semantic models ensure accuracy across teams. Faster decisions, fewer bottlenecks.'
    },
    {
      id: 'data-science',
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      title: 'Data Science & ML',
      description: 'Prepare, explore, and train ML-ready datasets at scale. Collaborate across teams with versioned data and notebook integration. Cazpian supports the entire ML lifecycle—from experimentation to production. No more silos between science and data.'
    },
    {
      id: 'real-time',
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: 'Real-Time Operations',
      description: 'Stream, detect, and respond—all in real-time. Cazpian handles both streaming and batch workloads in a unified platform. Power anomaly detection, alerts, and live metrics with up-to-date data. Act now, not hours later.'
    }
  ];

  const industries = [
    {
      id: 'financial',
      icon: <Building2 className="h-10 w-10 text-indigo-600" />,
      title: 'Financial Services',
      description: 'Ensure compliance with full auditability and lineage tracking. Analyze real-time transactions for fraud, risk, and exposure. Fine-grained security and high-speed queries support trading, ops, and compliance teams. Secure speed, built for finance.'
    },
    {
      id: 'healthcare',
      icon: <Heart className="h-10 w-10 text-indigo-600" />,
      title: 'Healthcare',
      description: 'Integrate EHR, claims, and IoT data for better patient outcomes. Govern PHI with strict access control and audit logs. Accelerate research and predictive care with secure ML pipelines. Healthcare-ready by design.'
    },
    {
      id: 'manufacturing',
      icon: <Factory className="h-10 w-10 text-indigo-600" />,
      title: 'Manufacturing',
      description: 'Unify machine data, supply chain events, and sensor logs. Predict failures, optimize yield, and minimize downtime. Cazpian enables smarter factories through streaming and batch analytics. Operational intelligence, built in.'
    },
    {
      id: 'retail',
      icon: <ShoppingCart className="h-10 w-10 text-indigo-600" />,
      title: 'Retail',
      description: 'Analyze inventory, POS, and customer behavior in real-time. Enable personalized experiences and demand forecasting from a single platform. Cazpian connects and enriches retail data without siloed systems. Boost margin and customer loyalty together.'
    },
    {
      id: 'public-sector',
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      title: 'Public Sector',
      description: 'Support transparency, efficiency, and secure data collaboration. Open standards simplify procurement and long-term support. Multi-agency isolation and policy enforcement ensure compliance. Deliver services powered by clean, governed data.'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Solutions for Every <span className="text-indigo-600">Use Case</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From analytics acceleration to industry-specific applications, Cazpian powers data-driven success across teams and sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Accelerate your data initiatives with purpose-built capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tailored solutions for your industry's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} id={industry.id} className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Common Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how teams are using Cazpian to solve real problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Warehouse Modernization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Migrate from legacy data warehouses to a modern lakehouse architecture. Reduce costs, improve performance, and unlock new capabilities with open standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">50% cost reduction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">10x faster queries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Zero vendor lock-in</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Build real-time dashboards and alerts that respond to events as they happen. Stream data from multiple sources and analyze it instantly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Sub-second latency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Unified streaming & batch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Automatic scaling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Self-Service Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Empower business users with governed access to data. Let them explore and analyze without waiting for IT or writing complex SQL.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Natural language queries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Role-based access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Audit trails</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Machine Learning Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Streamline the entire ML lifecycle from data preparation to model deployment. Collaborate across teams with versioned data and reproducible workflows.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Feature engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Model versioning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Production deployment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Solve Your Data Challenges?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who've already transformed their data operations with Cazpian.
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

export default Solutions;