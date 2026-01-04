import React from 'react';
import lightning from '../../assets/images/lightning.png';
import structure from '../../assets/images/structure.png';
import scalable from '../../assets/images/scalable.png';
import world from '../../assets/images/world.png';

const WhyFocusGrid: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Fast Execution",
      icon: lightning,
      width: "105.47493743896484px"
    },
    {
      id: 2,
      title: "Structured workflow",
      icon: structure,
      width: "127.77044677734375px"
    },
    {
      id: 3,
      title: "Scalable Products",
      icon: scalable,
      width: "105.47493743896484px"
    },
    {
      id: 4,
      title: "Real-world Standards",
      icon: world,
      width: "105.47493743896484px"
    }
  ];

  return (
    <section className="w-full bg-[#E6F6EE] py-20"> {/* Outer background */}
      <div className="max-w-[1440px] mx-auto flex justify-center px-4">
        {/* White rounded container */}
        <div 
          className="w-full max-w-[1320px] bg-white rounded-[40px] px-10 py-20 flex flex-col items-center gap-[59px]"
          style={{
            height: '486.4775695800781px'
          }}
        >
          {/* Header Section */}
          <div className="w-[597px] flex flex-col items-center gap-5">
            <h2 
              className="w-[574px] h-12 text-[40px] font-semibold leading-[120%] text-center text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Why Focus Grid works for you
            </h2>
            
            <p 
              className="w-[597px] h-11 text-base font-light leading-[140%] text-center text-[#333333]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              Engineers, designers, and strategists united by one mission—innovation.
              <br />
              Together, we turn bold ideas into real solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex justify-center items-start gap-20">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="flex flex-col items-center gap-[13.72px]"
                style={{
                  width: feature.width,
                  height: '155.47756958007812px'
                }}
              >
                {/* Black Circle */}
                <div 
                  className="w-[101.18733215332031px] h-[97.75725555419922px] bg-[#333333] rounded-full flex items-center justify-center p-[18.87px_20.58px]"
                >
                  {/* Icon */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[40px] h-[40px] object-contain"
                    />
                  </div>
                </div>

                {/* Feature Title */}
                <p 
                  className="w-full h-11 text-base font-light leading-[140%] text-center text-[#333333]"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                >
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFocusGrid;