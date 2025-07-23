# Adaptive Dark Mode Implementation

## Overview

This implementation provides a sophisticated adaptive dark mode system that automatically detects user preferences and provides a seamless theme switching experience across all screens.

## Features

### 🎯 **Core Features**

1. **System Preference Detection**
   - Automatically detects user's system theme preference
   - Real-time updates when system theme changes
   - Fallback support for older browsers

2. **Three Theme Modes**
   - **Light Mode**: Always use light theme
   - **Dark Mode**: Always use dark theme  
   - **System Mode**: Follow system preference (default)

3. **Enhanced User Experience**
   - Smooth transitions between themes
   - Persistent theme preferences
   - Visual feedback and indicators
   - Accessible focus states

### 🎨 **Visual Enhancements**

1. **Adaptive Color System**
   - CSS custom properties for consistent theming
   - Dynamic color adjustments
   - Enhanced contrast ratios
   - Proper color accessibility

2. **Advanced Effects**
   - Glass morphism effects
   - Backdrop blur enhancements
   - Adaptive shadows and borders
   - Hover lift animations

3. **Component Enhancements**
   - Enhanced cards with adaptive shadows
   - Improved button states
   - Better form inputs
   - Custom scrollbars

## Implementation Details

### Theme Context (`src/contexts/ThemeContext.tsx`)

```typescript
interface ThemeContextType {
  isDark: boolean;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  isSystemDark: boolean;
}
```

**Key Features:**
- System preference detection with `matchMedia`
- Real-time theme change listeners
- Local storage persistence
- Smooth transitions

### Enhanced Theme Toggle (`src/components/ThemeToggle.tsx`)

**Features:**
- Dropdown menu with three theme options
- Visual indicators for current theme
- System preference status display
- Click-outside-to-close functionality

### Theme Indicator (`src/components/ThemeIndicator.tsx`)

**Features:**
- Fixed position indicator
- Real-time theme status
- Visual theme icons
- System preference feedback

### CSS Enhancements (`src/index.css`)

**Custom Properties:**
```css
:root {
  --color-primary: 59 130 246;
  --color-background: 255 255 255;
  --color-surface: 249 250 251;
  /* ... more properties */
}

.dark {
  --color-primary: 129 140 248;
  --color-background: 17 24 39;
  --color-surface: 31 41 55;
  /* ... more properties */
}
```

**Component Classes:**
- `.card` - Enhanced cards with adaptive shadows
- `.btn-primary` / `.btn-secondary` - Improved buttons
- `.input-enhanced` - Better form inputs
- `.glass` - Glass morphism effects
- `.backdrop-enhanced` - Enhanced backdrop blur

**Utility Classes:**
- `.text-adaptive` - Adaptive text colors
- `.bg-adaptive` - Adaptive backgrounds
- `.border-adaptive` - Adaptive borders
- `.hover-lift` - Enhanced hover effects

## Usage Examples

### Basic Theme Usage

```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { isDark, themeMode, setThemeMode } = useTheme();
  
  return (
    <div className="bg-adaptive text-adaptive">
      <p>Current theme: {themeMode}</p>
      <button onClick={() => setThemeMode('dark')}>
        Switch to Dark
      </button>
    </div>
  );
};
```

### Using Adaptive Classes

```tsx
// Instead of manual dark: classes
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

// Use adaptive classes
<div className="bg-adaptive text-adaptive">
```

### Enhanced Components

```tsx
// Enhanced card
<div className="card p-6">
  <h3 className="text-adaptive">Card Title</h3>
  <p className="text-adaptive-secondary">Card content</p>
</div>

// Enhanced button
<button className="btn-primary hover-lift">
  Click Me
</button>

// Enhanced input
<input className="input-enhanced" placeholder="Enter text..." />
```

## Browser Support

### Modern Browsers
- ✅ Full support for system preference detection
- ✅ Real-time theme change listeners
- ✅ CSS custom properties
- ✅ Backdrop blur effects

### Legacy Browsers
- ✅ Fallback theme detection
- ✅ Basic dark mode support
- ✅ Graceful degradation

## Accessibility Features

1. **Focus Management**
   - Enhanced focus rings
   - Proper contrast ratios
   - Keyboard navigation support

2. **Screen Reader Support**
   - Proper ARIA labels
   - Theme status announcements
   - Descriptive button text

3. **Visual Indicators**
   - Clear theme status display
   - Consistent iconography
   - High contrast mode support

## Performance Optimizations

1. **Efficient Theme Switching**
   - CSS custom properties for instant updates
   - Minimal DOM manipulation
   - Optimized transition timing

2. **Memory Management**
   - Proper event listener cleanup
   - Efficient state management
   - Minimal re-renders

3. **Bundle Size**
   - Tree-shakeable components
   - Optimized CSS classes
   - Minimal JavaScript overhead

## Testing

### Manual Testing Checklist

- [ ] System preference detection works
- [ ] Theme persistence across sessions
- [ ] Smooth transitions between themes
- [ ] All components adapt properly
- [ ] Mobile responsiveness maintained
- [ ] Accessibility features work
- [ ] Performance is acceptable

### Automated Testing

```typescript
// Example test for theme context
test('should detect system preference', () => {
  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })),
  });
  
  // Test implementation
});
```

## Future Enhancements

1. **Advanced Features**
   - Custom color schemes
   - Theme scheduling
   - Location-based themes
   - User preference analytics

2. **Performance Improvements**
   - CSS-in-JS optimization
   - Lazy theme loading
   - Preload theme assets

3. **Accessibility Enhancements**
   - High contrast mode
   - Reduced motion support
   - Color blind friendly themes

## Troubleshooting

### Common Issues

1. **Theme not persisting**
   - Check localStorage permissions
   - Verify theme context setup
   - Ensure proper provider wrapping

2. **System preference not detected**
   - Check browser support
   - Verify matchMedia implementation
   - Test with different browsers

3. **Transition glitches**
   - Check CSS transition properties
   - Verify timing functions
   - Test on different devices

### Debug Mode

Enable debug logging by setting:
```typescript
localStorage.setItem('theme-debug', 'true');
```

This will log theme changes and system preference updates to the console.

## Contributing

When adding new components or modifying existing ones:

1. Use adaptive classes when possible
2. Test in both light and dark modes
3. Ensure accessibility compliance
4. Add proper TypeScript types
5. Update documentation

## License

This implementation is part of the Cazpian web application and follows the same licensing terms. 