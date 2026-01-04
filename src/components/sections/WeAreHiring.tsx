import React from 'react';
import { Link } from 'react-router-dom';

const WeAreHiring: React.FC = () => {
  return (
    <section className="w-full bg-[#E6F6EE] py-20">
      <div className="w-full max-w-[1440px] mx-auto px-[109px]">
        {/* White Banner Container */}
        <div className="w-[1232px] h-[215px] bg-white rounded-[40px] px-10 py-20 flex items-center gap-[101px]">
          {/* Heading */}
          <h2 
            className="w-[279px] h-[48px] text-[40px] font-semibold leading-[120%] text-center text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            We Are Hiring!
          </h2>

          {/* Description */}
          <p 
            className="w-[437px] h-[66px] text-base font-light leading-[140%] text-[#333333]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Engineers, designers, and strategists united by one<br />
            mission—innovation.<br />
            Together, we turn bold ideas into real solutions.
          </p>

          {/* Apply Button */}
        <Link to="/apply">
          <button className="w-[207px] h-[48px] bg-[#00A550] border border-[#00A550] rounded-[20px] px-[10px] py-[10px] flex items-center justify-center">
            <span 
              className="text-sm font-medium leading-[140%] text-[#E6F6EE]"
              style={{ fontFamily: 'Funnel Display, sans-serif' }}
            >
              APPLY FOR INTERNSHIP
            </span>
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default WeAreHiring;