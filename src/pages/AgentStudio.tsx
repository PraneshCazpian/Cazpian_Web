import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Code, 
  Database, 
  Workflow, 
  AlertTriangle, 
  FileText, 
  Users, 
  GitBranch, 
  Building2,
  ArrowRight,
  Play,
  Sparkles
} from 'lucide-react';

const AgentStudio = () => {
  // Key features data
  const keyFeatures = [
    {
      icon: <Workflow className="h-10 w-10 text-indigo-600" />,
      title: "Task-Driven Agent Design",
      description: "Build agents that perform specific tasks like data transformation, classification, anomaly detection, or triggering workflows based on real-time inputs."
    },
    {
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      title: "Data-Aware Intelligence",
      description: "Agents are designed to understand your data schema, apply business logic, and adapt to changing data conditions—ensuring precision and context-awareness."
    },
    {
      icon: <Code className="h-10 w-10 text-indigo-600" />,
      title: "Visual Workflow Builder",
      description: "Drag-and-drop UI for designing agent logic, integrations, triggers, and outputs—no need to write complex code."
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: "Custom Code & Extensibility",
      description: "For advanced users, inject Python, SQL, or API calls directly into agents for custom logic and integration."
    },
    {
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: "Integration with Cazpian Lakehouse",
      description: "Agents operate seamlessly across structured, semi-structured, and real-time datasets—leveraging Cazpian's unified lakehouse architecture."
    }
  ];

  // Use cases data
  const useCases = [
    {
      icon: <FileText className="h-10 w-10 text-indigo-600" />,
      title: "Automated Report Generation",
      description: "Create agents that analyze new data daily and send automated reports to teams."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-indigo-600" />,
      title: "AI-Powered Alerts",
      description: "Detect anomalies in streaming data and trigger alerts or actions via Slack, email, or API."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-indigo-600" />,
      title: "Data Enrichment Agents",
      description: "Automatically enrich records using third-party APIs or internal knowledge graphs."
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      title: "Compliance & Governance Automation",
      description: "Monitor data access, log events, and enforce rules—proactively and automatically."
    }
  ];

  // Enterprise features data
  const enterpriseFeatures = [
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Role-Based Access Control (RBAC)",
      description: "Ensure only authorized users can create or modify agents."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-indigo-600" />,
      title: "Versioning and Audit Logs",
      description: "Track every change made to your agents and roll back as needed."
    },
    {
      icon: <Building2 className="h-8 w-8 text-indigo-600" />,
      title: "Multi-Tenant Ready",
      description: "Designed for organizations serving multiple clients or departments with isolated environments."
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Faster time to impact",
      description: "Prebuilt templates and intelligent suggestions accelerate development."
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "No data movement required",
      description: "Agents act where your data lives, maintaining security and performance."
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "AI + Automation, together",
      description: "Agents blend logic, machine learning, and orchestration seamlessly."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Free Version Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cazpian <span className="text-indigo-600">Agent Studio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Design, deploy, and manage intelligent AI agents that operate directly on your data. 
              No-code/low-code environment for powerful automation.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Building Today
              </Link>
              <Link
                to="/book-meeting"
                className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200 font-semibold text-lg inline-flex items-center"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Is Cazpian Agent Studio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Cazpian Agent Studio is a powerful, no-code/low-code environment that empowers teams to design, 
              deploy, and manage intelligent AI agents that operate directly on your data. Whether you're 
              automating data workflows, enhancing business logic, or enabling real-time decision-making, 
              Agent Studio gives you the tools to bring intelligent automation to life—securely, scalably, and quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful capabilities for building intelligent agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
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
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real-world applications for intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for the Enterprise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Enterprise-grade features for production deployments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Cazpian Agent Studio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key advantages that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-700 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
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
            Whether you're a data engineer, analyst, or product leader, Cazpian Agent Studio helps you 
            move from data to action—with speed, control, and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Building Your First Agent
            </Link>
            <Link
              to="/book-meeting"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg inline-flex items-center"
            >
              Schedule a Demo
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentStudio;
