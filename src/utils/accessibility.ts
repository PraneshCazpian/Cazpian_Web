/**
 * Accessibility Utilities
 * Functions to improve keyboard navigation and screen reader support
 */

// Trap focus within a modal or dialog
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable?.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  
  return () => element.removeEventListener('keydown', handleTabKey);
};

// Announce message to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only'; // Screen reader only
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if user prefers dark mode
export const prefersDarkMode = (): boolean => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Check if user prefers high contrast
export const prefersHighContrast = (): boolean => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Handle keyboard navigation for custom components
export const handleKeyboardNav = (
  event: React.KeyboardEvent,
  callbacks: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
  }
) => {
  const { key } = event;
  
  switch (key) {
    case 'Enter':
      callbacks.onEnter?.();
      break;
    case ' ':
    case 'Space':
      event.preventDefault();
      callbacks.onSpace?.();
      break;
    case 'Escape':
    case 'Esc':
      callbacks.onEscape?.();
      break;
    case 'ArrowUp':
    case 'Up':
      event.preventDefault();
      callbacks.onArrowUp?.();
      break;
    case 'ArrowDown':
    case 'Down':
      event.preventDefault();
      callbacks.onArrowDown?.();
      break;
    case 'ArrowLeft':
    case 'Left':
      event.preventDefault();
      callbacks.onArrowLeft?.();
      break;
    case 'ArrowRight':
    case 'Right':
      event.preventDefault();
      callbacks.onArrowRight?.();
      break;
  }
};

// Get unique ID for accessibility attributes
let idCounter = 0;
export const getUniqueId = (prefix: string = 'id'): string => {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
};

// Focus first invalid form field
export const focusFirstInvalidField = (formElement: HTMLFormElement) => {
  const invalidField = formElement.querySelector<HTMLElement>('[aria-invalid="true"]');
  if (invalidField) {
    invalidField.focus();
    announceToScreenReader('Please fix the errors in the form', 'assertive');
  }
};

// Check if element is visible
export const isElementVisible = (element: HTMLElement): boolean => {
  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};

// Skip to main content (for skip links)
export const skipToMainContent = () => {
  const main = document.querySelector('main');
  if (main) {
    main.tabIndex = -1;
    main.focus();
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

