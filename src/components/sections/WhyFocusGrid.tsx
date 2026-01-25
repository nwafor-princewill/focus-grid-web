import React from 'react';
// Asset Imports
import fastIcon from '../../assets/images/fast.png';
import workflowIcon from '../../assets/images/workflow.png';
import scaleIcon from '../../assets/images/scale.png';
import worldIcon from '../../assets/images/focus-world.png';
import sprinkle1 from '../../assets/images/sprinkle1.png';
import sprinkle5 from '../../assets/images/sprinkle5.png';

const WhyFocusGrid: React.FC = () => {
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
        .animate-feature-float {
          animation: feature-float 5s infinite ease-in-out;
        }
        .white-sprinkle {
          filter: brightness(0) invert(1);
          pointer-events: none;
        }
      `}</style>

      {/* MAIN CONTAINER */}
      <div 
        className="relative w-full max-w-[1240px] min-h-[530px] bg-[#E6F6EE] rounded-[40px] 
                   pt-[60px] pr-[40px] pb-[80px] pl-[40px] flex flex-col items-center gap-[60px] 
                   shadow-sm transition-all duration-700 overflow-hidden"
      >
        
        {/* --- TOP SPRINKLES --- */}
        <img 
          src={sprinkle5} 
          alt="" 
          className="absolute top-8 left-10 w-20 h-20 opacity-60 white-sprinkle"
        />
        <img 
          src={sprinkle1} 
          alt="" 
          className="absolute top-10 right-10 w-20 h-20 opacity-50 white-sprinkle" 
        />

        {/* --- BOTTOM CORNER SPRINKLES --- */}
        <img 
          src={sprinkle1} 
          alt="" 
          className="absolute bottom-6 left-6 w-24 h-24 opacity-70 white-sprinkle" 
        />
        <img 
          src={sprinkle5} 
          alt="" 
          className="absolute bottom-[-20px] right-4 w-32 h-32 opacity-80 white-sprinkle" 
        />

        {/* Header Section */}
        <div className="text-center z-10">
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
              className="flex flex-col items-center gap-2 group transition-all duration-500 hover:-translate-y-1"
              style={{ width: '150px' }}
            >
              <div 
                className="relative w-[150px] h-[150px] flex items-center justify-center animate-feature-float"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-[#00A550] opacity-0 group-hover:opacity-5 blur-[20px] rounded-full transition-all duration-700" />
                <img 
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
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