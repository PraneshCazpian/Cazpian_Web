import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  isDark: boolean;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  isSystemDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode');
      return (saved as ThemeMode) || 'system';
    }
    return 'system';
  });

  const [isSystemDark, setIsSystemDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Calculate if dark mode should be active based on theme mode and system preference
  const isDark = themeMode === 'dark' || (themeMode === 'system' && isSystemDark);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSystemDark(e.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // Apply theme to document
  useEffect(() => {
    localStorage.setItem('theme-mode', themeMode);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }

    // Add smooth transition for theme changes
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  }, [isDark]);

  const toggleTheme = () => {
    if (themeMode === 'system') {
      setThemeMode(isSystemDark ? 'light' : 'dark');
    } else {
      setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    }
  };

  const handleSetThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDark, 
      themeMode, 
      toggleTheme, 
      setThemeMode: handleSetThemeMode,
      isSystemDark 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};