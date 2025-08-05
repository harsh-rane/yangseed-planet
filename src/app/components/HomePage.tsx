'use client';
import { colors } from '@/app/constants/design-style';
import Image from 'next/image';

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className = '' }) => {

  return (
    <section
      className={`min-h-screen pt-20 relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.blue1} 0%, ${colors.blue2} 50%, ${colors.blue3} 100%)`
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/pexels-herman-io-1933116-3584309.png')`, // <-- Replace with your image path
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className="text-white font-bauhaus font-bold leading-none custom-title"
                style={{
                  fontSize: 'clamp(48px, 8vw, 60px)',
                  lineHeight: '1'
                }}
              >
                The Exclusive
                <br />
                Global Community
                <br />
                for Holistic
                <br />
                Wellness
              </h1>

              <div className="space-y-4">
                <p
                  className="text-white font-inter max-w-md"
                >
                  Get insider knowledge, connect with like-minded people, and enjoy
                  exclusive discounts on health & wellness products.
                </p>

                <p
                  className="text-white font-inter"
                  style={{
                    fontSize: 'clamp(16px, 1.8vw, 20px)',
                    lineHeight: '1.5',
                    fontWeight: '400'
                  }}
                >
                  All in one inspiring place.
                </p>
              </div>
            </div>

            <button
              className="inline-flex items-center px-8 py-4 text-black font-inter font-semibold rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{
                background: colors.ctaGradient,
                fontSize: 'clamp(16px, 1.5vw, 18px)'
              }}
            >
              Join the Community
            </button>

           
          </div>

          <div className="relative w-full h-[600px] lg:h-[700px]">
            {/* Top left - large portrait */}
            <div className="absolute top-0 left-20 w-44 h-64 rounded-3xl overflow-hidden shadow-2xl  z-10">
              <Image
                src={"/Rectangle 31727.png"}
                width={44}
                height={64}
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top center - small square */}
            <div className="absolute top-0 left-67 w-36 h-36 rounded-3xl overflow-hidden shadow-2xl  z-10">
              <Image
                src={"/Rectangle 31722.png"}
                width={30}
                height={40}
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top right - tall portrait */}
            <div className="absolute top-0 right-0 w-40 h-60 rounded-3xl overflow-hidden shadow-2xl z-15">
              <Image
                src={"/Rectangle 31721.png"}
                width={30}
                height={40}
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle left - medium square */}
            <div className="absolute top-70 left-34 w-26 h-26 rounded-3xl overflow-hidden shadow-2xl z-22">
              <Image
                src={"/Layer_2.svg"}
                width={30}
                height={40}
                alt="Community member"
                className="w-full h-full "
              />
            </div>

            <div className="absolute top-38 left-67 w-36 h-64 rounded-3xl overflow-hidden shadow-2xl  z-10">
              <Image
                src={"/Rectangle 31724.png"}
                width={30}
                height={40}
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Middle right - small portrait */}
            <div className="absolute top-62 right-0 w-40 h-42 rounded-3xl overflow-hidden shadow-2xl  z-30">
              <Image
                src={"/Rectangle 31726.png"}
                width={30}
                height={40}
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom left - medium portrait */}
            <div className="absolute bottom-8 left-67 top-104 w-36 h-40 rounded-3xl overflow-hidden shadow-2xl z-20">
              <Image
                src={"/Rectangle 31725.png"}
                width={30}
                height={40}
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right - large square */}
            <div className="absolute top-106 right-0 w-40 h-64 rounded-3xl overflow-hidden shadow-2xl  z-10">
              <Image
                src={"/Rectangle 31723.png"}
                width={30}
                height={40}
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-12 right-67 bg-grey-100 bg-opacity-95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl z-40">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={"/Ellipse 10.svg"} width={30} height={40} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={"/Ellipse 11.svg"} width={30} height={40} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={"/Ellipse 12.svg"} width={30} height={40} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-slate-800 font-semibold text-sm whitespace-nowrap">Connect. Grow. Thrive.</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                <div className="w-6 h-4 bg-gradient-to-r from-[#52F5E5] to-[#00B1D5] rounded-sm"></div>
              </div>
              <span className="text-slate-800 font-semibold text-sm whitespace-nowrap">Real People. Real Growth.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomePage;