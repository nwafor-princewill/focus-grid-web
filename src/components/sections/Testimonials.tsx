import React, { useState, useEffect, useRef } from 'react';
import testimonialPic from '../../assets/images/testimonial-pic.jpg';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Reveal Observer
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
      name: "Osamoghena E...",
      role: "Payloop | founder | fintech",
      testimonial: "Focus Grid didn't just build our product — they refined our idea. In 8 weeks, we went from a concept on paper to a functional MVP that impressed investors. Their attention to detail and speed is unmatched."
    },
    {
      name: "Osamoghena E...",
      role: "Payloop | founder | fintech",
      testimonial: "Focus Grid didn't just build our product — they refined our idea. In 8 weeks, we went from a concept on paper to a functional MVP that impressed investors. Their attention to detail and speed is unmatched."
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
      <div className={`max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-[65px] py-12 md:py-16 lg:py-20 px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section */}
        <div className="w-full max-w-[672px] flex flex-col items-center gap-4 md:gap-5">
          {/* Testimonials Badge with Ping Animation */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-[100px] border border-[#00A550] animate-ping opacity-25"></div>
            <div className="h-[28px] px-5 py-2.5 border border-[#00A550] rounded-[100px] flex items-center justify-center bg-white relative z-10 transition-all duration-300 hover:bg-[#E6F6EE]">
              <span className="text-[12px] font-medium leading-[140%] text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                TESTIMONIALS
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-[120%] text-center text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            What Our Customers Are Saying
          </h2>

          <p className="max-w-[597px] text-sm md:text-base font-light leading-[140%] text-center text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Don't take our word for it — hear how Focus Grid has helped businesses launch faster and creatives grow their careers.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
          <div className="w-full overflow-hidden px-2 md:px-4">
            <div className="relative">
              {/* Desktop View */}
              <div className="hidden lg:flex items-center justify-center">
                <div 
                  className="flex items-center transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                  style={{ transform: `translateX(calc(-${currentIndex * 33.33}% + 33.33%))` }}
                >
                  {testimonialData.map((testimonial, index) => {
                    const isActive = index === currentIndex;
                    return (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-[600px] transition-all duration-500 ${
                          isActive ? 'z-10 scale-100 opacity-100' : 'scale-90 opacity-40 z-0 mx-[-60px]'
                        }`}
                      >
                        <div className={`w-[600px] h-[282px] rounded-[21.2px] p-[47px_39px] flex flex-col gap-5 border-[3.18px] transition-all duration-500 ${
                          isActive ? 'bg-[#333333] border-[#33B773] shadow-2xl' : 'bg-[#E6F6EE] border-[#33B773]/30'
                        }`}>
                          <div className="w-full flex items-center gap-[69px]">
                            <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0 border-2 border-[#33B773]">
                              <img src={testimonialPic} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col gap-[7.42px]">
                              <h3 className={`text-xl font-semibold ${isActive ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                                {testimonial.name}
                              </h3>
                              <p className={`text-sm font-light ${isActive ? 'text-[#E6E6E6]' : 'text-[#333333]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                                {testimonial.role}
                              </p>
                            </div>
                            <div className="flex gap-[2.12px]">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} width="21" height="20" viewBox="0 0 21 20" fill="none">
                                  <path d="M10.5 0L12.8 7.6H20.8L14.4 12.3L16.8 19.9L10.5 15.2L4.1 19.9L6.5 12.3L0.1 7.6H8.1L10.5 0Z" fill={s <= 4 ? '#FFBF00' : '#F9F9F9'} />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className={`text-base font-light leading-[140%] ${isActive ? 'text-[#E6E6E6]' : 'text-[#333333]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                            "{testimonial.testimonial}"
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile/Tablet View */}
              <div className="lg:hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonialData.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-full px-2 md:px-4">
                      <div className="w-full h-auto min-h-[282px] rounded-[16px] p-6 bg-[#333333] border-[3px] border-[#33B773] flex flex-col gap-4">
                        <div className="w-full flex items-center justify-between">
                          <img src={testimonialPic} className="w-[60px] h-[60px] rounded-full object-cover" alt="" />
                          <div className="flex-1 px-4">
                            <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                            <p className="text-sm text-[#E6E6E6]">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-base font-light text-[#E6E6E6]">"{testimonial.testimonial}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-[#E6F6EE] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#00A550] group hover:scale-110 active:scale-95 shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" className="text-[#00A550] group-hover:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-[#E6F6EE] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#00A550] group hover:scale-110 active:scale-95 shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" className="text-[#00A550] group-hover:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;