import React from 'react';
import learning from '../../assets/images/learning.png';
import northEast from '../../assets/images/north-east.png';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#F9F9F9]">
      {/* Responsive spacing from the top */}
      <div className="h-[80px] md:h-[120px] lg:h-[180px] w-full"></div>
      
      {/* Main content container with responsive padding */}
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-[102px]">
        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[30px] pb-16 md:pb-20 lg:pb-24">
          
          {/* Left Side - Image Fix */}
          <div className="w-full lg:w-[590px] aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[634.85px] flex-shrink-0">
            <img 
              src={learning} 
              alt="learning" 
              className="w-full h-full object-cover object-top rounded-lg" 
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[616px] flex flex-col">
            {/* Heading */}
            <h2 
              className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[120%] text-[#333333] mb-4 md:mb-5"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              How It All Works
            </h2>

            {/* Description */}
            <p 
              className="text-sm md:text-base font-light leading-[140%] text-[#1E1E1E] mb-8 md:mb-12 lg:mb-[66px]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              We don't just offer digital products and opportunities — we offer a platform where your goals finally meet momentum.
            </p>

            {/* Steps Container */}
            <div className="w-full flex flex-col mb-8 md:mb-12 lg:mb-[66px]">
              {/* Step 01 */}
              <div className="w-full mb-4 md:mb-5">
                <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-5">
                  <span 
                    className="text-[24px] md:text-[28px] lg:text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    01
                  </span>
                  <span 
                    className="text-sm md:text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    Tell Us What You Need
                  </span>
                </div>
                <div className="w-full h-[0.84px] bg-[#D4D2E3]"></div>
              </div>

              {/* Step 02 */}
              <div className="w-full mb-4 md:mb-5">
                <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-5">
                  <span 
                    className="text-[24px] md:text-[28px] lg:text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    02
                  </span>
                  <span 
                    className="text-sm md:text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    We Match You With the Right Team
                  </span>
                </div>
                <div className="w-full h-[0.84px] bg-[#D4D2E3]"></div>
              </div>

              {/* Step 03 */}
              <div className="w-full mb-4 md:mb-5">
                <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-5">
                  <span 
                    className="text-[24px] md:text-[28px] lg:text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    03
                  </span>
                  <span 
                    className="text-sm md:text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    We Execute — Fast & Collaboratively
                  </span>
                </div>
                <div className="w-full h-[0.84px] bg-[#D4D2E3]"></div>
              </div>

              {/* Step 04 */}
              <div className="w-full mb-4 md:mb-5">
                <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-5">
                  <span 
                    className="text-[24px] md:text-[28px] lg:text-[33.54px] font-semibold leading-[120%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    04
                  </span>
                  <span 
                    className="text-sm md:text-base font-light leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    Results That Move You Forward
                  </span>
                </div>
                <div className="w-full h-[0.84px] bg-[#D4D2E3]"></div>
              </div>
            </div>

            {/* LEARN MORE Button */}
          <Link to="/about">
            <button className="w-full h-[56px] md:h-[62px] bg-[#E6F6EE] rounded-[20px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group">
              <span 
                className="text-sm md:text-base font-medium leading-[140%] text-[#00A550]"
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                LEARN MORE
              </span>
              <img 
                src={northEast} 
                alt="Arrow" 
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;