import React, { useState } from 'react';
import focusGridLogo from '../../assets/images/focus-grid-logo.png';
import { Menu, X } from 'lucide-react'; // You'll need to install lucide-react or use another icon library

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 md:top-9 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-0">
      <div className="w-full max-w-[1247px] mx-auto bg-[#E6F6EE] rounded-[20px] md:rounded-[100px] px-4 md:px-5 py-3 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[80px] md:w-[100px] h-[32.77px] md:h-[40.96px]">
            <img 
              src={focusGridLogo} 
              alt="Focus Grid" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#00A550]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <div className="bg-white/10 rounded-[10px] px-[10px] py-[2px] shadow-[0px_4px_10px_0px_rgba(0,165,80,1)]">
            <a 
              href="#home" 
              className="text-[#00A550] text-sm font-bold leading-[140%]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Home
            </a>
          </div>
          
          <a 
            href="#about" 
            className="text-[#545454] text-sm md:text-base font-light leading-[140%]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            About Us
          </a>
          
          <a 
            href="#how-it-works" 
            className="text-[#545454] text-sm md:text-base font-light leading-[140%] whitespace-nowrap"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            How It Works
          </a>
          
          <a 
            href="#services" 
            className="text-[#545454] text-sm md:text-base font-light leading-[140%]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Services
          </a>
          
          <a 
            href="#faqs" 
            className="text-[#545454] text-sm md:text-base font-light leading-[140%]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            FAQs
          </a>
        </div>

        {/* Desktop Contact Button */}
        <button className="hidden md:flex bg-[#00A550] rounded-[20px] px-4 md:px-5 py-1.5 md:py-2 h-[28px] md:h-[33px] items-center justify-center">
          <span 
            className="text-white text-xs font-normal leading-[140%]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Contact Us
          </span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#E6F6EE] rounded-[20px] px-4 py-4 md:hidden shadow-lg">
            <div className="flex flex-col gap-3">
              <div className="bg-white/10 rounded-[10px] px-[10px] py-[2px] shadow-[0px_4px_10px_0px_rgba(0,165,80,1)] w-fit">
                <a 
                  href="#home" 
                  className="text-[#00A550] text-sm font-bold leading-[140%]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </div>
              
              {['About Us', 'How It Works', 'Services', 'FAQs'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[#545454] text-base font-light leading-[140%] py-1"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              <button className="bg-[#00A550] rounded-[20px] px-5 py-2 flex items-center justify-center mt-2">
                <span 
                  className="text-white text-sm font-normal leading-[140%]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;