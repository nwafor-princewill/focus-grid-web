import React from 'react';

const Testimonials: React.FC = () => {
  const testimonialData = [
    {
      name: "Osamoghena E...",
      role: "Payloop | founder | fintech",
      testimonial: "Focus Grid didn't just build our product — they refined our idea. In 8 weeks, we went from a concept on paper to a functional MVP that impressed investors. Their attention to detail and speed is unmatched.",
      isCenter: false
    },
    {
      name: "Osamoghena E...",
      role: "Payloop | founder | fintech",
      testimonial: "Focus Grid didn't just build our product — they refined our idea. In 8 weeks, we went from a concept on paper to a functional MVP that impressed investors. Their attention to detail and speed is unmatched.",
      isCenter: true
    },
    {
      name: "Osamoghena E...",
      role: "Payloop | founder | fintech",
      testimonial: "Focus Grid didn't just build our product — they refined our idea. In 8 weeks, we went from a concept on paper to a functional MVP that impressed investors. Their attention to detail and speed is unmatched.",
      isCenter: false
    }
  ];

  return (
    <section className="w-full max-w-[1440px]  mx-auto flex flex-col items-center justify-center gap-[65px] py-20">
      {/* Header Section */}
      <div className="w-[672px] h-[174px] flex flex-col items-center gap-5">
        {/* Testimonials Badge */}
        <div className="w-[134px] h-[42px] bg-[#E6F6EE] rounded-[20px] px-5 py-[10px] flex items-center justify-center">
          <span 
            className="text-base font-light leading-[140%] text-[#1E1E1E]"
            style={{ fontFamily: 'Funnel Display, sans-serif' }}
          >
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 
          className="w-[672px] h-12 text-[40px] font-semibold leading-[120%] text-center text-[#333333]"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          What Our Customers Are Saying
        </h2>

        {/* Description */}
        <p 
          className="w-[597px] h-11 text-base font-light leading-[140%] text-center text-[#333333]"
          style={{ fontFamily: 'Funnel Display, sans-serif' }}
        >
          Don't take our word for it — hear how Focus Grid has helped businesses launch faster and creatives grow their careers.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="w-full overflow-hidden">
        <div className="w-[1840px] h-[282px] flex gap-5 ml-[calc(50%-920px)]">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`w-[600px] h-[282px] rounded-[21.2px] p-[47px_39px] flex flex-col gap-5 ${
                testimonial.isCenter
                  ? 'bg-[#333333] border-[3.18px] border-[#33B773]'
                  : 'bg-[#E6F6EE] border-[3.18px] border-[#33B773]'
              }`}
            >
              {/* Profile and Stars Section */}
              <div className="w-[522px] h-[80px] flex items-center gap-[69px]">
                {/* Profile Image */}
                <div className="w-[80px] h-[80px] rounded-full bg-gray-400">
                  {/* Image will go here */}
                </div>

                {/* Name and Role */}
                <div className="w-[216px] h-[63.42px] flex flex-col gap-[7.42px]">
                  <h3 
                    className={`text-xl font-semibold leading-[140%] ${testimonial.isCenter ? 'text-white' : 'text-[#333333]'}`}
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {testimonial.name}
                  </h3>
                  <p 
                    className={`text-sm font-light leading-[140%] ${testimonial.isCenter ? 'text-[#E6E6E6]' : 'text-[#333333]'}`}
                    style={{ fontFamily: 'Funnel Display, sans-serif' }}
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* Stars */}
                <div className="w-[135.69px] h-[25.44px] flex gap-[2.12px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="21.2"
                      height="20.14"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-[2.65px] ml-[2.12px]"
                    >
                      <path
                        d="M10.5 0L12.8541 7.60081H20.8042L14.4751 12.2984L16.8292 19.8992L10.5 15.2016L4.17076 19.8992L6.52486 12.2984L0.195815 7.60081H8.1459L10.5 0Z"
                        fill={star <= 4 ? '#FFBF00' : '#F9F9F9'}
                      />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p 
                className={`w-[522px] h-[88px] text-base font-light leading-[140%] ${
                  testimonial.isCenter ? 'text-[#E6E6E6]' : 'text-[#333333]'
                }`}
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;