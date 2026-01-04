import React from 'react';
import companyLogo from '../../assets/images/company-logo.png';

const WhatWeStandFor: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F9F9F9] h-[852px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="absolute top-[79px] left-[102px] w-[885px] h-[112px] flex flex-col gap-5">
          <h2 
            className="w-[370px] h-[48px] text-[40px] font-semibold leading-[120%] text-center text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            What We Stand For
          </h2>
          <p 
            className="w-[885px] h-[44px] text-base font-light leading-[140%] text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            FocusGrid builds high-impact digital products and develops top-tier tech talent. Through innovation and mentorship, we turn ideas into real solutions
          </p>
        </div>

        {/* Content Section */}
        <div className="absolute top-[236px] left-[102px] w-[1166px] h-[518.94px] flex gap-[200px]">
          {/* Left Side - Vision and Mission Cards */}
          <div className="w-[566px] h-[518.94px] flex flex-col gap-10">
            {/* Our Vision Card */}
            <div className="w-[566px] h-[217.47px] bg-[#E6F6EE] rounded-[17.15px] p-[17px] flex flex-col gap-[17px]">
              <h3 
                className="w-[104px] h-[29px] text-[20.58px] font-semibold leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Our Vision
              </h3>
              
              {/* Line */}
              <div className="w-[532px] h-[0.86px] border-t-[0.86px] border-[#D4D2E3]"></div>
              
              {/* Content Box */}
              <div className="w-[532px] h-[113.46px] bg-[#E6F6EE] border border-[#00A550] rounded-[12.73px] p-[12.73px]">
                <p 
                  className="w-[506px] h-[88px] text-base font-light leading-[140%] text-[#333333]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Our vision is to shape a future where every emerging tech talent has access to advanced, hands-on internships that strengthen their skills, build confidence, and connect them to rewarding career paths in the global tech ecosystem.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="w-[566px] h-[261.47px] bg-[#F9F9F9] rounded-[17.15px] p-[17px] flex flex-col gap-[17px]">
              <h3 
                className="w-[118px] h-[29px] text-[20.58px] font-semibold leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Our Mission
              </h3>
              
              {/* Line */}
              <div className="w-[532px] h-[0.86px] border-t-[0.86px] border-[#D4D2E3]"></div>
              
              {/* Content Box */}
              <div className="w-[532px] h-[157.46px] bg-[#E6F6EE] border border-[#00A550] rounded-[12.73px] p-[12.73px]">
                <p 
                  className="w-[506px] h-[132px] text-base font-light leading-[140%] text-[#333333]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Our mission is to empower emerging tech talent through high-quality, immersive internships that strengthen their technical abilities and industry readiness. We create an environment where young developers can sharpen their skills, gain real-world experience, and connect to meaningful career opportunities that support long-term growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Company Logo */}
          <div className="w-[400px] h-[386.98px] bg-[#00A550] rounded-[78.57px] p-[78.57px] flex items-center justify-center">
            <img 
              src={companyLogo}
              alt="Focus Grid Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;