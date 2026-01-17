import React from 'react';
import Navbar from '../components/layout/Navbar';
import FAQsCombinedSection from '../components/sections/FAQsCombinedSection'; // New Import
import FAQContactCTA from '../components/sections/FAQContactCTA';
import Footer from '../components/layout/Footer';

const FAQsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> 
      <main className="-mt-[80px] lg:-mt-[116px]"> 
        {/* Combined Section handles the Hero background and overlapping FAQ list */}
        <FAQsCombinedSection />
        <FAQContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;