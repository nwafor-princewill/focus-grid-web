import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import focusGridLogo from '../../assets/images/focus-grid-logo.png';
import OurServices from '../sections/OurServices';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restored: Prevents body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Restored: Active link logic
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/faqs', label: 'FAQs' },
  ];

  const serviceData = [
    {
      title: "Product & Software Development",
      desc: "Strategy, design, development, and deployment.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77" />
          <path d="m10 14-5 5-2.5-2.5" /><path d="m14 10 5-5" />
        </svg>
      )
    },
    {
      title: "UI/uX Design",
      desc: "Rough concept to a fully launched digital product.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>
      )
    },
    {
      title: "Training & skill acceleration",
      desc: "Bridging the gap between learning and industry.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M4 8V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/></svg>
      )
    },
    {
      title: "Branding & graphic Design",
      desc: "Visual identities that resonate and scale.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    }
  ];

  return (
    <nav className={`sticky top-0 lg:top-9 z-50 w-full transition-all duration-500 ${scrolled ? 'py-2' : 'py-0'}`}>
      <div className="max-w-[1240px] mx-auto px-4 relative">
        <div className={`flex items-center justify-between px-5 py-5 transition-all duration-500 rounded-[1000px] 
            ${scrolled || mobileMenuOpen ? 'bg-white shadow-lg border border-gray-100' : isAboutPage ? 'bg-white/80 backdrop-blur-md border border-gray-100' : 'bg-[#E6F6EE]/90 backdrop-blur-md border border-transparent'}`}>
          
          <Link to="/" className="relative z-[70] transition-transform duration-300 hover:scale-105">
            <img src={focusGridLogo} alt="Focus Grid" className="w-[93px] h-[38px] object-contain cursor-pointer" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative group">
                <span className={`text-sm leading-[140%] transition-colors duration-300 ${isActive(link.path) ? 'font-medium text-[#00A550]' : 'font-light text-[#545454] group-hover:text-[#00A550]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  {link.label}
                </span>
                <div className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[#33B773] transition-transform duration-300 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative py-2" onMouseEnter={() => setShowServicesDropdown(true)} onMouseLeave={() => setShowServicesDropdown(false)}>
              <button className="flex items-center gap-1.5 group">
                <span className="text-sm font-light text-[#545454] group-hover:text-[#00A550] transition-colors duration-300" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Services</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`}>
                  <path d="M1 1L6 6L11 1" stroke="#545454" strokeWidth="1.5" className="group-hover:stroke-[#00A550]"/>
                </svg>
              </button>

              {/* Reduced Height Desktop Dropdown */}
              <div className={`absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 transition-all duration-500 origin-top
                ${showServicesDropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}>
                  <OurServices />
                {/* <div className="grid grid-cols-2 gap-4">
                  {serviceData.map((service, idx) => (
                    <div key={idx} className="group/card p-6 rounded-[24px] bg-[#F5F5F5] border border-transparent hover:border-[#00A550]/30 hover:bg-[#E6F6EE] transition-all duration-300 cursor-default">
                      <div className="w-12 h-12 rounded-full bg-[#333333] group-hover/card:bg-[#00A550] flex items-center justify-center text-white mb-4 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h4 className="text-base font-bold text-[#333333] mb-2" style={{ fontFamily: 'Funnel Display, sans-serif' }}>{service.title}</h4>
                      <p className="text-xs text-[#545454] font-light leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

          <Link to="/contact" className="hidden lg:block">
            <button className="h-[40px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 group">
              <span className="text-sm font-medium text-white" style={{ fontFamily: 'Funnel Display, sans-serif' }}>CONTACT US</span>
              {/* RESTORED ARROW ICON */}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden relative z-[70] p-2 text-[#00A550]">
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-0.5 w-full bg-[#00A550] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-[#00A550] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-[#00A550] rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Corrected with Active Links & Services */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-white" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="relative h-full flex flex-col justify-center px-8 gap-6 overflow-y-auto pt-20">
          {navLinks.map((link, index) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)} 
              className={`text-3xl font-semibold transition-all duration-500 ${isActive(link.path) ? 'text-[#00A550]' : 'text-[#545454]'} ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ fontFamily: 'Funnel Display, sans-serif', transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`text-3xl font-semibold text-[#545454] flex items-center justify-between w-full transition-all duration-500 delay-[250ms] ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Services
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className={`mt-4 space-y-4 overflow-hidden transition-all duration-500 ${mobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {serviceData.map((service, idx) => (
                <div key={idx} className="p-4 bg-[#F5F5F5] rounded-2xl">
                  <h4 className="font-bold text-[#333333]">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`mt-4 transition-all duration-500 delay-[350ms] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="w-full h-[50px] bg-[#00A550] rounded-[100px] text-white font-medium uppercase" style={{ fontFamily: 'Funnel Display, sans-serif' }}>CONTACT US</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;