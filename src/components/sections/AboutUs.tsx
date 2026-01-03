import React from 'react';
import manphone from '../../assets/images/man-phone.png';

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-[#F9F9F9] pt-[106px] pb-10">
      <div className="px-[99px]">
        {/* Header */}
        <div className="mb-10">
          <h2 
            className="w-[175px] h-12 text-[40px] font-semibold leading-[120%] text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            About us
          </h2>
        </div>

        {/* Left Side - Text Content */}
        <div className="w-[671px] flex flex-col gap-5">
          {/* Train . Build . Deploy Card */}
          <div className="bg-[#E6F6EE] rounded-[20px] p-5 flex flex-col gap-[10px]">
            <h3 
              className="text-[32px] font-semibold leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Train . Build . Deploy.
            </h3>
            <p 
              className="text-base font-light leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              At Focus Grid, we merge innovation with purpose. We train passionate developers, build scalable digital products, deploy skilled talent to companies.
              Every project we take on doubles as a classroom where real businesses grow and real people learn by doing.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="bg-[#E6F6EE] rounded-[20px] p-5 flex flex-col gap-[10px]">
            <h3 
              className="text-[32px] font-semibold leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Our Mission
            </h3>
            <p 
              className="text-base font-light leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              To empower emerging tech talent through advanced internships, fostering skill enhancement in software development and facilitating connections to rewarding career opportunities.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="bg-[#E6F6EE] rounded-[20px] p-5 flex flex-col gap-[10px]">
            <h3 
              className="text-[32px] font-semibold leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Our Vision
            </h3>
            <p 
              className="text-base font-light leading-[140%] text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              To be the leading tech talent workforce bolstering innovation and productivity for better cooperation amongst global tech members
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="absolute top-[230.07px] left-[826px] w-[600px] h-[551.17px]">
          <img 
            src={manphone} 
            alt="man with phone"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;