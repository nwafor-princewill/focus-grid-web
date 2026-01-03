import React from 'react';
import learning from '../../assets/images/learning.png';

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#F9F9F9]">
      {/* This empty div creates the 1580px spacing from the top */}
      <div className="h-[180px] w-full"></div>
      
      {/* Main content container */}
      <div className="w-full px-[102px]">
        <div className="w-full h-[634.85px] flex gap-[30px]">
          {/* Left Side - Image */}
          <img src={learning} 
          alt="learning" />
          <div className="w-[590px] h-[634.85px]">
            <div className="w-full h-full bg-gray-200 rounded-lg">
              {/* Image will go here */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-[616px] h-auto flex flex-col">
            {/* Heading */}
            <h2 
              className="w-[615px] h-12 text-[40px] font-semibold leading-[120%] text-[#333333] mb-5"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              How It All Works
            </h2>

            {/* Description */}
            <p 
              className="w-[615px] text-base font-light leading-[140%] text-[#1E1E1E] mb-[66px]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              We don't just offer opportunities — we offer a platform where your goals finally meet momentum.
            </p>

            {/* Steps Container */}
            <div className="w-[616px] flex flex-col mb-[66px]">
              {/* Step 01 */}
              <div className="w-[615px] mb-5">
                <div className="flex items-center gap-5 mb-5">
                  <span 
                    className="text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    01
                  </span>
                  <span 
                    className="text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    Tell Us What You Need
                  </span>
                </div>
                <div className="w-[615px] h-[0.84px] bg-[#D4D2E3]"></div>
              </div>

              {/* Step 02 */}
              <div className="w-[615px] mb-5">
                <div className="flex items-center gap-5 mb-5">
                  <span 
                    className="text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    02
                  </span>
                  <span 
                    className="text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    We Match You With the Right Team
                  </span>
                </div>
                <div className="w-[615px] h-[0.84px] bg-[#D4D2E3]"></div>
              </div>

              {/* Step 03 */}
              <div className="w-[615px] mb-5">
                <div className="flex items-center gap-5 mb-5">
                  <span 
                    className="text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    03
                  </span>
                  <span 
                    className="text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    We Execute — Fast & Collaboratively
                  </span>
                </div>
                <div className="w-[615px] h-[0.84px] bg-[#D4D2E3]"></div>
              </div>

              {/* Step 04 */}
              <div className="w-[615px] mb-5">
                <div className="flex items-center gap-5 mb-5">
                  <span 
                    className="text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    04
                  </span>
                  <span 
                    className="text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    Deliverables That Move You Forward
                  </span>
                </div>
                <div className="w-[615px] h-[0.84px] bg-[#D4D2E3]"></div>
              </div>
            </div>

            {/* Let's Build Button */}
            <button className="w-[615px] h-[62px] bg-[#009649] rounded-[20px] flex items-center justify-center">
              <span 
                className="text-base font-light leading-[140%] text-white"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Let's Build
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;