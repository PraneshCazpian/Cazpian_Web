import React from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { BookOpen, Play, FileText, Calendar, Bell, MessageCircle, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import SVGIllustration from '../components/SVGIllustration';

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
      {/* Enhanced Hero Section with SVG */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20 overflow-hidden">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="resources-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#resources-grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="h-6 w-6 text-indigo-600 mr-2" />
                <span className="text-indigo-600 font-semibold">Learning Resources</span>
              </div>
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
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl lg:max-w-none mb-8">
                {resourcesContent.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                  Explore Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200 font-semibold text-lg">
                  Join Community
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <SVGIllustration 
                  name="research-paper" 
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

      {/* Enhanced Featured Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <SVGIllustration name="data-report" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Content
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Popular resources to get you started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourcesContent.featuredContent.map((content) => (
              <div key={content.id} className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
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
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold flex items-center text-sm">
                      Read more
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Resources Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <SVGIllustration name="information" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                All Resources
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive learning materials for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesContent.resources.map((resource) => (
              <div key={resource.id} id={resource.id} className="group relative bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <SVGIllustration 
                    name="google-sitemap" 
                    width={60} 
                    height={60}
                    className="text-indigo-600"
                  />
                </div>
                <div className="relative z-10">
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
                        className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors flex items-center group/link"
                      >
                        {link}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Learning Paths */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <SVGIllustration name="tab" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Learning Paths
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Structured learning journeys for different roles and goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {resourcesContent.learningPaths.map((path, index) => (
              <div key={path.id} className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <SVGIllustration 
                    name={index === 0 ? "data" : "development"} 
                    width={80} 
                    height={80}
                    className="text-indigo-600"
                  />
                </div>
                <div className="relative z-10">
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
                  <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold flex items-center">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Community Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <SVGIllustration name="user-research" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {resourcesContent.communitySection.title}
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {resourcesContent.communitySection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourcesContent.communitySection.items.map((item) => (
              <div key={item.id} className="group relative bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.id === 'slack' ? 'MessageCircle' : item.id === 'github' ? 'FileText' : 'Calendar')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold flex items-center mx-auto">
                  {item.buttonText}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
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
              <pattern id="resources-cta-grid" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#resources-cta-grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <SVGIllustration name="visual-data" width={64} height={64} className="text-white opacity-80" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {resourcesContent.ctaSection.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {resourcesContent.ctaSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center">
              {resourcesContent.ctaSection.primaryButton}
              <ArrowRight className="ml-2 h-5 w-5" />
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