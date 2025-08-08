import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Brain, BarChart3, Users, Database, Lock, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';
import TrustedLogos from '../components/TrustedLogos';

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
      title: "Query Anything. Power Everything.",
      description: "Cazpian federates access to distributed data without replication, enabling AI and analytics workloads to run on real-time, real-location data.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Rocket className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
      title: "Modern Performance. Zero Migration.",
      description: "With Cazpian, your data stays where it is. Its federated query engine delivers fast, secure access—so your teams can analyze and act without delay.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Lock className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "Secure. Scalable. Governed.",
      description: "Cazpian provides a governed data layer that scales with your analytics, giving teams transparent access to trusted data—without compromising security or compliance.",
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

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 dark:bg-indigo-400 origin-left z-[60]"
        style={{ scaleX: scrollProgressX }}
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div style={{ y: blobOneY }} className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <motion.div style={{ y: blobTwoY }} className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <motion.div style={{ y: blobThreeY }} className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* SVG Image - Left Side Corner */}
            <motion.div 
              className="flex justify-start lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
                style={{ y: heroImgY }}
              >
                <img 
                  src="/Home-vector.svg" 
                  alt="Cazpian Data Platform Illustration"
                  className="w-full h-auto max-w-5xl drop-shadow-2xl"
                  style={{ width: '600px', height: '600px' }}
                  loading="eager"
                />
                {/* Decorative elements around the SVG */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              </motion.div>
            </motion.div>

            {/* Text Content - Right Side Corner */}
            <motion.div 
              className="text-center lg:text-right"
              variants={containerVariants}
              style={{ y: heroTextY }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                {siteConfig.heroTitle}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl lg:max-w-none lg:ml-auto leading-relaxed"
                variants={itemVariants}
              >
                {siteConfig.heroSubtitle}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end items-center lg:items-end"
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
                    {siteConfig.ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/book-meeting"
                    className="inline-flex items-center px-8 py-4 rounded-xl border-2 font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
                    style={{ 
                      borderColor: siteConfig.primaryColor, 
                      color: siteConfig.primaryColor 
                    }}
                  >
                    {siteConfig.ctaSecondary}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Logos Section */}
      <TrustedLogos />

      {/* New 3-Card Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Why Choose Cazpian?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Transform your data analytics with our modern, federated approach
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-current opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Why Choose Us
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-gray-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Why Teams Choose Cazpian
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Modern data teams need more than just storage. They need intelligence, speed, and flexibility built in.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} dark:from-gray-800 dark:to-gray-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:bg-gradient-to-br ${feature.hoverBgGradient} dark:group-hover:from-gray-700 dark:group-hover:to-gray-600`}></div>
                <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent hover:shadow-2xl transition-all duration-500 group-hover:bg-white/95 dark:group-hover:bg-gray-800/95">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:bg-gradient-to-br ${feature.hoverGradient} mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <div className="text-white">
                      {React.cloneElement(feature.icon, { className: "h-8 w-8" })}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:${feature.hoverTextColor} dark:group-hover:text-white transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed group-hover:${feature.textColor} dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    {feature.description}
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-8 h-1 bg-gradient-to-r ${feature.gradient} group-hover:bg-gradient-to-r ${feature.hoverGradient} rounded-full`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-lg group cursor-pointer"
            >
              <span>Explore all features</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%236366f1&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
                  Flexible Deployment
                </motion.div>
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                  variants={itemVariants}
                >
                  Deploy Your{' '}
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Way
                  </span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  Whether you need fully managed cloud, self-hosted enterprise, or free agent studio - Cazpian adapts to your infrastructure needs with zero compromise.
                </motion.p>
              </div>

              {/* Deployment Options */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.div 
                  className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cazpian Cloud</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">Fully managed on AWS or Azure with enterprise-grade security and 99.9% uptime SLA.</p>
                      <div className="flex items-center space-x-2 text-sm text-indigo-600 dark:text-indigo-400">
                        <span className="font-medium">Get started in minutes</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cazpian Enterprise</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">Self-hosted on your infrastructure with full control and custom integrations.</p>
                      <div className="flex items-center space-x-2 text-sm text-purple-600 dark:text-purple-400">
                        <span className="font-medium">Deploy on-premises</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-green-300 dark:hover:border-green-500 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Agent Studio</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">Free for developers and small teams with core features and community support.</p>
                      <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
                        <span className="font-medium">Start building today</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Link 
                  to="/product" 
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <span>Explore all products</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Terminal */}
            <motion.div 
              variants={scaleIn}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 text-sm font-medium">cazpian-terminal</span>
                  </div>
                </div>
                
                {/* Terminal content */}
                <div className="space-y-4 font-mono text-sm">
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-green-400">$</span>
                    <span className="text-white">cazpian deploy --cloud aws</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <span className="text-green-400">✓</span>
                    <span className="text-green-400">Provisioning lakehouse...</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <span className="text-green-400">✓</span>
                    <span className="text-green-400">Configuring AI semantic layer...</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.0 }}
                  >
                    <span className="text-green-400">✓</span>
                    <span className="text-green-400">Setting up connectors...</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5 }}
                  >
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-green-400 font-bold">Cazpian ready in 3 minutes!</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3.0 }}
                  >
                    <span className="text-blue-400">🎉</span>
                    <span className="text-blue-400">Your data platform is live!</span>
                  </motion.div>
                </div>
                
                {/* Animated cursor */}
                <motion.div 
                  className="absolute bottom-8 left-8 w-2 h-5 bg-green-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Ready to Transform Your Data Platform?
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
                  {siteConfig.ctaPrimary}
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
                  {siteConfig.ctaSecondary}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;