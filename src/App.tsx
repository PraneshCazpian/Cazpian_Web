import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AdminProvider } from './contexts/AdminContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ThemeIndicator from './components/ThemeIndicator';
import HomePage from './pages/HomePage';
import WhyCazpian from './pages/WhyCazpian';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import BookMeeting from './pages/BookMeeting';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <Router>
          <div className="min-h-screen bg-adaptive transition-colors duration-300">
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
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/why-cazpian" element={<WhyCazpian />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/solutions" element={<Solutions />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/book-meeting" element={<BookMeeting />} />
                    </Routes>
                  </main>
                  <Footer />
                  <ThemeIndicator />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;