import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imageCopy from '../../assets/images/image copy.png';
import manPhone from '../../assets/images/man-phone.png';
import northEast from '../../assets/images/north-east.png';

const AboutUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animation
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
      className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-28">
          
          {/* Left Content - Animated */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              
              {/* About Us Badge with Ping Animation */}
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link 
                  to="/about" 
                  className="relative inline-flex items-center justify-center group"
                >
                  {/* Ping Effect */}
                  <div className="absolute inset-0 rounded-[100px] border border-[#00A550] animate-ping opacity-20"></div>
                  
                  <div className="relative z-10 h-[28px] px-5 py-2.5 border border-[#00A550] rounded-[100px] bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#E6F6EE]">
                    <span 
                      className="text-[12px] font-medium leading-[140%] text-[#00A550] tracking-wide uppercase"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      ABOUT US
                    </span>
                  </div>
                </Link>
              </div>

              {/* Main Heading - Staggered reveal */}
              <h2 
                className={`text-3xl sm:text-4xl md:text-[40px] font-semibold leading-[120%] text-[#333333] transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Train . Build . Deploy
              </h2>

              {/* Description - Staggered reveal */}
              <div className={`space-y-4 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p 
                  className="text-base md:text-lg text-[#545454] font-light leading-[140%]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  At Focus Grid, we merge innovation with purpose. We train passionate product developers, build scalable digital products, deploy skilled talent to companies.
                </p>
                <p 
                  className="text-base md:text-lg text-[#545454] font-light leading-[140%]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Every project we take on doubles as a classroom where real businesses grow and real people learn by doing.
                </p>
              </div>

              {/* LEARN MORE Button - Staggered reveal */}
              <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center gap-3 w-fit h-[48px] rounded-[100px] bg-[#E6F6EE] px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#d5f0e2] active:scale-95 group"
                >
                  <span 
                    className="text-sm font-medium leading-[140%] text-[#00A550]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    LEARN MORE
                  </span>
                  <img 
                    src={northEast} 
                    alt="" 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Image Container */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="relative max-w-lg mx-auto lg:mr-0 lg:ml-auto lg:translate-x-8 xl:translate-x-12 group">
              
              <div className="relative w-full aspect-[407.74/343.56] max-w-[407.74px]">
                {/* Background Pattern - subtle rotation on hover */}
                <div className="absolute inset-0 rounded-xl overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
                  <img 
                    src={imageCopy} 
                    alt="Background pattern" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                {/* Main Image (man-phone.png) - floats up on hover */}
                <div className="relative z-10 w-full h-full transition-transform duration-500 ease-out group-hover:-translate-y-6 group-hover:scale-105">
                  <img 
                    src={manPhone} 
                    alt="Man using phone" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider Line with scale-in animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 lg:mt-32">
        <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-all duration-1000 delay-700 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
      </div>
    </section>
  );
};

export default AboutUsSection;