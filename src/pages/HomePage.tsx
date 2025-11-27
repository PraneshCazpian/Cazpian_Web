import React, { useRef} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Brain, BarChart3, Users, Database, Lock, Rocket, Code, Layers, Cpu, Container, Server, Tag } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';
import TrustedLogos from '../components/TrustedLogos';
import Multicards from '../components/Multicards';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { trackCTAClick } from '../components/Analytics';

const HomePage = () => {

  const { siteConfig } = useAdmin();
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Global scroll progress bar
  const { scrollYProgress } = useScroll();
  const scrollProgressX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  // Hero parallax
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(heroProgress, [0, 1], [0, -120]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -60]);
  const blobOneY = useTransform(heroProgress, [0, 1], [0, -80]);
  const blobTwoY = useTransform(heroProgress, [0, 1], [0, -120]);
  const blobThreeY = useTransform(heroProgress, [0, 1], [0, -60]);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Feature cards data
  const featureCards = [
    {
      icon: <Database className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />,
      title: "Governed Spark Anywhere.",
      description: "Long-running Spark Connect workspaces and submit jobs (batch & streaming) on EKS/EC2/EMR and on-prem Kubernetes with policy-aware restarts.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Rocket className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
      title: "Iceberg-First Catalogs",
      description: "Polaris & Gravitino out-of-the-box; Glue/Hive/RDBMS connectors; views & table property enforcement with full auditability.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Lock className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "Day-2 Ops Automation",
      description: "Maintenance schedules (compaction, snapshot expiry, orphan cleanup), right-size hints, cost controls, and safe config/JAR rollouts.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      title: "AI-Driven Performance",
      description: "Natural language queries, automatic optimization, and intelligent insights powered by AI.",
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-600 to-purple-700",
      bgGradient: "from-indigo-50 to-purple-50",
      hoverBgGradient: "from-indigo-100 to-purple-100",
      textColor: "text-indigo-700",
      hoverTextColor: "text-indigo-800"
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Open Data Architecture",
      description: "Built on Apache Iceberg, Arrow, and Polaris. No vendor lock-in, complete portability.",
      gradient: "from-blue-500 to-cyan-600",
      hoverGradient: "from-blue-600 to-cyan-700",
      bgGradient: "from-blue-50 to-cyan-50",
      hoverBgGradient: "from-blue-100 to-cyan-100",
      textColor: "text-blue-700",
      hoverTextColor: "text-blue-800"
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-600" />,
      title: "Lightning Fast",
      description: "HyperSQL engine delivers consistent performance at scale with intelligent caching.",
      gradient: "from-yellow-500 to-orange-600",
      hoverGradient: "from-yellow-600 to-orange-700",
      bgGradient: "from-yellow-50 to-orange-50",
      hoverBgGradient: "from-yellow-100 to-orange-100",
      textColor: "text-yellow-700",
      hoverTextColor: "text-yellow-800"
    },
    {
      icon: <Shield className="h-10 w-10 text-green-600" />,
      title: "Enterprise Security",
      description: "Built-in governance, RBAC/ABAC, and full lineage tracking across all data assets.",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-600 to-emerald-700",
      bgGradient: "from-green-50 to-emerald-50",
      hoverBgGradient: "from-green-100 to-emerald-100",
      textColor: "text-green-700",
      hoverTextColor: "text-green-800"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-red-600" />,
      title: "Cost Optimization",
      description: "Scale compute and storage independently. Pay only for what you use.",
      gradient: "from-red-500 to-pink-600",
      hoverGradient: "from-red-600 to-pink-700",
      bgGradient: "from-red-50 to-pink-50",
      hoverBgGradient: "from-red-100 to-pink-100",
      textColor: "text-red-700",
      hoverTextColor: "text-red-800"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Self-Service Analytics",
      description: "Empower every team member with intuitive, governed access to data insights.",
      gradient: "from-purple-500 to-indigo-600",
      hoverGradient: "from-purple-600 to-indigo-700",
      bgGradient: "from-purple-50 to-indigo-50",
      hoverBgGradient: "from-purple-100 to-indigo-100",
      textColor: "text-purple-700",
      hoverTextColor: "text-purple-800"
    }
  ];

  // Feature chips data
  const featureChips = [
    {
      icon: <Code className="h-4 w-4" />,
      text: "Open-standards",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Zap className="h-4 w-4" />,
      text: "Spark Connect & Submit",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      icon: <Shield className="h-4 w-4" />,
      text: "Iceberg-native Governance",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: <Brain className="h-4 w-4" />,
      text: "AI Agents",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Layers className="h-4 w-4" />,
      text: "Metalake layer",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Cpu className="h-4 w-4" />,
      text: "Multi-engine (Spark/Trino/Flink)",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Container className="h-4 w-4" />,
      text: "Kubernetes-first",
      gradient: "from-indigo-600 to-blue-500"
    },
    {
      icon: <Server className="h-4 w-4" />,
      text: "On-prem Kubernetes",
      gradient: "from-slate-600 to-indigo-500"
    },
    {
      icon: <Tag className="h-4 w-4" />,
      text: "Tagging & Discovery",
      gradient: "from-indigo-400 to-blue-500"
    }
  ];

  // Structured data for homepage
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Cazpian',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '250',
    },
    description: 'AI-Powered Data Analytics Platform built on open standards with federated queries, enterprise security, and lightning-fast performance.',
  };

  const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cazpian",
      "url": "https://cazpian.ai",
      "logo": "https://cazpian.ai/logo.png",
      "sameAs": [
        "https://twitter.com/cazpian",
        "https://www.linkedin.com/company/cazpian"
      ]
  };

  const websiteschema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cazpian",
    "url": "https://cazpian.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cazpian.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }  
  };

  return (
    <>
    <Helmet>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteschema),
          }}
        />
      </Helmet>

    <div className="bg-white dark:bg-gray-900 w-full max-w-none overflow-x-hidden">
      <SEO
        title="Cazpian - AI-Powered Data Analytics Platform"
        description="Transform your data analytics with Cazpian's modern lakehouse platform. Built on Apache Iceberg with AI-driven performance, enterprise security, and lightning-fast federated queries."
        keywords="data analytics platform, AI data lakehouse, Apache Iceberg, federated query engine, business intelligence, enterprise data platform, cloud analytics, data science platform"
        url="/"
        structuredData={structuredData}
      />
      
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 dark:bg-indigo-400 origin-left z-[60]"
        style={{ scaleX: scrollProgressX }}
      />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex items-center"
      >
        <div className="container mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side — Illustration */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.img
              src="/landing-im.svg"
              alt="Open Lakehouse Platform"
              className="w-full max-w-[520px] h-auto drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Right Side — Text */}
          <motion.div
            className="text-center lg:text-right order-1 lg:order-2"
            variants={containerVariants}
            style={{ y: heroTextY }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Open Lakehouse Platform
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              for Analytics Pipelines & AI Agents
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl lg:max-w-none leading-relaxed">
              Launch governed compute, unify your data catalogs, and add AI agents to
              automate engineering so analytics and pipelines ship faster across
              cloud and on-prem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link
              to="/book-meeting"
               className="px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all">
                Start Free
              </Link>
              <Link
              to="/book-meeting" 
              className="px-6 py-3 rounded-xl font-semibold border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all">
                Book a Demo
              </Link>
              <Link 
              to="/agent-studio" 
              className="px-6 py-3 flex items-center justify-center gap-2 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all">
                See 2-min Tour
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6h8m0 0v8m0-8l-8 8"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-2 mt-10 justify-center lg:justify-end">
              {[
                "Open-standards",
                "Spark Connect & Submit",
                "Multi-engine (Spark/Trino/Flink)",
                "Open-prem Kubernetes",
                "Tagging & Discovery",
                "AI Agents",
                "Metadata layer",
                "Kubernetes-first",
              ].map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-lg bg-transparent dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm shadow-sm transition-all"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Trusted Logos Section */}
      <TrustedLogos />

      {/* Multi-En animation*/}
        <Multicards />
      {/* Multi-Engine Ready Section */}
      {/* <section className="w-full bg-gradient-to-b from-white to-blue-50 py-24">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 gap-16"> */}
    {/* Left side text */}
    {/* <div className="lg:w-1/2 text-center">
      <h2 className="text-5xl font-bold text-indigo-600 mb-6 leading-tight">
      <span className='text-black'> Multi-</span>Engine <br /> Ready
      </h2>
      <p className="text-lg text-gray-600 max-w-md">
        Run your preferred analytics <br/> engines seamlessly with Apache Spark, Trino, and Flink.
      </p>
    </div> */}

    {/* Right side cards */}
    {/* <div className="relative lg:w-1/2 flex flex-col gap-8"> */}
      {/* Decorative diagonal background */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-transparent rounded-3xl -z-10 transform translate-x-6 translate-y-6"></div> */}

      {/* Card 1 */}
      {/* <div className="flex items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1">
        <img src="/apache_Flink.svg" alt="Apache Flink" className="h-20 w-20 mr-5" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Apache Flink</h3>
          <p className="text-gray-600 text-sm">
            Stateful computations over unbounded and bounded data streams with low latency and
            high throughput for real-time analytics.
          </p>
        </div>
      </div> */}

      {/* Card 2 */}
      {/* <div className="flex items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1">
        <img src="/apache-spark.svg" alt="Apache Spark" className="h-20 w-20 mr-5" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Apache Spark</h3>
          <p className="text-gray-600 text-sm">
            High-performance unified analytics engine for large-scale data processing with built-in
            SQL, streaming, and machine learning capabilities.
          </p>
        </div>
      </div> */}

      {/* Card 3 */}
      {/* <div className="flex items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1">
        <img src="/trino-icon.svg" alt="Trino" className="h-20 w-20 mr-7 ml-5" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Trino</h3>
          <p className="text-gray-600 text-sm">
            Distributed SQL query engine designed to query large data sets distributed over one or
            more heterogeneous data sources with high performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}


      {/* Compute Targets Section */}
      <section className="py-20 w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Header */}
    <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
      Compute Targets
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
      Kubernetes is first-class, with AWS managed computes today and GCP/Azure on the roadmap.
    </p>

    {/* Content Card */}
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10 lg:p-20 border border-gray-100 dark:border-gray-700 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">

        {/* Kubernetes */}
        <div className="flex items-start gap-6">
          <img src="/kubernetes.svg" alt="Kubernetes" className="h-20 w-20" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Kubernetes (first-class)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Elastic, policy-aware clusters with profile-driven sizing, secrets, and network guardrails. EKS today; GKE/AKS on the roadmap.
            </p>
          </div>
        </div>

        {/* AWS Managed Computes */}
        <div className="flex items-start gap-6 pb-10">
          <img src="/aws.svg" alt="AWS" className="h-20 w-20" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              AWS managed computes
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Run on EC2, EMR, and EMR on EKS with the same governance, profiles, and observability.
            </p>
          </div>
        </div>

        {/* Tagging & Discovery */}
        <div className="flex items-start gap-6 pb-10">
          <img src="/Tag.svg" alt="AWS" className="h-20 w-20" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Tagging & Discovery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Search across catalogs with business tags and keywords; quickly find tables, filesets, and views.
            </p>
          </div>
        </div>

        {/* Cross-cloud & on-prem */}
        <div className="flex items-start gap-6 pb-10">
          <img src="/Cloud.svg" alt="AWS" className="h-20 w-20" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Cross-cloud & on-prem
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Support for on-prem Kubernetes with private registries, your CNI/ingress, and S3-compatible storage (e.g., MinIO). GCP (GKE/Dataproc) and Azure (AKS + managed Spark) on the roadmap.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Architecture at a Glance Section */}
      <section className="py-20 w-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Architecture Overview
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-gray-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Architecture at a Glance
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Control-Plane · Data-Plane · Agent-Plane
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Control-Plane */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-fit p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center mb-3 p-3 gap-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Control-Plane
                    </h3>
                  </div>

                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Metalake (single source of truth)</p>
                    <p>• RBAC, SSO (OIDC), audit</p>
                    <p>• Catalog Registry & Policies</p>
                    <p>• Secrets via Infisical / cloud KMS</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              </div>
            </motion.div>

            {/* Data-Plane */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center mb-3 p-3 gap-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Data-Plane
                    </h3>                    
                  </div>

                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Compute Profiles: Connect / Jobs / Streams</p>
                    <p>• Targets: Kubernetes (EKS & on-prem; GKE/AKS roadmap), AWS EC2, EMR, EMR on EKS</p>
                    <p>• Right-sizing & cost controls</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              </div>
            </motion.div>

            {/* Agent-Plane */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full p-8 pb-12 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center mb-3 p-3 gap-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white ">
                        Agent-Plane
                      </h3>                    
                  </div>

                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Cazpian AI guidance & runbooks</p>
                    <p>• Embeddings (pgvector) for docs & metrics</p>
                    <p>• Recommendations & smart tooling</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Process Overview
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              How It Works (3 Steps)
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Step 1: Connect & Unify */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-4 mb-6  group-hover:scale-110 transition-transform duration-300">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Connect & Unify
                    </h3>                    
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Bring in batch and streaming data, catalogs, and apps.
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              </div>
            </motion.div>

            {/* Step 2: Optimize & Govern */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Optimize & Govern
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Apply quality, security, lineage, and performance tuning.
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              </div>
            </motion.div>

            {/* Step 3: Query & Build */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-fit p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Query & Build
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Power BI/SQL, notebooks, and AI agents—then operationalize.
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Inline Links */}
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm md:text-base">
              <Link 
                to="/cazpian-cloud" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Cazpian Cloud
              </Link>
              <span className="text-gray-400 dark:text-gray-500">·</span>
              <Link 
                to="/cazpian-enterprise" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Cazpian Enterprise
              </Link>
              <span className="text-gray-400 dark:text-gray-500">·</span>
              <Link 
                to="/agent-studio" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Agent Studio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why choose cazpian*/}
      <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-10 overflow-hidden">
  {/* Background lines */}
  <img
    src="/Element.svg" // your curved background pattern
    alt="Background pattern"
    className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
    {/* Top Row — Title on Left, Diagram on Right */}
    <div className="relative flex flex-col lg:flex-row items-center justify-between mb-20">
      {/* Text Box */}
      <div className="relative w-fit sm:w-fit bg-white p-6 sm:p-8 rounded-[2rem] shadow-md sm:translate-x-16 translate-x-0 text-center sm:text-left">
      <h2 className="text-5xl font-bold text-gray-900 mb-5">
        Why Choose <span className="text-blue-600">Cazpian?</span>
      </h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Transform your data analytics with our modern, federated approach.
      </p>
    </div>


      {/* Diagram on Right */}
      <div className="mt-12 lg:-mt-12 lg:absolute lg:right-0 lg:top-0">
        <img
          src="/Dia.svg" // your dotted line + cube network diagram
          alt="Cazpian network"
          className="w-[520px] h-auto opacity-90"
        />
      </div>
    </div>

    {/* Feature Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20 text-left pl-20 pr-20 pb-4 pt-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Governed Spark Anywhere.
            </h3>
            <img
              src="/database 2.svg"
              alt="Spark Icon"
              className="h-5 w-5 text-yellow-500"
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Long-running Spark Connect workspaces and submit jobs (batch & streaming)
            on EKS/EC2/EMR and on-prem Kubernetes with policy-aware restarts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Iceberg-First Catalogs.
            </h3>
            <img
              src="/SVG.svg"
              alt="Iceberg Icon"
              className="h-5 w-5 text-purple-500"
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Polaris & Gravitino out-of-the-box; Glue/Hive/RDBMS connectors; views &
            table property enforcement with full auditability.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Day-2 Ops Automation.
            </h3>
            <img
              src="/padlock 1.svg"
              alt="Ops Icon"
              className="h-5 w-5 text-blue-500"
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maintenance schedules (compaction, snapshot expiry, orphan cleanup),
            right-size hints, cost controls, and safe config/JAR rollouts.
          </p>
        </div>
      </div>

  </div>
</section>



      {/* Why teams choose cazpian */}
      <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-10 overflow-hidden">
  {/* Background lines */}
  <img
    src="/Element.svg"
    alt="Background pattern"
    className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
    {/* Top Row — Diagram on Left, Text on Right */}
    <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between mb-20">
      {/* Text Box (Now on Right) */}
      <div className="relative w-fit sm:w-fit bg-white p-6 sm:p-8 rounded-[2rem] shadow-md sm:translate-x-16 translate-x-0 text-center sm:text-left">
        <h2 className="text-5xl font-bold text-gray-900 mb-5">
          Why Teams Choose <span className="text-blue-600">Cazpian?</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
        Modern data teams need more than just storage. They need intelligence, speed, and flexibility built in.
        </p>
      </div>

      {/* Diagram (Now on Left) */}
      <div className="mt-12 lg:-mt-12 lg:absolute lg:left-0 lg:top-0">
        <img
          src="/Dia23.svg"
          alt="Cazpian network"
          className="w-[520px] h-auto opacity-90"
        />
      </div>
    </div>

    {/* Feature Grid */}
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20 text-left pl-20 pr-20 pb-4 pt-12">
      {/* Feature 1 */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">
            AI-Driven Performance
          </h3>
          {/* <img
            src="/database 2.svg"
            alt="Spark Icon"
            className="h-5 w-5 text-yellow-500"
          /> */}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
        Natural language queries, automatic optimization, and intelligent insights powered by AI.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Open Data Architecture
          </h3>
          {/* <img
            src="/SVG.svg"
            alt="Iceberg Icon"
            className="h-5 w-5 text-purple-500"
          /> */}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
         Built on Apache Iceberg, Arrow, and Polaris. No vendor lock-in, complete portability.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Lightning Fast
          </h3>
          {/* <img
            src="/padlock 1.svg"
            alt="Ops Icon"
            className="h-5 w-5 text-blue-500"
          /> */}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
        HyperSQL engine delivers consistent performance at scale with intelligent caching.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">
          Enterprise Security
          </h3>
          {/* <img
            src="/governance.svg"
            alt="Governance Icon"
            className="h-5 w-5 text-green-500"
          /> */}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Built-in governance, RBAC/ABAC, and full lineage tracking across all data assets.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">
           Cost Optimization
          </h3>
          {/* <img
            src="/realtime.svg"
            alt="Insights Icon"
            className="h-5 w-5 text-red-500"
          /> */}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
        Scale compute and storage independently. Pay only for what you use.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">
          Self-Service Analytics
          </h3>
          {/* <img
            src="/cloud.svg"
            alt="Cloud Icon"
            className="h-5 w-5 text-indigo-500"
          /> */}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
        Empower every team member with intuitive, governed access to data insights.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Dashboard Showcase */}
      <section className="relative w-full bg-gradient-to-br from-[#F8FAFF] to-indigo-100 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* === Left Text Section === */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Deploy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Your Way
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Whether you need fully managed cloud, self-hosted enterprise, or free
            agent studio — Cazpian adapts to your infrastructure needs with zero
            compromise.
          </p>

          <div className="mt-8">
            <Link
            to="/product"
             className="bg-gradient-to-r from-blue-600 to-purple-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Explore all Products →
            </Link>
          </div>
        </div>

        {/* === Right Image Section === */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/Dash-UI.svg"
            alt="SQL Dashboard"
            className="w-[620px] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>

      {/* Solutions (Use‑Case Tiles) */}
      <section className="py-16 w-full bg-gradient-to-br from-white via-gray-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-10"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Solutions
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Solve your top use cases with Cazpian
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Explore proven patterns that teams use to standardize, govern, and scale analytics.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white dark:bg-indigo-900/40 dark:text-indigo-300">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="inline-flex items-center pl-4 text-lg font-semibold text-gray-900 dark:text-white mb-2">Modern Analytics Platform</h3>
              <p className="text-gray-600 dark:text-gray-300">Standardize on open formats with central governance.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white dark:bg-purple-900/30 dark:text-purple-300">
                <Brain className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="inline-flex items-center pl-4 text-lg font-semibold text-gray-900 dark:text-white mb-2">GenAI over Enterprise Data</h3>
              <p className="text-gray-600 dark:text-gray-300">Ground large language models in trusted data.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white dark:bg-sky-900/30 dark:text-sky-300">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="inline-flex items-center pl-4 text-lg font-semibold text-gray-900 dark:text-white mb-2">Real‑Time & Operational Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">Stream, transform, and serve insights quickly.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white dark:bg-emerald-900/30 dark:text-emerald-300">
                <Database className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="inline-flex items-center pl-4 text-lg font-semibold text-gray-900 dark:text-white mb-2">Cost‑Efficient ELT/ETL</h3>
              <p className="text-gray-600 dark:text-gray-300">Lower TCO with efficient pipelines and storage.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white dark:bg-amber-900/30 dark:text-amber-300">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="inline-flex items-center pl-4 text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaborative Data Sharing</h3>
              <p className="text-gray-600 dark:text-gray-300">Share securely with partners and teams.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link 
                to="/solutions"
                className="inline-flex items-center px-6 py-3 rounded-xl text-white font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
                style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.primaryColor}dd)` }}
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatTeamsBuild */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            What Teams Build with Cazpian
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the most common data and AI workloads teams deliver with
            Cazpian’s open, governed platform.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-600 rounded-xl">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Self-service Analytics Workspaces
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Always-on Spark Connect with governed access and audit.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-600 rounded-xl">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Batch & Streaming Pipelines
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Spark submit jobs and structured streaming on your cloud.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-emerald-600 rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Iceberg Governance & Maintenance
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Policy-driven compaction, snapshot/orphan expiry, and property enforcement.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Cost Optimization & Right-Sizing
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Profiles, hints, stop/hibernate/resume for predictable spend.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-600 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Multi-Catalog Unification
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Polaris/Gravitino alongside Glue/Hive/Postgres/MySQL, with tagging and global search.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-600 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                AI Agents & Agent Studio
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Text-to-SQL, embeddings, dynamic agents; MCP integrations and automated runbooks.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center bg-indigo-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
          >
            Explore Case Studies
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

      {/* Proof (Placeholder) Section */}
      <section className="py-16 w-full bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-10"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Proof (Placeholder)
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Teams reduce time‑to‑insight while <br /> improving governance and developer experience.
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Add customer logos and a short quote or two here.
            </motion.p>
          </motion.div>

          {/* Logos row (placeholder) */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[1,2,3,4,5].map((i) => (
              <motion.div key={i} variants={itemVariants} className="w-28 h-10 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
                Logo {i}
              </motion.div>
            ))}
          </motion.div>

          {/* Quotes (placeholders) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.blockquote variants={itemVariants} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm text-gray-700 dark:text-gray-300">
              “Cazpian helped our teams ship insights faster while strengthening governance.”
              <footer className="mt-3 text-sm text-gray-500 dark:text-gray-400">— Head of Data, Placeholder Co.</footer>
            </motion.blockquote>
            <motion.blockquote variants={itemVariants} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm text-gray-700 dark:text-gray-300">
              “Developer experience improved dramatically—we moved from weeks to days.”
              <footer className="mt-3 text-sm text-gray-500 dark:text-gray-400">— Analytics Lead, Sample Corp.</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white relative ">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Let’s plan your first use case.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Join forward-thinking teams who've already made the switch to faster, smarter, and more cost-effective data analytics.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/book-meeting"
                  className="inline-flex items-center px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ 
                    background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.primaryColor}dd)`,
                    boxShadow: `0 10px 30px ${siteConfig.primaryColor}40`
                  }}
                >
                  Book a Meeting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/book-meeting"
                  className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Request a Demo
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Removed tertiary CTA */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  </>
  );
};

export default HomePage;