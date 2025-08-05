'use client';

import Image from 'next/image';
import { colors } from '@/app/constants/design-style';

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`py-20 lg:py-32 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${colors.blue2} 0%, ${colors.blue3} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="text-white font-bauhaus font-bold mb-6"
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '1.1',
            }}
          >
            Achieve your health goals
            <br />
            as you grow with us
          </h2>
          <p
            className="text-[#BED1FF] font-inter max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.5',
            }}
          >
            We blend evidence-based guidance, bite-size learning and peer support
            so you can move from I should to I do every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src={"/pexels-herman-io-1933116-3584309.png"}
              alt="Forums Community"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3
              className="text-white font-bauhaus font-bold"
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: '1.2',
              }}
            >
              Forums
            </h3>
            <p
              className="text-[#BED1FF] font-inter"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '1.6',
              }}
            >
              Connect with like-minded people in our <span className="font-semibold">online wellness community</span>, share your story, and support others on their journey to a <span className="font-semibold">healthy lifestyle</span>—your first step to stronger <span className="font-semibold">social wellness</span>.
            </p>
            <button
              className="inline-flex items-center px-6 py-3 text-white font-inter font-semibold rounded-full border-2 border-white hover:bg-white hover:text-[#001122] transition-all duration-300"
              style={{
                fontSize: 'clamp(14px, 1.5vw, 16px)',
              }}
            >
              Join the Conversation
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h3
              className="text-white font-bauhaus font-bold"
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: '1.2',
              }}
            >
              Courses
            </h3>
            <p
              className="text-[#BED1FF] font-inter"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '1.6',
              }}
            >
              Learn how to build healthy lifestyle habits and maintain them, through step-by-step, doctor-designed courses that fit into your busy life.
            </p>
            <button
              className="inline-flex items-center px-6 py-3 text-white font-inter font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{
                background: colors.ctaGradient,
                fontSize: 'clamp(14px, 1.5vw, 16px)',
              }}
            >
              Start Learning Healthy Habits
            </button>
          </div>

          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src={"/pexels-herman-io-1933116-3584309.png" }
              alt="Courses Learning"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
