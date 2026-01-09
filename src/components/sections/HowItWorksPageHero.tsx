import React, { useEffect, useState, useRef } from 'react';
import strategyImg from '../../assets/images/strategy.png';
import { Link } from 'react-router-dom';

const HowItWorksPageHero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Logic for the "Connect the Dots" scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      id: "01",
      title: "Tell Us What You Need",
      desc: "Share your idea, goals, or project requirements so we understand your vision clearly."
    },
    {
      id: "02",
      title: "We match you to the right team",
      desc: "Based on your needs, we assemble a skilled team to plan and kick-start the work."
    },
    {
      id: "03",
      title: "We Execute — Fast & Collaboratively",
      desc: "Our experts design, build, and iterate with you involved at every step."
    },
    {
      id: "04",
      title: "Deliverables That Move You Forward",
      desc: "You receive a polished digital product or outcome ready for launch and growth."
    }
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-[700px] animate-in fade-in slide-in-from-left-10 duration-1000">
            <h1 
              className="text-[36px] md:text-[40px] font-semibold leading-[120%] text-[#333333] mb-5"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              How It All Works
            </h1>
            <p 
              className="text-[16px] md:text-[18px] font-light leading-[140%] text-[#333333] opacity-80"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Whether you're here to turn an idea into a digital product or to grow as a tech professional, 
              our process is built to guide you from where you are to where you want to be.
            </p>
          </div>
        <Link to="/contact">
          <button className="w-fit h-[48px] bg-[#00A550] rounded-[20px] px-8 flex items-center justify-center gap-[10px] transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-lg group animate-in fade-in slide-in-from-right-10 duration-1000">
            <span className="text-white text-sm font-medium leading-[140%] uppercase tracking-wider" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              LET'S BUILD
            </span>
            <svg width="14" height="14" viewBox="0 0 10 10" fill="none" className="transform rotate-[-45deg] transition-transform group-hover:translate-x-1">
              <path d="M5 0L4.29289 0.707107L7.58579 4H0V5H7.58579L4.29289 8.29289L5 9L10 4L5 0Z" fill="white"/>
            </svg>
          </button>
        </Link>
        </div>

        {/* Main Content Grid with Border: 1px solid #00A550 */}
        <div 
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start border border-[#00A550] rounded-[40px] p-6 md:p-12 bg-white shadow-sm transition-all duration-700 hover:shadow-md"
        >
          
          {/* Left Side - Steps List */}
          <div className="w-full lg:flex-1 flex flex-col gap-10 relative">
            
            {/* Background Static Line (Grey) */}
            <div className="absolute left-[25px] md:left-[35px] top-6 bottom-6 w-[2px] bg-gray-100 hidden md:block" />
            
            {/* Animated Scroll Line (Green) */}
            <div 
              className="absolute left-[25px] md:left-[35px] top-6 w-[2px] bg-[#00A550] hidden md:block transition-all duration-200 ease-out"
              style={{ height: `${scrollProgress * 90}%` }}
            />

            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="flex flex-col gap-6 relative z-10 animate-in fade-in slide-in-from-bottom-10"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  {/* Number Box with Border: 1px solid #00A550 */}
                  <div className="flex-shrink-0 w-[50px] md:w-[70px] h-[52px] md:h-[70px] border border-[#00A550] rounded-[8px] flex items-center justify-center bg-white z-20 transition-transform duration-300 hover:scale-110">
                    <span 
                      className="text-[24px] md:text-[32px] font-semibold leading-none text-[#333333]"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-2 md:pt-4">
                    <h3 className="text-[18px] md:text-[22px] font-medium leading-[140%] text-[#333333] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p 
                      className="text-[15px] md:text-[16px] font-light leading-[140%] text-[#545454] max-w-[600px]"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                {index !== steps.length - 1 && (
                  <div className="ml-[74px] md:ml-[110px] h-[1px] bg-[#D4D2E3] opacity-40 w-full" />
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Strategy Image */}
          <div className="w-full lg:w-[400px] flex justify-center lg:justify-end lg:sticky lg:top-40 animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00A550] opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition-opacity" />
              <img 
                src={strategyImg} 
                alt="Strategy" 
                className="relative z-10 w-full max-w-[320px] lg:max-w-none h-auto object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksPageHero;