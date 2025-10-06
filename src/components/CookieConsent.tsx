import { useState, useEffect } from 'react';
import { X, Cookie, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      updateGtagConsent(savedPreferences);
    }
  }, []);

  const updateGtagConsent = (prefs: typeof preferences) => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
        functionality_storage: prefs.functional ? 'granted' : 'denied',
        personalization_storage: prefs.functional ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    updateGtagConsent(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(allRejected);
    localStorage.setItem('cookie-consent', JSON.stringify(allRejected));
    updateGtagConsent(allRejected);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    updateGtagConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleTogglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          role="dialog"
          aria-label="Cookie consent banner"
          aria-live="polite"
        >
          <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {!showSettings ? (
              // Main Banner
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                  {/* Icon and Content Container */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                        <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        We value your privacy
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                        By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                        <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          Privacy Policy
                        </a>.
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 sm:gap-3 lg:w-auto xl:w-auto">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 whitespace-nowrap"
                      aria-label="Customize cookie preferences"
                    >
                      Customize
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 whitespace-nowrap"
                      aria-label="Reject all cookies"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 shadow-lg whitespace-nowrap"
                      aria-label="Accept all cookies"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">
                      Cookie Preferences
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors flex-shrink-0"
                    aria-label="Close settings"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Necessary Cookies
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 cursor-not-allowed opacity-50"
                        aria-label="Necessary cookies (always enabled)"
                      />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Analytics Cookies
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleTogglePreference('analytics')}
                        className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                        aria-label="Toggle analytics cookies"
                      />
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Functional Cookies
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Enable enhanced functionality and personalization.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handleTogglePreference('functional')}
                        className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                        aria-label="Toggle functional cookies"
                      />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Marketing Cookies
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Used to track visitors across websites for marketing purposes.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handleTogglePreference('marketing')}
                        className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                        aria-label="Toggle marketing cookies"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    aria-label="Reject all optional cookies"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 shadow-lg"
                    aria-label="Save cookie preferences"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 shadow-lg"
                    aria-label="Accept all cookies"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

