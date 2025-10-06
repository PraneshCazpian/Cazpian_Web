# 🚀 Cazpian - AI-Powered Data Analytics Platform

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8.svg)](https://tailwindcss.com/)

Enterprise-grade website for Cazpian's AI-powered data analytics platform. Built with modern web technologies and industrial standards.

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS
- 🌓 **Dark Mode** - Adaptive dark mode
- 📱 **Fully Responsive** - Works on all devices (320px - 4K)
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🔍 **SEO Optimized** - Complete meta tags & structured data
- 📊 **Analytics** - GA4 with GDPR compliance
- 🛡️ **Error Tracking** - Sentry integration
- ✅ **Form Validation** - Real-time validation
- 🎭 **Animations** - Framer Motion micro-interactions
- 🧪 **Testing** - Vitest + React Testing Library

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Opens at http://localhost:5173
```

### Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
# or
npx serve dist -s -l 3000
```

### Testing
```bash
npm test              # Watch mode
npm run test:coverage # Coverage report
npm run test:ui       # UI mode
```

## 🔧 Configuration

Create a `.env` file:
```env
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SENTRY_DSN=https://your-dsn@sentry.io/project-id
```

See `.env.example` for all options.

## 📚 Documentation

- [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md) - Complete implementation details
- [FEATURES_COMPLETED.md](FEATURES_COMPLETED.md) - All features list

## 🎨 Tech Stack

- **React 18** + **TypeScript**
- **Vite** + **Tailwind CSS**
- **React Router** + **Framer Motion**
- **React Hook Form** + **Yup**
- **Google Analytics 4** + **Sentry**

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── contexts/       # React contexts
├── utils/          # Utility functions
└── test/           # Test utilities
```

## ♿ Accessibility

WCAG 2.1 AA compliant with:
- Keyboard navigation
- Screen reader support
- ARIA labels
- Focus management
- Reduced motion support

## 🌍 Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Responsive

Tested on all device sizes from 320px to 4K

## 📞 Support

Email: info@cazpian.ai

---

**Built with ❤️ by the Cazpian Team**
