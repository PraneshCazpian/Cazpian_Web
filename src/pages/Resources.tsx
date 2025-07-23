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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & <span className="text-indigo-600">Learning</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed with Cazpian—from quick starts to deep technical guides.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600">
              Popular resources to get you started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                    {content.type}
                  </span>
                  <span className="text-gray-500 text-sm">{content.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.category}</span>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive learning materials for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} id={resource.id} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="space-y-2">
                  {resource.links.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
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

      {/* Community CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Cazpian Community
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Connect with fellow data practitioners, get support, and shape the future of the platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg">
              Join Slack Community
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-200 font-semibold text-lg">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;