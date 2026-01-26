import React, { useEffect, useRef, useState } from 'react';
import microscope from '../../assets/images/microscope.png';
import target from '../../assets/images/target.png';

const WhatWeStandFor: React.FC = () => {
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

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-20 bg-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center">
        
        {/* Header Section */}
        <div className={`max-w-[727px] text-center mb-[80px] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-[40px] md:text-[52px] font-semibold leading-[120%] text-[#333333] mb-6"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            What We Stand For
          </h2>
          <p 
            className="text-[18px] font-light leading-[140%] text-[#545454]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Focus Grid builds high-impact digital products and develops top-tier tech talent.<br className="hidden md:block" />
            Through innovation and mentorship, we turn ideas into real solutions
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-[762px] flex flex-col gap-[80px]">
          
          {/* Vision Card */}
          <div 
            className={`relative w-full border-2 border-[#009649] rounded-[20px] p-6 md:p-[40px] md:pr-[180px] bg-white transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          >
            <div className="flex flex-col gap-[16px] relative z-10">
              <h3 className="text-[36px] font-semibold text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Our Vision</h3>
              <div className="bg-[#E6F6EE] rounded-[15px] p-[20px] w-full max-w-[532px] border-l-4 border-[#009649]">
                <p className="text-[17px] font-light leading-[160%] text-[#545454]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Our Vision is to be the leading tech talent workforce bolstering innovation and productivity for better cooperation amongst global tech talents members.
                </p>
              </div>
            </div>

            {/* Static Microscope Icon */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[-100px] lg:right-[-140px] w-[280px] h-[280px] pointer-events-none">
                <img 
                  src={microscope} 
                  alt="Vision" 
                  className={`w-full h-full object-contain transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                />
            </div>
          </div>

          {/* Mission Card */}
          <div 
            className={`relative w-full border-2 border-[#009649] rounded-[20px] p-6 md:p-[40px] md:pr-[180px] bg-white transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <div className="flex flex-col gap-[16px] relative z-10">
              <h4 className="text-[36px] font-semibold text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Our Mission</h4>
              <div className="bg-[#E6F6EE] rounded-[15px] p-[20px] w-full max-w-[532px] border-l-4 border-[#009649]">
                <p className="text-[17px] font-light leading-[160%] text-[#545454]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Our mission is to empower emerging tech talents through advanced internships fostering skill enhancement in software development and facilitating connections to rewarding career opportunities.
                </p>
              </div>
            </div>

            {/* Static Target Icon */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[-100px] lg:right-[-140px] w-[280px] h-[280px] pointer-events-none">
                <img 
                  src={target} 
                  alt="Mission" 
                  className={`w-full h-full object-contain transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;