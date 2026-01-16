import React from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../../assets/images/hero-background-image.jpg';
import doodle from '../../assets/images/doodle.png';
import scribble from '../../assets/images/scribble.png';
import cursor1 from '../../assets/images/cursor1.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* Background Image - Added Ken Burns / Floating Animation */}
      <style>
        {`
          @keyframes kenBurns {
            0% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.1) translate(-1%, -1%); }
            100% { transform: scale(1) translate(0, 0); }
          }
          @keyframes cursorDance {
            0%, 100% { transform: rotate(-285deg) translate(0, 0) scale(1); }
            25% { transform: rotate(-280deg) translate(5px, -5px) scale(1.1); }
            75% { transform: rotate(-290deg) translate(-3px, 5px) scale(0.9); }
          }
          @keyframes floatScribble {
            0%, 100% { opacity: 0.6; transform: translateY(0); }
            50% { opacity: 0.9; transform: translateY(-10px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div 
        className="absolute inset-0 -top-[139px] w-full h-[960px] bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          animation: 'kenBurns 20s ease-in-out infinite'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-[116px] px-4">
        <div className="w-full max-w-[751px] flex flex-col items-center gap-10">
          
          {/* Heading with Animation */}
          <div className="text-center animate-[fadeInUp_0.8s_ease-out_forwards]">
            <h1 
              className="text-[52px] lg:text-[48px] md:text-[40px] sm:text-[32px] font-semibold leading-[120%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Build the Future Intentionally<br />
              with <span className="relative inline-block group">
                Focus!
                {/* Doodle with a "drawing" width animation */}
                <img 
                  src={doodle} 
                  alt="" 
                  className="absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-700 h-[6px] object-cover"
                  style={{ width: '100%', transitionDelay: '0.5s' }}
                />
              </span>
            </h1>
          </div>

          {/* Description with Scribble and Cursor */}
          <div className="relative max-w-[603px] px-4 animate-[fadeInUp_1s_ease-out_forwards]">
            {/* Positioned Images - EXACT POSITIONS MAINTAINED */}
            <div className="absolute top-0 -left-[200px] hidden lg:block">
              <div className="relative">
                {/* The DANCING Cursor */}
                <img 
                  src={cursor1}
                  alt=""
                  className="absolute w-[45.36px] h-[45.36px]"
                  style={{
                    top: '-50px',
                    left: '60px',
                    zIndex: 20,
                    animation: 'cursorDance 3s ease-in-out infinite'
                  }}
                />
                
                {/* The Floating Scribble */}
                <img 
                  src={scribble}
                  alt=""
                  className="w-[389.8px] h-[480px] object-top object-contain"
                  style={{
                    marginTop: '-40px',
                    animation: 'floatScribble 4s ease-in-out infinite'
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

          {/* Buttons - Added stagger and hover intensity */}
          <div className="flex flex-wrap gap-5 justify-center animate-[fadeInUp_1.2s_ease-out_forwards]">
            <Link to="/contact">
              <button className="group h-[48px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,165,80,0.3)]">
                <span 
                  className="text-sm font-medium leading-[140%] text-white whitespace-nowrap"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  LET'S BUILD
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:-translate-y-1">
                  <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>

            <Link to="/apply">
              <button className="group h-[48px] border-2 border-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 bg-transparent transition-all duration-300 hover:bg-[#00A550] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,165,80,0.2)]">
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