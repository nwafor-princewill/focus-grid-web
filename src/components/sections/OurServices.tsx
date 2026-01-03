import React, { useState } from 'react';
import spannerScrew from '../../assets/images/spanner-screw.png';
import brush from '../../assets/images/brush.png';

const OurServices: React.FC = () => {
  const [activeCard, setActiveCard] = useState(1);

  const servicesData = [
    {
      id: 1,
      title: "Product & Software Development",
      description: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      icon: spannerScrew
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      icon: brush
    },
    {
      id: 3,
      title: "Training & Skill Acceleration",
      description: "We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.",
      icon: spannerScrew
    }
  ];

  return (
    <section className="w-full bg-white"> {/* Full width background */}
      <div className="max-w-[1440px] mx-auto h-[608.81px] pt-[80px] pr-[99px] pb-[80px] pl-[99px] mt-[180px]"> {/* Centered content container */}
        {/* Main container */}
        <div className="w-[1242px] h-[448.81px] flex flex-col gap-[70px]">
          {/* Header section */}
          <div className="w-[1242px] h-[112px] flex justify-between items-start">
            {/* Left side - Heading and description */}
            <div className="w-[597px] flex flex-col">
              <h2 
                className="w-[597px] h-[48px] text-[40px] font-semibold leading-[120%] text-[#333333] mb-4"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Our services
              </h2>
              
              <p 
                className="w-[597px] h-[44px] text-base font-light leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                We offer end-to-end digital solutions — from strategy and design to development and deployment.
              </p>
            </div>

            {/* Right side - Let's Build button */}
            <button 
              className="w-[130px] h-[42px] rounded-[10px] flex items-center justify-center text-white px-5 py-[10px] bg-[#009649]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Let's Build
            </button>
          </div>

          {/* Cards container */}
          <div className="w-[1242px] h-[266.81px] flex gap-[14px]">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveCard(service.id)}
                className={`w-[404px] h-[266.81px] rounded-[20px] p-5 flex flex-col gap-6 cursor-pointer transition-all ${
                  activeCard === service.id
                    ? 'bg-[#E6F6EE] border border-[#00A550]'  // Active card: green background with green border
                    : 'bg-white border border-[#333333]'      // Inactive card: white background with light green border
                }`}
              >
                {/* Icon Circle */}
                <div 
                  className={`w-[60px] h-[56.81px] rounded-full flex items-center justify-center ${
                    activeCard === service.id ? 'bg-[#33B773]' : 'bg-[#545454]'
                  }`}
                >
                  <img 
                    src={service.icon}
                    alt={service.title}
                    className="w-[25.53px] h-[25.53px] object-contain"
                  />
                </div>

                {/* Content */}
                <div className="w-[335px] h-[102px] flex flex-col gap-5">
                  <h3 
                    className="w-[335px] h-[28px] text-[20px] font-semibold leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="w-[335px] h-[54px] text-[12.88px] font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Build With us link */}
                <a 
                  href="#" 
                  className="w-[89px] h-[20px] text-[14px] font-medium leading-[140%] text-[#333333] underline"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  Build With us
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;