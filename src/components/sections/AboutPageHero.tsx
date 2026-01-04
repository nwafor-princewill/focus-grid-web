import React from 'react';
import { Link } from 'react-router-dom';
import manQuest from '../../assets/images/man-quest.png';

const AboutPageHero: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center py-20">
        <div className="w-[1160px] h-[450px] flex items-center gap-[150px]">
          {/* Left Side - Content */}
          <div className="w-[560px] h-[260px] flex flex-col gap-6">
            {/* Heading */}
            <h1 
              className="w-[560px] h-[124px] text-[52px] font-semibold leading-[120%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              What you should know about us
            </h1>

            {/* Description */}
            <p 
              className="w-[560px] h-[44px] text-base font-light leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              We develop custom software, train junior developers through real-world internships, and deploy ready talent to your team — all under one roof.
            </p>

            {/* Buttons Container */}
            <div className="w-[449px] h-12 flex gap-5">
              {/* Let's Build Button */}
              <button className="w-[179px] h-12 bg-[#00A550] rounded-[20px] p-[10px] flex items-center justify-center gap-[10px]">
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
                  className="w-[10px] h-[10px]"
                >
                  <path d="M5 0L4.29289 0.707107L7.58579 4H0V5H7.58579L4.29289 8.29289L5 9L10 4L5 0Z" fill="white"/>
                </svg>
              </button>

              {/* Apply for Internship Button */}
            <Link to="/apply">
              <button className="w-[250px] h-12 rounded-[20px] p-[10px] border border-[#00A550] flex items-center justify-center gap-[10px] bg-transparent">
                <span 
                  className="w-[167px] h-5 text-[#007539] text-sm font-medium leading-[140%]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  APPLY FOR INTERNSHIP
                </span>
              </button>
            </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-[450px] h-[450px]">
            <img 
              src={manQuest}
              alt="Man with magnifying glass"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;