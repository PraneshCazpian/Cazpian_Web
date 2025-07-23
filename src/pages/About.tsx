import React from 'react';
import { Building, Users, Briefcase, Handshake, Newspaper, Phone } from 'lucide-react';

const About = () => {
  const sections = [
    {
      id: 'company',
      icon: <Building className="h-10 w-10 text-indigo-600" />,
      title: 'Company',
      description: 'Cazpian is reimagining the data lakehouse for today\'s cloud-native, open-source-first world. We believe in empowering teams to move faster with fewer tools and more intelligence. Our mission is simple: make data processing seamless, open, and affordable. Built by practitioners, for practitioners.'
    },
    {
      id: 'team',
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: 'Team',
      description: 'Our team blends deep experience in cloud, OSS, data engineering, and AI. We\'re product-obsessed, customer-driven, and community-rooted. From startup veterans to open-source contributors, we\'re united by one goal: make data usable. Meet the minds behind Cazpian.'
    },
    {
      id: 'careers',
      icon: <Briefcase className="h-10 w-10 text-indigo-600" />,
      title: 'Careers',
      description: 'Join a high-impact, remote-friendly team building the future of big data. We value autonomy, creativity, and a bias for action. Roles are open across engineering, product, design, and GTM. Help shape a company where every idea counts.'
    },
    {
      id: 'partners',
      icon: <Handshake className="h-10 w-10 text-indigo-600" />,
      title: 'Partners',
      description: 'Our partner ecosystem spans cloud providers, consultancies, and ISVs. Deploy faster and smarter with certified integration and support partners. Become a Cazpian partner and grow with our user base. Strong platforms are built on strong ecosystems.'
    },
    {
      id: 'newsroom',
      icon: <Newspaper className="h-10 w-10 text-indigo-600" />,
      title: 'Newsroom',
      description: 'Explore Cazpian\'s latest announcements, awards, and media coverage. From product releases to customer wins, our journey is just getting started. Stay in the loop and see why data leaders are switching to Cazpian.'
    },
    {
      id: 'contact-support',
      icon: <Phone className="h-10 w-10 text-indigo-600" />,
      title: 'Contact & Support',
      description: 'Have a question, idea, or need help? We\'re here for it. Reach out to support, sales, or partnerships. Fast responses, human answers, and deep product knowledge—always. Let\'s connect.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Databricks, led the development of Delta Lake.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google, architect of BigQuery\'s storage engine and query optimizer.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI',
      bio: 'Former Principal Scientist at Microsoft Research, expert in ML systems.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Thompson',
      role: 'VP of Engineering',
      bio: 'Previously at Snowflake and Amazon, built large-scale distributed systems.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const openRoles = [
    'Senior Software Engineer - Query Engine',
    'Product Manager - AI/ML Platform',
    'Senior DevOps Engineer',
    'Technical Writer',
    'Sales Engineer',
    'Customer Success Manager'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-indigo-600">Cazpian</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of data platforms—open, intelligent, and designed for the modern cloud.
            </p>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Industry veterans building the next generation of data infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600">
              Help us build the future of data platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {openRoles.map((role, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{role}</span>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Apply →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg">
              View All Openings
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-indigo-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Open by Default</h3>
              <p className="text-indigo-100">
                We believe in open standards, open source, and transparent development.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Customer Obsessed</h3>
              <p className="text-indigo-100">
                Every decision starts with understanding and solving real customer problems.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Move Fast</h3>
              <p className="text-indigo-100">
                We ship quickly, learn rapidly, and iterate based on feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;