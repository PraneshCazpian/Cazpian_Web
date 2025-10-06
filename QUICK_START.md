# ⚡ Quick Start Guide - Cazpian Website

Get your Cazpian website up and running in 5 minutes!

---

## 🚀 Step 1: Installation (1 minute)

```bash
cd Cazpian_Web
npm install
```

---

## ⚙️ Step 2: Configure Environment (2 minutes)

Create a `.env` file in the root directory:

```env
# Google Analytics 4 (Get from https://analytics.google.com)
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry (Get from https://sentry.io)
VITE_SENTRY_DSN=https://your-dsn@sentry.io/project-id
```

> **Note**: The website works without these, but you won't have analytics or error tracking.

---

## 🏃 Step 3: Run Development Server (30 seconds)

```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

---

## ✅ Step 4: Verify Everything Works (1 minute)

### Test These:
- [ ] Homepage loads correctly
- [ ] Dark mode toggle works
- [ ] Navigation works (all links)
- [ ] Contact form validates fields
- [ ] Mobile menu works
- [ ] All pages responsive

### Quick Tests:
1. **Dark Mode**: Click moon/sun icon in header
2. **Contact Form**: Go to /contact, try submitting empty form (should show errors)
3. **Mobile**: Resize browser to 375px width
4. **Accessibility**: Press Tab key to navigate

---

## 🎯 What You Get Out of the Box

### ✅ Fully Functional
- Modern, responsive design
- Dark mode
- Contact form with validation
- Cookie consent banner
- Error handling
- Loading states
- Smooth animations

### ✅ Production-Ready Features
- SEO optimization
- Analytics tracking (when configured)
- Error monitoring (when configured)
- Accessibility (WCAG 2.1 AA)
- Performance optimized
- PWA-ready

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Testing
npm test                 # Run tests
npm run test:coverage    # Test with coverage

# Linting
npm run lint             # Check code quality
```

---

## 📱 Test Responsive Design

```bash
# Open dev tools (F12)
# Toggle device toolbar (Ctrl+Shift+M)
# Test these sizes:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px
```

---

## 🌐 Deploy to Production

### Option 1: Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 3: Build & Upload
```bash
npm run build
# Upload the 'dist' folder to your hosting
```

---

## 🎨 Customize

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#6366f1', // Your brand color
}
```

### Change Content
Main files to edit:
- `src/pages/HomePage.tsx` - Homepage content
- `src/pages/Contact.tsx` - Contact page
- `src/contexts/AdminContext.tsx` - Site-wide config

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Change port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Missing Dependencies
```bash
# Reinstall
npm install
```

---

## 📚 Next Steps

1. **Configure Analytics**
   - Create GA4 property
   - Add measurement ID to `.env`

2. **Configure Error Tracking**
   - Create Sentry project
   - Add DSN to `.env`

3. **Set Up Contact Form Backend**
   - See `IMPLEMENTATION_GUIDE.md` for details

4. **Review Documentation**
   - `README.md` - Overview
   - `FEATURES_COMPLETED.md` - All features
   - `DEPLOYMENT_CHECKLIST.md` - Deploy guide
   - `IMPLEMENTATION_GUIDE.md` - Technical details

---

## ✨ Features Highlights

### What Works Right Now (No Config Needed)
- ✅ All pages and navigation
- ✅ Responsive design (mobile to 4K)
- ✅ Dark mode
- ✅ Form validation
- ✅ Loading states
- ✅ Animations
- ✅ Accessibility
- ✅ SEO meta tags
- ✅ Error boundaries

### What Needs Configuration
- ⚙️ Google Analytics (optional)
- ⚙️ Sentry error tracking (optional)
- ⚙️ Contact form backend (needed for email)

---

## 🎉 You're Ready!

Your Cazpian website is running and ready for development or deployment!

**Need Help?**
- Check documentation files
- Review implementation guide
- Check deployment checklist

---

**Happy coding! 🚀**

