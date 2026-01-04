import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQsSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  const toggleCard = (cardNumber: number) => {
    setExpandedCard(expandedCard === cardNumber ? null : cardNumber);
  };

  const faqData = [
    {
      number: '01',
      question: 'What exactly is Focus Grid?',
      answer: 'Focus Grid is a talent–development and service delivery ecosystem. We train passionate developers, designers, and creatives, then deploy them into real projects for startups and businesses who need high-quality digital solutions.'
    },
    {
      number: '02',
      question: 'Who can be part of Focus Grid?',
      answer: 'Focus Grid is a talent–development and service delivery ecosystem. We train passionate developers, designers, and creatives, then deploy them into real projects for startups and businesses who need high-quality digital solutions.'
    },
    {
      number: '03',
      question: 'Will I work on real projects?',
      answer: 'Focus Grid is a talent–development and service delivery ecosystem. We train passionate developers, designers, and creatives, then deploy them into real projects for startups and businesses who need high-quality digital solutions.'
    },
    {
      number: '04',
      question: 'How fast can I get a team working on my project?',
      answer: 'Focus Grid is a talent–development and service delivery ecosystem. We train passionate developers, designers, and creatives, then deploy them into real projects for startups and businesses who need high-quality digital solutions.'
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto pt-20 pr-[100px] pb-20 pl-[100px]">
      <div className="flex flex-col gap-10 items-center">
        {/* Heading */}
        <div className="w-[1220px] flex flex-col gap-5">
          <h2 
            className="w-[1220px] h-[48px] text-[40px] font-semibold leading-[120%] text-center text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Frequently asked questions.
          </h2>
          
          {/* Line */}
          <div className="w-[1220px] h-[1px] border-t border-[#8A8A8A]"></div>
        </div>

        {/* FAQ Cards Container */}
        <div className="w-[1220px] flex flex-col mb-20">
          {faqData.map((faq, index) => (
            <div key={index}>
              <div 
                className={`w-[1220px] ${expandedCard === index + 1 ? 'bg-[#E6F6EE]' : 'bg-white'} rounded-[20px] p-10 flex items-start gap-10 cursor-pointer transition-all duration-300`}
                onClick={() => toggleCard(index + 1)}
              >
                {/* Number */}
                <span 
                  className="text-[40px] font-semibold leading-[120%] text-[#333333] flex-shrink-0"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  {faq.number}
                </span>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-[40px]">
                  <h3 
                    className="text-[32.35px] font-semibold leading-[140%] text-[#333333]"
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  
                  {/* Answer - Only show when expanded */}
                  {expandedCard === index + 1 && (
                    <p 
                      className="text-[16.17px] font-light leading-[140%] text-[#333333]"
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>

                {/* Icon - Plus or Close */}
                <div className="flex-shrink-0">
                  {expandedCard === index + 1 ? (
                    // Close Icon (×)
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.75 6.25L6.25 18.75M6.25 6.25L18.75 18.75" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    // Plus Icon (+)
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 6.25V18.75M6.25 12.5H18.75" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Line separator (except after last card) */}
              {index < faqData.length - 1 && (
                <div className="w-[1220px] h-[1px] bg-[#D4D2E3] my-5"></div>
              )}
            </div>
          ))}
        </div>

        {/* Go Back to Home Button */}
        <Link to="/">
          <button className="w-[615px] h-[62px] bg-[#009649] rounded-[20px] px-5 py-5 flex items-center justify-center">
            <span 
              className="text-base font-light leading-[140%] text-white"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Go back to home
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FAQsSection;