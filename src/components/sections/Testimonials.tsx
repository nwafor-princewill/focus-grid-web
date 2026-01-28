import React, { useState, useEffect, useRef } from 'react';

// Default fallback image
import testimonialPic from '../../assets/images/testimonial-pic.jpg';

interface TestimonialData {
  _id: string;
  name: string;
  testimonial: string;
  picture: string | null;
  hobbies: string[];
  rating: number;
}

const Testimonials: React.FC = () => {
  const [testimonialData, setTestimonialData] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://focusgrid-server.onrender.com/api/v1/testimonials');
      if (!response.ok) throw new Error(`Server Error: ${response.status}`);
      const data = await response.json();
      const finalData = Array.isArray(data) ? data : (data.testimonials || data.data || []);
      setTestimonialData(finalData);
      setLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-play carousel - moves every 5 seconds
  useEffect(() => {
    if (testimonialData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="w-full py-40 flex flex-col items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00A550]"></div>
        <h2 className="mt-6 text-2xl font-bold text-[#333333]">PRINCEWILL.AI</h2>
        <p className="mt-2 text-[#00A550] animate-pulse font-medium">Fetching Testimonials...</p>
      </div>
    );
  }

  if (error) return null;
  if (testimonialData.length === 0) return null;

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="w-full bg-[#FFFFFF] pt-16 md:pt-20 lg:pt-[100px] overflow-hidden"
    >
      <style>
        {`
          .testimonial-perspective {
            perspective: 1000px;
          }
        `}
      </style>

      <div className={`max-w-[1440px] mx-auto flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section */}
        <div className="w-full max-w-[672px] flex flex-col items-center mb-12">
          <div className="h-[28px] px-5 py-2.5 border border-[#00A550] rounded-[100px] flex items-center justify-center bg-white mb-8">
            <span className="text-[12px] font-bold leading-[140%] text-[#00A550] tracking-widest uppercase" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-[120%] text-center text-[#333333] mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            What Our Customers Are Saying
          </h2>

          <p className="max-w-[597px] text-sm md:text-lg font-light leading-[140%] text-center text-[#333333]/70" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Don't take our word for it — hear how Focus Grid has helped businesses launch faster and creatives grow their careers.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full flex flex-col items-center gap-10 testimonial-perspective">
          <div className="w-full overflow-hidden">
            <div className="relative">
              {/* Desktop View - Fixed height to accommodate content and prevent overflow */}
              <div className="hidden lg:flex items-center justify-center relative min-h-[420px] overflow-visible">
                <div className="flex items-center justify-center gap-8">
                  {[-1, 0, 1].map((offset) => {
                    const index = (currentIndex + offset + testimonialData.length) % testimonialData.length;
                    const testimonial = testimonialData[index];
                    const isActive = offset === 0;
                    
                    return (
                      <div
                        key={`${testimonial._id}-${offset}`}
                        className={`flex-shrink-0 transition-all duration-700 ease-out ${
                          isActive ? 'z-10 scale-100 opacity-100 w-[600px]' : 'scale-90 opacity-50 z-0 w-[500px]'
                        }`}
                        style={{
                          transform: isActive ? 'translateX(0)' : offset < 0 ? 'translateX(-20px)' : 'translateX(20px)'
                        }}
                      >
                        {/* Fixed: Added min-h-auto and max-h with overflow-y-auto for scrollable content if needed */}
                        <div className={`w-full min-h-[320px] max-h-[420px] rounded-[24px] p-10 flex flex-col justify-between border-[3px] transition-all duration-700 overflow-hidden ${
                          isActive ? 'bg-[#111111] border-[#33B773]' : 'bg-[#E6F6EE] border-[#33B773]/20'
                        }`}>
                          <div className="w-full flex items-center justify-between mb-4 flex-shrink-0">
                            <div className="flex items-center gap-5">
                              <div className="w-[70px] h-[70px] rounded-full overflow-hidden flex-shrink-0 border-2 border-[#33B773]">
                                <img 
                                  src={testimonial.picture || testimonialPic} 
                                  alt={testimonial.name} 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <div className="flex flex-col">
                                <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                                  {testimonial.name}
                                </h3>
                                <p className={`text-sm font-medium opacity-80 ${isActive ? 'text-[#33B773]' : 'text-[#333333]'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                                  {testimonial.hobbies.join(' | ')}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-1 flex-shrink-0">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} width="18" height="18" viewBox="0 0 21 20" fill="none">
                                  <path d="M10.5 0L12.8 7.6H20.8L14.4 12.3L16.8 19.9L10.5 15.2L4.1 19.9L6.5 12.3L0.1 7.6H8.1L10.5 0Z" 
                                    fill={s <= testimonial.rating ? '#FFBF00' : '#D1D1D1'} 
                                  />
                                </svg>
                              ))}
                            </div>
                          </div>
                          {/* Fixed: Added overflow-y-auto and proper text sizing to contain content */}
                          <div className="flex-1 overflow-y-auto pr-2">
                            <p className={`text-sm font-light leading-[160%] break-words ${isActive ? 'text-[#E6E6E6]' : 'text-[#333333]/60'}`} style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                              "{testimonial.testimonial}"
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile View - Also fixed overflow issues */}
              <div className="lg:hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonialData.map((testimonial) => (
                    <div key={testimonial._id} className="flex-shrink-0 w-full px-2">
                      <div className="w-full min-h-[280px] max-h-[400px] rounded-[24px] p-8 bg-[#111111] border-b-4 border-[#33B773] flex flex-col gap-6 overflow-hidden">
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <img src={testimonial.picture || testimonialPic} className="w-[50px] h-[50px] rounded-full object-cover border border-[#33B773]" alt="" />
                          <div>
                            <h3 className="text-white font-bold">{testimonial.name}</h3>
                            <p className="text-[#33B773] text-xs font-medium uppercase">{testimonial.hobbies.join(' | ')}</p>
                          </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                          <p className="text-sm text-[#E6E6E6] font-light leading-relaxed break-words">"{testimonial.testimonial}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="w-full max-w-[1200px] flex justify-center lg:justify-end mt-4">
            <div className="flex items-center gap-4">
              <button onClick={handlePrevious} className="w-14 h-14 bg-[#E6F6EE] rounded-full flex items-center justify-center hover:bg-[#00A550] group transition-all">
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" className="text-[#00A550] group-hover:text-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={handleNext} className="w-14 h-14 bg-[#E6F6EE] rounded-full flex items-center justify-center hover:bg-[#00A550] group transition-all">
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