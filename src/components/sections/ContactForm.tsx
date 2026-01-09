import React, { useState, useEffect, useRef } from 'react';

const ContactForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-32 lg:pt-48 pb-20 px-6 overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#E6F6EE] rounded-full blur-[120px] opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className={`max-w-[1240px] mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#333333] leading-tight" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Let’s build <span className="text-[#00A550]">something</span> great together.
              </h1>
              <p className="text-lg text-[#545454] font-light max-w-[500px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Have a project in mind or want to join our talent network? Drop us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              {/* Contact Detail Cards */}
              {[
                { label: 'Email us at', value: 'hello@focusgrid.co', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'Visit our office', value: 'Lagos, Nigeria', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-[#F9F9F9] border border-gray-100 hover:border-[#00A550]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-[#00A550] transition-colors">
                    <svg className="w-6 h-6 stroke-[#00A550] group-hover:stroke-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#545454]/60 uppercase tracking-widest font-bold">{info.label}</p>
                    <p className="text-lg font-medium text-[#333333]">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-50 relative">
            <form className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333] ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full h-[56px] px-6 rounded-2xl bg-[#F9F9F9] border border-transparent focus:border-[#00A550] focus:bg-white outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333] ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full h-[56px] px-6 rounded-2xl bg-[#F9F9F9] border border-transparent focus:border-[#00A550] focus:bg-white outline-none transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#333333] ml-1">Subject</label>
                <select className="w-full h-[56px] px-6 rounded-2xl bg-[#F9F9F9] border border-transparent focus:border-[#00A550] focus:bg-white outline-none transition-all appearance-none">
                  <option>Hire a Team</option>
                  <option>Join the Talent Network</option>
                  <option>Partnership Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#333333] ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full p-6 rounded-2xl bg-[#F9F9F9] border border-transparent focus:border-[#00A550] focus:bg-white outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full h-[64px] bg-[#00A550] text-white font-semibold rounded-2xl hover:bg-[#008f44] transform transition-all hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-[#00A550]/20 flex items-center justify-center gap-3 group">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <path d="M15.8333 4.16666L4.16666 15.8333M15.8333 4.16666H7.5M15.8333 4.16666V12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;