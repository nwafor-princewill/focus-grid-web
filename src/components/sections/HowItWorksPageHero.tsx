import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// Assets
import blob1 from '../../assets/images/blob1.png';
import howItWorksImg from '../../assets/images/how-it-works.png';
import strategyImg from '../../assets/images/strategy.png';
import bgTexture from '../../assets/images/how-it-works-background.jpg';

const HowItWorksHero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle Effect Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }
      draw() {
        ctx!.fillStyle = 'rgba(0, 165, 80, 0.2)';
        ctx!.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + 300), 0), 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const steps = [
    { id: "01", title: "Tell Us What You Need", desc: "Share your idea, goals, or project requirements so we understand your vision clearly." },
    { id: "02", title: "We match you to the right team", desc: "Based on your needs, we assemble a skilled team to plan and kick-start the work." },
    { id: "03", title: "We Execute — Fast & Collaboratively", desc: "Our experts design, build, and iterate with you involved at every step." },
    { id: "04", title: "Deliverables That Move You Forward", desc: "You receive a polished digital product or outcome ready for launch and growth." }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes text-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes backgroundMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 10% 10%; }
          100% { background-position: 0% 0%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .shine-text {
          background: linear-gradient(90deg, #333333, #00A550, #333333);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shine 4s linear infinite;
        }
        .step-card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .step-card-hover:hover {
          background: rgba(0, 165, 80, 0.03);
          transform: translateX(10px);
        }
        .bg-pan-active {
          animation: backgroundMove 20s ease-in-out infinite;
        }
      `}</style>

      {/* --- HERO TOP SECTION --- */}
      <section className="relative max-w-[1440px] mx-auto px-6 lg:px-[119px] pt-[120px] md:pt-[160px] pb-32 flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Interactive Particle Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-[#E6F6EE] rounded-full blur-[120px] -z-10 animate-pulse" />

        <div className="w-full max-w-[650px] z-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#E6F6EE] border border-[#00A550]/20 text-[#00A550] text-sm font-medium tracking-wide">
             OUR WORKFLOW & PROCESS
          </div>
          
          <h1 className="text-[38px] md:text-[56px] font-bold leading-[115%] mb-6 shine-text" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Get Insights Into Our Processes And Workflow
          </h1>
          
          <p className="text-[18px] md:text-[20px] font-light leading-[150%] text-[#545454] mb-10 max-w-[540px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Whether you’re here to turn an idea into a digital product or to grow as a tech professional, 
            our process is built to guide you seamlessly from concept to reality.
          </p>

          <div className="flex flex-wrap items-center gap-[20px]">
            <Link to="/contact">
              <button className="h-[56px] bg-[#00A550] rounded-[100px] px-[36px] py-[12px] flex items-center gap-3 transition-all duration-300 hover:bg-[#008f44] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,165,80,0.3)] group">
                <span className="text-sm font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'Funnel Display, sans-serif' }}>LET'S BUILD</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.33334V12.6667M12.6667 8L8 3.33334L3.33333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </Link>

            <Link to="/apply">
              <button className="h-[56px] bg-white border-2 border-[#E6F6EE] rounded-[100px] px-[36px] py-[12px] flex items-center gap-3 transition-all duration-300 hover:border-[#00A550] hover:scale-105 group shadow-sm">
                <span className="text-sm font-bold text-[#333333] uppercase tracking-wider" style={{ fontFamily: 'Funnel Display, sans-serif' }}>APPLY FOR INTERNSHIP</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div 
          className="relative w-full max-w-[450px] h-[450px] flex items-center justify-center"
          style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`, transition: 'transform 0.1s ease-out' }}
        >
          <img src={blob1} alt="" className="absolute z-0 animate-float" style={{ width: '300px', opacity: 0.4, filter: 'hue-rotate(90deg)', left: '10%' }} />
          <div className="relative z-10 w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-[#00A550]/10 rounded-full blur-[80px]" />
            <img src={howItWorksImg} alt="Workflow" className="relative z-10 w-[85%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in zoom-in duration-1000" />
          </div>
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="w-full py-24 relative overflow-hidden bg-white">
        {/* Visible & Moving Background Texture */}
        <div 
          className="absolute inset-0 z-0 opacity-15 grayscale pointer-events-none bg-pan-active"
          style={{ 
            backgroundImage: `url(${bgTexture})`,
            backgroundSize: '120% 120%',
            backgroundPosition: 'center',
          }}
        />

        <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10">
          <div 
            ref={containerRef}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start border border-[#00A550]/20 rounded-[40px] p-8 md:p-16 bg-white/85 backdrop-blur-xl shadow-[0_32px_64px_-12px_rgba(0,165,80,0.12)]"
          >
            <div className="w-full lg:flex-1 flex flex-col gap-12 relative">
              <div className="absolute left-[25px] md:left-[35px] top-10 bottom-10 w-[2px] bg-gray-100" />
              
              {/* Reduced Outer Glow Spider Line */}
              <div 
                className="absolute left-[25px] md:left-[35px] top-10 w-[2.5px] bg-[#00A550] transition-all duration-500 ease-out origin-top shadow-[0_0_4px_rgba(0,165,80,0.4)]"
                style={{ height: `${scrollProgress * 92}%` }}
              />

              {steps.map((step) => (
                <div key={step.id} className="flex flex-col gap-6 relative z-10 group step-card-hover rounded-2xl p-4 -ml-4">
                  <div className="flex items-start gap-6 md:gap-10">
                    <div className="flex-shrink-0 w-[50px] md:w-[70px] h-[50px] md:h-[70px] border-2 border-[#E6F6EE] group-hover:border-[#00A550] rounded-2xl flex items-center justify-center bg-white z-20 shadow-md transition-all duration-500 group-hover:rotate-6">
                      <span className="text-[20px] md:text-[32px] font-bold text-[#333333] group-hover:text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.id}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[20px] md:text-[24px] font-semibold text-[#333333] mb-3 group-hover:text-[#00A550] transition-colors" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-[15px] md:text-[17px] font-light text-[#545454] leading-[1.6]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[450px] flex justify-center lg:sticky lg:top-40">
              <div className="relative group p-4">
                <div className="absolute inset-0 bg-[#00A550] opacity-10 blur-[80px] rounded-full" />
                <img src={strategyImg} alt="Strategy" className="relative z-10 w-full max-w-[320px] md:max-w-none h-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 drop-shadow-2xl animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksHero;