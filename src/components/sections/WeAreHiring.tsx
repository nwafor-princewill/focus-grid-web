import React from 'react';
import { Link } from 'react-router-dom';
import donut from '../../assets/images/donut.png';

const WeAreHiring: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white">
      <style>
        {`
          @keyframes floatDonut {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          @keyframes floatDonutReverse {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-10deg); }
          }
          .animate-float {
            animation: floatDonut 6s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: floatDonutReverse 8s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: floatDonut 4s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden bg-[#E6F6EE] rounded-[40px] min-h-[250px] flex items-center group">
          
          {/* Decorative Background Donuts - More quantity, Higher Visibility */}
          <img 
            src={donut} 
            alt="" 
            className="absolute -top-10 left-[5%] w-24 h-24 opacity-60 pointer-events-none transition-all duration-1000 group-hover:rotate-[120deg] group-hover:scale-125 animate-float"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute top-1/2 left-[25%] w-16 h-16 opacity-40 pointer-events-none transition-all duration-1000 group-hover:-translate-x-10 group-hover:rotate-90 animate-float-slow"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute -bottom-10 left-[45%] w-32 h-32 opacity-50 pointer-events-none transition-all duration-1000 group-hover:translate-y-5 group-hover:rotate-180 animate-float-fast"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute top-[-20px] right-[15%] w-20 h-20 opacity-50 pointer-events-none transition-all duration-1000 group-hover:scale-150 group-hover:rotate-45 animate-float-slow"
          />
          <img 
            src={donut} 
            alt="" 
            className="absolute -bottom-12 right-[5%] w-48 h-48 opacity-70 pointer-events-none transition-all duration-1000 group-hover:-rotate-[90deg] group-hover:scale-110 animate-float"
          />

          {/* Main Content Layout */}
          <div className="w-full px-6 md:px-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-[813px] flex flex-col gap-5">
              <h2 
                className="text-[#333333] font-semibold text-3xl md:text-[40px] leading-[120%] transition-transform duration-500 group-hover:translate-x-2"
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
                <button className="h-[52px] px-[35px] py-[12px] bg-white border border-[#00A550] rounded-[100px] flex items-center gap-2 transition-all duration-500 hover:bg-[#00A550] hover:shadow-[0_10px_20px_rgba(0,165,80,0.2)] hover:scale-105 group/btn active:scale-95">
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