import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      answer: 'Anyone with a hunger for growth. Whether you are a beginner looking for an internship or a business looking for a high-performing team, Focus Grid is built to bridge that gap.'
    },
    {
      number: '03',
      question: 'Will I work on real projects?',
      answer: 'Absolutely. We believe the best way to learn is by doing. Our interns work alongside senior mentors on live client projects, gaining actual industry experience.'
    },
    {
      number: '04',
      question: 'How fast can I get a team working on my project?',
      answer: 'Once we assess your needs, we can typically match you with a tailored team and kick off the project within 48 to 72 hours.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-[1440px] mx-auto bg-[#F9F9F9] py-16 px-6 md:px-[95px] rounded-br-[40px] md:rounded-br-[80px] rounded-bl-[40px] md:rounded-bl-[80px] overflow-hidden"
    >
      <style>
        {`
          @keyframes doublePing {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(2); opacity: 0; }
          }
          .faq-card-transition {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}
      </style>

      <div className={`w-full max-w-[1240px] mx-auto flex flex-col gap-8 md:gap-10 items-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* FAQs Button with Enhanced Multi-Ping Animation */}
        <Link to="/faqs" className="group relative">
          <div className="absolute inset-0 rounded-[100px] border-2 border-[#00A550] opacity-40" style={{ animation: 'doublePing 2s infinite' }}></div>
          <div className="absolute inset-0 rounded-[100px] border border-[#00A550] opacity-20" style={{ animation: 'doublePing 2s infinite 1s' }}></div>
          
          <button className="h-[32px] px-6 py-2 border-2 border-[#00A550] rounded-[100px] flex items-center justify-center bg-white relative z-10 group-hover:bg-[#00A550] transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,165,80,0.3)]">
            <span 
              className="text-[12px] font-bold text-[#00A550] group-hover:text-white uppercase tracking-wider transition-colors duration-300"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              FAQs
            </span>
          </button>
        </Link>

        {/* Header Section */}
        <div className="w-full flex flex-col gap-4 md:gap-5 items-center">
          <h2 
            className="text-[28px] md:text-[45px] font-semibold leading-[120%] text-[#333333] text-center"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Questions We're Asked Often.
          </h2>
          <p 
            className="max-w-[857px] text-sm md:text-lg font-light leading-[140%] text-[#545454] text-center"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Focus Grid is a software development institution that builds digital products and trains tech talent.
          </p>
          <div className={`h-[1px] bg-gradient-to-r from-transparent via-[#8A8A8A]/40 to-transparent mt-5 transition-all duration-1000 delay-500 ${isVisible ? 'w-full' : 'w-0'}`}></div>
        </div>

        {/* FAQ Cards Container */}
        <div className="w-full max-w-[1220px] flex flex-col gap-3">
          {faqData.map((faq, index) => {
            const isExpanded = expandedCard === index + 1;
            return (
              <div 
                key={index} 
                className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div 
                  className={`faq-card-transition w-full rounded-[24px] p-6 md:p-10 flex items-start gap-4 md:gap-10 cursor-pointer ${isExpanded ? 'bg-[#00A550] shadow-[0_20px_40px_rgba(0,165,80,0.25)] scale-[1.02] z-20' : 'bg-white/50 hover:bg-white border border-transparent hover:border-[#00A550]/20'}`}
                  onClick={() => toggleCard(index + 1)}
                >
                  {/* Number */}
                  <span 
                    className={`text-xl md:text-[36px] font-bold leading-none ${isExpanded ? 'text-white' : 'text-[#00A550]/40'} transition-colors duration-300`}
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {faq.number}
                  </span>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col">
                    <h3 
                      className={`text-lg md:text-[28px] font-semibold leading-[130%] ${isExpanded ? 'text-white' : 'text-[#333333]'} transition-colors duration-300`}
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {faq.question}
                    </h3>
                    
                    <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p 
                          className="text-sm md:text-[18px] font-light leading-[160%] text-white/90 max-w-[900px]"
                          style={{ fontFamily: 'Funnel Display, sans-serif' }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon - Pulse and Rotate */}
                  <div className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-white/20 rotate-45' : 'bg-[#E6F6EE] rotate-0 group-hover:scale-110'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                      <path d="M12 5V19M5 12H19" stroke={isExpanded ? "white" : "#00A550"} strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Subtle Gap or Divider */}
                {!isExpanded && index < faqData.length - 1 && (
                  <div className="h-[1px] mx-10 bg-[#D4D2E3]/30"></div>
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