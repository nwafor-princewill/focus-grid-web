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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = (clientX - left) / width * 2 - 1;
    const y = (clientY - top) / height * 2 - 1;
    setMousePos({ x, y });
  };

  const cardData = [
    {
      title: "Product Development",
      icon: development,
      desc: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      link: "/contact",
      cta: "Build With Us",
      isExternal: false
    },
    {
      title: "Internships",
      icon: internship,
      desc: "Join our community of critical thinkers and problem solvers. Build, learn and earn while taking your skills to the next level.",
      link: "/apply",
      cta: "Grow With Us",
      isExternal: false
    },
    {
      title: "Talent Network",
      icon: network,
      desc: "Leverage on our vast pool of talents and problem-solvers. Skilled and ready to build digital products to solve real-world problems.",
      link: "https://discord.com/invite/Ymnc8gRaWj",
      cta: "Connect With Us",
      isExternal: true
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-white"
    >
      <style>
        {`
          @keyframes bgMove {
            0% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.05) translate(-0.5%, -0.5%); }
            100% { transform: scale(1) translate(0, 0); }
          }
        `}
      </style>

      {/* Background Image Parallax */}
      <div 
        className="absolute inset-0 -top-[21px] w-full h-[120%] bg-cover bg-center transition-opacity duration-[1500ms]"
        style={{ 
          backgroundImage: `url(${structureBackground})`,
          opacity: isVisible ? 0.3 : 0,
          animation: 'bgMove 15s ease-in-out infinite',
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`
        }}
      />

      {/* Left Sprinkle */}
      <div className="absolute left-[10%] bottom-8 w-12 md:w-20 lg:w-24 opacity-60 pointer-events-none z-0">
        <img src={sprinkle5} alt="" className="w-full h-auto" />
      </div>

      {/* Right Star */}
      <div className="absolute right-10 bottom-24 w-8 md:w-12 lg:w-16 opacity-80 pointer-events-none z-5">
        <img src={threeStar} alt="" className="w-full h-auto" />
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
            <button className="h-[48px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-[1.02] active:scale-95 group">
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
              className={`bg-white/90 backdrop-blur-sm border border-[#00A550] rounded-[12px] p-[30px] flex flex-col gap-6 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group cursor-default`}
            >
              {/* Icon Container */}
              <div className="w-[40px] h-[40px] bg-[#E6F6EE] rounded-lg p-2 transition-colors duration-300 group-hover:bg-[#00A550]">
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="w-full h-full object-contain" 
                />
              </div>

              <h3 className="text-[22px] font-semibold text-[#333333] group-hover:text-[#00A550] transition-colors duration-300" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                {card.title}
              </h3>

              <p className="text-[14px] font-light text-[#545454] leading-[150%] flex-grow" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                {card.desc}
              </p>

              {/* Conditional Rendering for Internal vs External Links */}
              {card.isExternal ? (
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 group/link w-fit"
                >
                  <span className="text-[14px] font-bold text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    {card.cta}
                  </span>
                  <img src={northEast} alt="" className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              ) : (
                <Link to={card.link} className="flex items-center gap-2 group/link w-fit">
                  <span className="text-[14px] font-bold text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    {card.cta}
                  </span>
                  <img src={northEast} alt="" className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;