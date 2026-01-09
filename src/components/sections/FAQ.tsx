import React, { useState, useEffect, useRef } from 'react';

const FAQ: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to trigger entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
    <section 
      ref={sectionRef}
      className="w-full max-w-[1440px] mx-auto bg-[#F9F9F9] py-16 px-6 md:px-[95px] rounded-br-[40px] md:rounded-br-[80px] rounded-bl-[40px] md:rounded-bl-[80px] overflow-hidden"
    >
      <div className={`w-full max-w-[1240px] mx-auto flex flex-col gap-8 md:gap-10 items-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* FAQs Badge with Pulse Animation */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[100px] border border-[#00A550] animate-ping opacity-20"></div>
          <div className="h-[28px] px-5 py-2.5 border border-[#00A550] rounded-[100px] flex items-center justify-center bg-white relative z-10 hover:bg-[#E6F6EE] transition-colors duration-300">
            <span 
              className="text-[12px] font-medium text-[#00A550]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              FAQs
            </span>
          </div>
        </div>

        {/* Header Section */}
        <div className="w-full flex flex-col gap-4 md:gap-5 items-center">
          <h2 
            className="text-[28px] md:text-[40px] font-semibold leading-[120%] text-[#333333] text-center"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Questions We're Asked Often.
          </h2>
          <p 
            className="max-w-[857px] text-sm md:text-base font-light leading-[140%] text-[#545454] text-center"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Focus Grid is a software development institution that builds digital products and trains tech talent.
          </p>
          <div className={`h-[1px] bg-[#8A8A8A]/30 mt-5 transition-all duration-1000 delay-500 ${isVisible ? 'w-full max-w-[1220px]' : 'w-0'}`}></div>
        </div>

        {/* FAQ Cards Container */}
        <div className="w-full max-w-[1220px] flex flex-col">
          {faqData.map((faq, index) => {
            const isExpanded = expandedCard === index + 1;
            return (
              <div 
                key={index} 
                className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }} // Staggered delay for each card
              >
                <div 
                  className={`w-full rounded-[20px] p-5 md:p-10 flex items-start gap-4 md:gap-10 cursor-pointer transition-all duration-500 ease-in-out ${isExpanded ? 'bg-[#54C38A] shadow-xl translate-y-[-4px]' : 'bg-transparent hover:bg-white hover:shadow-md'}`}
                  onClick={() => toggleCard(index + 1)}
                >
                  {/* Number */}
                  <span 
                    className={`text-xl md:text-[40px] font-semibold leading-none ${isExpanded ? 'text-white' : 'text-[#333333]'} transition-colors duration-300`}
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {faq.number}
                  </span>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col">
                    <h3 
                      className={`text-lg md:text-[32.35px] font-semibold leading-[130%] ${isExpanded ? 'text-white' : 'text-[#333333]'} transition-colors duration-300`}
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {faq.question}
                    </h3>
                    
                    <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] mt-4 md:mt-10 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p 
                          className="text-sm md:text-[16.17px] font-light leading-[150%] text-white/90"
                          style={{ fontFamily: 'Funnel Display, sans-serif' }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon - Rotating Animation */}
                  <div className={`flex-shrink-0 transition-transform duration-500 ${isExpanded ? 'rotate-180 scale-110' : 'rotate-0'}`}>
                    {isExpanded ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Line separator */}
                {index < faqData.length - 1 && !isExpanded && (
                  <div className="w-full h-[1px] bg-[#D4D2E3] my-2 opacity-50"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;