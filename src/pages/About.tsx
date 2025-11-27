import React,{ useState }  from 'react';
import { motion} from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Building, Users, Briefcase, Handshake, Newspaper, Phone } from 'lucide-react';

const About = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const faqItems = [
    {
      q: 'What makes Cazpian different?',
      a: 'An open, governed foundation that keeps teams fast—without proprietary lock‑in.'
    },
    {
      q: 'Is it cloud or self‑managed?',
      a: 'Both: choose Cazpian Cloud (managed) or Cazpian Enterprise (self‑managed).'
    },
    {
      q: 'How do we integrate?',
      a: "Use connectors, SQL, notebooks, and APIs. We'll map to your current tools."
    },
    {
      q: 'Can we start small?',
      a: 'Yes. Begin with one use case, then expand as value grows.'
    }
  ];

  React.useEffect(() => {
    if (!autoRotate) return;
    const intervalId = window.setInterval(() => {
      // pick a random index different from current
      const total = faqItems.length;
      const next = Math.floor(Math.random() * total);
      setOpenFaqIndex(next);
    }, 10000);
    return () => window.clearInterval(intervalId);
  }, [autoRotate]);

  const FAQItem: React.FC<{ index: number; question: string; answer: string }> = ({ index, question, answer }) => {
    const isOpen = openFaqIndex === index;
    return (
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        variants={itemVariants}
        className={`rounded-xl border backdrop-blur-sm shadow-sm overflow-hidden transition-colors ${
          isOpen
            ? 'border-indigo-300/70 dark:border-indigo-500/50 bg-indigo-50/60 dark:bg-indigo-900/20'
            : 'border-gray-200/70 dark:border-gray-700/70 bg-white/80 dark:bg-gray-800/80'
        }`}
      >
        <button
          type="button"
          onClick={() => {
            setAutoRotate(false); // stop random open on manual interaction
            setOpenFaqIndex(isOpen ? null : index);
          }}
          className={`w-full text-left px-4 sm:px-5 py-3 sm:py-4 flex items-start justify-between gap-3 transition-colors ${
            isOpen
              ? 'bg-indigo-50/60 dark:bg-indigo-900/20'
              : 'hover:bg-gray-50/70 dark:hover:bg-gray-700/40'
          }`}
          aria-expanded={isOpen}
        >
          <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{question}</span>
          <span
            className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
              isOpen ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border-gray-300/70 dark:border-gray-600/70'
            }`}
          >
            {isOpen ? '–' : '+'}
          </span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="px-4 sm:px-5 overflow-hidden"
        >
          <div className="pb-4 sm:pb-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      </motion.div>
    );
  };  
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

  const sections = [
    {
      id: 'company',
      icon: <Building className="h-10 w-10 text-indigo-600" />,
      title: 'Company',
      description: 'Cazpian is reimagining the data lakehouse for today\'s cloud-native, open-source-first world. We believe in empowering teams to move faster with fewer tools and more intelligence. Our mission is simple: make data processing seamless, open, and affordable. Built by practitioners, for practitioners.',
      svg: '/vector_svg/business-plan-animate.svg'
    },
    {
      id: 'team',
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: 'Team',
      description: 'Our team blends deep experience in cloud, OSS, data engineering, and AI. We\'re product-obsessed, customer-driven, and community-rooted. From startup veterans to open-source contributors, we\'re united by one goal: make data usable. Meet the minds behind Cazpian.',
      svg: '/vector_svg/programmer-animate.svg'
    },
    {
      id: 'careers',
      icon: <Briefcase className="h-10 w-10 text-indigo-600" />,
      title: 'Careers',
      description: 'Join a high-impact, remote-friendly team building the future of big data. We value autonomy, creativity, and a bias for action. Roles are open across engineering, product, design, and GTM. Help shape a company where every idea counts.',
      svg: '/vector_svg/developer-activity-animate.svg'
    },
    {
      id: 'partners',
      icon: <Handshake className="h-10 w-10 text-indigo-600" />,
      title: 'Partners',
      description: 'Our partner ecosystem spans cloud providers, consultancies, and ISVs. Deploy faster and smarter with certified integration and support partners. Become a Cazpian partner and grow with our user base. Strong platforms are built on strong ecosystems.',
      svg: '/vector_svg/business-deal-animate.svg'
    },
    {
      id: 'newsroom',
      icon: <Newspaper className="h-10 w-10 text-indigo-600" />,
      title: 'Newsroom',
      description: 'Explore Cazpian\'s latest announcements, awards, and media coverage. From product releases to customer wins, our journey is just getting started. Stay in the loop and see why data leaders are switching to Cazpian.',
      svg: '/Vector/information--.svg'
    },
    {
      id: 'contact-support',
      icon: <Phone className="h-10 w-10 text-indigo-600" />,
      title: 'Contact & Support',
      description: 'Have a question, idea, or need help? We\'re here for it. Reach out to support, sales, or partnerships. Fast responses, human answers, and deep product knowledge—always. Let\'s connect.',
      svg: '/vector_svg/email-capture-animate.svg'
    }
  ];

  const teamMembers = [
    {
      // name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Databricks, led the development of Delta Lake.',
      image: '/Ceo.svg'
    },
    {
      // name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google, architect of BigQuery\'s storage engine and query optimizer.',
      image: '/Co.svg'
    },
    {
      // name: 'Dr. Priya Patel',
      role: 'Head of AI',
      bio: 'Former Principal Scientist at Microsoft Research, expert in ML systems.',
      image: '/IT.svg'
    },
    {
      // name: 'James Thompson',
      role: 'VP of Engineering',
      bio: 'Previously at Snowflake and Amazon, built large-scale distributed systems.',
      image: '/Vp.svg'
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

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Cazpian",
    "url": "https://cazpian.ai/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Cazpian",
      "url": "https://cazpian.ai",
      "description":
        "Cazpian is an AI-powered modern lakehouse platform built on Apache Iceberg, offering governed compute and federated data query capabilities."
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is governed compute?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Governed compute refers to the ability to control and manage compute resources securely and efficiently across data workloads."
        }
      },
      {
        "@type": "Question",
        "name": "What is a data lakehouse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "A data lakehouse combines the scalability of data lakes with the performance and structure of data warehouses."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Helmet>
      
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-indigo-600">Cazpian</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0">
                We're building the future of data platforms—open, intelligent, and designed for the modern cloud.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/vector_svg/programmer-animate.svg" 
                alt="Cazpian Team"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{section.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{section.description}</p>
                <div className="flex justify-center">
                  <img 
                    src={section.svg} 
                    alt={section.title}
                    className="w-full h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced leaders building the future of data platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Help us build the future of data platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openRoles.map((role, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{role}</h3>
                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              Send Open Application
            </button>
          </div>
        </div>
      </section>

            {/* FAQ Section */}
            <section className="py-8 w-full bg-gradient-to-br from-white via-gray-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-6"
          >
            <motion.div 
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium mb-4"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              FAQ
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-clip-text"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p className="text-sm text-gray-600 dark:text-gray-400" variants={itemVariants}>
              Quick answers to help you evaluate Cazpian faster
            </motion.p>
          </motion.div>

          {/* Two-column: Illustration left, Accordion right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start max-w-6xl mx-auto">
            {/* Illustration */}
            <motion.div className="lg:col-span-2 hidden lg:block" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src="/vector_svg/file-searching-animate.svg" alt="FAQ Illustration" className="w-full h-auto object-contain max-w-[360px] xl:max-w-[420px] mx-auto" />
            </motion.div>

            {/* Accordion */}
            <motion.div className="lg:col-span-3 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              {faqItems.map((item, idx) => (
                <FAQItem key={idx} index={idx} question={item.q} answer={item.a} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Platform?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking teams who've already made the switch to faster, smarter, and more cost-effective data analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default About;