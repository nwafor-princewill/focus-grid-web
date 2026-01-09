import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import structureBackground from '../../assets/images/structure-background.jpg';
import development from '../../assets/images/development.png';
import internship from '../../assets/images/internship.png';
import network from '../../assets/images/network.png';
import northEast from '../../assets/images/north-east.png';

const Structure: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className={`absolute inset-0 -top-[21px] w-full h-full bg-cover bg-center transition-all duration-[1500ms] ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-110'}`}
        style={{ backgroundImage: `url(${structureBackground})` }}
      />

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
            <button className="h-[48px] bg-[#00A550] rounded-[100px] px-[30px] py-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,165,80,0.2)] active:scale-95 group">
              <span className="text-sm font-medium text-white" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                LET'S WORK TOGETHER
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:-translate-y-1">
                <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>

        {/* Cards Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {cardData.map((card, index) => (
            <div 
              key={index}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`bg-white border border-[#00A550]/20 rounded-[10px] p-[30px] flex flex-col gap-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} hover:border-[#00A550] hover:shadow-xl hover:-translate-y-2 group`}
            >
              <div className="w-[35px] h-[35px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
              </div>

              <h3 className="text-[20px] font-semibold text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                {card.title}
              </h3>

              <p className="text-[14px] font-light text-[#545454] leading-[140%] flex-grow" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                {card.desc}
              </p>

              <Link to={card.link} className="flex items-center gap-2 group/link w-fit">
                <span className="text-[14px] font-medium text-[#00A550] transition-colors group-hover/link:text-[#008f44]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
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