import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  BarChart3,
  Brain,
  Shield,
  Users,
  ArrowRight,
  X,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';

interface UserRole {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortSummary: string;
  topPriorities: string[];
  example: string;
  successMetrics: string[];
  capabilities: string[];
  architectureHighlights: string[];
  gradient: string;
}

const SolutionsByUserRole: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const userRoles: UserRole[] = [
    {
      id: 'data-engineers',
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: 'Data Engineers',
      shortSummary: 'Build scalable, automated ETL/ELT pipelines with seamless integration and data quality enforcement.',
      topPriorities: [
        'Scalable, automated ETL/ELT pipelines',
        'Seamless integration of hundreds of sources',
        'Data quality enforcement without bottlenecks'
      ],
      example: 'Manufacturing data engineer migrates from Hadoop to Iceberg tables with zero downtime.',
      successMetrics: [
        'Pipeline run time ↓ 40%',
        'Integration time for new source ↓ 50%'
      ],
      capabilities: [
        'Apache Iceberg & Arrow native support',
        'Real-time CDC replication',
        'Automated data quality monitoring',
        'Multi-cloud orchestration',
        'Schema evolution without downtime'
      ],
      architectureHighlights: [
        'Distributed compute engine',
        'Intelligent caching layer',
        'Kubernetes-native deployment',
        'Event-driven processing',
        'Lineage tracking & monitoring'
      ],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'data-analysts-bi',
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      title: 'Data Analysts & BI Teams',
      shortSummary: 'Self-service access to trusted datasets with fast query performance and direct BI tool connectivity.',
      topPriorities: [
        'Self-service access to trusted datasets',
        'Fast query performance without extracts',
        'Direct BI tool connectivity'
      ],
      example: 'Retail analyst runs YOY promotion impact analysis directly from lakehouse.',
      successMetrics: [
        'Time-to-insight ↓ 60%',
        'IT dependency ↓ 45%'
      ],
      capabilities: [
        'Native BI tool connectors (Tableau, Power BI, Looker)',
        'SQL workbench with IntelliSense',
        'Governed data catalog',
        'Self-service data exploration',
        'Collaborative analytics workspace'
      ],
      architectureHighlights: [
        'Semantic layer abstraction',
        'Query optimization engine',
        'Multi-dimensional modeling',
        'Row-level security',
        'Performance monitoring'
      ],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'data-scientists-ai',
      icon: <Brain className="h-12 w-12 text-white" />,
      title: 'Data Scientists & AI Teams',
      shortSummary: 'Reusable feature store for consistency with scalable model training and seamless ML tool integration.',
      topPriorities: [
        'Reusable feature store for consistency',
        'Scalable model training with GPU/CPU',
        'Seamless ML tool integration'
      ],
      example: 'Energy company predicts outages from PB-scale sensor data.',
      successMetrics: [
        'Model deployment cycle ↓ 35%',
        'Prediction accuracy ↑ 15%'
      ],
      capabilities: [
        'Feature store with versioning',
        'MLOps pipeline automation',
        'Jupyter/Databricks integration',
        'Model registry & tracking',
        'A/B testing framework'
      ],
      architectureHighlights: [
        'GPU/CPU auto-scaling',
        'Distributed training support',
        'Model serving infrastructure',
        'Feature engineering pipelines',
        'Experiment tracking system'
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'it-security-leaders',
      icon: <Shield className="h-12 w-12 text-white" />,
      title: 'IT & Security Leaders',
      shortSummary: 'Centralized governance across environments with fine-grained access controls and compliance automation.',
      topPriorities: [
        'Centralized governance across environments',
        'Fine-grained access controls and audit trails',
        'Compliance automation'
      ],
      example: 'Bank enforces GDPR and CCPA across multi-cloud deployments.',
      successMetrics: [
        'Policy violations ↓ 80%',
        'Audit prep time ↓ 50%'
      ],
      capabilities: [
        'RBAC/ABAC policy engine',
        'Data lineage & classification',
        'Encryption at rest & in transit',
        'Compliance reporting automation',
        'Centralized audit logging'
      ],
      architectureHighlights: [
        'Zero-trust security model',
        'Policy-as-code framework',
        'Multi-cloud governance',
        'Real-time monitoring',
        'Automated compliance checks'
      ],
      gradient: 'from-red-500 to-orange-600'
    },
    {
      id: 'business-executives',
      icon: <Users className="h-12 w-12 text-white" />,
      title: 'Business Executives',
      shortSummary: 'Real-time KPI visibility with lower infrastructure costs and new revenue streams from data.',
      topPriorities: [
        'Real-time KPI visibility',
        'Lower infrastructure costs',
        'New revenue streams from data'
      ],
      example: 'CEO monitors multi-channel Black Friday performance in real time.',
      successMetrics: [
        'Infrastructure cost ↓ 20%',
        'Decision turnaround time ↓ 50%'
      ],
      capabilities: [
        'Executive dashboards & alerts',
        'Business metric monitoring',
        'Cost optimization analytics',
        'Performance benchmarking',
        'Strategic planning tools'
      ],
      architectureHighlights: [
        'Real-time aggregation engine',
        'Cost allocation tracking',
        'ROI measurement framework',
        'Business intelligence layer',
        'Executive reporting suite'
      ],
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-6 w-6 text-indigo-600 mr-2" />
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Solutions by User Role</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Solutions Tailored for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Every Role</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Persona-focused solutions with clear priorities, real examples, and measurable success metrics. From data engineers to business executives, everyone gets exactly what they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-meeting"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* User Roles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Role
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Click on any role to see detailed priorities, examples, and success metrics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userRoles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-600/50 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-br ${role.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {role.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {role.title}
                  </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-6">
                  {role.shortSummary}
                </p>

                {/* Top Priorities Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center justify-center">
                    <Target className="h-4 w-4 mr-2 text-indigo-600" />
                    Top Priorities
                  </h4>
                  <div className="space-y-2">
                    {role.topPriorities.slice(0, 2).map((priority, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{priority}</span>
                      </div>
                    ))}
                    {role.topPriorities.length > 2 && (
                      <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                        +{role.topPriorities.length - 2} more...
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 group-hover:translate-x-1">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed role information */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-br ${selectedRole.gradient} rounded-xl`}>
                    {selectedRole.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedRole.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedRole.shortSummary}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Top Priorities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-indigo-600" />
                  Top Priorities
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedRole.topPriorities.map((priority, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{priority}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-purple-600" />
                  Real-World Example
                </h3>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 dark:text-gray-300 italic">"{selectedRole.example}"</p>
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Success Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedRole.successMetrics.map((metric, index) => (
                    <div key={index} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-green-700 dark:text-green-300">{metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
                  Key Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedRole.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-orange-600" />
                  Architecture Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedRole.architectureHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/book-meeting"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Schedule Demo for {selectedRole.title}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200"
              >
                  View All Solutions
              </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Empower Your Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you provide the right tools for every role in your organization. See measurable results in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/book-meeting"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Team Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsByUserRole;
