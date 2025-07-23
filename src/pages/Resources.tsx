import React from 'react';
import { BookOpen, Play, FileText, Calendar, Bell, MessageCircle } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      id: 'documentation',
      icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
      title: 'Documentation & API',
      description: 'Step-by-step product documentation, sample scripts, and architecture references. Find clear explanations for every API, connector, and capability. From first query to full deployment—we\'ve got you covered. Docs that accelerate, not frustrate.',
      links: ['API Reference', 'Getting Started', 'Architecture Guide', 'Best Practices']
    },
    {
      id: 'tutorials',
      icon: <Play className="h-10 w-10 text-indigo-600" />,
      title: 'Tutorials & Quickstarts',
      description: 'Launch your first Cazpian workload in minutes. Guided labs, notebooks, and code samples make adoption smooth. From zero to value—quick. Perfect for new teams and seasoned devs alike.',
      links: ['5-Minute Quickstart', 'Data Pipeline Tutorial', 'ML Workflow Guide', 'Integration Examples']
    },
    {
      id: 'blog',
      icon: <FileText className="h-10 w-10 text-indigo-600" />,
      title: 'Blog & Engineering',
      description: 'Insights from our engineers, customers, and data community. Explore new features, performance strategies, and architecture deep dives. Not just thought leadership—real, applied knowledge. Stay informed, stay sharp.',
      links: ['Latest Posts', 'Engineering Deep Dives', 'Customer Stories', 'Industry Insights']
    },
    {
      id: 'webinars',
      icon: <Calendar className="h-10 w-10 text-indigo-600" />,
      title: 'Webinars & Events',
      description: 'Join live demos, product deep dives, and AMAs with the Cazpian team. Learn from industry experts and customer success stories. Can\'t attend live? Access our event library on-demand. Data learning, on your schedule.',
      links: ['Upcoming Events', 'On-Demand Library', 'Product Demos', 'Customer Webinars']
    },
    {
      id: 'release-notes',
      icon: <Bell className="h-10 w-10 text-indigo-600" />,
      title: 'Release Notes',
      description: 'Track what\'s new, what\'s fixed, and what\'s coming next. Our roadmap is public and shaped by user feedback. Stay ahead of the curve with transparent product development. You\'re not just using the product—you help build it.',
      links: ['Latest Release', 'Roadmap', 'Feature Requests', 'Bug Reports']
    },
    {
      id: 'community',
      icon: <MessageCircle className="h-10 w-10 text-indigo-600" />,
      title: 'Community Slack',
      description: 'Join our open Slack community for support, feedback, and collaboration. Ask questions, share ideas, and connect with engineers directly. Feature requests are welcomed—and often shipped. The best ideas start in conversation.',
      links: ['Join Slack', 'Community Guidelines', 'Support Channels', 'Feature Discussions']
    }
  ];

  const featuredContent = [
    {
      type: 'Tutorial',
      title: 'Building Your First Data Pipeline',
      description: 'Learn how to set up a complete data pipeline from ingestion to analytics in under 30 minutes.',
      readTime: '15 min read',
      category: 'Getting Started'
    },
    {
      type: 'Blog Post',
      title: 'Why We Built Cazpian on Open Standards',
      description: 'The technical and strategic decisions behind our open architecture approach.',
      readTime: '8 min read',
      category: 'Engineering'
    },
    {
      type: 'Webinar',
      title: 'AI-Driven Analytics: Beyond Traditional BI',
      description: 'Discover how AI transforms data exploration and insight generation.',
      readTime: '45 min watch',
      category: 'Product Demo'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resources & <span className="text-indigo-600">Learning</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed with Cazpian—from quick starts to deep technical guides.
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
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
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
            {resources.map((resource) => (
              <div key={resource.id} id={resource.id} className="bg-white dark:bg-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
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
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Engineer Path
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Master data pipeline development, optimization, and deployment with Cazpian.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-xs font-bold">1</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Data Ingestion Fundamentals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">2</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Pipeline Orchestration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">3</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500">Advanced Optimization</span>
                </div>
              </div>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Start Learning
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Analyst Path
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Learn to explore, analyze, and visualize data with Cazpian's intuitive tools.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-xs font-bold">1</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Data Exploration Basics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">2</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">SQL & Query Building</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">3</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500">Advanced Analytics</span>
                </div>
              </div>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect with other users, share knowledge, and get help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Slack Community</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Join 5,000+ members for real-time discussions and support
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold">
                Join Slack
              </button>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub Discussions</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Technical discussions, feature requests, and bug reports
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold">
                Visit GitHub
              </button>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Office Hours</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Weekly Q&A sessions with the Cazpian team
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your learning path and begin your journey with Cazpian today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;