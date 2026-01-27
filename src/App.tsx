import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // 1. Import Toaster
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQsPage from './pages/FAQsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ApplyForInternshipPage from './pages/ApplyForInternshipPage';
import ContactPage from './pages/ContactPage';

/**
 * ScrollToTop Component
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* 2. Place Toaster here so it stays on top of all pages */}
      <Toaster 
        position="top-right"
        toastOptions={{
          // Optional: Styling it to match Focus Grid green
          duration: 4000,
          style: {
            background: '#FFFFFF',
            color: '#333333',
            border: '1px solid #E6F6EE',
          },
          success: {
            iconTheme: {
              primary: '#00A550',
              secondary: '#FFFFFF',
            },
          },
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/apply" element={<ApplyForInternshipPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;