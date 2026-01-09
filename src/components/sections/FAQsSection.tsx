import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FAQsSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Entrance Animation Trigger
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

  const faqData = [
    {
      id: 'faq-01',
      number: '01',
      question: 'What exactly is Focus Grid?',
      answer: 'Focus Grid is a talent–development and service delivery ecosystem. We train passionate developers, designers, and creatives, then deploy them into real projects for startups and businesses who need high-quality digital solutions.'
    },
    {
      id: 'faq-02',
      number: '02',
      question: 'Who can be part of Focus Grid?',
      answer: 'We welcome passionate developers, designers, and creatives looking to level up. We also partner with startups and enterprises needing dedicated, high-performing product teams.'
    },
    {
      id: 'faq-03',
      number: '03',
      question: 'Will I work on real projects?',
      answer: 'Absolutely. Our entire model is built around real-world execution. Talents gain experience on actual client deliverables, ensuring they meet professional industry standards.'
    },
    {
      id: 'faq-04',
      number: '04',
      question: 'How fast can I get a team working on my project?',
      answer: 'Typically, we can assemble and match a dedicated team to your project requirements within 3 to 7 business days, depending on the complexity of the stack.'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6">
      <div className={`max-w-[1220px] mx-auto flex flex-col gap-10 items-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Heading Area */}
        <div className="w-full flex flex-col gap-8">
          <h2 
            className="text-[32px] md:text-[40px] font-semibold text-center text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Frequently asked questions.
          </h2>
          <div className={`h-[1px] bg-[#D4D2E3] transition-all duration-1000 delay-500 ${isVisible ? 'w-full' : 'w-0'}`}></div>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col gap-4 mb-20">
          {faqData.map((faq, index) => {
            const isExpanded = expandedCard === index + 1;
            return (
              <div 
                key={index} 
                id={faq.id} 
                className={`scroll-mt-40 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div 
                  className={`w-full transition-all duration-500 ease-in-out rounded-[20px] p-6 md:p-10 cursor-pointer border border-transparent
                    ${isExpanded ? 'bg-[#54C38A] shadow-xl translate-y-[-4px]' : 'bg-white hover:bg-[#F9F9F9] hover:shadow-md'}`}
                  onClick={() => setExpandedCard(isExpanded ? null : index + 1)}
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span 
                      className={`text-2xl md:text-4xl font-semibold leading-none transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-[#333333]/30'}`}
                      style={{ fontFamily: 'Funnel Display, sans-serif' }}
                    >
                      {faq.number}
                    </span>

                    <div className="flex-1 flex flex-col">
                      <h3 
                        className={`text-lg md:text-2xl lg:text-[32px] font-semibold leading-tight transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-[#333333]'}`}
                        style={{ fontFamily: 'Funnel Display, sans-serif' }}
                      >
                        {faq.question}
                      </h3>
                      
                      {/* Animated Answer Height using CSS Grid trick for smoothness */}
                      <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p 
                            className="text-sm md:text-base font-light leading-relaxed text-white/90"
                            style={{ fontFamily: 'Funnel Display, sans-serif' }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Icon - Rotating Animation */}
                    <div className={`flex-shrink-0 transition-all duration-500 ${isExpanded ? 'rotate-180 scale-110' : 'rotate-0'}`}>
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
                </div>
                {/* Visual Line separator (only shows when card is NOT expanded) */}
                {index < faqData.length - 1 && !isExpanded && (
                  <div className="h-[1px] bg-[#D4D2E3]/50 w-full mt-4" />
                )}
              </div>
            );
          })}
        </div>

        {/* Home Button with Hover Animation */}
        <Link to="/" className="w-full max-w-[615px] animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700">
          <button className="w-full h-[62px] bg-[#009649] rounded-[20px] text-white font-medium hover:bg-[#007a3b] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2 group">
            <span>Go back to home</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FAQsSection;