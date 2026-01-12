import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// Assets
import blob1 from '../../assets/images/blob1.png';
import howItWorksImg from '../../assets/images/how-it-works.png';
import strategyImg from '../../assets/images/strategy.png';
import bgTexture from '../../assets/images/how-it-works-background.jpg';

const HowItWorksHero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate progress: starts when top of container enters, ends when bottom leaves
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + 300), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { id: "01", title: "Tell Us What You Need", desc: "Share your idea, goals, or project requirements so we understand your vision clearly." },
    { id: "02", title: "We match you to the right team", desc: "Based on your needs, we assemble a skilled team to plan and kick-start the work." },
    { id: "03", title: "We Execute — Fast & Collaboratively", desc: "Our experts design, build, and iterate with you involved at every step." },
    { id: "04", title: "Deliverables That Move You Forward", desc: "You receive a polished digital product or outcome ready for launch and growth." }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* --- HERO TOP SECTION --- */}
      <section className="relative max-w-[1440px] mx-auto px-6 lg:px-[119px] pt-[100px] md:pt-[120px] pb-24 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="w-full max-w-[595px] z-10 animate-in fade-in slide-in-from-left duration-1000">
          <h1 
            className="text-[32px] md:text-[40px] font-semibold leading-[120%] mb-6 text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Get Insights Into Our Processes And Workflow
          </h1>
          <p 
            className="text-[16px] font-light leading-[140%] text-[#545454] mb-10"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Whether you’re here to turn an idea into a digital product or to grow as a tech professional, 
            our process is built to guide you from where you are to where you want to be.
          </p>

          <div className="flex flex-wrap items-center gap-[20px]">
            <Link to="/contact">
              <button className="h-[48px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-lg group">
                <span className="text-sm font-medium text-white uppercase" style={{ fontFamily: 'Funnel Display, sans-serif' }}>LET'S BUILD</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>

            <Link to="/apply">
              <button className="h-[48px] bg-[#E6F6EE] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#d5f0e4] hover:scale-105 group">
                <span className="text-sm font-medium text-[#00A550] uppercase" style={{ fontFamily: 'Funnel Display, sans-serif' }}>APPLY FOR INTERNSHIP</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#00A550" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* HERO RIGHT IMAGE - Updated Blob Styles */}
        <div className="relative w-full max-w-[368px] h-[374px] flex items-center justify-center animate-in fade-in zoom-in duration-1000">
          <img 
            src={blob1} 
            alt="" 
            className="absolute z-0 transition-all duration-700"
            style={{ 
              width: '215.35px', 
              height: '310.23px', 
              transform: 'rotate(-20.34deg)', 
              opacity: 0.5,
              // Position adjustment to match Figma left: 791.88px logic relatively
              left: '20%' 
            }} 
          />
          <img src={howItWorksImg} alt="Workflow" className="relative z-10 w-[312px] h-[312px] object-contain drop-shadow-xl" />
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30 animate-slow-zoom pointer-events-none"
          style={{ 
            backgroundImage: `url(${bgTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10">
          <div 
            ref={containerRef}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start border border-[#00A550] rounded-[30px] md:rounded-[40px] p-6 md:p-12 bg-white/90 backdrop-blur-md shadow-xl"
          >
            {/* Left Side - Steps List (Responsive Spider Animation) */}
            <div className="w-full lg:flex-1 flex flex-col gap-10 relative">
              {/* Vertical Line Container - Now visible on mobile */}
              <div className="absolute left-[25px] md:left-[35px] top-8 bottom-8 w-[2px] bg-gray-100" />
              
              {/* The "Spider" Progress Line - Fixed for all screens */}
              <div 
                className="absolute left-[25px] md:left-[35px] top-8 w-[2px] bg-[#00A550] transition-all duration-300 ease-out origin-top"
                style={{ height: `${scrollProgress * 90}%` }}
              />

              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-start gap-4 md:gap-10">
                    {/* Number Box */}
                    <div className="flex-shrink-0 w-[50px] md:w-[70px] h-[52px] md:h-[70px] border border-[#00A550] rounded-[8px] flex items-center justify-center bg-white z-20 shadow-sm transition-transform hover:scale-105">
                      <span className="text-[20px] md:text-[32px] font-semibold text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.id}
                      </span>
                    </div>
                    {/* Text */}
                    <div className="flex-1 pt-2 md:pt-4">
                      <h3 className="text-[18px] md:text-[22px] font-medium text-[#333333] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-[14px] md:text-[16px] font-light text-[#545454] leading-[1.5]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {index !== steps.length - 1 && <div className="ml-[65px] md:ml-[110px] h-[1px] bg-gray-100 w-full" />}
                </div>
              ))}
            </div>

            {/* Right Side Image */}
            <div className="w-full lg:w-[400px] flex justify-center lg:sticky lg:top-40">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#00A550] opacity-10 blur-[60px] rounded-full" />
                <img 
                  src={strategyImg} 
                  alt="Strategy" 
                  className="relative z-10 w-full max-w-[280px] md:max-w-none h-auto object-contain transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 15s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HowItWorksHero;