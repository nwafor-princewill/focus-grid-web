import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blob from '../../assets/images/blob.png';
import aboutUsImg from '../../assets/images/about-us.png';
import sprinkle8 from '../../assets/images/sprinkle8.png'; // Added sprinkle

const AboutHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-[700px] overflow-hidden bg-white">
      {/* Dynamic Keyframes */}
      <style>
        {`
          @keyframes floatMain {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          @keyframes pulseBlob {
            0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.5; }
            50% { transform: translate(-50%, -50%) scale(1.1) rotate(15deg); opacity: 0.7; }
          }
          @keyframes sprinkleFloat {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
          }
          .animate-stagger-1 { transition-delay: 200ms; }
          .animate-stagger-2 { transition-delay: 400ms; }
          .animate-stagger-3 { transition-delay: 600ms; }
        `}
      </style>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[119px] pt-[100px] md:pt-[150px] lg:pt-[216px] pb-20 relative">
        
        <div className="flex flex-col lg:flex-row items-start md:items-center lg:items-start justify-between relative">
          
          {/* Left Content Column */}
          <div className={`w-full max-w-[560px] flex flex-col gap-[40px] z-10 items-start md:items-center lg:items-start text-left md:text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Heading */}
            <h1 
              className="text-[#333333] font-semibold text-[48px] md:text-[56px] lg:text-[64px] leading-[120%] animate-stagger-1"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Who We Are.
            </h1>

            {/* Subtext Paragraph */}
            <p 
              className="text-[#545454] font-light text-[18px] leading-[160%] animate-stagger-2"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              We are custom developers of software products, advanced trainers of tech talents 
              through real-world internships, and talent networkers bringing experienced talent 
              to your team — all under one roof.
            </p>

            {/* Buttons Layout with Sprinkle */}
            <div className="flex flex-wrap items-center justify-start md:justify-center lg:justify-start gap-[20px] relative animate-stagger-3">
              
              {/* SPRINKLE8 - Positioned beside LET'S BUILD */}
              <div 
                className="absolute hidden xl:block pointer-events-none"
                style={{ 
                  width: '148.99px', 
                  height: '121.48px', 
                  left: '-160px', // Adjusted to sit beside the build button per screenshot layout
                  top: '-20px',
                  animation: 'sprinkleFloat 4s ease-in-out infinite'
                }}
              >
                <img src={sprinkle8} alt="" className="w-full h-full object-contain opacity-100" />
              </div>

              {/* LET'S BUILD Button */}
              <Link to="/contact">
                <button className="h-[56px] bg-[#00A550] rounded-[100px] px-[36px] py-[12px] flex items-center gap-2 transition-all duration-500 hover:bg-[#008f44] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,165,80,0.3)] group relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span 
                    className="text-base font-medium leading-[140%] text-white whitespace-nowrap uppercase relative z-10"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    LET'S BUILD
                  </span>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-y-[-3px] relative z-10">
                    <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>

              {/* APPLY FOR INTERNSHIP Button */}
              <Link to="/apply">
                <button className="h-[56px] bg-[#E6F6EE] rounded-[100px] px-[36px] py-[12px] flex items-center gap-2 transition-all duration-500 hover:bg-[#d5f0e4] hover:scale-105 group">
                  <span 
                    className="text-base font-medium leading-[140%] text-[#00A550] whitespace-nowrap uppercase"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    APPLY FOR INTERNSHIP
                  </span>
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#00A550" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className={`relative mt-20 lg:mt-[-50px] lg:mr-[-20px] transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-90'}`}>
            
            {/* Blob Background */}
            <img 
              src={blob} 
              alt="" 
              className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 min-w-[310px] h-auto z-0"
              style={{ 
                width: '310.1px', 
                height: '431.4px',
                animation: 'pulseBlob 8s ease-in-out infinite'
              }}
            />
            
            {/* Main Image */}
            <div 
              className="relative z-10 w-[350px] md:w-[450px] lg:w-[500px] h-auto"
              style={{ animation: 'floatMain 6s ease-in-out infinite' }}
            >
              <img 
                src={aboutUsImg} 
                alt="About Us" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;