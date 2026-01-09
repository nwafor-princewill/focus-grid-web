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
    <section ref={sectionRef} className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center">
        
        {/* Header Section */}
        <div className={`max-w-[727px] text-center mb-[60px] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-[40px] font-semibold leading-[120%] text-[#333333] mb-6"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            What We Stand For
          </h2>
          <p 
            className="text-[16px] font-light leading-[140%] text-[#545454]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Focus Grid builds high-impact digital products and develops top-tier tech talent.<br className="hidden md:block" />
            Through innovation and mentorship, we turn ideas into real solutions
          </p>
        </div>

        {/* Vision and Mission Cards Container */}
        <div className="w-full max-w-[762px] flex flex-col gap-[60px]">
          
          {/* Our Vision Card */}
          <div className={`relative w-full border border-[#009649] rounded-[20px] p-6 md:p-[30px] md:pr-[180px] bg-white transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex flex-col gap-[12px]">
              <h3 
                className="text-[32px] font-semibold leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Our Vision
              </h3>
              <div className="bg-[#E6F6EE] rounded-[10px] p-[12.73px] w-full max-w-[532px]">
                <p 
                  className="text-[16px] font-light leading-[140%] text-[#545454]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Our Vision is to be the leading tech talent workforce bolstering innovation and productivity for better cooperation amongst global tech talents members.
                </p>
              </div>
            </div>

            {/* Overlapping Microscope Image - Hidden on mobile, shifted right on desktop */}
            <div className="hidden md:block absolute top-1/2 right-[-80px] lg:right-[-100px] -translate-y-1/2 w-[250px] h-[250px] pointer-events-none transition-all duration-1000 delay-500">
              <img 
                src={microscope} 
                alt="Vision Icon" 
                className={`w-full h-full object-contain transition-transform duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-12'}`}
              />
            </div>
          </div>

          {/* Our Mission Card */}
          <div className={`relative w-full border border-[#009649] rounded-[20px] p-6 md:p-[30px] md:pr-[180px] bg-white transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex flex-col gap-[12px]">
              <h4 
                className="text-[32px] font-semibold leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Our Mission
              </h4>
              <div className="bg-[#E6F6EE] rounded-[10px] p-[12.73px] w-full max-w-[532px]">
                <p 
                  className="text-[16px] font-light leading-[140%] text-[#545454]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Our mission is to empower emerging tech talents through advanced internships fostering skill enhancement in software development and facilitating connections to rewarding career opportunities.
                </p>
              </div>
            </div>

            {/* Overlapping Target Image - Hidden on mobile, shifted right on desktop */}
            <div className="hidden md:block absolute top-1/2 right-[-80px] lg:right-[-100px] -translate-y-1/2 w-[250px] h-[250px] pointer-events-none">
              <img 
                src={target} 
                alt="Mission Icon" 
                className={`w-full h-full object-contain transition-transform duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-12'}`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;