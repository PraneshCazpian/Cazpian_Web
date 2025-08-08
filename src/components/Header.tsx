import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import CazpianLogo from './CazpianLogo';
import { useAdmin } from '../contexts/AdminContext';
import NavigationDropdown from './NavigationDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { siteConfig, menuItems } = useAdmin();
  const timeoutRef = useRef<number | null>(null);

  // Filter visible menu items
  const visibleMenuItems = menuItems.filter(item => item.isVisible);

  const handleDropdownEnter = (itemTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemTitle);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownContentEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownContentLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20"></div>
        
        {/* Gradient overlay for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 via-transparent to-purple-50/30 dark:from-indigo-900/10 dark:via-transparent dark:to-purple-900/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with enhanced styling */}
            <Link to="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
              <div className="relative">
                <CazpianLogo size="md" />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {siteConfig.siteName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className="nav-item group relative px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
              >
                <span className="relative z-10 font-medium">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              {visibleMenuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.title)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.path}
                    className="nav-item group relative flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
                  >
                    <span className="relative z-10 font-medium">{item.title}</span>
                    {item.submenu && item.submenu.length > 0 && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  
                  {activeDropdown === item.title && item.submenu && item.submenu.length > 0 && (
                    <div
                      onMouseEnter={handleDropdownContentEnter}
                      onMouseLeave={handleDropdownContentLeave}
                    >
                      <NavigationDropdown 
                        title={item.title}
                        items={item.submenu.filter(subItem => subItem.isVisible)}
                      />
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/contact"
                className="nav-item group relative px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
              >
                <span className="relative z-10 font-medium">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </nav>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Start Free Button - Ghost Style */}
              <Link
                to="/agent-studio"
                className="group relative px-6 py-3 rounded-xl border-2 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-semibold transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
                  <span>Start Free</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Book Demo Button - Primary with Glow */}
              <Link
                to="/book-meeting"
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
                style={{ 
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap className="h-4 w-4 group-hover:animate-bounce" />
                  <span>{siteConfig.ctaSecondary}</span>
                </span>
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
              </Link>
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu */}
          <div className="mobile-menu-container absolute top-20 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="space-y-2">
                {/* Mobile Navigation Items */}
                <Link
                  to="/"
                  className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {visibleMenuItems.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <Link
                      to={item.path}
                      className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 font-medium transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu?.filter(subItem => subItem.isVisible).map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block pl-8 pr-4 py-2 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                ))}
                
                <Link
                  to="/contact"
                  className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>

                {/* Mobile CTA Buttons */}
                <div className="pt-6 space-y-3 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Theme</span>
                    <ThemeToggle />
                  </div>
                  
                  <Link
                    to="/agent-studio"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl border-2 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-semibold transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Start Free</span>
                  </Link>
                  
                  <Link
                    to="/book-meeting"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Zap className="h-4 w-4" />
                    <span>{siteConfig.ctaSecondary}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;