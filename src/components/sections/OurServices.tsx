import React, { useState } from 'react';
import spannerScrew from '../../assets/images/spanner-screw.png';
import brush from '../../assets/images/brush.png';

const OurServices: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const servicesData = [
    {
      id: 1,
      title: "Product & Software Development",
      description: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      icon: spannerScrew
    },
    {
      id: 2,
      title: "UI/uX Design",
      description: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      icon: brush
    },
    {
      id: 3,
      title: "Training & skill acceleration",
      description: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      icon: spannerScrew
    },
    {
      id: 4,
      title: "Branding & graphic Design",
      description: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      icon: brush
    }
  ];

  return (
    <div 
      className="bg-white rounded-[20px] p-5 flex flex-col animate-in fade-in zoom-in duration-300"
      style={{
        width: '678px',
        height: 'auto', // Adjusted for content flow
        gap: '35px',
        boxShadow: '0px 1px 3px 0px #0000004D, 0px 4px 8px 3px #00000026'
      }}
    >
      {/* Header section inside dropdown */}
      <div className="flex flex-col gap-1">
        <h2 
          className="text-[24px] font-semibold leading-[140%] text-[#333333]"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          Our services
        </h2>
        <p 
          className="text-[14px] font-light leading-[140%] text-[#333333] opacity-80"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          We offer end-to-end digital solutions — from strategy and design to development and deployment.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-[14px]">
        {servicesData.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`transition-all duration-300 cursor-default rounded-[14.85px] p-[14.85px] border-[0.74px] flex flex-col items-center text-center gap-3
              ${hoveredCard === service.id 
                ? 'bg-[#E6F6EE] border-[#00A550] shadow-sm scale-[1.02]' 
                : 'bg-white border-transparent hover:border-[#00A550]/20'
              }`}
            style={{
              width: '300px',
              height: '186.3px'
            }}
          >
            {/* Icon Circle */}
            <div 
              className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors duration-300 ${
                hoveredCard === service.id ? 'bg-[#00A550]' : 'bg-[#333333]'
              }`}
            >
              <img 
                src={service.icon} 
                alt="" 
                className="w-6 h-6 object-contain brightness-0 invert" 
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 
                className="text-[14px] font-semibold text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-[9.57px] font-light leading-[140%] text-[#333333]/70 px-2"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;