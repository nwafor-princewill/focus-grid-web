import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import HowItWorks from './components/sections/HowItWorks';
import OurServices from './components/sections/OurServices';
import FAQ from './components/sections/FAQ';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <OurServices />
      <FAQ />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App;