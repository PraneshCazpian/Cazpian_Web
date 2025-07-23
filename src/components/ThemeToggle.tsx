import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, themeMode, setThemeMode, isSystemDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = () => {
    if (themeMode === 'system') {
      return <Monitor className="h-5 w-5 text-gray-700 dark:text-gray-300" />;
    }
    return isDark ? (
      <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
    ) : (
      <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
    );
  };

  const getThemeLabel = () => {
    switch (themeMode) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return `System (${isSystemDark ? 'Dark' : 'Light'})`;
      default:
        return 'Theme';
    }
  };

  const handleThemeSelect = (mode: 'light' | 'dark' | 'system') => {
    setThemeMode(mode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
        aria-label="Theme options"
      >
        {getThemeIcon()}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
          {getThemeLabel()}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          <button
            onClick={() => handleThemeSelect('light')}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              themeMode === 'light' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <Sun className={`h-4 w-4 ${themeMode === 'light' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`} />
            <span className="text-sm font-medium">Light</span>
          </button>
          
          <button
            onClick={() => handleThemeSelect('dark')}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              themeMode === 'dark' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <Moon className={`h-4 w-4 ${themeMode === 'dark' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`} />
            <span className="text-sm font-medium">Dark</span>
          </button>
          
          <button
            onClick={() => handleThemeSelect('system')}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              themeMode === 'system' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <Monitor className={`h-4 w-4 ${themeMode === 'system' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`} />
            <div className="flex flex-col">
              <span className="text-sm font-medium">System</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {isSystemDark ? 'Dark' : 'Light'}
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;