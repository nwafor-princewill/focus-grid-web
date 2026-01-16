import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imageCopy from '../../assets/images/image copy.png';
import manPhone from '../../assets/images/man-phone.png';
import northEast from '../../assets/images/north-east.png';

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
      className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Custom Animations */}
      <style>
        {`
          @keyframes multiPing {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(2.5); opacity: 0; }
          }
          @keyframes floatSide {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1deg); }
          }
          @keyframes slowSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-28">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              
              {/* CRAZY About Us Badge */}
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link 
                  to="/about" 
                  className="relative inline-flex items-center justify-center group"
                >
                  {/* Multi-layered Crazy Ping Effect */}
                  <div className="absolute inset-0 rounded-[100px] border-2 border-[#00A550] opacity-0 group-hover:opacity-100" style={{ animation: 'multiPing 1.5s infinite' }}></div>
                  <div className="absolute inset-0 rounded-[100px] border border-[#00A550] animate-ping opacity-40"></div>
                  <div className="absolute inset-0 rounded-[100px] border border-[#00A550] animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className="relative z-10 h-[32px] px-6 py-2.5 border-2 border-[#00A550] rounded-[100px] bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#00A550] group-hover:scale-110">
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
                      className="text-base md:text-lg text-[#333333] font-medium italic leading-[140%]"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      "Every project we take on doubles as a classroom where real businesses grow and real people learn by doing."
                    </p>
                </div>
              </div>

              {/* LEARN MORE Button */}
              <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center gap-3 w-fit h-[54px] rounded-[100px] bg-[#E6F6EE] px-10 py-3 transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,165,80,0.15)] hover:bg-[#00A550] group"
                >
                  <span 
                    className="text-sm font-bold leading-[140%] text-[#00A550] group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    LEARN MORE
                  </span>
                  <div className="bg-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                    <img 
                        src={northEast} 
                        alt="" 
                        className="w-4 h-4" 
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Image Container */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="relative max-w-lg mx-auto lg:mr-0 lg:ml-auto group">
              
              {/* Background Pattern with Slow Spin */}
              <div className="absolute -inset-4 opacity-20 group-hover:opacity-40 transition-opacity duration-700" style={{ animation: 'slowSpin 20s linear infinite' }}>
                 <img src={imageCopy} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative w-full aspect-[407/343] max-w-[450px]">
                {/* Background Shadow Box */}
                <div className="absolute inset-0 bg-[#E6F6EE] rounded-[40px] rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-500"></div>

                {/* Main Image with Floating Animation */}
                <div 
                  className="relative z-10 w-full h-full"
                  style={{ animation: 'floatSide 6s ease-in-out infinite' }}
                >
                  <img 
                    src={manPhone} 
                    alt="Man using phone" 
                    className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-105"
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