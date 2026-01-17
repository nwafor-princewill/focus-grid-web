import React, { useEffect, useState, useRef } from 'react';
// Asset Imports
import fastIcon from '../../assets/images/fast.png';
import workflowIcon from '../../assets/images/workflow.png';
import scaleIcon from '../../assets/images/scale.png';
import worldIcon from '../../assets/images/focus-world.png';
import sprinkle1 from '../../assets/images/sprinkle1.png';
import sprinkle5 from '../../assets/images/sprinkle5.png';

const WhyFocusGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { id: 1, title: "Fast\nExecution", icon: fastIcon },
    { id: 2, title: "Structured\nWorkflow", icon: workflowIcon },
    { id: 3, title: "Scalable\nProducts", icon: scaleIcon },
    { id: 4, title: "Real-world\nStandards", icon: worldIcon },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 overflow-hidden flex justify-center">
      <style>{`
        @keyframes feature-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -15px) rotate(8deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-feature-float {
          animation: feature-float 5s infinite ease-in-out;
        }
        .animate-drift {
          animation: drift 7s infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .white-sprinkle {
          filter: brightness(0) invert(1); /* Forces the image to be pure white */
          pointer-events: none;
        }
      `}</style>

      {/* MAIN CONTAINER */}
      <div 
        ref={sectionRef}
        className="relative w-full max-w-[1240px] min-h-[530px] bg-[#E6F6EE] rounded-[40px] 
                   pt-[60px] pr-[40px] pb-[80px] pl-[40px] flex flex-col items-center gap-[60px] 
                   shadow-sm transition-all duration-700 overflow-hidden"
      >
        
        {/* --- TOP SPRINKLES --- */}
        <img 
          src={sprinkle5} 
          alt="" 
          className={`absolute top-8 left-10 w-20 h-20 opacity-60 white-sprinkle transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-60' : '-translate-y-10 opacity-0'} animate-drift`}
        />
        <img 
          src={sprinkle1} 
          alt="" 
          className="absolute top-10 right-10 w-14 h-14 opacity-50 white-sprinkle animate-spin-slow" 
        />

        {/* --- BOTTOM CORNER SPRINKLES (Enhanced Visibility) --- */}
        <img 
          src={sprinkle1} 
          alt="" 
          className="absolute bottom-6 left-6 w-16 h-16 opacity-70 white-sprinkle animate-drift" 
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src={sprinkle5} 
          alt="" 
          className="absolute bottom-[-20px] right-4 w-32 h-32 opacity-80 white-sprinkle animate-feature-float" 
        />

        {/* Header Section */}
        <div className="text-center z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h2 
            className="text-[36px] md:text-[45px] font-semibold leading-[120%] text-[#333333] mb-4 relative inline-block"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Why <span className="relative">Focus Grid
              <svg className="absolute -bottom-2 left-0 w-full h-[8px]" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="#00A550" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> works for you
          </h2>
          <p 
            className="text-[15px] md:text-[16px] font-light leading-[140%] text-[#545454] max-w-[550px] mx-auto mt-4"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Engineers, designers, and strategists united by one mission—innovation. 
            Together, we turn bold ideas into real solutions.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full justify-items-center z-10">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="flex flex-col items-center gap-2 group transition-all duration-500 hover:-translate-y-2"
              style={{ width: '150px' }}
            >
              <div 
                className="relative w-[150px] h-[150px] flex items-center justify-center animate-feature-float"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-[#00A550] opacity-0 group-hover:opacity-10 blur-[30px] rounded-full transition-all duration-700" />
                <img 
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-[150px] flex items-center justify-center">
                <h3 
                  className="text-[20px] font-medium leading-[140%] text-center text-[#545454] group-hover:text-[#333333] transition-colors whitespace-pre-line"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFocusGrid;