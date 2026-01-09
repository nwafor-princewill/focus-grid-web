import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import focusGridLogo from '../../assets/images/focus-grid-logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if we are specifically on the About Us page
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/faqs', label: 'FAQs' },
  ];

  return (
    <nav 
      className={`sticky top-0 lg:top-9 z-50 w-full transition-all duration-500 
        ${scrolled ? 'py-2 bg-white shadow-sm' : isAboutPage ? 'py-0 bg-white' : 'py-0'}`}
    >
      <div className="max-w-[1240px] mx-auto px-4">
        <div 
          className={`flex items-center justify-between px-5 py-5 transition-all duration-500 rounded-[1000px] 
            ${scrolled || mobileMenuOpen ? 'bg-white shadow-lg border border-gray-100' : 'bg-[#E6F6EE]'}`}
        >
          {/* Logo */}
          <Link to="/" className="relative z-[70] transition-transform duration-300 hover:scale-105">
            <img 
              src={focusGridLogo} 
              alt="Focus Grid" 
              className="w-[93px] h-[38px] object-contain cursor-pointer"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span 
                  className={`text-sm leading-[140%] transition-colors duration-300 ${
                    isActive(link.path) 
                      ? 'font-medium text-[#00A550]' 
                      : 'font-light text-[#545454] group-hover:text-[#00A550]'
                  }`}
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  {link.label}
                </span>
                <div className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[#33B773] transition-transform duration-300 origin-left 
                  ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                </div>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="flex items-center gap-1.5 group">
                <span 
                  className="text-sm font-light leading-[140%] text-[#545454] group-hover:text-[#00A550] transition-colors duration-300"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Services
                </span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`}>
                  <path d="M1 1L6 6L11 1" stroke="#545454" strokeWidth="1.5" className="group-hover:stroke-[#00A550]"/>
                </svg>
              </button>

              {showServicesDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px] border border-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Link to="/services" className="block px-4 py-2 text-sm text-[#545454] hover:bg-[#E6F6EE] transition-colors duration-200" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    All Services
                  </Link>
                  <Link to="/services/development" className="block px-4 py-2 text-sm text-[#545454] hover:bg-[#E6F6EE] transition-colors duration-200" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    Development
                  </Link>
                  <Link to="/services/design" className="block px-4 py-2 text-sm text-[#545454] hover:bg-[#E6F6EE] transition-colors duration-200" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    Design
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button - Desktop */}
          <Link to="/contact" className="hidden lg:block">
            <button className="h-[40px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-lg group">
              <span 
                className="text-sm font-medium leading-[140%] text-white whitespace-nowrap"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                CONTACT US
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3.33333 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-[70] p-2 text-[#00A550]"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-0.5 w-full bg-[#00A550] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-[#00A550] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-[#00A550] rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-white" onClick={() => setMobileMenuOpen(false)}></div>
        
        <div className="relative h-full flex flex-col justify-center px-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-3xl font-semibold transition-all duration-500 ${
                  isActive(link.path) ? 'text-[#00A550]' : 'text-[#545454]'
                } ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ 
                  fontFamily: 'Funnel Display, sans-serif',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {link.label}
              </Link>
            ))}
            
            <button 
              className={`text-3xl font-semibold text-[#545454] text-left transition-all duration-500 delay-[250ms] ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Services
            </button>

            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`mt-4 transition-all duration-500 delay-[350ms] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <button className="w-full h-[50px] bg-[#00A550] rounded-[100px] flex items-center justify-center gap-2">
                <span 
                  className="text-sm font-medium text-white uppercase"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  CONTACT US
                </span>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33333 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;