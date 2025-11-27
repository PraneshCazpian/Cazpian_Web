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
import { motion } from 'framer-motion';

const CazpianEnterprise: React.FC = () => {
  const keyCapabilities = [
    {
      icon: <Server className="h-8 w-8 text-indigo-600" />,
      title: 'Total Infrastructure Ownership',
      description: 'Customize compute, storage, networking, and governance to meet operational and regulatory requirements.'
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Kubernetes-Native Flexibility',
      description: 'Deploy, scale, and manage with Kubernetes for consistent automation across dev, staging, and prod.'
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Enterprise Security & Network Customization',
      description: 'Define your perimeter. Configure access, traffic, and auth with precision.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
      title: 'Built for Compliance',
      description: 'Architected to help meet mandates across healthcare, finance, government, and other regulated sectors.'
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Seamless Enterprise Integration',
      description: 'Integrate with BI, AI/ML, and orchestration tools to minimize disruption and preserve workflows.'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Multi-Environment Deployment',
      description: 'Run on bare metal, VMs, private cloud, or hybrid. Control data lifecycle, encryption, and file formats.'
    }
  ];

  const benefits = [
    'Organizations requiring strict data sovereignty and compliance',
    'Enterprises with significant on-prem or private cloud investments',
    'Hybrid/multi cloud teams',
    'Businesses needing fine grained control without losing modern capabilities'
  ];


  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="container mx-auto px-6 text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-indigo-600 font-semibold mb-3 uppercase tracking-wide"
          >
            Cazpian Enterprise (Self Hosted Lakehouse Platform)
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Deploy anywhere. Control everything.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Bring modern lakehouse performance to your infrastructure on <br/>
            prem, private cloud, or hybrid without compromising security, scalability, or integration.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/start-free"
              className="px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, #4f46e5, #818cf8)",
                boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)",
              }}
            >
              Schedule Enterprise Demo
            </Link>

            <Link
              to="/schedule-demo"
              className="px-8 py-4 rounded-xl border-2 border-indigo-600 text-indigo-600 hover:bg-transparent hover:text-indigo-600 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
            >
              Contact Sales
            </Link>

            {/* <Link
              to="/tour"
              className="text-indigo-600 hover:underline font-medium text-lg"
            >
              See 2-min Tour →
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-gray-700/50 dark:to-indigo-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Main Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium ml-10 lg:ml-[240px]">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Why Cazpian Enterprise 
                </div>
                {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Deploy anywhere Control everything Modern lakehouse performanceon your infrastructure
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cazpian Enterprise is purpose-built for organizations that demand full control over their data infrastructure. Whether you're operating in a private cloud, on-premises data center, or across hybrid environments, Cazpian empowers you to run a high-performance lakehouse under your governance—without compromising scalability, security, or integration flexibility.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ideal for compliance-driven industries and advanced enterprise use cases, Cazpian Enterprise gives you the tools to securely manage, monitor, and optimize your data environment on your terms.
                </p> */}
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
                    Your control — Tune security, compliance, and performance to your standards.
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Who Benefits from Cazpian Enterprise?
            </h2>
          </div>

          <div className="w-full">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tailor your lakehouse while leveraging Cazpian’s openness and performance.
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
