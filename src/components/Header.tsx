import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import CazpianLogo from './CazpianLogo';
import { useAdmin } from '../contexts/AdminContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { siteConfig, menuItems } = useAdmin();

  // Filter visible menu items
  const visibleMenuItems = menuItems.filter(item => item.isVisible);

  return (
    <header className="sticky top-0 z-50 backdrop-enhanced border-b border-adaptive shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <CazpianLogo size="md" />
            <span className="text-xl font-bold text-adaptive">{siteConfig.siteName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
          <Link
              to="/"
              className="text-adaptive-secondary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus-ring"
            >
              Home
            </Link>
            {visibleMenuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center space-x-1 text-adaptive-secondary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus-ring"
                >
                  <span>{item.title}</span>
                  {/* <ChevronDown className="h-4 w-4" /> */}
                </Link>
                
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50 backdrop-blur-sm">
                    {item.submenu?.filter(subItem => subItem.isVisible).map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-adaptive-secondary hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="text-adaptive-secondary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus-ring"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/book-meeting"
              className="btn-primary hover-lift"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              {siteConfig.ctaSecondary}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-adaptive-secondary hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus-ring"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-adaptive backdrop-enhanced">
            <div className="space-adaptive">
              {visibleMenuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    className="block text-adaptive-secondary hover:text-indigo-600 dark:hover:text-indigo-400 font-medium focus-ring"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu?.filter(subItem => subItem.isVisible).map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block text-sm text-adaptive-tertiary hover:text-indigo-600 dark:hover:text-indigo-400 focus-ring"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/contact"
                className="block text-adaptive-secondary hover:text-indigo-600 dark:hover:text-indigo-400 font-medium focus-ring"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex items-center justify-between pt-4">
                <ThemeToggle />
                <Link
                  to="/book-meeting"
                  className="btn-primary hover-lift"
                  style={{ backgroundColor: siteConfig.primaryColor }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {siteConfig.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;