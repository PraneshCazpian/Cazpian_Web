import React from 'react';
import { BarChart3, Users, Brain, Zap, Building2, Heart, Factory, ShoppingCart, Shield, ArrowRight, Sparkles } from 'lucide-react';
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

      {/* Enhanced Solutions Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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