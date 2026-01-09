import React from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../../assets/images/hero-background-image.jpg';
import doodle from '../../assets/images/doodle.png';
import scribble from '../../assets/images/scribble.png';
import cursor1 from '../../assets/images/cursor1.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -top-[139px] w-full h-[960px] bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-[116px] px-4">
        <div className="w-full max-w-[751px] flex flex-col items-center gap-10">
          {/* Heading with Doodle */}
          <div className="text-center">
            <h1 
              className="text-[52px] lg:text-[48px] md:text-[40px] sm:text-[32px] font-semibold leading-[120%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Build the Future Intentionally<br />
              with <span className="relative inline-block">
                Focus!
                {/* Doodle under "Focus!" only */}
                <img 
                  src={doodle} 
                  alt="" 
                  className="absolute -bottom-2 left-0 right-0 w-full h-[6px] object-cover"
                />
              </span>
            </h1>
          </div>

          {/* Description with Scribble and Cursor */}
          <div className="relative max-w-[603px] px-4">
            {/* Scribble and Cursor Images - Positioned relative to description */}
            <div className="absolute top-0 -left-[200px] hidden lg:block">
              <div className="relative">
                {/* The Cursor - Floating above the scribble, pointing to "Build" */}
                <img 
                  src={cursor1}
                  alt=""
                  className="absolute w-[45.36px] h-[45.36px]"
                  style={{
                    top: '-50px',     /* Positioned above the scribble and description */
                    left: '60px',      /* Horizontal alignment kept consistent */
                    transform: 'rotate(-285deg)', /* Pointing up and right towards "Build" */
                    zIndex: 20
                  }}
                />
                
                {/* The Scribble - Starting just above the text and ending at section bottom */}
                <img 
                  src={scribble}
                  alt=""
                  className="w-[389.8px] h-[480px] opacity-80 object-top object-contain"
                  style={{
                    marginTop: '-40px', /* Starts slightly above the "We develop..." text */
                  }}
                />
              </div>
            </div>

            <p 
              className="text-base font-light leading-[140%] text-center text-[#545454] mt-4"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              We develop custom software solutions, websites and apps. Also granting internship real-world internships opportunities, and deploying ready talent to your team — all under one roof.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 justify-center">
            {/* Let's Build Button */}
            <Link to="/contact">
              <button className="h-[48px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-lg">
                <span 
                  className="text-sm font-medium leading-[140%] text-white whitespace-nowrap"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  LET'S BUILD
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>

            {/* Apply for Internship Button */}
            <Link to="/apply">
              <button className="h-[48px] border-2 border-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 bg-transparent transition-all duration-300 hover:bg-[#00A550] hover:scale-105 hover:shadow-lg group">
                <span 
                  className="text-sm font-medium leading-[140%] text-[#00A550] whitespace-nowrap group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  APPLY FOR INTERNSHIP
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;