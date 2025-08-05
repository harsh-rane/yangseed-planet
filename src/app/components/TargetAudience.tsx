'use client';
import { colors } from '@/app/constants/design-style';

interface TargetAudienceSectionProps {
  className?: string;
}

const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ className = '' }) => {
  const targetAudiences = [
    {
      title: "Desk-bound professionals who need energy without stimulants",
      image: "Professional at desk",
      description: "Perfect for busy professionals seeking natural energy boosts"
    },
    {
      title: "Busy parents juggling spreadsheets and school runs",
      image: "Parent with children",
      description: "Ideal for parents balancing work and family responsibilities"
    },
    {
      title: "Weekend warriors craving pain-free mobility",
      image: "Active person exercising",
      description: "Great for active individuals focused on recovery and mobility"
    }
  ];

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
              WHO SHOULD JOIN COMMUNITY
            </div>
          </div>
          
          <h2 
            className="text-white font-bauhaus font-bold mb-6"
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '1.1'
            }}
          >
            Who Should Join Community
          </h2>
          
          <p 
            className="text-[#BED1FF] font-inter max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.6'
            }}
          >
            If you&apos;re <span className="text-white font-semibold">35 years or older</span> and{' '}
            <span className="text-white font-semibold">feel stuck between career, family and creeping health warnings</span>, 
            our supportive, doctor-led space turns small daily habits into lifelong results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {targetAudiences.map((audience, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#52F5E5] to-[#00B1D5] p-1 group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 w-full bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500 font-inter text-sm text-center px-4">
                    {audience.image}
                  </span>
                </div>
              </div>

              <div className="text-center space-y-3">
                <h3 
                  className="text-white font-inter font-semibold group-hover:text-[#52F5E5] transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    lineHeight: '1.4'
                  }}
                >
                  {audience.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="inline-block mb-6">
            <div 
              className="px-6 py-3 rounded-full text-white font-inter font-medium text-sm"
              style={{
                background: `linear-gradient(135deg, ${colors.aquaGreen}20 0%, ${colors.skyBlue}20 100%)`,
                border: `1px solid ${colors.aquaGreen}40`
              }}
            >
              OUR BLOG
            </div>
          </div>

          <h2 
            className="text-white font-bauhaus font-bold"
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '1.1'
            }}
          >
            Knowledge is health power
          </h2>

          <p 
            className="text-[#BED1FF] font-inter max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.6'
            }}
          >
            Your journey starts with understanding your body, habits, and choices. Explore our blogs
            for expert tips, ingredient breakdowns, and deep dives on how to live a healthy lifestyle — 
            and why it&apos;s the best investment you can make.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;