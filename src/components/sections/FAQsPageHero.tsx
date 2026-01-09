import React, { useState } from 'react';
import faqsBg from '../../assets/images/faqss.jpg';

const FAQsPageHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = searchQuery.toLowerCase();
    
    let targetId = "";
    if (term.includes("what") || term.includes("focus grid")) targetId = "faq-01";
    else if (term.includes("who") || term.includes("join")) targetId = "faq-02";
    else if (term.includes("real") || term.includes("project")) targetId = "faq-03";
    else if (term.includes("fast") || term.includes("team")) targetId = "faq-04";

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-2', 'ring-[#00A550]', 'rounded-[20px]');
        setTimeout(() => element.classList.remove('ring-2', 'ring-[#00A550]'), 2000);
      }
    }
  };

  return (
    <section className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Now forced to cover the very top */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: `url(${faqsBg})`,
          backgroundPosition: 'center top' // Ensures the top of the image is prioritized
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      {/* Content Area - Added pt-20 to push text down from the Navbar area */}
      <div className="relative z-10 w-full max-w-[800px] px-6 text-center flex flex-col items-center gap-8 pt-24 lg:pt-32">
        <h1 
          className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-in fade-in slide-in-from-bottom-10 duration-700"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          How can we help?
        </h1>
        
        <p className="text-white/80 text-lg font-light animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          Find the most asked questions and the answers right here.
        </p>

        {/* Search Bar */}
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-[600px] mt-4 relative animate-in fade-in zoom-in duration-1000 delay-500"
        >
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for questions..." 
            className="w-full h-[64px] rounded-full px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-black transition-all outline-none shadow-2xl"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 h-[48px] px-8 bg-[#00A550] rounded-full text-white font-medium hover:bg-[#008f44] transition-all active:scale-95"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default FAQsPageHero;