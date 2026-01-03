import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1437px] h-[877.64px] mx-auto bg-[#F9F9F9] pt-[114px] pr-[100px] pb-[114px] pl-[100px]">
      <div className="w-[1237px] h-[649.64px] flex flex-col gap-[122px]">
        {/* Top Section - Heading and Contact Button */}
        <div className="w-[1237px] h-[150.52px] flex flex-col gap-[39.61px]">
          <div className="w-full flex justify-between items-start">
            <h2 
              className="w-[822.93px] h-[110.91px] text-[39.61px] font-normal leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Where talent grows, & brands get results.<br />Everyone wins.
            </h2>
            
            <button className="w-[199.67px] h-[64.07px] bg-[#00A550] border-[1.94px] border-[#33B773] rounded-[38.83px] px-[38.83px] py-[15.53px] shadow-[0px_7.77px_194.17px_0px_rgba(0,0,0,0.25)] flex items-center justify-center">
              <span 
                className="w-[122px] h-[33px] text-[23.3px] font-normal leading-[140%] text-white"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Contact Us
              </span>
            </button>
          </div>
          
          {/* Line */}
          <div className="w-[1237px] h-[0.99px] border-t border-[#333333]"></div>
        </div>

        {/* Main Footer Content */}
        <div className="w-[1237px] h-[253.89px] py-[13.86px] flex justify-between gap-[99px]">
          {/* Focus Grid Section */}
          <div className="w-[348.58px] h-[226.16px] flex flex-col gap-[31.69px]">
            {/* Logo Placeholder */}
            <div className="w-[178.25px] h-[73.02px] bg-gray-200 flex items-center justify-center text-sm text-gray-500">
              Logo Here
            </div>
            
            {/* Description */}
            <p 
              className="w-[348.58px] h-[66px] text-base font-light leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Focus Grid is a software development institution that builds digital products and trains tech talent
            </p>
            
            {/* Social Media Icons */}
            <div className="w-[186.17px] h-[31.69px] flex gap-[19.81px]">
              <div className="w-[31.69px] h-[31.69px] bg-[#333333] rounded-full"></div>
              <div className="w-[31.69px] h-[31.69px] bg-[#333333] rounded-full"></div>
              <div className="w-[31.69px] h-[31.69px] bg-[#333333] rounded-full"></div>
              <div className="w-[31.69px] h-[31.69px] bg-[#333333] rounded-full"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-[178.25px] h-[210.46px] flex flex-col gap-[23.77px]">
            <h3 
              className="w-[177px] h-[45px] text-[32px] font-semibold leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Quick Links
            </h3>
            <div className="w-[178.25px] h-[141.69px] flex flex-col gap-[7.92px]">
              <a href="#home" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Home</a>
              <a href="#how-it-works" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>How it works</a>
              <a href="#services" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Services</a>
              <a href="#about" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>About us</a>
              <a href="#faqs" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>FAQs</a>
            </div>
          </div>

          {/* For you */}
          <div className="w-[178.25px] h-[210.46px] flex flex-col gap-[23.77px]">
            <h3 
              className="w-[116px] h-[45px] text-[32px] font-semibold leading-[140%] text-right text-[#333333] ml-auto"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              For you
            </h3>
            <div className="w-[178.25px] flex flex-col gap-[7.92px] items-end">
              <a href="#start-project" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Start a Project</a>
              <a href="#join-intern" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Join as an Intern</a>
              <a href="#testimonials" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Testimonials</a>
              <a href="#community" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Community</a>
              <a href="#support" className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Support</a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="w-[253.51px] h-[212.30px] flex flex-col gap-[23.77px]">
            <h3 
              className="w-[253.51px] h-[45px] text-[32px] font-semibold leading-[140%] text-right text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Contact Us
            </h3>
            <div className="flex flex-col gap-[23.77px] items-end">
              {/* Phone */}
              <div className="w-[253.51px] h-[23.77px] flex items-center justify-end gap-[7.92px]">
                <span className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>+123 456 7890</span>
                <div className="w-[23.77px] h-[23.77px] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[17.83px] h-[17.83px]">
                    <path d="M16.5 12.5v2.25a1.5 1.5 0 01-1.635 1.493 14.76 14.76 0 01-6.428-2.287 14.535 14.535 0 01-4.462-4.463A14.76 14.76 0 011.687 3.135 1.5 1.5 0 013.172 1.5h2.25a1.5 1.5 0 011.5 1.29 9.638 9.638 0 00.525 2.107 1.5 1.5 0 01-.338 1.583l-.952.952a12 12 0 004.462 4.463l.952-.952a1.5 1.5 0 011.583-.338 9.638 9.638 0 002.107.525 1.5 1.5 0 011.29 1.52z" fill="#333333"/>
                  </svg>
                </div>
              </div>
              
              {/* Email */}
              <p className="w-[253.51px] h-[22px] text-base font-light leading-[140%] text-right text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                info@Loremipsum.com
              </p>
              
              {/* Address */}
              <p className="w-[221.83px] h-[44px] text-base font-light leading-[140%] text-right text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                123 Travel Street,<br />Wanderland, 45678
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-[1239px] h-[1px] border-t border-[#333333]"></div>

        {/* Copyright Section */}
        <div className="w-[1245px] h-[24px] flex justify-between items-center">
          <p 
            className="w-[235px] h-[20px] text-sm font-light leading-[140%] text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            2025 Focus Grid. All rights reserved.
          </p>
          <p 
            className="w-[196px] h-[24px] text-base leading-[24px] text-[#333333]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Privacy Policy / Disclaimer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;