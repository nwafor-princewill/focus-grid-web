import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import focusGridLogo from '../../assets/images/focus-grid-logo.png';
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import xIcon from '../../assets/images/x.png';
import underline from '../../assets/images/underline.png';
import footerBackground from '../../assets/images/footer-background.jpg';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={footerRef} className="w-full bg-[#F9F9F9] relative overflow-hidden">
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center opacity-20 transition-transform duration-[3000ms] ease-out ${isVisible ? 'scale-100 translate-y-0' : 'scale-125 translate-y-10'}`}
        style={{ backgroundImage: `url(${footerBackground})` }}
      />
      
      <footer className="relative z-10 w-full max-w-[1437px] mx-auto bg-transparent pt-16 md:pt-20 lg:pt-[114px] px-4 md:px-8 lg:px-16 xl:px-[100px] pb-12 md:pb-16 lg:pb-[114px]">
        <div className="w-full max-w-[1237px] mx-auto flex flex-col gap-16 md:gap-20 lg:gap-[122px]">
          
          <div className={`w-full flex flex-col gap-6 md:gap-8 lg:gap-[39.61px] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-4">
              <div className="relative">
                <h2 className="text-[28px] md:text-[32px] lg:text-[39.61px] font-normal leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Where talent grows, & brands get results.<br />
                  <span className="relative inline-block group">
                    Everyone wins.
                    <img src={underline} alt="" className={`absolute -bottom-1 left-0 w-full h-auto transition-all duration-1000 delay-700 origin-left ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
                  </span>
                </h2>
              </div>
              
              <button 
                onClick={() => navigate('/contact')} // Contact page link added here
                className="w-full sm:w-auto h-[60px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-lg whitespace-nowrap active:scale-95 group"
              >
                <span className="text-[18px] md:text-[20px] font-medium leading-[140%] text-white" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  LET'S WORK TOGETHER
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className={`w-full h-[1px] bg-[#333333] transition-all duration-1000 delay-500 origin-left transform ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-[99px]">
            <div className={`flex flex-col gap-6 lg:gap-[31.69px] transition-all duration-700 delay-[200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div onClick={() => navigate('/')} className="w-[150px] md:w-[178.25px] h-auto transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={focusGridLogo} alt="Focus Grid Logo" className="w-full h-auto" />
              </div>
              <p className="text-sm md:text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Focus Grid is a software development institution that builds digital products and trains tech talent
              </p>
              <div className="flex gap-4 lg:gap-[19.81px]">
                {[{ icon: facebookIcon, label: "Facebook" }, { icon: instagramIcon, label: "Instagram" }, { icon: linkedinIcon, label: "LinkedIn" }, { icon: xIcon, label: "X" }].map((social, i) => (
                  <a key={i} href="#" className="w-[28px] h-[28px] lg:w-[31.69px] lg:h-[31.69px] transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:brightness-110">
                    <img src={social.icon} alt={social.label} className="w-full h-full" />
                  </a>
                ))}
              </div>
            </div>

            <div className={`flex flex-col gap-4 lg:gap-[23.77px] transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Quick Links</h3>
              <div className="flex flex-col gap-2 lg:gap-[7.92px]">
                {[{l: "Home", p: "/"}, {l: "How it works", p: "/how-it-works"}, {l: "Services", p: "/#services"}, {l: "About us", p: "/about"}, {l: "FAQs", p: "/faqs"}].map((link) => (
                  <button key={link.l} onClick={() => navigate(link.p)} className="text-sm md:text-base font-light text-[#333333] transition-all duration-300 hover:text-[#00A550] hover:translate-x-2 flex items-center group/link" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    <span className="w-0 h-[1px] bg-[#00A550] transition-all duration-300 group-hover/link:w-3 group-hover/link:mr-2"></span>
                    {link.l}
                  </button>
                ))}
              </div>
            </div>

            <div className={`flex flex-col gap-4 lg:gap-[23.77px] transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>For you</h3>
              <div className="flex flex-col gap-2 lg:gap-[7.92px]">
                {[{l: "Start a Project", p: "/contact"}, {l: "Join as an Intern", p: "/apply"}, {l: "Testimonials", p: "/#testimonials"}, {l: "Community", p: "/#community"}, {l: "Support", p: "/contact"}].map((link) => (
                  <button key={link.l} onClick={() => navigate(link.p)} className="text-sm md:text-base font-light text-[#333333] transition-all duration-300 hover:text-[#00A550] hover:translate-x-2 flex items-center group/link" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    <span className="w-0 h-[1px] bg-[#00A550] transition-all duration-300 group-hover/link:w-3 group-hover/link:mr-2"></span>
                    {link.l}
                  </button>
                ))}
              </div>
            </div>

            <div className={`flex flex-col gap-4 lg:gap-[23.77px] transition-all duration-700 delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Contact Us</h3>
              <div className="flex flex-col gap-4 lg:gap-[23.77px]">
                <a href="tel:+2348125376775" className="flex items-center gap-2 lg:gap-[7.92px] transition-all duration-300 hover:text-[#00A550] group/contact">
                  <div className="p-1 rounded-full group-hover/contact:bg-[#E6F6EE] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current"><path d="M18.333 14.167v2.5a1.667 1.667 0 01-1.817 1.658 16.4 16.4 0 01-7.142-2.542 16.15 16.15 0 01-4.958-4.958A16.4 16.4 0 011.874 3.683 1.667 1.667 0 013.525 1.667h2.5a1.667 1.667 0 011.667 1.433 10.708 10.708 0 00.583 2.342 1.667 1.667 0 01-.375 1.758l-1.058 1.058a13.333 13.333 0 004.958 4.959l1.058-1.059a1.667 1.667 0 011.759-.375 10.708 10.708 0 002.341.583 1.667 1.667 0 011.434 1.667z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm md:text-base font-light" style={{ fontFamily: 'Funnel Display, sans-serif' }}>+234 812 537 6775</span>
                </a>
                <a href="tel:+2348085167132" className="flex items-center gap-2 lg:gap-[7.92px] transition-all duration-300 hover:text-[#00A550] group/contact">
                  <div className="p-1 rounded-full group-hover/contact:bg-[#E6F6EE] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current"><path d="M18.333 14.167v2.5a1.667 1.667 0 01-1.817 1.658 16.4 16.4 0 01-7.142-2.542 16.15 16.15 0 01-4.958-4.958A16.4 16.4 0 011.874 3.683 1.667 1.667 0 013.525 1.667h2.5a1.667 1.667 0 011.667 1.433 10.708 10.708 0 00.583 2.342 1.667 1.667 0 01-.375 1.758l-1.058 1.058a13.333 13.333 0 004.958 4.959l1.058-1.059a1.667 1.667 0 011.759-.375 10.708 10.708 0 002.341.583 1.667 1.667 0 011.434 1.667z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm md:text-base font-light" style={{ fontFamily: 'Funnel Display, sans-serif' }}>+234 808 516 7132</span>
                </a>
                <a href="mailto:focusgrid5@gmail.com" className="flex items-center gap-2 lg:gap-[7.92px] transition-all duration-300 hover:text-[#00A550] group/contact">
                  <div className="p-1 rounded-full group-hover/contact:bg-[#E6F6EE] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current"><path d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.333 5l-8.333 5.833L1.667 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm md:text-base font-light" style={{ fontFamily: 'Funnel Display, sans-serif' }}>focusgrid5@gmail.com</span>
                </a>
                <div className="flex items-start gap-2 lg:gap-[7.92px] group/contact">
                  <div className="p-1 flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-[#333333]"><path d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0115 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-sm md:text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>63 Akpo street, Agbani,<br />Nkanu West, Enugu State,<br />Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`w-full h-[1px] bg-[#333333] transition-all duration-1000 delay-[900ms] origin-center transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>

          <div className={`w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 -mt-8 lg:-mt-12 transition-all duration-1000 delay-[1000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xs md:text-sm font-light text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>2025 Focus Grid. All rights reserved.</p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#privacy" className="text-xs md:text-sm font-light text-[#333333] transition-colors hover:text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Privacy Policy</a>
              <a href="#terms" className="text-xs md:text-sm font-light text-[#333333] transition-colors hover:text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;