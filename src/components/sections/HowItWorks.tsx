import React, { useEffect, useRef, useState } from 'react';
import learning from '../../assets/images/learning.png';
import northEast from '../../assets/images/north-east.png';
import arrow9 from '../../assets/images/arrow9.png'; 
import line9 from '../../assets/images/line9.png';   
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const steps = [
    { id: '01', text: 'Tell Us What You Need' },
    { id: '02', text: 'We Match You With the Right Team' },
    { id: '03', text: 'We Execute — Fast & Collaboratively' },
    { id: '04', text: 'Results That Move You Forward' },
  ];

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-[1440px] mx-auto bg-[#F9F9F9] overflow-hidden"
    >
      <style>
        {`
          @keyframes floatArrow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-2deg); }
          }
          /* High-energy Liquid Wave Animation */
          @keyframes liquidWave {
            0% { transform: translateX(-50%) scale(1) skewX(0deg); filter: hue-rotate(0deg); }
            25% { transform: translateX(-48%) scale(1.05) skewX(2deg); }
            50% { transform: translateX(-50%) scale(0.98) skewX(-2deg); filter: hue-rotate(15deg); }
            75% { transform: translateX(-52%) scale(1.05) skewX(1deg); }
            100% { transform: translateX(-50%) scale(1) skewX(0deg); filter: hue-rotate(0deg); }
          }
        `}
      </style>

      {/* Spacing from top */}
      <div className="h-[80px] md:h-[120px] lg:h-[180px] w-full"></div>
      
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-[102px] relative">
        
        {/* ARROW9 */}
        <div 
          className="absolute hidden xl:block z-20 transition-all duration-1000 ease-out"
          style={{ 
            top: '40px', 
            left: '480px',
            animation: 'floatArrow 4s ease-in-out infinite',
            opacity: isVisible ? 1 : 0,
            transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`
          }}
        >
          <img 
            src={arrow9} 
            alt="" 
            className="w-[180px] h-auto object-contain"
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[60px] pb-16 md:pb-20 lg:pb-32 relative">
          
          {/* Left Side - Image */}
          <div className={`w-full lg:w-[590px] aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[634.85px] flex-shrink-0 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full h-full group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={learning} 
                alt="learning" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[616px] flex flex-col z-10">
            <h2 
              className={`text-[28px] md:text-[36px] lg:text-[45px] font-semibold leading-[120%] text-[#333333] mb-4 md:mb-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              How It All Works
            </h2>

            <p 
              className={`text-sm md:text-lg font-light leading-[140%] text-[#1E1E1E] mb-8 md:mb-12 lg:mb-[50px] transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              We don't just offer digital products and opportunities — we offer a platform where your goals finally meet momentum.
            </p>

            {/* Steps Container */}
            <div className="w-full flex flex-col mb-8 md:mb-12 lg:mb-[50px]">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`w-full mb-6 md:mb-8 group transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${700 + index * 200}ms` }}
                >
                  <div className="flex items-center gap-6 md:gap-8 mb-4 transition-transform duration-300 group-hover:translate-x-4">
                    <span 
                      className="text-[24px] md:text-[28px] lg:text-[36px] font-bold text-[#333333] group-hover:text-[#00A550] transition-colors"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {step.id}
                    </span>
                    <span 
                      className="text-base md:text-xl font-medium text-[#333333] group-hover:text-[#00A550] transition-colors"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {step.text}
                    </span>
                  </div>
                  <div className="relative w-full h-[1px] bg-[#D4D2E3]">
                    <div className="absolute top-0 left-0 h-full bg-[#00A550] transition-all duration-500 w-0 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>

            {/* LEARN MORE BUTTON */}
            <div className={`relative transition-all duration-700 delay-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Link to="/about" className="block w-full">
                <button className="w-full h-[56px] md:h-[62px] bg-[#E6F6EE] hover:bg-[#00A550] rounded-[20px] flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.01] hover:shadow-xl group">
                  <span className="text-sm md:text-base font-bold text-[#00A550] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    LEARN MORE
                  </span>
                  <img 
                    src={northEast} 
                    alt="Arrow" 
                    className="w-4 h-4 group-hover:invert group-hover:brightness-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  />
                </button>
              </Link>

              {/* LINE9 - CENTERED AND LIVELY */}
              <div 
                className="absolute left-1/2 top-[80px] pointer-events-none"
                style={{ 
                  width: '350px', 
                  opacity: isVisible ? 0.8 : 0,
                  animation: 'liquidWave 6s ease-in-out infinite',
                  /* Centers the item regardless of animation drift */
                  transformOrigin: 'center'
                }}
              >
                <img 
                  src={line9} 
                  alt="" 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;