import React from 'react';

const HowItWorksPageHero: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] h-[925px] mx-auto bg-[#F9F9F9]">
      {/* Heading and Description */}
      <div className="absolute top-[225px] left-[119px] w-[844.1px] h-[114px] flex flex-col gap-5">
        <h1 
          className="w-[312px] h-[48px] text-[40px] font-semibold leading-[120%] text-center text-[#333333]"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          How It All Works
        </h1>
        <p 
          className="w-[844.1px] h-[46px] text-[16.17px] font-light leading-[140%] text-[#333333]"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          Whether you're here to turn an idea into a digital product or to grow as a tech professional, our process is built to guide you from where you are to where you want to be.
        </p>
      </div>

      {/* Let's Build Button */}
      <button className="absolute top-[265px] left-[1157px] w-[179px] h-[48px] bg-[#00A550] rounded-[20px] px-[10px] py-[10px] flex items-center justify-center gap-[10px]">
        <span 
          className="w-[83px] h-5 text-white text-sm font-medium leading-[140%]"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          LET'S BUILD
        </span>
        <svg 
          width="10" 
          height="10" 
          viewBox="0 0 10 10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[10px] h-[10px] transform rotate-[-45deg]"
        >
          <path d="M5 0L4.29289 0.707107L7.58579 4H0V5H7.58579L4.29289 8.29289L5 9L10 4L5 0Z" fill="white"/>
        </svg>
      </button>

      {/* Main Content Section */}
      <div className="absolute top-[393px] left-[103px] w-[1232.63px] h-[442px] flex gap-[115px]">
        {/* Left Side - Cards */}
        <div className="w-[785px] h-[442px] rounded-[40px] p-10 flex flex-col gap-5">
          {/* Card 1 */}
          <div className="w-[705px] h-[92px] flex items-start gap-10">
            <div className="w-[50px] h-[51.5px] border border-black rounded p-[6.25px] flex items-center justify-center">
              <span 
                className="text-[32.25px] font-semibold leading-[120%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                01
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-medium leading-[140%] text-[#333333] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tell Us What You Need
              </h3>
              <p 
                className="w-[610px] h-[44px] text-base font-light leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Share your idea, goals, or project requirements so we understand your vision clearly.
              </p>
            </div>
          </div>
          {/* Underline for Card 1 */}
          <div 
            className="w-[615px] h-[0px] border-t-[0.84px] border-[#D4D2E3] opacity-100"
            style={{ marginLeft: '65px' }}
          />

          {/* Card 2 */}
          <div className="w-[705px] h-[70px] flex items-start gap-10">
            <div className="w-[50px] h-[51.5px] border border-black rounded p-[6.25px] flex items-center justify-center">
              <span 
                className="text-[32.25px] font-semibold leading-[120%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                02
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-medium leading-[140%] text-[#333333] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                We match you to the right team
              </h3>
              <p 
                className="w-[610px] h-[22px] text-base font-light leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Based on your needs, we assemble a skilled team to plan and kick-start the work.
              </p>
            </div>
          </div>
          {/* Underline for Card 2 */}
          <div 
            className="w-[615px] h-[0px] border-t-[0.84px] border-[#D4D2E3] opacity-100"
            style={{ marginLeft: '65px' }}
          />

          {/* Card 3 */}
          <div className="w-[705px] h-[70px] flex items-start gap-10">
            <div className="w-[50px] h-[51.5px] border border-black rounded p-[6.25px] flex items-center justify-center">
              <span 
                className="text-[32.25px] font-semibold leading-[120%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                03
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-medium leading-[140%] text-[#333333] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                We Execute — Fast & Collaboratively
              </h3>
              <p 
                className="w-[610px] h-[22px] text-base font-light leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Our experts design, build, and iterate with you involved at every step.
              </p>
            </div>
          </div>
          {/* Underline for Card 3 */}
          <div 
            className="w-[615px] h-[0px] border-t-[0.84px] border-[#D4D2E3] opacity-100"
            style={{ marginLeft: '65px' }}
          />

          {/* Card 4 */}
          <div className="w-[705px] h-[70px] flex items-start gap-10">
            <div className="w-[50px] h-[51.5px] border border-black rounded p-[6.25px] flex items-center justify-center">
              <span 
                className="text-[32.25px] font-semibold leading-[120%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                04
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-medium leading-[140%] text-[#333333] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Deliverables That Move You Forward
              </h3>
              <p 
                className="w-[610px] h-[22px] text-base font-light leading-[140%] text-[#333333]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                You receive a polished digital product or outcome ready for launch and growth.
              </p>
            </div>
          </div>
          {/* Underline for Card 4 */}
          <div 
            className="w-[615px] h-[0px] border-t-[0.84px] border-[#D4D2E3] opacity-100"
            style={{ marginLeft: '65px' }}
          />
        </div>

        {/* Right Side - Strategy Image - Positioned to align with first card */}
        <div className="w-[399.63px] h-[334.95px] mt-[46px]">
          <img 
            src={require('../../assets/images/strategy.png')}
            alt="Strategy"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPageHero;