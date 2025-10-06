import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  announceToScreenReader,
  prefersReducedMotion,
  prefersDarkMode,
  prefersHighContrast,
  getUniqueId,
  isElementVisible,
} from '../accessibility';

describe('Accessibility Utilities', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('announceToScreenReader', () => {
    it('should create an announcement element', () => {
      announceToScreenReader('Test message');
      
      const announcement = document.querySelector('[role="status"]');
      expect(announcement).toBeTruthy();
      expect(announcement?.textContent).toBe('Test message');
    });

    it('should set aria-live to polite by default', () => {
      announceToScreenReader('Test message');
      
      const announcement = document.querySelector('[role="status"]');
      expect(announcement?.getAttribute('aria-live')).toBe('polite');
    });

    it('should set aria-live to assertive when priority is assertive', () => {
      announceToScreenReader('Urgent message', 'assertive');
      
      const announcement = document.querySelector('[role="status"]');
      expect(announcement?.getAttribute('aria-live')).toBe('assertive');
    });

    it('should remove announcement after timeout', async () => {
      vi.useFakeTimers();
      
      announceToScreenReader('Test message');
      expect(document.querySelector('[role="status"]')).toBeTruthy();
      
      vi.advanceTimersByTime(1000);
      expect(document.querySelector('[role="status"]')).toBeFalsy();
      
      vi.useRealTimers();
    });
  });

  describe('prefersReducedMotion', () => {
    it('should return false when prefers-reduced-motion is not set', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      expect(prefersReducedMotion()).toBe(false);
    });

    it('should return true when prefers-reduced-motion is reduce', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      expect(prefersReducedMotion()).toBe(true);
    });
  });

  describe('prefersDarkMode', () => {
    it('should return false when prefers-color-scheme is light', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      expect(prefersDarkMode()).toBe(false);
    });

    it('should return true when prefers-color-scheme is dark', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      expect(prefersDarkMode()).toBe(true);
    });
  });

  describe('prefersHighContrast', () => {
    it('should return false when prefers-contrast is not high', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      expect(prefersHighContrast()).toBe(false);
    });

    it('should return true when prefers-contrast is high', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(prefers-contrast: high)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      expect(prefersHighContrast()).toBe(true);
    });
  });

  describe('getUniqueId', () => {
    it('should generate unique IDs', () => {
      const id1 = getUniqueId();
      const id2 = getUniqueId();
      
      expect(id1).not.toBe(id2);
    });

    it('should use custom prefix', () => {
      const id = getUniqueId('test');
      
      expect(id).toMatch(/^test-\d+$/);
    });
  });

  describe('isElementVisible', () => {
    it('should return true for visible element', () => {
      const element = document.createElement('div');
      element.style.width = '100px';
      element.style.height = '100px';
      document.body.appendChild(element);
      
      // Mock offsetWidth and offsetHeight
      Object.defineProperty(element, 'offsetWidth', { value: 100 });
      Object.defineProperty(element, 'offsetHeight', { value: 100 });
      
      expect(isElementVisible(element)).toBe(true);
    });

    it('should return false for hidden element', () => {
      const element = document.createElement('div');
      element.style.display = 'none';
      document.body.appendChild(element);
      
      expect(isElementVisible(element)).toBe(false);
    });
  });
});

