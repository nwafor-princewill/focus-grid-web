import React, { useState, useEffect, useRef } from 'react';
import testimonialPic from '../../assets/images/testimonial-pic.jpg';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
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

  const testimonialData = [
    {
      name: "Osamoghena E...",
      role: "Payloop | founder | fintech",
      testimonial: "Focus Grid didn't just build our product — they refined our idea. In 8 weeks, we went from a concept on paper to a functional MVP that impressed investors. Their attention to detail and speed is unmatched."
    },
    {
      name: "Sarah Jenkins",
      role: "EdTech Startup | CEO",
      testimonial: "The level of talent Focus Grid provides is exceptional. They didn't just code; they thought about the user experience. Our platform's engagement grew by 40% within the first month of launch."
    },
    {
      name: "David Chen",
      role: "Creative Director | Global Studio",
      testimonial: "Speed usually sacrifices quality, but not here. Focus Grid delivered a complex design system and website in record time. They are now our go-to partner for all high-stakes digital projects."
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#FFFFFF] pt-16 md:pt-20 lg:pt-[100px] overflow-hidden">
      <style>
        {`
          @keyframes multiPing {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(2.2); opacity: 0; }
          }
          .testimonial-perspective {
            perspective: 1000px;
          }
        `}
      </style>

      <div className={`max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-[65px] py-12 md:py-16 lg:py-20 px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section */}
        <div className="w-full max-w-[672px] flex flex-col items-center gap-4 md:gap-5">
          {/* Enhanced Ping Badge */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 rounded-[100px] border-2 border-[#00A550] opacity-30" style={{ animation: 'multiPing 2s infinite' }}></div>
            <div className="absolute inset-0 rounded-[100px] border border-[#00A550] opacity-20" style={{ animation: 'multiPing 2s infinite 0.5s' }}></div>
            <div className="h-[28px] px-5 py-2.5 border border-[#00A550] rounded-[100px] flex items-center justify-center bg-white relative z-10 transition-all duration-500 group-hover:bg-[#E6F6EE]">
              <span className="text-[12px] font-bold leading-[140%] text-[#00A550] tracking-widest uppercase" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                TESTIMONIALS
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-[120%] text-center text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            What Our Customers Are Saying
          </h2>

          <p className="max-w-[597px] text-sm md:text-lg font-light leading-[140%] text-center text-[#333333]/70" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Don't take our word for it — hear how Focus Grid has helped businesses launch faster and creatives grow their careers.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-10 testimonial-perspective">
          <div className="w-full overflow-hidden px-2 md:px-4">
            <div className="relative">
              {/* Desktop View */}
              <div className="hidden lg:flex items-center justify-center">
                <div 
                  className="flex items-center transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"
                  style={{ transform: `translateX(calc(-${currentIndex * 33.33}% + 33.33%))` }}
                >
                  {testimonialData.map((testimonial, index) => {
                    const isActive = index === currentIndex;
                    const isPast = index < currentIndex;
                    return (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-[600px] transition-all duration-700 ${
                          isActive 
                          ? 'z-10 scale-100 opacity-100' 
                          : `scale-90 opacity-30 z-0 mx-[-60px] ${isPast ? 'rotate-y-12' : '-rotate-y-12'}`
                        }`}
                      >
                        <div className={`w-[600px] h-[282px] rounded-[24px] p-10 flex flex-col justify-between border-[3px] transition-all duration-700 ${
                          isActive 
                          ? 'bg-[#333333] border-[#33B773] shadow-[0_30px_60px_-15px_rgba(0,165,80,0.3)]' 
                          : 'bg-[#E6F6EE] border-[#33B773]/20'
                        }`}>
                          <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-5">
                              <div className="w-[70px] h-[70px] rounded-full overflow-hidden flex-shrink-0 border-2 border-[#33B773] shadow-lg">
                                <img src={testimonialPic} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div className="flex flex-col">
                                <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                                  {testimonial.name}
                                </h3>
                                <p className={`text-sm font-medium opacity-80 ${isActive ? 'text-[#33B773]' : 'text-[#333333]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} width="18" height="18" viewBox="0 0 21 20" fill="none">
                                  <path d="M10.5 0L12.8 7.6H20.8L14.4 12.3L16.8 19.9L10.5 15.2L4.1 19.9L6.5 12.3L0.1 7.6H8.1L10.5 0Z" fill={s <= 5 ? '#FFBF00' : '#D1D1D1'} />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className={`text-lg font-light leading-[160%] italic ${isActive ? 'text-[#E6E6E6]' : 'text-[#333333]/60'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                            "{testimonial.testimonial}"
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile View */}
              <div className="lg:hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonialData.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-full px-2">
                      <div className="w-full min-h-[250px] rounded-[24px] p-8 bg-[#333333] border-b-4 border-[#33B773] flex flex-col gap-6 shadow-xl">
                        <div className="flex items-center gap-4">
                          <img src={testimonialPic} className="w-[50px] h-[50px] rounded-full object-cover border border-[#33B773]" alt="" />
                          <div>
                            <h3 className="text-white font-bold">{testimonial.name}</h3>
                            <p className="text-[#33B773] text-xs font-medium uppercase">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-[#E6E6E6] font-light leading-relaxed italic">"{testimonial.testimonial}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls - Shifted to the RIGHT card position */}
          <div className="w-full max-w-[1140px] flex justify-center lg:justify-end pr-0 lg:pr-[120px]">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevious}
                className="w-14 h-14 bg-white border border-[#E6F6EE] rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#00A550] group hover:scale-110 active:scale-95 shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" className="text-[#00A550] group-hover:text-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 bg-white border border-[#E6F6EE] rounded-full flex items-center justify-center transition-all duration-500 hover:bg-[#00A550] group hover:scale-110 active:scale-95 shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" className="text-[#00A550] group-hover:text-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;