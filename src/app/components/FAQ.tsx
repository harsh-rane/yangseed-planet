'use client';
import { colors } from '@/app/constants/design-style';
import { useState } from 'react';

interface FAQSectionProps {
  className?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const faqs: FAQItem[] = [
    {
      question: "What does Yangseed stand for?",
      answer: "Yangseed represents the seed of transformation in your wellness journey. We believe that small, consistent actions can grow into life-changing habits that transform your health and wellbeing."
    },
    {
      question: "What exactly is a holistic wellness club?",
      answer: "It's a private space that covers mental wellness, movement, nutrition and stress management—everything you need for wellness living in one place."
    },
    {
      question: "How does the online wellness community work?",
      answer: "Our online community provides a supportive environment where members can connect, share experiences, access expert-led content, and participate in wellness challenges together."
    },
    {
      question: "How much does membership cost?",
      answer: "We offer flexible membership options to suit different needs and budgets. Contact us for detailed pricing information and current promotions."
    },
    {
      question: "Who should join Yangseed?",
      answer: "Yangseed is perfect for individuals aged 35+ who are juggling career and family responsibilities while wanting to prioritize their health and wellness."
    },
    {
      question: "Are the programs evidence-based?",
      answer: "Yes, all our programs are designed by healthcare professionals and based on scientific research and evidence-based practices in wellness and preventive health."
    },
    {
      question: "Do I need special equipment?",
      answer: "Most of our programs can be done with minimal or no equipment. We focus on sustainable practices that fit into your daily routine without requiring expensive gear."
    },
    {
      question: "Can total beginners join?",
      answer: "Absolutely! Our programs are designed to meet you where you are in your wellness journey, with modifications and progressions for all fitness and experience levels."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className={`py-20 lg:py-32 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${colors.blue2} 0%, ${colors.blue3} 100%)`
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            className="text-white font-bauhaus font-bold"
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '1.1'
            }}
          >
            FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-[#002259] rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === index 
                  ? `linear-gradient(135deg, ${colors.blue1} 0%, ${colors.blue2} 100%)`
                  : 'transparent'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-[#00122220] transition-colors duration-300"
              >
                <h3 
                  className="text-white font-inter font-medium pr-4"
                  style={{
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    lineHeight: '1.4'
                  }}
                >
                  {faq.question}
                </h3>
                
                <div className="flex-shrink-0">
                  <div 
                    className={`w-6 h-6 rounded-full border-2 border-[#52F5E5] flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg 
                      className="w-3 h-3 text-[#52F5E5]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 lg:px-8 pb-6">
                  <p 
                    className="text-[#BED1FF] font-inter"
                    style={{
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      lineHeight: '1.6'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;