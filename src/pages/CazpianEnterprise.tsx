import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Shield, 
  Zap, 
  CheckCircle, 
  Globe,
  Database
} from 'lucide-react';

const CazpianEnterprise: React.FC = () => {
  const keyCapabilities = [
    {
      icon: <Server className="h-8 w-8 text-indigo-600" />,
      title: 'Total Infrastructure Ownership',
      description: 'Take full command of your deployment stack. Cazpian Enterprise gives you the freedom to customize compute, storage, networking, and data governance to meet your unique operational and regulatory requirements.'
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Kubernetes-Native Flexibility',
      description: 'Deploy, scale, and manage Cazpian using Kubernetes for a modern, container-native experience. Ensure consistency across development, staging, and production with automation at every step.'
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Enterprise Security & Network Customization',
      description: 'Design your own security perimeter and control how your data flows. Cazpian Enterprise enables granular configuration of access controls, traffic policies, and authentication mechanisms.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
      title: 'Built for Compliance',
      description: 'Whether you operate in healthcare, finance, government, or other regulated sectors, Cazpian Enterprise is architected to help meet your compliance mandates with confidence.'
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Seamless Enterprise Integration',
      description: 'Cazpian fits easily into your broader data ecosystem, integrating with your BI, AI/ML, and orchestration tools—so teams can work without disruption.'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Multi-Environment Deployment',
      description: 'Deploy on your choice of infrastructure: bare metal, VMs, private cloud, or hybrid cloud. Control your data lifecycle, encryption standards, and file formats.'
    }
  ];

  const benefits = [
    'Organizations requiring strict data sovereignty and compliance',
    'Enterprises with significant on-prem or private cloud investments',
    'Teams operating in hybrid or multi-cloud environments',
    'Businesses that need fine-grained control without compromising on performance or modern data capabilities'
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cazpian Enterprise <span className="text-indigo-600">(Self-Hosted Lakehouse Platform)</span>
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
                  Self-Hosted Lakehouse Platform
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Deploy anywhere Control everything Modern lakehouse performanceon your infrastructure
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cazpian Enterprise is purpose-built for organizations that demand full control over their data infrastructure. Whether you're operating in a private cloud, on-premises data center, or across hybrid environments, Cazpian empowers you to run a high-performance lakehouse under your governance—without compromising scalability, security, or integration flexibility.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ideal for compliance-driven industries and advanced enterprise use cases, Cazpian Enterprise gives you the tools to securely manage, monitor, and optimize your data environment on your terms.
                </p>
              </div>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">🔧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Full Control</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Your infrastructure, your policies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Enterprise Security</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">SOC 2, HIPAA, GDPR compliant</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">☁️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Multi-Environment</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">On-prem, private & hybrid cloud</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Kubernetes Native</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Modern container deployment</p>
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
                      <span className="text-white text-2xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Control</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Deploy on your infrastructure with full control over security, compliance, and performance.
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

      {/* Who Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Who Benefits from Cazpian Enterprise?
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
            Ready to Take Control?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Cazpian Enterprise delivers the freedom to tailor your lakehouse deployment while benefiting from the full performance, openness, and innovation of Cazpian's modern data platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/book-meeting"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Enterprise Demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CazpianEnterprise;
