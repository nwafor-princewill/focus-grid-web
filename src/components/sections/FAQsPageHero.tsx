import React from 'react';

const FAQsPageHero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] flex flex-col items-center justify-start pt-32 overflow-hidden bg-[#00A550]">
      {/* Mesh Gradient for a premium feel without an image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-[#54C38A] blur-[120px] rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-[-5%] w-[40%] h-[50%] bg-[#007a3b] blur-[100px] rounded-full opacity-50" />
      </div>

      {/* Hero Content - Positioned higher up to make room for the overlap */}
      <div className="relative z-10 w-full max-w-[800px] px-6 text-center">
        <h1 
          className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-4"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          How can we help?
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light">
          Find the most asked questions and the answers right here.
        </p>
      </div>
    </section>
  );
};

export default FAQsPageHero;