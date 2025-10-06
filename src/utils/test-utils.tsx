/**
 * Test Utilities
 * Helper functions and setup for testing React components
 */

import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AdminProvider } from '../contexts/AdminContext';
import { HelmetProvider } from 'react-helmet-async';

// Create a custom render function that includes all providers
interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AdminProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </AdminProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Mock data for testing
export const mockSiteConfig = {
  siteName: 'Cazpian',
  heroTitle: 'Transform Your Data with AI',
  heroSubtitle: 'Modern data analytics platform',
  primaryColor: '#6366f1',
  ctaPrimary: 'Get Started',
  ctaSecondary: 'Book a Demo',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/cazpian',
    twitter: 'https://twitter.com/cazpian',
    github: 'https://github.com/cazpian',
  },
  footerText: '© 2025 Cazpian. All rights reserved.',
};

// Accessibility testing helpers
export const checkA11y = async (container: HTMLElement) => {
  const { axe } = await import('@axe-core/react');
  const results = await axe(container);
  return results;
};

// Wait for loading to complete
export const waitForLoadingToFinish = () => {
  return new Promise((resolve) => setTimeout(resolve, 100));
};

// Mock intersection observer
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = class {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
  };

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: mockIntersectionObserver,
  });
};

// Mock window.matchMedia
export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

