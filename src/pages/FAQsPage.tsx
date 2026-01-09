import React from 'react';
import Navbar from '../components/layout/Navbar';
import FAQsPageHero from '../components/sections/FAQsPageHero';
import FAQsSection from '../components/sections/FAQsSection';
import Footer from '../components/layout/Footer';

const FAQsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar stays here so it can be sticky */}
      <Navbar /> 
      <main className="-mt-[80px] lg:-mt-[116px]"> 
        {/* Negative margin pulls the Hero UP under the Navbar */}
        <FAQsPageHero />
        <FAQsSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;