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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Every <span className="text-indigo-600">Use Case</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From analytics acceleration to industry-specific applications, Cazpian powers data-driven success across teams and sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Accelerate your data initiatives with purpose-built capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for sector-specific challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} id={industry.id} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-indigo-100">
              See how organizations are transforming their data operations with Cazpian
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-indigo-100">Faster Query Performance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-indigo-100">Reduction in Infrastructure Costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-indigo-100">Faster Time to Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Solve Your Data Challenges?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Cazpian can accelerate your specific use case and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg">
              Book a Demo
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

export default Solutions;