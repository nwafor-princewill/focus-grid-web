import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imageCopy from '../../assets/images/image copy.png';
import manPhone from '../../assets/images/man-phone.png';
import northEast from '../../assets/images/north-east.png';
import arrow6 from '../../assets/images/arrow6.png';
import sprinkle1 from '../../assets/images/sprinkle1.png';

const AboutUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Sprinkle Stars */}
      <img 
        src={sprinkle1} 
        alt="" 
        className="absolute top-10 left-6 md:left-12 w-[60px] h-auto opacity-80 z-20 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-28">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              
              {/* About Us Badge */}
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link to="/about" className="relative inline-flex items-center justify-center group">
                  <div className="relative z-10 h-[32px] px-6 py-2.5 border-2 border-[#00A550] rounded-[100px] bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#00A550] group-hover:scale-[1.02]">
                    <span 
                      className="text-[12px] font-bold leading-[140%] text-[#00A550] group-hover:text-white tracking-widest uppercase"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      ABOUT US
                    </span>
                  </div>
                </Link>
              </div>

              {/* Main Heading */}
              <h2 
                className={`text-3xl sm:text-4xl md:text-[48px] font-semibold leading-[120%] text-[#333333] transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Train <span className="text-[#00A550]">.</span> Build <span className="text-[#00A550]">.</span> Deploy
              </h2>

              {/* Description */}
              <div className={`space-y-6 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p 
                  className="text-base md:text-xl text-[#545454] font-light leading-[160%]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  At Focus Grid, we merge innovation with purpose. We train passionate product developers, build scalable digital products, and deploy skilled talent to companies.
                </p>
                <div className="flex items-start gap-4 p-4 bg-[#F9F9F9] border-l-4 border-[#00A550] rounded-r-xl">
                    <p 
                      className="text-sm md:text-[15px] text-[#333333] font-medium leading-[140%]"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      "Every project we take on doubles as a classroom where real businesses grow and real people learn by doing."
                    </p>
                </div>
              </div>

              {/* LEARN MORE Button */}
              <div className={`flex items-center transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center gap-3 w-fit h-[54px] rounded-[100px] bg-[#E6F6EE] px-10 py-3 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,165,80,0.1)] hover:bg-[#00A550] group"
                >
                  <span 
                    className="text-sm font-bold leading-[140%] text-[#00A550] group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    LEARN MORE
                  </span>
                  <div className="bg-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                    <img src={northEast} alt="" className="w-4 h-4" />
                  </div>
                </Link>

                <img 
                  src={arrow6} 
                  alt="" 
                  className="hidden md:block opacity-100 ml-8"
                  style={{ width: '59px', height: '19.4px' }}
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="relative max-w-lg mx-auto lg:mr-0 lg:ml-auto">
              
              <div className="absolute -inset-4 opacity-20">
                 <img src={imageCopy} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative w-full aspect-[407/343] max-w-[450px]">
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img 
                    src={manPhone} 
                    alt="Man using phone" 
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 lg:mt-32">
        <div className={`w-full h-[2px] bg-gradient-to-r from-transparent via-[#00A550]/30 to-transparent transition-all duration-[2000ms] delay-700 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
      </div>
    </section>
  );
};

export default AboutUsSection;