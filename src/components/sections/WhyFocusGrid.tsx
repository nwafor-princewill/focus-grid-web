import React from 'react';
import lightning from '../../assets/images/lightning.png';
import structure from '../../assets/images/structure.png';
import scalable from '../../assets/images/scalable.png';
import world from '../../assets/images/world.png';

const WhyFocusGrid: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Fast Execution",
      desc: "We turn your ideas into reality with speed and precision.",
      icon: lightning,
    },
    {
      id: 2,
      title: "Structured Workflow",
      desc: "Our process ensures clarity and efficiency at every stage.",
      icon: structure,
    },
    {
      id: 3,
      title: "Scalable Products",
      desc: "Built to grow alongside your business and user base.",
      icon: scalable,
    },
    {
      id: 4,
      title: "Real-world Standards",
      icon: world,
      desc: "Engineered to meet the highest industry benchmarks.",
    }
  ];

  return (
    <section className="w-full bg-[#E6F6EE] py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Rounded Container */}
        <div className="relative w-full max-w-[1320px] mx-auto bg-white rounded-[40px] px-6 md:px-10 py-16 md:py-24 flex flex-col items-center overflow-hidden shadow-sm">
          
          {/* BACKGROUND PATTERN: Subtle Grid Lines */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#00A550 0.8px, transparent 0.8px)`,
              backgroundSize: '24px 24px'
            }}
          ></div>

          {/* Header Section */}
          <div className="relative z-10 max-w-[650px] flex flex-col items-center gap-5 mb-16 animate-in fade-in slide-in-from-top-10 duration-1000">
            <h2 
              className="text-[32px] md:text-[45px] font-semibold leading-[110%] text-center text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Why Focus Grid works for you
            </h2>
            <p 
              className="text-[15px] md:text-base font-light leading-[140%] text-center text-[#545454] max-w-[550px]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Engineers, designers, and strategists united by one mission—innovation. 
              Together, we turn bold ideas into real solutions.
            </p>
          </div>

          {/* Redesigned Features Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className="group relative bg-white border border-gray-100 rounded-[24px] p-8 flex flex-col items-center text-center gap-6 transition-all duration-500 hover:border-[#00A550]/30 hover:shadow-2xl hover:shadow-[#00A550]/10 hover:-translate-y-2 animate-in fade-in zoom-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon Container with Glow */}
                <div className="relative w-[80px] h-[80px]">
                  <div className="absolute inset-0 bg-[#00A550] opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500" />
                  <div className="relative w-full h-full bg-[#333333] rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg]">
                    <img 
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[32px] h-[32px] object-contain"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <h3 
                    className="text-lg font-semibold text-[#333333] group-hover:text-[#00A550] transition-colors"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm font-light text-[#545454] leading-[150%]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {feature.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#00A550] transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFocusGrid;