import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeIndicator = () => {
  const { themeMode, isSystemDark } = useTheme();

  const getThemeInfo = () => {
    switch (themeMode) {
      case 'light':
        return {
          icon: <Sun className="h-4 w-4 text-yellow-500" />,
          label: 'Light Mode',
          description: 'Using light theme'
        };
      case 'dark':
        return {
          icon: <Moon className="h-4 w-4 text-blue-400" />,
          label: 'Dark Mode',
          description: 'Using dark theme'
        };
      case 'system':
        return {
          icon: <Monitor className="h-4 w-4 text-green-500" />,
          label: 'System Mode',
          description: `Following system (${isSystemDark ? 'Dark' : 'Light'})`
        };
      default:
        return {
          icon: <Monitor className="h-4 w-4" />,
          label: 'Theme',
          description: 'Theme not set'
        };
    }
  };

  const themeInfo = getThemeInfo();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          {themeInfo.icon}
          <div className="text-xs">
            <div className="font-medium text-gray-900 dark:text-white">
              {themeInfo.label}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {themeInfo.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeIndicator; 