import React from 'react';
import { Link } from 'react-router-dom';
// Assets
import questionImg from '../../assets/images/question.png';
import northEastIcon from '../../assets/images/north-east.png';

const FAQContactCTA: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 mb-[160px]">
      {/* MAIN CONTAINER: 1063x301 based on Figma specs */}
      <div 
        className="relative w-full max-w-[1063px] min-h-[301px] bg-white rounded-[20px] 
                   border border-[#33B773] pt-[20px] pb-[25px] flex flex-col items-center 
                   justify-center gap-[27.43px] shadow-sm hover:shadow-md transition-all duration-500 group"
      >
        
        {/* Background Decorative Element (Optional side question mark from screenshot) */}
        <div className="absolute left-6 bottom-6 opacity-10 pointer-events-none transition-transform duration-1000 group-hover:rotate-12">
            <img src={questionImg} alt="" className="w-[100px] h-auto grayscale" />
        </div>

        {/* Top Center Question Mark Image */}
        <div className="flex justify-center items-center overflow-hidden">
          <img 
            src={questionImg} 
            alt="Question" 
            className="w-[70.3px] h-[70.3px] object-contain transition-transform duration-500 group-hover:scale-110"
            style={{ 
                opacity: 0.35, 
                mixBlendMode: 'plus-darker' 
            }}
          />
        </div>

        {/* Text Content Block */}
        <div className="flex flex-col items-center gap-2 text-center px-4">
          <h2 
            className="text-[24px] font-medium leading-[140%] text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Still Have Questions?
          </h2>
          <p 
            className="text-[16px] font-light leading-[140%] text-[#1E1E1E] opacity-60 max-w-[600px]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Can’t find the answer you’re looking for? Have a chat with us, let’s hear from you.
          </p>
        </div>

        {/* CONTACT US Button */}
        <Link to="/contact">
          <button 
            className="w-[200px] h-[48px] bg-[#E6F6EE] rounded-[100px] px-[30px] py-[10px] 
                       flex items-center justify-center gap-2 transition-all duration-300 
                       hover:bg-[#d5f0e4] hover:scale-105 group/btn active:scale-95"
          >
            <span 
              className="text-[14px] font-medium leading-[140%] text-[#00A550] uppercase tracking-wide"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              CONTACT US
            </span>
            <img 
              src={northEastIcon} 
              alt="" 
              className="w-[16px] h-[16px] transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
            />
          </button>
        </Link>

        {/* Floating Decorative Plus Signs (from your Figma screenshot) */}
        <div className="absolute right-[-40px] top-10 opacity-20 pointer-events-none hidden lg:block">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M10 0V20M0 10H20" stroke="#00A550" strokeWidth="2" transform="translate(10, 10)"/>
                <path d="M10 0V10M5 5H15" stroke="#00A550" strokeWidth="1" transform="translate(40, 40)"/>
            </svg>
        </div>
      </div>
    </section>
  );
};

export default FAQContactCTA;