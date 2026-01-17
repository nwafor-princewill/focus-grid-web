import React from 'react';
import { Link } from 'react-router-dom';
// Assets
import questionImg from '../../assets/images/question.png';
import northEastIcon from '../../assets/images/north-east.png';

const FAQContactCTA: React.FC = () => {
  return (
    /* Reduced margin-top (mt) and margin-bottom (mb) for mobile specifically */
    <section className="relative w-full bg-white flex justify-center px-4 mt-8 md:mt-20 mb-[80px] md:mb-[160px] overflow-visible">
      {/* --- EXTRA-CONTAINER ANIMATIONS (STARS) --- */}
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes drift-slow {
          0% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
          100% { transform: translate(0, 0); }
        }
        .animate-star { animation: star-twinkle 4s infinite ease-in-out; }
        .animate-float-gentle { animation: float-gentle 6s infinite ease-in-out; }
        .animate-drift-slow { animation: drift-slow 8s infinite ease-in-out; }
      `}</style>

      {/* --- OUTER STARS (Positioned outside the main box) --- */}
      <div className="absolute top-[-20px] left-[15%] text-[#00A550] animate-star pointer-events-none">✦</div>
      <div className="absolute top-[40px] right-[10%] text-[#54C38A] animate-star pointer-events-none" style={{ animationDelay: '1s' }}>★</div>
      <div className="absolute bottom-[-30px] left-[20%] text-[#00A550] animate-star pointer-events-none" style={{ animationDelay: '2s' }}>✦</div>
      <div className="absolute bottom-[20px] right-[15%] text-[#54C38A] animate-star pointer-events-none" style={{ animationDelay: '0.5s' }}>★</div>
      <div className="absolute top-1/2 left-[-40px] text-[#00A550] animate-star hidden lg:block" style={{ fontSize: '24px' }}>✧</div>

      {/* MAIN CONTAINER */}
      <div 
        className="relative w-full max-w-[1063px] min-h-[301px] bg-white rounded-[20px] 
                   border border-[#33B773] pt-[40px] pb-[40px] md:pt-[20px] md:pb-[25px] flex flex-col items-center 
                   justify-center gap-[27.43px] shadow-sm hover:shadow-2xl transition-all duration-700 group overflow-hidden"
      >
        
        {/* --- DYNAMIC BACKGROUND QUESTION MARKS --- */}
        <div className="absolute -left-6 -bottom-8 opacity-[0.12] pointer-events-none animate-float-gentle">
            <img src={questionImg} alt="" className="w-[120px] md:w-[180px] h-auto grayscale" />
        </div>
        <div className="absolute -right-10 -top-10 opacity-[0.1] pointer-events-none animate-drift-slow">
            <img src={questionImg} alt="" className="w-[100px] md:w-[160px] h-auto grayscale rotate-[45deg]" />
        </div>
        <div className="absolute left-[15%] top-4 opacity-[0.08] pointer-events-none animate-drift-slow" style={{ animationDelay: '1.5s' }}>
            <img src={questionImg} alt="" className="w-[60px] md:w-[90px] h-auto grayscale rotate-[-20deg]" />
        </div>
        <div className="absolute right-[12%] top-[30%] opacity-[0.1] pointer-events-none animate-float-gentle" style={{ animationDelay: '3s' }}>
            <img src={questionImg} alt="" className="w-[50px] md:w-[70px] h-auto grayscale" />
        </div>
        <div className="absolute left-[40%] bottom-4 opacity-[0.15] pointer-events-none animate-star">
            <img src={questionImg} alt="" className="w-[35px] md:w-[45px] h-auto grayscale" />
        </div>

        {/* --- CENTER CONTENT --- */}
        <div className="flex justify-center items-center relative z-10">
          <div className="absolute inset-0 bg-[#33B773] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full" />
          <img 
            src={questionImg} 
            alt="Question" 
            className="w-[60px] h-[60px] md:w-[70.3px] md:h-[70.3px] object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg]"
            style={{ 
                opacity: 0.45, 
                mixBlendMode: 'plus-darker' 
            }}
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center px-6 relative z-10">
          <h2 
            className="text-[24px] md:text-[32px] font-medium leading-[140%] text-[#333333] transition-colors duration-500 group-hover:text-[#00A550]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Still Have Questions?
          </h2>
          <p 
            className="text-[14px] md:text-[16px] font-light leading-[140%] text-[#1E1E1E] opacity-70 max-w-[600px]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Can’t find the answer you’re looking for? Have a chat with us, let’s hear from you.
          </p>
        </div>

        {/* CONTACT US Button */}
        <Link to="/contact" className="relative z-10">
          <button 
            className="w-[190px] md:w-[210px] h-[48px] md:h-[52px] bg-[#E6F6EE] rounded-[100px] px-[30px] py-[10px] 
                       flex items-center justify-center gap-3 transition-all duration-300 
                       hover:bg-[#00A550] hover:shadow-lg hover:scale-105 group/btn active:scale-95"
          >
            <span 
              className="text-[13px] md:text-[14px] font-semibold text-[#00A550] group-hover/btn:text-white uppercase tracking-wider transition-colors duration-300"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              CONTACT US
            </span>
            <img 
              src={northEastIcon} 
              alt="" 
              className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:brightness-0 group-hover/btn:invert"
            />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FAQContactCTA;