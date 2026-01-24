import React from 'react';
import { Link } from 'react-router-dom';
import donut from '../../assets/images/donut.png';

const WeAreHiring: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden bg-[#E6F6EE] rounded-[40px] min-h-[250px] flex items-center group">
          
          {/* Static Decorative Background Donuts */}
          <img 
            src={donut} 
            alt="" 
            className="absolute -top-10 left-[5%] w-24 h-24 opacity-60 pointer-events-none"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute top-1/2 left-[25%] w-16 h-16 opacity-40 pointer-events-none"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute -bottom-10 left-[45%] w-32 h-32 opacity-50 pointer-events-none"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute top-[-20px] right-[15%] w-20 h-20 opacity-50 pointer-events-none"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute -bottom-12 right-[5%] w-48 h-48 opacity-70 pointer-events-none"
          />

          {/* Main Content Layout */}
          <div className="w-full px-6 md:px-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
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
              <Link to="/apply">
                <button className="h-[52px] px-[35px] py-[12px] bg-white border border-[#00A550] rounded-[100px] flex items-center gap-2 transition-all duration-500 hover:bg-[#00A550] hover:scale-[1.02] group/btn active:scale-95">
                  <span 
                    className="text-[#00A550] font-medium text-[15px] group-hover/btn:text-white transition-colors"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    Apply for internship
                  </span>
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                    <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:stroke-white transition-colors"/>
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