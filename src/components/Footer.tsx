import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import CazpianLogo from './CazpianLogo';
import { useAdmin } from '../contexts/AdminContext';

const Footer = () => {
  const { siteConfig } = useAdmin();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CazpianLogo size="md" className="text-white" />
              <span className="text-xl font-bold">{siteConfig.siteName}</span>
            </Link>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">
              {siteConfig.heroSubtitle}
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.socialLinks.linkedin} className="text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.socialLinks.github} className="text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href={siteConfig.socialLinks.twitter} className="text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/product#cloud" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Cazpian Cloud</Link></li>
              <li><Link to="/product#enterprise" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Cazpian Enterprise</Link></li>
              <li><Link to="/product#community" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Community Edition</Link></li>
              <li><Link to="/product#semantic-fabric" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">AI Semantic Fabric</Link></li>
              <li><Link to="/product#hypersql" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">HyperSQL Engine</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions#analytics" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Analytics Acceleration</Link></li>
              <li><Link to="/solutions#self-service-bi" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Self-Service BI</Link></li>
              <li><Link to="/solutions#data-science" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Data Science & ML</Link></li>
              <li><Link to="/solutions#financial" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link to="/solutions#healthcare" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Healthcare</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources#documentation" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/resources#tutorials" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="/resources#blog" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources#webinars" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Webinars</Link></li>
              <li><Link to="/resources#community" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-l-lg text-white text-sm focus:outline-none focus:border-indigo-500"
              />
              <button 
                className="px-4 py-2 rounded-r-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: siteConfig.primaryColor }}
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {siteConfig.footerText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;