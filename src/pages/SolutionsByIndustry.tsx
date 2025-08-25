import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart,
  Zap,
  Building2,
  Heart,
  Factory,
  Target,
  Monitor,
  Globe2,
  Store,
  Laptop,
  ArrowRight,
  TrendingUp,
  Sparkles,
  X,
  ExternalLink,
  Clock,
  Eye,
  Maximize2,
  Layers,
  Shield,
  Phone
} from 'lucide-react';
import SVGIllustration from '../components/SVGIllustration';

interface IndustrySolution {
  id: string;
  icon: React.ReactNode;
  title: string;
  category?: string;
  tags?: string[];
  complexity?: string;
  timeToValue?: string;
  popularity?: number;
  shortSummary: string;
  challenges: string[];
  relevantUseCases: Array<{
    name: string;
    description: string;
  }>;
  example: string;
  successMetrics: string[];
}

const SolutionsByIndustry: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySolution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (industry: IndustrySolution) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndustry(null);
  };

  const industryData: IndustrySolution[] = [
    {
      id: 'ecommerce',
      icon: <ShoppingCart className="h-8 w-8 text-indigo-600" />,
      title: 'E-Commerce',
      category: 'Retail & Commerce',
      tags: ['retail', 'inventory', 'real-time', 'analytics'],
      complexity: 'Mid-Market',
      timeToValue: '2-4 weeks',
      popularity: 5,
      shortSummary: 'Real-time inventory accuracy, dynamic pricing, and personalized marketing at scale.',
      challenges: [
        'Real-time inventory accuracy during high-traffic events',
        'Dynamic pricing based on demand signals',
        'Personalized marketing at scale without latency'
      ],
      relevantUseCases: [
        {
          name: 'Real-Time Analytics / Streaming',
          description: 'Price and inventory updates in milliseconds'
        },
        {
          name: 'E-commerce Analytics',
          description: 'CLV and churn modeling from unified journey data'
        },
        {
          name: 'Marketing Analytics',
          description: 'Live ROI measurement and campaign optimization'
        }
      ],
      example: 'A global marketplace syncs inventory across 10K SKUs, pushing updates to all partner sites instantly.',
      successMetrics: [
        'Stockouts ↓ 40%',
        'Conversion rate ↑ 15%',
        'Ad ROAS ↑ 25%'
      ]
    },
    {
      id: 'energy-utilities',
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Energy & Utilities',
      category: 'Infrastructure',
      tags: ['IoT', 'sensors', 'predictive maintenance', 'SCADA'],
      complexity: 'Enterprise',
      timeToValue: '3-6 weeks',
      popularity: 4,
      shortSummary: 'Integrate IoT sensors, predict outages, and meet regulatory requirements.',
      challenges: [
        'Integrating diverse IoT sensor feeds (SCADA, smart meters)',
        'Predicting and preventing outages',
        'Meeting stringent regulatory reporting requirements'
      ],
      relevantUseCases: [
        {
          name: 'IoT Analytics',
          description: 'Detect load imbalances in real time'
        },
        {
          name: 'Data Engineering / ELT',
          description: 'Ingest and blend telemetry + weather data'
        },
        {
          name: 'Real-Time Data Access',
          description: 'Stream live telemetry to control centers'
        }
      ],
      example: 'A utility company integrates IoT and weather feeds to trigger predictive maintenance before outages occur.',
      successMetrics: [
        'Unplanned outages ↓ 30%',
        'Maintenance costs ↓ 20%',
        'Regulatory compliance ↑ 100%'
      ]
    },
    {
      id: 'financial-services',
      icon: <Building2 className="h-8 w-8 text-indigo-600" />,
      title: 'Financial Services',
      category: 'Financial',
      tags: ['compliance', 'fraud detection', 'GDPR', 'Basel III'],
      complexity: 'Enterprise',
      timeToValue: '4-8 weeks',
      popularity: 5,
      shortSummary: 'Maintain compliance, prevent fraud, and enable secure data sharing.',
      challenges: [
        'Maintaining compliance with GDPR, CCPA, SOX, Basel III',
        'Preventing fraud in high-volume transactions',
        'Secure, auditable data sharing with regulators and partners'
      ],
      relevantUseCases: [
        {
          name: 'Data Warehousing & Analytics',
          description: 'Consolidate transactional/compliance data'
        },
        {
          name: 'ML & Data Science',
          description: 'Fraud detection and risk scoring'
        },
        {
          name: 'Secure Data Exchange',
          description: 'Governed real-time sharing'
        }
      ],
      example: 'An investment bank streams risk metrics to regulators in real time while maintaining full audit trails.',
      successMetrics: [
        'Audit findings ↓ 90%',
        'Fraud detection precision ↑ 20%',
        'Compliance SLA attainment 100%'
      ]
    },
    {
      id: 'healthcare',
      icon: <Heart className="h-8 w-8 text-indigo-600" />,
      title: 'Healthcare',
      category: 'Healthcare',
      tags: ['PHI', 'HIPAA', 'EHR', 'compliance'],
      complexity: 'Enterprise',
      timeToValue: '4-12 weeks',
      popularity: 4,
      shortSummary: 'Protect PHI while enabling data interoperability and research collaboration.',
      challenges: [
        'Protecting PHI while enabling data interoperability',
        'Combining EHR, claims, and research datasets',
        'HIPAA and regional health regulation compliance'
      ],
      relevantUseCases: [
        {
          name: 'ETL & Data Integration',
          description: 'Harmonize multi-source healthcare data'
        },
        {
          name: 'Data Governance',
          description: 'Consent tracking and audit trails'
        },
        {
          name: 'Enterprise Data Warehousing',
          description: 'Unified patient, billing, and operational data'
        }
      ],
      example: 'A hospital network securely shares de-identified research datasets with partner universities for clinical studies.',
      successMetrics: [
        'Data sharing approvals ↑ 40%',
        'Data breach risk ↓ 80%',
        'Research time-to-insight ↓ 25%'
      ]
    },
    {
      id: 'manufacturing',
      icon: <Factory className="h-8 w-8 text-indigo-600" />,
      title: 'Manufacturing',
      category: 'Industrial',
      tags: ['IoT', 'predictive maintenance', 'ERP', 'MES'],
      complexity: 'Enterprise',
      timeToValue: '3-8 weeks',
      popularity: 4,
      shortSummary: 'Monitor equipment health, integrate operational data, and optimize supply chains.',
      challenges: [
        'Real-time monitoring of equipment health',
        'Integrating ERP, MES, IoT, and quality control data',
        'Optimizing supply chain efficiency'
      ],
      relevantUseCases: [
        {
          name: 'IoT Analytics',
          description: 'Predictive maintenance'
        },
        {
          name: 'MDM',
          description: 'Harmonized supplier and product records'
        },
        {
          name: 'Data Lake Integration',
          description: 'Aggregate sensor, production, and QC data'
        }
      ],
      example: 'A manufacturing plant predicts equipment failures and optimizes part sourcing.',
      successMetrics: [
        'Downtime ↓ 35%',
        'Production efficiency ↑ 15%',
        'Supply chain lead time ↓ 20%'
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              10+ Industry Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Industry-Specific
              <span className="block text-indigo-600 dark:text-indigo-400">Data Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Discover how Cazpian addresses unique challenges across industries with tailored solutions, proven use cases, and measurable success metrics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-meeting"
                className="group bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="group border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                View All Solutions
                <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <SVGIllustration name="strategic-consulting" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Solutions By Industry
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Explore industry-specific solutions designed to address your sector's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {industryData.map((industry) => (
              <div
                key={industry.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                        <Clock className="h-3 w-3 mr-1" />
                        {industry.timeToValue}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {industry.complexity}
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg xl:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {industry.title}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex-shrink-0">
                        {industry.category}
                      </span>
                    </div>
                    
                    {industry.tags && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {industry.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-2 py-1 text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {industry.tags.length > 2 && (
                          <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                            +{industry.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="text-sm xl:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {industry.shortSummary}
                  </p>
                  
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => openModal(industry)}
                      className="group/btn w-full flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 hover:text-white dark:text-indigo-400 dark:hover:text-white transition-all duration-200 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-600 dark:hover:bg-indigo-600 px-4 py-3 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-600"
                    >
                      <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      <span>View Details</span>
                      <Maximize2 className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <SVGIllustration name="business-deal" width={80} height={80} className="text-white opacity-90" />
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Industry Operations?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                See how industry leaders are achieving breakthrough results with Cazpian's tailored solutions. Get started with a proven framework for your sector.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Link
                  to="/book-meeting"
                  className="group bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 flex items-center"
                >
                  Schedule Industry Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300 font-semibold text-lg"
                >
                  Talk to Industry Expert
                  <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform inline" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-gray-400">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">40%</div>
                  <div className="text-gray-400">Avg Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">2-8w</div>
                  <div className="text-gray-400">Time to Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      {isModalOpen && selectedIndustry && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="flex min-h-full items-start justify-center p-4 py-8">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
              {/* Header */}
              <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                      {selectedIndustry.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedIndustry.title}
                      </h2>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                          {selectedIndustry.category || 'Industry'}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                          <Clock className="h-4 w-4 mr-1" />
                          {selectedIndustry.timeToValue || '2-4 weeks'}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {selectedIndustry.complexity || 'All Sizes'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Content - Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-track-gray-100 dark:scrollbar-track-gray-700 scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-400">
                <div className="space-y-8">
                  {/* Summary */}
                  <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedIndustry.shortSummary}
                    </p>
                  </div>

                  {/* Tags */}
                  {selectedIndustry.tags && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedIndustry.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenges */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-500" />
                      Key Challenges
                    </h3>
                    <ul className="space-y-3">
                      {selectedIndustry.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Use Cases */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-indigo-600" />
                      Relevant Use Cases
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedIndustry.relevantUseCases.map((useCase, index: number) => (
                        <div key={index} className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{useCase.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{useCase.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      Real-World Example
                    </h3>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-400">
                      <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                        {selectedIndustry.example}
                      </p>
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Success Metrics
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedIndustry.successMetrics.map((metric: string, metricIndex: number) => (
                        <li key={metricIndex} className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 font-medium">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/book-meeting"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    onClick={closeModal}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    onClick={closeModal}
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={closeModal}
                    className="sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionsByIndustry;