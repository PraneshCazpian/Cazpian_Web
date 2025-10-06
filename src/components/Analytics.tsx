import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 types
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'consent',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

interface AnalyticsProps {
  measurementId?: string;
}

// Initialize Google Analytics 4
export const initGA4 = (measurementId: string) => {
  if (typeof window === 'undefined' || !measurementId) return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, // We'll handle page views manually
    cookie_flags: 'SameSite=None;Secure',
  });

  // Set consent mode (GDPR compliant)
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'granted',
    security_storage: 'granted',
  });
};

// Track page view
export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag) return;

  window.gtag('config', import.meta.env.VITE_GA4_MEASUREMENT_ID || '', {
    page_path: path,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${ctaName} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'forms',
    formName
  );
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number) => {
  if (!window.gtag) return;

  window.gtag('event', 'conversion', {
    conversion_type: conversionType,
    value: value,
    currency: 'USD',
  });
};

// Track user engagement
export const trackEngagement = (engagementType: string, details?: string) => {
  trackEvent('user_engagement', 'engagement', `${engagementType}${details ? ` - ${details}` : ''}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', 'engagement', `${depth}%`, depth);
};

// Component for route-based tracking
const Analytics = ({ measurementId }: AnalyticsProps) => {
  const location = useLocation();

  useEffect(() => {
    const GA4_ID = measurementId || import.meta.env.VITE_GA4_MEASUREMENT_ID;
    
    if (GA4_ID && !window.gtag) {
      initGA4(GA4_ID);
    }
  }, [measurementId]);

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search);

    // Track scroll depth
    let scrollDepths = [25, 50, 75, 100];
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      scrollDepths = scrollDepths.filter((depth) => {
        if (scrollPercent >= depth) {
          trackScrollDepth(depth);
          return false;
        }
        return true;
      });

      if (scrollDepths.length === 0) {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return null;
};

export default Analytics;

