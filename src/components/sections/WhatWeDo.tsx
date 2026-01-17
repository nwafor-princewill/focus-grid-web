import React, { useEffect, useRef, useState } from 'react';
import trainImg from '../../assets/images/train.png';
import buildImg from '../../assets/images/build.png';
import deployImg from '../../assets/images/deploy.png';

const WhatWeDo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      tag: "Train",
      img: trainImg,
      title: "We Train.",
      desc: "We groom tech talents through their tech journey gaining more experience and acquiring problem solving acquisition.",
      delay: "0ms"
    },
    {
      tag: "Build",
      img: buildImg,
      title: "We Build.",
      desc: "We create a team where creativity and ideation are put into real life action, creating and bringing innovative ideas to life.",
      delay: "200ms"
    },
    {
      tag: "Deploy",
      img: deployImg,
      title: "We Deploy.",
      desc: "We deploy ready tech talent to various industries of teams in need of tech talents to further career opportunities in the society.",
      delay: "400ms"
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden relative">
      <style>
        {`
          @keyframes rotateOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counterRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes floatIcon {
            0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1)); }
            50% { transform: translateY(-15px) scale(1.05); filter: drop-shadow(0 25px 25px rgba(0,0,0,0.1)); }
          }
          @keyframes dashMove {
            to { stroke-dashoffset: -20; }
          }
          .step-card {
            transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          /* New Glow Effect Class */
          .orbit-glow {
            transition: all 0.5s ease-in-out;
          }
          .group:hover .orbit-glow {
            border-color: #33B773;
            box-shadow: 0 0 25px rgba(51, 183, 115, 0.5), inset 0 0 15px rgba(51, 183, 115, 0.2);
          }
        `}
      </style>

      <div className="max-w-[1240px] mx-auto px-4 flex flex-col items-center relative">
        
        {/* Animated Connecting Path (Desktop Only) */}
        <div className="absolute top-[40%] left-0 w-full hidden lg:block pointer-events-none opacity-40">
          <svg width="100%" height="100" viewBox="0 0 1200 100" fill="none">
            <path 
              d="M200,50 Q600,-20 1000,50" 
              stroke="#33B773" 
              strokeWidth="3" 
              strokeDasharray="10 10"
              style={{ 
                animation: 'dashMove 1s linear infinite',
                filter: 'drop-shadow(0 0 5px #33B773)'
              }}
            />
          </svg>
        </div>

        {/* Header Content */}
        <div className={`max-w-[727px] text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-[40px] md:text-[52px] font-semibold leading-[120%] text-[#333333] mb-6"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            What We Do
          </h2>
          <p 
            className="text-[18px] font-light leading-[140%] text-[#545454]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            We train tech talents giving them real life experience in building software products 
            and acquiring numerous other skills to further the tech career.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 w-full relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center group step-card transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`}
              style={{ transitionDelay: step.delay }}
            >
              {/* Circle Container (The Orbit) with Added Glow Class */}
              <div className="relative w-[280px] h-[280px] md:w-[291px] md:h-[291px] rounded-full border-[2px] border-[#333333] flex items-center justify-center mb-8 bg-white orbit-glow"
                   style={{ animation: 'rotateOrbit 25s linear infinite' }}>
                
                {/* The Green Tag */}
                <div 
                  className="absolute z-20 bg-[#33B773] rounded-[22.94px] px-5 py-2 flex items-center justify-center shadow-lg"
                  style={{ 
                    top: '10px', 
                    right: '10px',
                    fontFamily: 'Funnel Display, sans-serif',
                    animation: 'counterRotate 25s linear infinite'
                  }}
                >
                  <span className="text-white text-[14px] md:text-[16px] font-semibold leading-[140%] uppercase tracking-wider">
                    {step.tag}
                  </span>
                </div>

                {/* Main Image - Floats and Counter-Rotates */}
                <div 
                  className="w-[180px] h-[180px] flex items-center justify-center"
                  style={{ animation: 'counterRotate 25s linear infinite' }}
                >
                  <img 
                    src={step.img} 
                    alt={step.tag} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(51,183,115,0.4)]"
                    style={{ animation: `floatIcon ${3 + index}s ease-in-out infinite` }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 
                  className="text-[28px] md:text-[32px] font-semibold leading-[140%] text-[#333333] mb-4 group-hover:text-[#33B773] transition-colors duration-300"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-[16px] md:text-[17px] font-light leading-[160%] text-[#545454] max-w-[332px]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;