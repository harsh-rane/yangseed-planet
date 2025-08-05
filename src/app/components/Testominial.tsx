'use client';
import { colors } from '@/app/constants/design-style';
import { useState } from 'react';

interface TestimonialsSectionProps {
  className?: string;
}

interface Testimonial {
  name: string;
  location: string;
  title: string;
  content: string;
  fullContent: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "David R.",
      location: "Chennai",
      title: "Holistic Health Coach",
      content: "\"Praesent dapibus neque id cursus faucibus!\"",
      fullContent: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus."
    },
    {
      name: "Olivia Chen",
      location: "Singapore",
      title: "Holistic Health Coach",
      content: "\"I found a global family that inspires me to grow daily.\"",
      fullContent: "I found a global family that inspires me to grow daily. Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus."
    },
    {
      name: "Amara Okoro",
      location: "Lagos, Nigeria",
      title: "",
      content: "\"I found a global family that inspires me to grow daily.\"",
      fullContent: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus."
    },
    {
      name: "Samuel White",
      location: "Austin, Texas, USA",
      title: "",
      content: "\"The motivation and ideas I get here are next-level.\"",
      fullContent: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus."
    },
    {
      name: "Priya Nair",
      location: "Kerala, India",
      title: "",
      content: "\"From workshops to real connections, Yangseed is unmatched.\"",
      fullContent: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <section 
      className={`py-20 lg:py-32 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${colors.blue3} 0%, ${colors.blue2} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <div 
              className="px-6 py-3 rounded-full text-white font-inter font-medium text-sm"
              style={{
                background: `linear-gradient(135deg, ${colors.aquaGreen}20 0%, ${colors.skyBlue}20 100%)`,
                border: `1px solid ${colors.aquaGreen}40`
              }}
            >
              OUR TESTIMONIALS
            </div>
          </div>
          
          <h2 
            className="text-white font-bauhaus font-bold"
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '1.1'
            }}
          >
            What Our Community Is Saying
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(currentSlide * 3, (currentSlide * 3) + 3).map((testimonial, index) => (
              <div 
                key={index}
                className="group"
              >
                <div 
                  className="p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${colors.blue1} 0%, ${colors.blue2} 100%)`,
                    border: `1px solid ${colors.aquaGreen}20`
                  }}
                >
                  <div className="mb-6">
                    <h3 
                      className="text-white font-inter font-semibold mb-4"
                      style={{
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        lineHeight: '1.4'
                      }}
                    >
                      {testimonial.content}
                    </h3>
                    <p 
                      className="text-[#BED1FF] font-inter"
                      style={{
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        lineHeight: '1.6'
                      }}
                    >
                      {testimonial.fullContent}
                    </p>
                  </div>

                  <div className="border-t border-[#002259] pt-4">
                    <h4 className="text-white font-inter font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#BED1FF] font-inter text-sm">
                      {testimonial.location}
                    </p>
                    {testimonial.title && (
                      <p className="text-[#52F5E5] font-inter text-sm font-medium">
                        {testimonial.title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 mt-12">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-gradient-to-r from-[#52F5E5] to-[#00B1D5] text-white hover:shadow-lg transition-all duration-300"
              disabled={currentSlide === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-[#52F5E5] to-[#00B1D5] w-6' 
                      : 'bg-[#BED1FF]'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-gradient-to-r from-[#52F5E5] to-[#00B1D5] text-white hover:shadow-lg transition-all duration-300"
              disabled={currentSlide === Math.ceil(testimonials.length / 3) - 1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;