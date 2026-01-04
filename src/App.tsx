import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQsPage from './pages/FAQsPage';
import HowItWorksPage from './pages/HowItWorksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;