import React from 'react';
import Navbar from '../components/layout/Navbar';
import FAQsPageHero from '../components/sections/FAQsPageHero';
import FAQsSection from '../components/sections/FAQsSection';
import Footer from '../components/layout/Footer';

const FAQsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <FAQsPageHero />
        <div className="absolute top-9 left-0 right-0">
          <Navbar />
        </div>
      </div>
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default FAQsPage;