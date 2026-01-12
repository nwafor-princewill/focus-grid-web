import React from 'react';
import { Link } from 'react-router-dom';
import blob from '../../assets/images/blob.png';
import aboutUsImg from '../../assets/images/about-us.png';

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[700px] overflow-hidden bg-white">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[119px] pt-[100px] md:pt-[150px] lg:pt-[216px] pb-20 relative">
        
        {/* Added md:items-center for tablet centering */}
        <div className="flex flex-col lg:flex-row items-start md:items-center lg:items-start justify-between">
          
          {/* Left Content Column - Added md:text-center and md:items-center */}
          <div className="w-full max-w-[560px] flex flex-col gap-[40px] z-10 items-start md:items-center lg:items-start text-left md:text-center lg:text-left">
            
            {/* Heading: Who We Are. */}
            <h1 
              className="text-[#333333] font-semibold text-[48px] leading-[120%]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Who We Are.
            </h1>

            {/* Subtext Paragraph */}
            <p 
              className="text-[#545454] font-light text-[16px] leading-[140%]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              We are custom developers of software products, advanced trainers of tech talents 
              through real-world internships, and talent networkers bringing experienced talent 
              to your team — all under one roof.
            </p>

            {/* Buttons Layout - Added md:justify-center */}
            <div className="flex flex-wrap items-center justify-start md:justify-center lg:justify-start gap-[20px]">
              {/* LET'S BUILD Button */}
              <Link to="/contact">
                <button className="h-[48px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-lg group">
                  <span 
                    className="text-sm font-medium leading-[140%] text-white whitespace-nowrap uppercase"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    LET'S BUILD
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>

              {/* APPLY FOR INTERNSHIP Button */}
              <Link to="/apply">
                <button className="h-[48px] bg-[#E6F6EE] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#d5f0e4] hover:scale-105 group">
                  <span 
                    className="text-sm font-medium leading-[140%] text-[#00A550] whitespace-nowrap uppercase"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    APPLY FOR INTERNSHIP
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#00A550" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative mt-20 lg:mt-[-34px] lg:mr-[-40px]">
            {/* Blob Background */}
            <img 
              src={blob} 
              alt="" 
              className="absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-1/2 min-w-[310px] h-auto opacity-50 z-0"
              style={{ width: '310.1px', height: '431.4px' }}
            />
            
            {/* Main Image */}
            <div className="relative z-10 w-[332px] h-[332px]">
              <img 
                src={aboutUsImg} 
                alt="About Us" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;