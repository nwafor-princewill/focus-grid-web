import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQsPage from './pages/FAQsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ApplyForInternshipPage from './pages/ApplyForInternshipPage';
import ContactPage from './pages/ContactPage';

/**
 * ScrollToTop Component
 * This utility ensures that whenever the URL path changes, 
 * the window scrolls back to the very top.
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
      {/* The ScrollToTop component must be inside the Router but outside Routes */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/apply" element={<ApplyForInternshipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;