import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import HowItWorks from '../components/sections/HowItWorks';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;