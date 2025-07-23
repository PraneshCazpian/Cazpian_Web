import React from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { BookOpen, Play, FileText, Calendar, Bell, MessageCircle } from 'lucide-react';

const Resources = () => {
  const { resourcesContent } = useAdmin();

  // Icon mapping function
  const getIcon = (iconName: string) => {
    const iconMap = {
      BookOpen: <BookOpen className="h-10 w-10 text-indigo-600" />,
      Play: <Play className="h-10 w-10 text-indigo-600" />,
      FileText: <FileText className="h-10 w-10 text-indigo-600" />,
      Calendar: <Calendar className="h-10 w-10 text-indigo-600" />,
      Bell: <Bell className="h-10 w-10 text-indigo-600" />,
      MessageCircle: <MessageCircle className="h-10 w-10 text-indigo-600" />
    };
    return iconMap[iconName as keyof typeof iconMap] || <BookOpen className="h-10 w-10 text-indigo-600" />;
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {resourcesContent.heroTitle.split('&').map((part, index) => (
                <React.Fragment key={index}>
                  {part.trim()}
                  {index < resourcesContent.heroTitle.split('&').length - 1 && (
                    <span className="text-indigo-600"> & </span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {resourcesContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Popular resources to get you started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourcesContent.featuredContent.map((content) => (
              <div key={content.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{content.type}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{content.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {content.description}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {content.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive learning materials for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesContent.resources.map((resource) => (
              <div key={resource.id} id={resource.id} className="bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(resource.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="space-y-2">
                  {resource.links.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
                    >
                      {link} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Structured learning journeys for different roles and goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {resourcesContent.learningPaths.map((path) => (
              <div key={path.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {path.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {path.description}
                </p>
                <div className="space-y-3">
                  {path.steps.map((step) => (
                    <div key={step.id} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-100 dark:bg-green-900' :
                        step.status === 'current' ? 'bg-blue-100 dark:bg-blue-900' :
                        'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        <span className={`text-xs font-bold ${
                          step.status === 'completed' ? 'text-green-600 dark:text-green-400' :
                          step.status === 'current' ? 'text-blue-600 dark:text-blue-400' :
                          'text-gray-600 dark:text-gray-400'
                        }`}>{step.number}</span>
                      </div>
                      <span className={`${
                        step.status === 'completed' ? 'text-gray-700 dark:text-gray-300' :
                        step.status === 'current' ? 'text-gray-700 dark:text-gray-300' :
                        'text-gray-500 dark:text-gray-500'
                      }`}>{step.title}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {resourcesContent.communitySection.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {resourcesContent.communitySection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourcesContent.communitySection.items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {getIcon(item.id === 'slack' ? 'MessageCircle' : item.id === 'github' ? 'FileText' : 'Calendar')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {resourcesContent.ctaSection.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {resourcesContent.ctaSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {resourcesContent.ctaSection.primaryButton}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              {resourcesContent.ctaSection.secondaryButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;