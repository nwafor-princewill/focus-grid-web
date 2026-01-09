import React from 'react';
import trainImg from '../../assets/images/train.png';
import buildImg from '../../assets/images/build.png';
import deployImg from '../../assets/images/deploy.png';

const WhatWeDo: React.FC = () => {
  const steps = [
    {
      tag: "Train",
      img: trainImg,
      title: "We Train.",
      desc: "We groom tech talents through their tech journey gaining more experience and acquiring problem solving acquisition.",
      delay: "delay-100"
    },
    {
      tag: "Build",
      img: buildImg,
      title: "We Build.",
      desc: "We create a team where creativity and ideation are put into real life action, creating and bringing innovative ideas to life.",
      delay: "delay-300"
    },
    {
      tag: "Deploy",
      img: deployImg,
      title: "We Deploy.",
      desc: "We deploy ready tech talent to various industries of teams in need of tech talents to further career opportunities in the society.",
      delay: "delay-500"
    }
  ];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col items-center">
        
        {/* Header Content */}
        <div className="max-w-[727px] text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 
            className="text-[40px] font-semibold leading-[120%] text-[#333333] mb-6"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            What We Do
          </h2>
          <p 
            className="text-[16px] font-light leading-[140%] text-[#545454]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            We train tech talents giving them real life experience in building software products 
            and acquiring numerous other skills to further the tech career.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 w-full">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center animate-in fade-in zoom-in duration-1000 ${step.delay}`}
            >
              {/* Circle Container */}
              <div className="relative w-[291px] h-[291px] rounded-full border-[4px] border-black flex items-center justify-center mb-8 group">
                
                {/* The Green Tag on Border */}
                <div 
                  className="absolute z-20 bg-[#33B773] rounded-[22.94px] px-4 py-1.5 flex items-center justify-center shadow-md"
                  style={{ 
                    top: '15px', 
                    right: '15px',
                    fontFamily: 'Funnel Display, sans-serif'
                  }}
                >
                  <span className="text-white text-[16px] font-semibold leading-[140%]">
                    {step.tag}
                  </span>
                </div>

                {/* Main Image inside Circle */}
                <img 
                  src={step.img} 
                  alt={step.tag} 
                  className="w-[180px] h-[180px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <h3 
                className="text-[32px] font-semibold leading-[140%] text-[#333333] mb-4"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                {step.title}
              </h3>
              <p 
                className="text-[16px] font-light leading-[140%] text-[#545454] max-w-[332px]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;