import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQsCombinedSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  const faqData = [
    { id: 'faq-01', number: '01', question: 'What exactly is Focus Grid?', answer: 'Focus Grid is a talent–development and service delivery ecosystem. We train passionate developers, designers, and creatives, then deploy them into real projects for startups and businesses who need high-quality digital solutions.' },
    { id: 'faq-02', number: '02', question: 'Who can be part of Focus Grid?', answer: 'We welcome passionate developers, designers, and creatives looking to level up. We also partner with startups and enterprises needing dedicated, high-performing product teams.' },
    { id: 'faq-03', number: '03', question: 'Will I work on real projects?', answer: 'Absolutely. Our entire model is built around real-world execution. Talents gain experience on actual client deliverables, ensuring they meet professional industry standards.' },
    { id: 'faq-04', number: '04', question: 'How fast can I get a team working on my project?', answer: 'Typically, we can assemble and match a dedicated team to your project requirements within 3 to 7 business days.' }
  ];

  return (
    <div className="relative w-full bg-white min-h-[1600px] md:min-h-[1400px]">
      <style>{`
        @keyframes drift {
          from { transform: translateX(-10%); }
          to { transform: translateX(10%); }
        }
        .animate-cloud {
          animation: drift 20s linear infinite alternate;
        }
      `}</style>

      {/* --- GREEN BACKGROUND --- */}
      <section className="relative w-full max-w-[1440px] mx-auto h-[700px] md:h-[954px] bg-[#00A550] flex flex-col items-center pt-[120px] md:pt-[180px] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-white/10 blur-[80px] md:blur-[100px] rounded-full animate-cloud" />
          <div className="absolute top-[40%] right-[5%] w-[400px] md:w-[500px] h-[200px] md:h-[250px] bg-white/15 blur-[100px] md:blur-[120px] rounded-full animate-cloud" style={{ animationDelay: '-5s' }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-[64px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            How can we help?
          </h1>
          <p className="text-white/80 text-base md:text-xl font-light max-w-[600px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Here are some of the questions you may have, and we have answers to them.
          </p>
        </div>
      </section>

      {/* --- OVERLAPPING FAQ CONTAINER --- */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bg-white z-20 flex flex-col items-center"
        style={{
          top: '320px',
          width: 'min(1240px, 92%)',
          borderRadius: '30px',
          border: '1px solid #B0B0B0',
          boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
        }}
      >
        <div className="w-full px-5 md:px-10 pt-10 flex flex-col items-center gap-10">
          {/* Heading Area */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[#333333] text-2xl md:text-[40px] font-semibold leading-[120%]" style={{ fontFamily: 'Funnel Display' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[#545454] text-sm md:text-[16px] font-light leading-[140%] max-w-[857px]" style={{ fontFamily: 'Funnel Display' }}>
              Focus Grid is a software development institution that builds digital products and trains tech talent.
            </p>
          </div>

          {/* FAQ Cards List */}
          <div className="w-full flex flex-col gap-4 mb-10">
            {faqData.map((faq, index) => {
              const isExpanded = expandedCard === index + 1;
              return (
                <div key={faq.id} className="w-full">
                  <div 
                    onClick={() => setExpandedCard(isExpanded ? null : index + 1)}
                    className={`w-full transition-all duration-500 cursor-pointer rounded-[20px] p-5 md:px-8 md:py-6 flex flex-col
                      ${isExpanded ? 'bg-[#54C38A] text-white shadow-lg translate-y-[-2px]' : 'bg-white text-[#333333] border border-gray-100 hover:bg-gray-50'}`}
                    style={{ minHeight: isExpanded ? '160px' : '88px' }}
                  >
                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-start gap-4 md:gap-10">
                        <span className={`text-xl md:text-2xl font-semibold mt-0.5 ${isExpanded ? 'text-white' : 'text-[#333333]/30'}`}>
                          {faq.number}
                        </span>
                        <h3 className="text-base md:text-[22px] font-semibold leading-snug" style={{ fontFamily: 'Funnel Display' }}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className="flex-shrink-0 ml-2 mt-1">
                        {isExpanded ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6"><path d="M12 5V19M5 12H19" stroke="#333333" strokeWidth="2.5" strokeLinecap="round"/></svg>
                        )}
                      </div>
                    </div>

                    <div className={`grid transition-all duration-500 overflow-hidden ${isExpanded ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                      <div className="overflow-hidden">
                        {/* Added margin-left to align with the question text on desktop */}
                        <p className="text-sm md:text-base font-light text-white/90 leading-relaxed md:ml-[64px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Home Button */}
          <div className="pb-10">
            <Link to="/">
              <button className="h-[56px] px-8 md:px-12 border border-[#00A550] text-[#00A550] rounded-full font-medium hover:bg-[#00A550] hover:text-white transition-all active:scale-95">
                Go back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsCombinedSection;