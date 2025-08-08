import React from 'react';
import { BarChart3, Users, Brain, Zap, Building2, Heart, Factory, ShoppingCart, Shield } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {solutionsContent.heroSubtitle}
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
            {solutionsContent.solutions.map((solution) => (
              <div key={solution.id} id={solution.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(solution.icon)}
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
            {solutionsContent.industries.map((industry) => (
              <div key={industry.id} id={industry.id} className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(industry.icon)}
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
            {solutionsContent.useCases.map((useCase) => (
              <div key={useCase.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {solutionsContent.ctaSection.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {solutionsContent.ctaSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {solutionsContent.ctaSection.primaryButton}
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