import React from 'react';

const FAQsPageHero: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] h-[634px] mx-auto bg-[#0000004D] relative" style={{ background: 'linear-gradient(135deg, #00A550 0%, #009649 100%)' }}>
      {/* Content Container */}
      <div className="absolute top-[396px] left-[469px] w-[502px] h-[80px] flex flex-col gap-[38px]">
        {/* Heading */}
        <h1 
          className="w-[502px] h-[48px] text-[40px] font-semibold leading-[120%] text-center text-white"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          How can we help?
        </h1>

        {/* Description */}
        <p 
          className="w-[502px] h-[22px] text-base font-light leading-[140%] text-center text-white"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          Find the most asked questions and the answers right here.
        </p>
      </div>
    </section>
  );
};

export default FAQsPageHero;