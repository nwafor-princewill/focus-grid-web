import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import focusGridLogo from '../../assets/images/focus-grid-logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                {/* Underline Animation */}
                <div className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[#33B773] transition-transform duration-300 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </Link>
            ))}
          </div>

          <Link to="/contact" className="hidden lg:block">
            {/* Added subtle pulse/glow animation on hover via group */}
            <button className="h-[40px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,165,80,0.4)] group">
              <span className="text-sm font-medium text-white" style={{ fontFamily: 'Funnel Display, sans-serif' }}>CONTACT US</span>
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

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="relative h-full flex flex-col justify-center px-8 gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)} 
              className={`text-4xl font-semibold transition-all duration-700 ${isActive(link.path) ? 'text-[#00A550]' : 'text-[#545454]'} 
              ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
              style={{ 
                fontFamily: 'Funnel Display, sans-serif', 
                transitionDelay: `${index * 100}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' // Spring effect
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`mt-6 transition-all duration-700 delay-[400ms] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <button className="w-full h-[60px] bg-[#00A550] rounded-[100px] text-white text-lg font-medium uppercase shadow-lg active:scale-95 transition-transform" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;