import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Monitor, Settings } from 'lucide-react';

const ThemePreferences = () => {
  const { themeMode, setThemeMode, isSystemDark } = useTheme();

  const themeOptions = [
    {
      id: 'light',
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      title: 'Light Mode',
      description: 'Always use light theme',
      active: themeMode === 'light'
    },
    {
      id: 'dark',
      icon: <Moon className="h-6 w-6 text-blue-400" />,
      title: 'Dark Mode',
      description: 'Always use dark theme',
      active: themeMode === 'dark'
    },
    {
      id: 'system',
      icon: <Monitor className="h-6 w-6 text-green-500" />,
      title: 'System Mode',
      description: `Follow system preference (${isSystemDark ? 'Dark' : 'Light'})`,
      active: themeMode === 'system'
    }
  ];

  return (
    <div className="card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Settings className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-lg font-semibold text-adaptive">Theme Preferences</h3>
      </div>
      
      <div className="space-y-4">
        {themeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setThemeMode(option.id as 'light' | 'dark' | 'system')}
            className={`w-full flex items-start space-x-4 p-4 rounded-lg border-2 transition-all duration-200 hover-lift ${
              option.active
                ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                : 'border-adaptive hover:border-adaptive-hover'
            }`}
          >
            <div className="flex-shrink-0 mt-1">
              {option.icon}
            </div>
            <div className="flex-1 text-left">
              <h4 className={`font-medium ${
                option.active ? 'text-indigo-600 dark:text-indigo-400' : 'text-adaptive'
              }`}>
                {option.title}
              </h4>
              <p className={`text-sm mt-1 ${
                option.active ? 'text-indigo-500 dark:text-indigo-300' : 'text-adaptive-secondary'
              }`}>
                {option.description}
              </p>
            </div>
            {option.active && (
              <div className="flex-shrink-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h4 className="text-sm font-medium text-adaptive mb-2">Current Theme Status</h4>
        <div className="flex items-center space-x-2 text-sm text-adaptive-secondary">
          <div className={`w-2 h-2 rounded-full ${
            themeMode === 'system' ? 'bg-green-500' : 
            themeMode === 'dark' ? 'bg-blue-500' : 'bg-yellow-500'
          }`}></div>
          <span>
            {themeMode === 'system' 
              ? `System Mode - ${isSystemDark ? 'Dark' : 'Light'}`
              : themeMode === 'dark' 
                ? 'Dark Mode Active'
                : 'Light Mode Active'
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemePreferences; 