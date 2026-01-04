import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import focusGridLogo from '../../assets/images/focus-grid-logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/services', label: 'Services' },
    { path: '/faqs', label: 'FAQs' }
  ];

  return (
    <nav className="sticky top-9 left-0 right-0 z-50 flex justify-center px-6">
      <div className="w-full max-w-[1247px] h-[81px] bg-[#E6F6EE] rounded-[100px] px-5 py-5 flex items-center justify-between gap-[253px]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[100px] h-[40.96px]">
            <img 
              src={focusGridLogo} 
              alt="Focus Grid" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <React.Fragment key={link.path}>
              {isActive(link.path) ? (
                <div className="bg-white/10 rounded-[10px] px-[10px] py-[2px] shadow-[0px_4px_10px_0px_rgba(0,165,80,1)]">
                  <Link 
                    to={link.path} 
                    className="text-[#00A550] text-sm font-bold leading-[140%]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : (
                <Link 
                  to={link.path} 
                  className={`text-[#545454] text-base font-light leading-[140%] ${
                    link.label === 'How It Works' ? 'whitespace-nowrap' : ''
                  }`}
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Contact Button */}
        <button className="bg-[#00A550] rounded-[20px] px-5 py-2 h-[33px] flex items-center justify-center">
          <span 
            className="text-white text-xs font-normal leading-[140%]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Contact Us
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;