import React from 'react';

const OurServices: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white h-[608.8084716796875px] pt-[80px] pr-[99px] pb-[80px] pl-[99px] mt-[180px]">
      {/* Main container */}
      <div className="w-[1242px] h-[448.8085021972656px] flex flex-col gap-[70px]">
        {/* Header section */}
        <div className="w-[1242px] h-[112px] flex justify-between items-start">
          {/* Left side - Heading and description */}
          <div className="w-[597px] flex flex-col">
            <h2 className="w-[597px] h-[48px] text-[40px] font-semibold leading-[120%] text-[#333333] mb-4 font-['Funnel_Display']">
              Our services
            </h2>
            
            <p className="w-[597px] h-[44px] text-base font-light leading-[140%] text-[#333333] font-['Funnel_Display']">
              We offer end-to-end digital solutions — from strategy and design to development and deployment.
            </p>
          </div>

          {/* Right side - Let's Build button */}
          <button className="w-[130px] h-[42px] rounded-[10px] flex items-center justify-center text-white p-[10px_20px] bg-[#009649] font-['Funnel_Display']">
            Let's Build
          </button>
        </div>

        {/* Cards container */}
        <div className="w-[1242px] h-[266.8085021972656px] flex gap-[14px]">
          {/* Card 1: Product & Software Development */}
          <div className="w-[404px] h-[266.8085021972656px] rounded-[20px] p-5 flex flex-col gap-6 bg-[#E6F6EE] border border-[#00A550]">
            {/* Icon */}
            <div className="w-[60px] h-[56.808509826660156px] flex items-center justify-center p-[15.32px_17.23px]">
              <div className="w-6 h-6 bg-gray-300 rounded"></div> {/* Placeholder for icon */}
            </div>

            {/* Content */}
            <div className="w-[335px] h-[102px] flex flex-col gap-5">
              <h3 className="w-[335px] h-[28px] text-[20px] font-semibold leading-[140%] text-[#333333] font-['Funnel_Display']">
                Product & Software Development
              </h3>
              
              <p className="w-[335px] h-[54px] text-[12.88px] font-light leading-[140%] text-[#333333] font-['Funnel_Display']">
                We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.
              </p>
            </div>

            {/* Build With us link */}
            <a href="#" className="w-[89px] h-[20px] text-[14px] font-medium leading-[140%] text-[#333333] underline font-['Funnel_Display']">
              Build With us
            </a>
          </div>

          {/* Card 2: UI/UX Design */}
          <div className="w-[404px] h-[266.8085021972656px] rounded-[20px] p-5 flex flex-col gap-6 bg-[#E6F6EE] border border-[#00A550]">
            {/* Icon */}
            <div className="w-[60px] h-[56.808509826660156px] flex items-center justify-center p-[15.32px_17.23px]">
              <div className="w-6 h-6 bg-gray-300 rounded"></div> {/* Placeholder for icon */}
            </div>

            {/* Content */}
            <div className="w-[335px] h-[102px] flex flex-col gap-5">
              <h3 className="w-[335px] h-[28px] text-[20px] font-semibold leading-[140%] text-[#333333] font-['Funnel_Display']">
                UI/UX Design
              </h3>
              
              <p className="w-[335px] h-[54px] text-[12.88px] font-light leading-[140%] text-[#333333] font-['Funnel_Display']">
                We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.
              </p>
            </div>

            {/* Build With us link */}
            <a href="#" className="w-[89px] h-[20px] text-[14px] font-medium leading-[140%] text-[#333333] underline font-['Funnel_Display']">
              Build With us
            </a>
          </div>

          {/* Card 3: Training & Skill Acceleration */}
          <div className="w-[404px] h-[266.8085021972656px] rounded-[20px] p-5 flex flex-col gap-6 bg-[#E6F6EE] border border-[#00A550]">
            {/* Icon */}
            <div className="w-[60px] h-[56.808509826660156px] flex items-center justify-center p-[15.32px_17.23px]">
              <div className="w-6 h-6 bg-gray-300 rounded"></div> {/* Placeholder for icon */}
            </div>

            {/* Content */}
            <div className="w-[335px] h-[102px] flex flex-col gap-5">
              <h3 className="w-[335px] h-[28px] text-[20px] font-semibold leading-[140%] text-[#333333] font-['Funnel_Display']">
                Training & Skill Acceleration
              </h3>
              
              <p className="w-[335px] h-[54px] text-[12.88px] font-light leading-[140%] text-[#333333] font-['Funnel_Display']">
                We take your idea from rough concept to a fully launched digital product. Our team handles strategy, design, development, and deployment.
              </p>
            </div>

            {/* Build With us link */}
            <a href="#" className="w-[89px] h-[20px] text-[14px] font-medium leading-[140%] text-[#333333] underline font-['Funnel_Display']">
              Build With us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;