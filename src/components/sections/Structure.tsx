import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import structureBackground from '../../assets/images/structure-background.jpg';
import development from '../../assets/images/development.png';
import internship from '../../assets/images/internship.png';
import network from '../../assets/images/network.png';
import northEast from '../../assets/images/north-east.png';
import sprinkle5 from '../../assets/images/sprinkle5.png';
import threeStar from '../../assets/images/three-star.png';

const Structure: React.FC = () => {
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

  // Parallax Mouse Tracker
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    
    // Normalize coordinates to -1 to 1
    const x = (clientX - left) / width * 2 - 1;
    const y = (clientY - top) / height * 2 - 1;
    setMousePos({ x, y });
  };

  const cardData = [
    {
      title: "Product Development",
      icon: development,
      desc: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      link: "/build",
      cta: "Build With Us"
    },
    {
      title: "Internships",
      icon: internship,
      desc: "Join our community of critical thinkers and problem solvers. Build, learn and earn while taking your skills to the next level.",
      link: "/internships",
      cta: "Grow With Us"
    },
    {
      title: "Talent Network",
      icon: network,
      desc: "Leverage on our vast pool of talents and problem-solvers. Skilled and ready to build digital products to solve real-world problems.",
      link: "/talent-network",
      cta: "Connect With Us"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <style>
        {`
          @keyframes bgMove {
            0% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.05) translate(-0.5%, -0.5%); }
            100% { transform: scale(1) translate(0, 0); }
          }
          @keyframes baseFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.5; filter: brightness(1); }
            50% { opacity: 1; filter: brightness(1.3); }
          }
        `}
      </style>

      {/* Background Motion */}
      <div 
        className="absolute inset-0 -top-[21px] w-full h-[120%] bg-cover bg-center transition-opacity duration-[1500ms]"
        style={{ 
          backgroundImage: `url(${structureBackground})`,
          opacity: isVisible ? 0.3 : 0,
          animation: 'bgMove 15s ease-in-out infinite',
          // Subtle background parallax
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`
        }}
      />

      {/* Left Sprinkle - Moves opposite to mouse */}
      <div 
        className="absolute left-6 bottom-12 w-12 md:w-20 lg:w-24 opacity-70 pointer-events-none transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
          zIndex: 5
        }}
      >
        <div style={{ animation: 'baseFloat 5s ease-in-out infinite' }}>
          <img src={sprinkle5} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Right Star - Reduced Size & Follows mouse */}
      <div 
        className="absolute right-10 bottom-24 w-8 md:w-12 lg:w-16 opacity-80 pointer-events-none transition-transform duration-500 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px) rotate(${mousePos.x * 20}deg)`,
          zIndex: 5
        }}
      >
        <div style={{ animation: 'starTwinkle 3s ease-in-out infinite' }}>
          <img src={threeStar} alt="" className="w-full h-auto" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-12 lg:mb-[52px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-[597px]">
            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-[120%] text-[#333333] mb-6" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              Our Structure
            </h2>
            <p className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              Our structure is the core bases of what focus Grid is built on and how we operate to serve various users, audience and talents that interacts with our brand.
            </p>
          </div>

          <Link to="/contact">
            <button className="h-[48px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,165,80,0.4)] active:scale-95 group">
              <span className="text-sm font-medium text-white uppercase" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                LET'S WORK TOGETHER
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:-translate-y-1">
                <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {cardData.map((card, index) => (
            <div 
              key={index}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`bg-white/80 backdrop-blur-md border border-[#00A550]/20 rounded-[12px] p-[30px] flex flex-col gap-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} hover:border-[#00A550] hover:shadow-2xl hover:-translate-y-4 group cursor-default`}
            >
              <div className="w-[40px] h-[40px] bg-[#E6F6EE] rounded-lg p-2 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg] group-hover:bg-[#00A550]">
                <img src={card.icon} alt={card.title} className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
              </div>

              <h3 className="text-[22px] font-semibold text-[#333333] group-hover:text-[#00A550] transition-colors" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                {card.title}
              </h3>

              <p className="text-[14px] font-light text-[#545454] leading-[150%] flex-grow" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                {card.desc}
              </p>

              <Link to={card.link} className="flex items-center gap-2 group/link w-fit group-hover:translate-x-1 transition-transform">
                <span className="text-[14px] font-bold text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  {card.cta}
                </span>
                <img src={northEast} alt="" className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;