import React from 'react';
import Navbar from '../components/layout/Navbar';
import AboutPageHero from '../components/sections/AboutPageHero';
import WhatWeStandFor from '../components/sections/WhatWeStandFor';
import WhatWeDo from '../components/sections/WhatWeDo';
import WeAreHiring from '../components/sections/WeAreHiring';
import Footer from '../components/layout/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <AboutPageHero />
      <WhatWeStandFor />
      <WhatWeDo />
      <WeAreHiring />
      {/* About page content goes here */}
      <Footer />
    </div>
  );
};

export default AboutPage;