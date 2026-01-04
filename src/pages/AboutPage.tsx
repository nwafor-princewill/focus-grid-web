import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      {/* About page content goes here */}
      <Footer />
    </div>
  );
};

export default AboutPage;