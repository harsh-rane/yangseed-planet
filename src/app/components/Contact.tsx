'use client';
import { colors } from '@/app/constants/design-style';
import { useState } from 'react';

interface ContactSectionProps {
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <section 
      className={`py-20 lg:py-32 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${colors.blue3} 0%, ${colors.blue1} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 
                className="text-white font-bauhaus font-bold mb-4"
                style={{
                  fontSize: 'clamp(32px, 6vw, 48px)',
                  lineHeight: '1.1'
                }}
              >
                Contact Us
              </h2>
              <p 
                className="text-[#BED1FF] font-inter"
                style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  lineHeight: '1.6'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="firstName" 
                  className="block text-white font-inter font-medium mb-2"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter first name"
                  className="w-full px-4 py-3 rounded-xl border border-[#002259] bg-[#001122] text-white font-inter placeholder-[#BED1FF] focus:outline-none focus:border-[#52F5E5] transition-colors duration-300"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="lastName" 
                  className="block text-white font-inter font-medium mb-2"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter last name"
                  className="w-full px-4 py-3 rounded-xl border border-[#002259] bg-[#001122] text-white font-inter placeholder-[#BED1FF] focus:outline-none focus:border-[#52F5E5] transition-colors duration-300"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-white font-inter font-medium mb-2"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#002259] bg-[#001122] text-white font-inter placeholder-[#BED1FF] focus:outline-none focus:border-[#52F5E5] transition-colors duration-300"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-white font-inter font-medium mb-2"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell us what you are looking for"
                  className="w-full px-4 py-3 rounded-xl border border-[#002259] bg-[#001122] text-white font-inter placeholder-[#BED1FF] focus:outline-none focus:border-[#52F5E5] transition-colors duration-300 resize-vertical"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-white font-inter font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: colors.ctaGradient,
                  fontSize: 'clamp(16px, 1.8vw, 18px)'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#52F5E5] to-[#00B1D5] p-1">
                <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500 font-inter text-center px-8">
                    Wellness/Self-care Image<br />
                    (Hands applying cream/lotion)
                  </span>
                </div>
              </div>
              
              <div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${colors.aquaGreen} 0%, ${colors.skyBlue} 100%)`
                }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${colors.springGreen} 0%, ${colors.aquaGreen} 100%)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;