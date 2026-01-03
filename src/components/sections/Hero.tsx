import React from 'react';
import targetGreen from '../../assets/images/target green.png';
import cursor from '../../assets/images/cursor.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] h-[744px] mx-auto bg-[#F9F9F9] mt-2">
      <div className="absolute top-[127px] left-[103px] w-[751px] h-[368px] flex flex-col gap-10">
        {/* Heading Container */}
        <div className="w-[751px] h-[124px]">
          <h1 
            className="text-[52px] font-semibold leading-[120%] text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Build the Future with Focus
            <br />
            & Intentionality.
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="w-[689px] h-[44px]">
          <p 
            className="text-base font-light leading-[140%] text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            We develop custom software, train junior developers through real-world internships, and deploy ready talent to your team — all under one roof.
          </p>
        </div>

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
          <button className="w-[250px] h-12 rounded-[20px] p-[10px] border border-[#00A550] flex items-center justify-center gap-[10px] bg-transparent">
            <span 
              className="w-[167px] h-5 text-[#007539] text-sm font-medium leading-[140%]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              APPLY FOR INTERNSHIP
            </span>
          </button>
        </div>

        {/* Trusted By Section */}
        <div className="w-[268.65px] h-[52px] flex items-center gap-5">
          {/* Overlapping Avatar Images */}
          <div className="relative w-[117.65px] h-[52px]">
            {/* Avatar 1 */}
            <div className="absolute left-0 w-[52px] h-[52px] rounded-full bg-gray-300 border-2 border-white z-30">
              {/* Image will go here */}
            </div>
            
            {/* Avatar 2 */}
            <div className="absolute left-[32.82px] w-[52px] h-[52px] rounded-full bg-gray-400 border-2 border-white z-20">
              {/* Image will go here */}
            </div>
            
            {/* Avatar 3 */}
            <div className="absolute left-[65.65px] w-[52px] h-[52px] rounded-full bg-gray-500 border-2 border-white z-10">
              {/* Image will go here */}
            </div>
          </div>

          {/* Text */}
          <div className="w-[131px] h-[45px] flex flex-col">
            <span 
              className="text-base font-normal leading-[100%] text-left capitalize text-[#1A1D26] whitespace-nowrap"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Trusted by 4.5k +
            </span>
            <span 
              className="text-base font-normal leading-[100%] text-left capitalize text-[#1A1D26] mt-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              customers Daily
            </span>
          </div>
        </div>
      </div>

      {/* Right side images */}
      {/* Cursor Image */}
      <img 
        src={cursor}
        alt="Cursor"
        className="absolute w-[80px] h-[80px] top-[200px] left-[905px] z-20"
        style={{ transform: 'rotate(-28.71deg)' }}
      />
      
      {/* Target Green Image */}
      <img 
        src={targetGreen}
        alt="Target"
        className="absolute w-[350px] h-[363.02px] top-[150.93px] left-[985px] z-10"
      />
    </section>
  );
};

export default Hero;
