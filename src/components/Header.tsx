import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import CazpianLogo from './CazpianLogo';
import { useAdmin } from '../contexts/AdminContext';
import NavigationDropdown from './NavigationDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { siteConfig, menuItems } = useAdmin();
  const timeoutRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  // Filter visible menu items
  const visibleMenuItems = menuItems.filter(item => item.isVisible);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDropdownEnter = (itemTitle: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isHoveringRef.current = true;
    setActiveDropdown(itemTitle);
  };

  const handleDropdownLeave = () => {
    isHoveringRef.current = false;
    // Add a small delay to prevent flickering when moving between elements
    timeoutRef.current = window.setTimeout(() => {
      if (!isHoveringRef.current) {
        setActiveDropdown(null);
      }
    }, 150);
  };

  const handleDropdownContentEnter = () => {
    isHoveringRef.current = true;
    // Clear timeout when entering dropdown content
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownContentLeave = () => {
    isHoveringRef.current = false;
    // Add delay when leaving dropdown content
    timeoutRef.current = window.setTimeout(() => {
      if (!isHoveringRef.current) {
        setActiveDropdown(null);
      }
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <CazpianLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link>
            
            {visibleMenuItems.map((item) => (
              <div
                key={item.title}
                className="relative nav-item"
                onMouseEnter={() => handleDropdownEnter(item.title)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.path}
                  className="relative flex items-center space-x-1 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group hardware-accelerated"
                >
                  <span className="relative z-10">{item.title}</span>
                  {item.submenu && item.submenu.length > 0 && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
                </Link>
                
                {activeDropdown === item.title && item.submenu && item.submenu.length > 0 && (
                  <div
                    ref={dropdownRef}
                    onMouseEnter={handleDropdownContentEnter}
                    onMouseLeave={handleDropdownContentLeave}
                    className="absolute top-full left-0 mt-2 z-50 dropdown-container"
                    style={{
                      transform: 'translateZ(0)', // Force hardware acceleration
                      willChange: 'opacity, transform' // Optimize for animations
                    }}
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
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/book-meeting"
              className="relative px-6 py-2.5 text-white font-medium rounded-lg transition-all duration-300 hover-lift group overflow-hidden"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              <span className="relative z-10">{siteConfig.ctaSecondary}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {visibleMenuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  <div className="ml-4 mt-1 space-y-1">
                    {item.submenu?.filter(subItem => subItem.isVisible).map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
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
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <div className="flex items-center justify-between pt-4 px-4">
                <ThemeToggle />
                <Link
                  to="/book-meeting"
                  className="px-6 py-2.5 text-white font-medium rounded-lg transition-all duration-300 hover-lift"
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