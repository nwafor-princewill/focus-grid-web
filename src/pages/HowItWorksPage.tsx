import React from 'react';
import Navbar from '../components/layout/Navbar';
import HowItWorksPageHero from '../components/sections/HowItWorksPageHero';
import WhyFocusGrid from '../components/sections/WhyFocusGrid';
import Footer from '../components/layout/Footer';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <HowItWorksPageHero />
        <WhyFocusGrid />
      <Footer />
    </div>
  );
};

export default HowItWorksPage;