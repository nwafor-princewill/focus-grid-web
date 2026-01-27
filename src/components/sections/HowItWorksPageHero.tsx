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
    <div className="w-full bg-white overflow-x-hidden -mt-[120px] lg:-mt-[160px]">
      <style>{`
        @keyframes text-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes backgroundMoveFast {
          0% { background-position: 0% 0%; }
          50% { background-position: 20% 20%; }
          100% { background-position: 0% 0%; }
        }
        .shine-text {
          background: linear-gradient(90deg, #333333, #00A550, #333333);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shine 4s linear infinite;
        }
        .step-card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .step-card-hover:hover {
          background: rgba(0, 165, 80, 0.03);
          transform: translateX(10px);
        }
        .bg-pan-fast {
          animation: backgroundMoveFast 30s ease-in-out infinite;
        }
      `}</style>

      {/* --- HERO TOP SECTION --- */}
      {/* Tweak: Reduced mobile pt-[220px] to pt-[180px] to bring it up on mobile */}
      <section className="relative max-w-[1440px] mx-auto px-6 lg:px-[119px] pt-[180px] md:pt-[240px] lg:pt-[280px] pb-16 md:pb-32 flex flex-col lg:flex-row justify-between items-center gap-12 bg-white">
        
        <div className="w-full max-w-[650px] z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#E6F6EE] border border-[#00A550]/20 text-[#00A550] text-sm font-medium tracking-wide">
              OUR WORKFLOW & PROCESS
          </div>
          
          <h1 className="text-[38px] md:text-[56px] font-bold leading-[115%] mb-6 shine-text" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Get Insights Into Our Processes And Workflow
          </h1>
          
          <p className="text-[18px] md:text-[20px] font-light leading-[150%] text-[#545454] mb-10 max-w-[540px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Whether you’re here to turn an idea into a digital product or to grow as a tech professional, 
            our process is built to guide you seamlessly from concept to reality.
          </p>

          <div className="flex flex-wrap items-center gap-[20px]">
            <Link to="/contact">
              <button className="h-[56px] bg-[#00A550] rounded-[100px] px-[36px] py-[12px] flex items-center gap-3 transition-all duration-300 hover:bg-[#008f44] hover:scale-[1.02]">
                <span className="text-sm font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'Funnel Display, sans-serif' }}>LET'S BUILD</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </Link>

            <Link to="/apply">
              <button className="h-[56px] bg-white border-2 border-[#E6F6EE] rounded-[100px] px-[36px] py-[12px] flex items-center gap-3 transition-all duration-300 hover:border-[#00A550] hover:scale-[1.02]">
                <span className="text-sm font-bold text-[#333333] uppercase tracking-wider" style={{ fontFamily: 'Funnel Display, sans-serif' }}>APPLY FOR INTERNSHIP</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-[450px] h-[450px] flex items-center justify-center">
          <img 
            src={blob1} 
            alt="" 
            className="absolute z-0" 
            style={{ 
              width: '380px', 
              opacity: 0.6, 
              left: '5%',
              top: '10%' 
            }} 
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img src={howItWorksImg} alt="Workflow" className="relative z-10 w-[85%] object-contain" />
          </div>
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="w-full py-24 relative overflow-hidden bg-white">
        <div 
          className="absolute inset-0 z-0 opacity-15 grayscale pointer-events-none bg-pan-fast"
          style={{ 
            backgroundImage: `url(${bgTexture})`,
            backgroundSize: '140% 140%',
            backgroundPosition: 'center',
          }}
        />

        <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10">
          <div 
            ref={containerRef}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start border border-[#00A550]/20 rounded-[40px] p-8 md:p-16 bg-white/90 backdrop-blur-xl"
          >
            <div className="w-full lg:flex-1 flex flex-col gap-12 relative">
              <div className="absolute left-[25px] md:left-[35px] top-10 bottom-10 w-[2px] bg-gray-100" />
              
              <div 
                className="absolute left-[25px] md:left-[35px] top-10 w-[2.5px] bg-[#00A550] transition-all duration-500 ease-out origin-top"
                style={{ height: `${scrollProgress * 92}%` }}
              />

              {steps.map((step) => (
                <div key={step.id} className="flex flex-col gap-6 relative z-10 group step-card-hover rounded-2xl p-4 -ml-4">
                  <div className="flex items-start gap-6 md:gap-10">
                    <div className="flex-shrink-0 w-[50px] md:w-[70px] h-[50px] md:h-[70px] border-2 border-[#E6F6EE] group-hover:border-[#00A550] rounded-2xl flex items-center justify-center bg-white z-20 transition-all duration-500 group-hover:rotate-6">
                      <span className="text-[20px] md:text-[32px] font-bold text-[#333333] group-hover:text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.id}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[20px] md:text-[24px] font-semibold text-[#333333] mb-3 group-hover:text-[#00A550] transition-colors" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-[15px] md:text-[17px] font-light text-[#545454] leading-[1.6]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[450px] flex justify-center lg:sticky lg:top-40">
              <div className="relative p-4">
                <img src={strategyImg} alt="Strategy" className="relative z-10 w-full max-w-[320px] md:max-w-none h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksHero;