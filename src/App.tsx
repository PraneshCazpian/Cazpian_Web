import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AdminProvider } from './contexts/AdminContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import SupportChat from './components/SupportChat';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const WhyCazpian = lazy(() => import('./pages/WhyCazpian'));
const Product = lazy(() => import('./pages/Product'));
const CazpianCloud = lazy(() => import('./pages/CazpianCloud'));
const CazpianEnterprise = lazy(() => import('./pages/CazpianEnterprise'));
const Solutions = lazy(() => import('./pages/Solutions'));
const SolutionsByUseCase = lazy(() => import('./pages/SolutionsByUseCase'));
const SolutionsByIndustry = lazy(() => import('./pages/SolutionsByIndustry'));
const SolutionsByUserRole = lazy(() => import('./pages/SolutionsByUserRole'));
const Resources = lazy(() => import('./pages/Resources'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BookMeeting = lazy(() => import('./pages/BookMeeting'));
const AgentStudio = lazy(() => import('./pages/AgentStudio'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-adaptive transition-colors duration-300">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route 
                  path="/admin/dashboard" 
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Public Routes */}
                <Route path="/*" element={
                  <>
                    <Header />
                    <main>
                      <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/why-cazpian" element={<WhyCazpian />} />
                          <Route path="/product" element={<Product />} />
                          <Route path="/cazpian-cloud" element={<CazpianCloud />} />
                          <Route path="/cazpian-enterprise" element={<CazpianEnterprise />} />
                          <Route path="/solutions" element={<Solutions />} />
                          <Route path="/solutions/use-case" element={<SolutionsByUseCase />} />
                          <Route path="/solutions/industry" element={<SolutionsByIndustry />} />
                          <Route path="/solutions/user-role" element={<SolutionsByUserRole />} />
                          <Route path="/resources" element={<Resources />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/book-meeting" element={<BookMeeting />} />
                          <Route path="/agent-studio" element={<AgentStudio />} />
                        </Routes>
                      </Suspense>
                    </main>
                    <Footer />
                    <SupportChat />
                  </>
                } />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;