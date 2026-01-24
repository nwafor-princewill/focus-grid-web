import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQsCombinedSection: React.FC = () => {
  // Back to starting with the first card open on all devices
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  const faqData = [
    { id: 'faq-01', number: '01', question: 'What exactly is Focus Grid?', answer: 'Focus Grid is a talent–development and service delivery ecosystem. We train passionate developers, designers, and creatives, then deploy them into real projects for startups and businesses who need high-quality digital solutions.' },
    { id: 'faq-02', number: '02', question: 'Who can be part of Focus Grid?', answer: 'We welcome passionate developers, designers, and creatives looking to level up. We also partner with startups and enterprises needing dedicated, high-performing product teams.' },
    { id: 'faq-03', number: '03', question: 'Will I work on real projects?', answer: 'Absolutely. Our entire model is built around real-world execution. Talents gain experience on actual client deliverables, ensuring they meet professional industry standards.' },
    { id: 'faq-04', number: '04', question: 'How fast can I get a team working on my project?', answer: 'Typically, we can assemble and match a dedicated team to your project requirements within 3 to 7 business days.' }
  ];

  return (
    <div className="w-full bg-white">
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
      <section className="relative w-full h-[600px] md:h-[750px] bg-[#00A550] flex flex-col items-center pt-[160px] md:pt-[180px] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[400px] h-[200px] bg-white/10 blur-[100px] rounded-full animate-cloud" />
          <div className="absolute top-[40%] right-[5%] w-[400px] md:w-[500px] h-[250px] bg-white/15 blur-[120px] rounded-full animate-cloud" style={{ animationDelay: '-5s' }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-[64px] font-semibold leading-tight mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            How can we help?
          </h1>
          <p className="text-white/80 text-base md:text-xl font-light" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Here are some of the questions you may have, and we have answers to them.
          </p>
        </div>
      </section>

      {/* --- FAQ CONTAINER --- */}
      <div className="px-4 md:px-6 w-full flex flex-col items-center">
        {/* The -mt-[250px] is the magic that makes it overlap without breaking the next section */}
        <div 
          className="relative bg-white z-20 flex flex-col items-center -mt-[250px] mb-20"
          style={{
            width: 'min(1240px, 100%)',
            borderRadius: '30px',
            border: '1px solid #B0B0B0',
            boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
            paddingBottom: '40px'
          }}
        >
          {/* Heading Area */}
          <div className="flex flex-col items-center gap-4 text-center p-6 md:p-10">
            <h2 className="w-full max-w-[1160px] font-semibold text-2xl md:text-[40px] text-[#333333] leading-tight" style={{ fontFamily: 'Funnel Display' }}>
              Frequently Asked Questions
            </h2>
            <p className="w-full max-w-[857px] font-light text-sm md:text-base text-[#545454] leading-relaxed" style={{ fontFamily: 'Funnel Display' }}>
               Focus Grid is a software development institution that builds digital products and trains tech talent.
            </p>
          </div>

          {/* FAQ Cards List */}
          <div className="w-full flex flex-col gap-4 px-4 md:px-10 mb-10">
            {faqData.map((faq, index) => {
              const isExpanded = expandedCard === index + 1;
              return (
                <div key={faq.id} className="w-full">
                  <div 
                    onClick={() => setExpandedCard(isExpanded ? null : index + 1)}
                    className={`w-full transition-all duration-500 cursor-pointer rounded-[20px] p-6 md:px-8 flex flex-col justify-center
                      ${isExpanded ? 'bg-[#54C38A] text-white shadow-lg' : 'bg-white text-[#333333] hover:bg-gray-50 border-b border-[#F5F5F5]'}`}
                  >
                    <div className="flex items-start justify-between w-full gap-4">
                      <div className="flex items-start md:items-center gap-4 md:gap-10">
                        <span className={`text-xl md:text-2xl font-semibold mt-1 md:mt-0 ${isExpanded ? 'text-white' : 'text-[#333333]/30'}`}>
                          {faq.number}
                        </span>
                        <h3 className="text-base md:text-[22px] font-semibold leading-tight" style={{ fontFamily: 'Funnel Display' }}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className="flex-shrink-0 mt-1">
                        {isExpanded ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="#333333" strokeWidth="2.5" strokeLinecap="round"/></svg>
                        )}
                      </div>
                    </div>

                    <div className={`grid transition-all duration-500 overflow-hidden ${isExpanded ? 'grid-rows-[1fr] mt-4 opacity-100 pb-2' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-sm md:text-base font-light text-white/90 leading-relaxed max-w-[95%] md:ml-[110px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-6 w-full flex justify-center mt-4">
            <Link to="/" className="w-full md:w-auto">
              <button className="h-[56px] w-full md:px-12 border border-[#00A550] text-[#00A550] rounded-full font-medium hover:bg-[#00A550] hover:text-white transition-all active:scale-95">
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