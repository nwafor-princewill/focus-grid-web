import React from 'react';
import { Link } from 'react-router-dom';
import donut from '../../assets/images/donut.png';

const WeAreHiring: React.FC = () => {
  return (
    /* The outer section is now explicitly white */
    <section className="w-full py-20 bg-white"> 
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        
        {/* The green background is ONLY inside this specific container */}
        <div className="relative overflow-hidden bg-[#E6F6EE] rounded-[40px] min-h-[215px] flex items-center group">
          
          {/* Decorative Background Donuts */}
          <img 
            src={donut} 
            alt="" 
            className="absolute -top-10 left-[15%] w-32 h-32 opacity-20 pointer-events-none transition-transform duration-1000 group-hover:rotate-45"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute -bottom-12 right-[25%] w-48 h-48 opacity-15 pointer-events-none transition-transform duration-1000 group-hover:-rotate-45"
          />

          {/* Main Content Layout */}
          <div className="w-full px-6 md:px-20 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-[813px] flex flex-col gap-5">
              <h2 
                className="text-[#333333] font-semibold text-3xl md:text-[40px] leading-[120%]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Looking to further your tech career?
              </h2>
              <p 
                className="text-[#545454] font-light text-base md:text-[16px] leading-[140%] max-w-[690px]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Looking to further your tech career as developers, designers, and a problem-solver? 
                Contact Focus Grid Now! Together, we turn bold ideas into real solutions.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link to="/contact">
                <button className="h-[48px] px-[30px] py-[10px] bg-white border border-[#00A550] rounded-[100px] flex items-center gap-2 transition-all duration-300 hover:bg-[#00A550] group/btn">
                  <span 
                    className="text-[#00A550] font-medium text-[14px] group-hover/btn:text-white"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    Apply for internship
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                    <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#00A550" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:stroke-white"/>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreHiring;