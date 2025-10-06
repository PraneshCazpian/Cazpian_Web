import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import CazpianLogo from './CazpianLogo';
import { useAdmin } from '../contexts/AdminContext';
import NavigationDropdown from './NavigationDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { siteConfig, menuItems } = useAdmin();
  const timeoutRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Swipe gesture handlers for mobile menu
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;

    if (isLeftSwipe && isMenuOpen) {
      // Swipe left to close menu
      setIsMenuOpen(false);
      setOpenSubmenu(null);
    }
  };

  // Enhanced mobile menu animations
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0
    },
    open: {
      opacity: 1,
      height: "auto"
    }
  };

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

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
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <CazpianLogo size="md" />

          {/* Large Desktop Navigation (1400px+) */}
          <nav className="hidden 2xl:flex items-center space-x-2 nav-container">
            {/* <Link
              to="/"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link> */}
            
            {visibleMenuItems.map((item) => (
              <div
                key={item.title}
                className="relative nav-item nav-item-responsive"
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

          {/* Desktop Navigation (1200px - 1400px) */}
          <nav className="hidden xl:flex 2xl:hidden items-center space-x-1 nav-container">
            {/* <Link
              to="/"
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link>
             */}
            {visibleMenuItems.map((item) => (
              <div
                key={item.title}
                className="relative nav-item nav-item-responsive"
                onMouseEnter={() => handleDropdownEnter(item.title)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.path}
                  className="relative flex items-center space-x-1 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group hardware-accelerated"
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
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Large Tablet Navigation (1024px - 1200px) */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1 nav-container">
            {/* <Link
              to="/"
              className="relative px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10 text-sm">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link> */}
            
            {visibleMenuItems.map((item) => (
              <div
                key={item.title}
                className="relative nav-item nav-item-responsive"
                onMouseEnter={() => handleDropdownEnter(item.title)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.path}
                  className="relative flex items-center space-x-1 px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group hardware-accelerated"
                >
                  <span className="relative z-10 text-sm">{item.title}</span>
                  {item.submenu && item.submenu.length > 0 && (
                    <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
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
              className="relative px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10 text-sm">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Small Tablet Navigation (768px - 1024px) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1 nav-container">
            {/* <Link
              to="/"
              className="relative px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10 text-xs">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link> */}
            
            {visibleMenuItems.map((item) => (
              <div
                key={item.title}
                className="relative nav-item nav-item-responsive"
                onMouseEnter={() => handleDropdownEnter(item.title)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.path}
                  className="relative flex items-center space-x-1 px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group hardware-accelerated"
                >
                  <span className="relative z-10 text-xs">{item.title}</span>
                  {item.submenu && item.submenu.length > 0 && (
                    <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
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
              className="relative px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group"
            >
              <span className="relative z-10 text-xs">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 rounded-lg transition-all duration-300"></div>
            </Link>
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              to="/book-meeting"
              className="relative px-3 py-2 text-white font-medium rounded-lg transition-all duration-300 hover-lift group overflow-hidden btn-responsive"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              <span className="relative z-10">{siteConfig.ctaSecondary}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button - Enhanced with better touch targets */}
          <motion.button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setOpenSubmenu(null); // Reset submenu state when closing
            }}
            className="md:hidden p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ minWidth: '44px', minHeight: '44px' }} // Ensure proper touch target
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation with Swipe Gestures */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                when: "beforeChildren"
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-900 shadow-xl overflow-hidden"
            >
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain">
              <div className="px-4 py-6 space-y-1">
                {/* Home Link */}
                <motion.div
                  variants={mobileMenuItemVariants}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/"
                    className="flex items-center px-4 py-4 text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 transition-all duration-200 group min-h-[44px]"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Go to home page"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                </motion.div>
                
                {/* Menu Items with Collapsible Submenus */}
                {visibleMenuItems.map((item, index) => {
                  const hasSubmenu = item.submenu && item.submenu.length > 0;
                  const isSubmenuOpen = openSubmenu === item.title;
                  
                  return (
                    <motion.div 
                      key={item.title} 
                      className="space-y-1"
                      variants={mobileMenuItemVariants}
                      custom={index}
                    >
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Link
                            to={item.path}
                            className="flex items-center px-4 py-4 text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 transition-all duration-200 group min-h-[44px] w-full"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label={`Go to ${item.title}`}
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                        
                        {hasSubmenu && (
                          <motion.button
                            onClick={() => setOpenSubmenu(isSubmenuOpen ? null : item.title)}
                            className="p-3 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-expanded={isSubmenuOpen}
                            aria-label={`Toggle ${item.title} submenu`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </motion.button>
                        )}
                      </div>
                      
                      {/* Collapsible Submenu */}
                      <AnimatePresence>
                        {hasSubmenu && isSubmenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="ml-8 space-y-1 border-l-2 border-indigo-100 dark:border-indigo-900/30 pl-4"
                          >
                            {item.submenu?.filter(subItem => subItem.isVisible).map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.title}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1, duration: 0.2 }}
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200 group min-h-[44px]"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setOpenSubmenu(null);
                                  }}
                                  aria-label={`Go to ${subItem.title}`}
                                >
                                  <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                  {subItem.title}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
                
                {/* Contact Link */}
                <motion.div
                  variants={mobileMenuItemVariants}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="flex items-center px-4 py-4 text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 transition-all duration-200 group min-h-[44px]"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Go to contact page"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </Link>
                </motion.div>
                
                {/* Divider */}
                <div className="pt-4 pb-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                </div>
                
                {/* Bottom Actions */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
                  variants={mobileMenuItemVariants}
                >
                  <motion.div 
                    className="flex items-center justify-between sm:justify-start gap-3 px-4 py-2"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Theme</span>
                    <ThemeToggle />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/book-meeting"
                      className="flex items-center justify-center px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
                      style={{ 
                        background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.primaryColor}dd)`,
                        boxShadow: `0 4px 12px ${siteConfig.primaryColor}40`
                      }}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Book a meeting"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {siteConfig.ctaSecondary}
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;