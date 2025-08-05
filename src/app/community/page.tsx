'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Users, Heart, Shield, Star, CheckCircle, MessageCircleMore, GraduationCap, Sprout } from 'lucide-react';
import { colors } from '../constants/design-style';

const HealthWellnessLanding: React.FC = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: `linear-gradient(135deg, ${colors.blue1} 0%, ${colors.blue2} 50%, ${colors.blue3} 100%)`,
      }}
    >
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.blue1} 0%, ${colors.blue2} 50%, ${colors.blue3} 100%)`,
            backgroundImage: `linear-gradient(to bottom, rgba(0, 17, 34, 0) 50%, #001122 90%),  url('/bg-image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div 
            //   className="inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-6 py-3 border"
            //   style={{
            //     backgroundColor: colors.white + '10',
            //     borderColor: colors.white + '20'
            //   }}
            >
              <span className="text-sm font-medium uppercase" style={{ color: colors.white }}>The Yangseed Community</span>
            </div>
            
            <h1 
              className="text-5xl md:text-7xl font-bold leading-tight text-white"
              style={{
                // background: `linear-gradient(to right, ${colors.white}, ${colors.babyBlue}, ${colors.aquaGreen})`,
                // WebkitBackgroundClip: 'text',
                // WebkitTextFillColor: 'transparent',
                // backgroundClip: 'text'
              }}
            >
              Your Private Community<br />
              <span className="text-4xl md:text-6xl">for Health & Wellness</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.babyBlue }}
            >
              Welcome to Yangseed—a doctor‑endorsed online wellness community where health journeys are shared, questions are welcomed and members lift one another toward a healthier lifestyle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button 
                className="group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-black"
                style={{
                  background: colors.ctaGradient,
                  boxShadow: `0 0 30px ${colors.skyBlue}25`
                }}
              >
                Join the Conversation
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: colors.skyBlue }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full animate-pulse delay-1000"
            style={{ backgroundColor: colors.aquaGreen }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse delay-500"
            style={{ backgroundColor: colors.aquaGreen }}
          ></div>
        </div>
      </section>

      <section 
        className="py-20"
        style={{
         background: `${colors.blue1}`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="text-center mb-16">
            <p className='text-white uppercase'>What you&apos;ll find inside</p>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Support, Knowledge, and<br />Real Stories
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
            //   style={{ color: colors.babyBlue }} 
            >
              Gain the tools, insights, and encouragement you need to sustain a healthy lifestyle, build healthy habits, and invest in your well-being — all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="group backdrop-blur-sm border rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: colors.white + '05',
                borderColor: colors.white + '10'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: colors.skyBlue }}
              >
                <MessageCircleMore />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.babyBlue }}>Health Discussions</h3>
              <p className="leading-relaxed" style={{ color: colors.babyBlue + 'CC' }}>
                Ask questions, share insights, and dive into topics with others who share your commitment to healthy living.
              </p>
            </div>

            <div 
              className="group backdrop-blur-sm border rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: colors.white + '05',
                borderColor: colors.white + '10'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: colors.aquaGreen }}
              >
                <GraduationCap />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.babyBlue }}>Expert Access</h3>
              <p className="leading-relaxed" style={{ color: colors.babyBlue + 'CC' }}>
                Join live Q&As, get Dr. Ron’s perspective on trending health issues, and access exclusive member-only content from experienced health and wellness coaches.
              </p>
            </div>

            <div 
              className="group backdrop-blur-sm border rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: colors.white + '05',
                borderColor: colors.white + '10'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.aquaGreen}, ${colors.skyBlue})`
                }}
              >
                <Sprout />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.babyBlue }}>Shared Progresss</h3>
              <p className="leading-relaxed" style={{ color: colors.babyBlue + 'CC' }}>
                Celebrate wins — big or small. Whether it’s sleeping better, eating healthier, or building lasting habits, our global wellness community grows stronger together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20"
        style={{
                   background: `${colors.blue1}`

        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-8"
                style={{
                  background: `linear-gradient(to right, ${colors.babyBlue}, ${colors.aquaGreen})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                All-in-One Focused<br />and Impactful
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="rounded-full p-1 mt-1"
                    style={{ backgroundColor: colors.aquaGreen }}
                  >
                    <CheckCircle className="w-4 h-4" style={{ color: colors.blue1 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.babyBlue }}>Daily Check-ins</h3>
                    <p style={{ color: colors.babyBlue + 'CC' }}>Track your progress with gentle daily prompts and mood assessments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    className="rounded-full p-1 mt-1"
                    style={{ backgroundColor: colors.aquaGreen }}
                  >
                    <CheckCircle className="w-4 h-4" style={{ color: colors.blue1 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.babyBlue }}>Support Groups</h3>
                    <p style={{ color: colors.babyBlue + 'CC' }}>Join specialized groups based on your specific health interests and goals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    className="rounded-full p-1 mt-1"
                    style={{ backgroundColor: colors.aquaGreen }}
                  >
                    <CheckCircle className="w-4 h-4" style={{ color: colors.blue1 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.babyBlue }}>Resource Library</h3>
                    <p style={{ color: colors.babyBlue + 'CC' }}>Access curated articles, videos, and tools from trusted health professionals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    className="rounded-full p-1 mt-1"
                    style={{ backgroundColor: colors.aquaGreen }}
                  >
                    <CheckCircle className="w-4 h-4" style={{ color: colors.blue1 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.babyBlue }}>Personal Journey</h3>
                    <p style={{ color: colors.babyBlue + 'CC' }}>Document and reflect on your wellness journey with private journaling tools.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div 
                className="rounded-3xl p-8 backdrop-blur-sm border"
                style={{
                  background: `linear-gradient(135deg, ${colors.skyBlue}20, ${colors.aquaGreen}20)`,
                  borderColor: colors.white + '10'
                }}
              >
                <Image 
                  src="/community.jpg" 
                  alt="Family wellness moment - parents and children enjoying healthy activities together"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto shadow-2xl object-cover"
                  priority
                />
                <div 
                  className="absolute -bottom-4 -right-4 rounded-2xl p-4 shadow-xl"
                  style={{ backgroundColor: colors.white }}
                >
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: colors.aquaGreen }}
                    ></div>
                    <span className="text-slate-700 font-medium">2,847 active today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                           
      <section className="py-20" style={{ background: `${colors.blue1}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div 
                className="rounded-3xl p-8 backdrop-blur-sm border"
                style={{
                  background: `linear-gradient(135deg, ${colors.aquaGreen}20, ${colors.skyBlue}20)`,
                  borderColor: colors.white + '10'
                }}
              >
                <Image 
                  src="/images/meditation-wellness.jpg" 
                  alt="Person in peaceful meditation surrounded by nature, representing inner wellness"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto shadow-2xl object-cover"
                />
                <div 
                  className="absolute -top-4 -left-4 rounded-2xl p-4 shadow-xl"
                  style={{ background: colors.ctaGradient }}
                >
                  <Heart className="w-8 h-8" style={{ color: colors.white }} />
                </div>
              </div>
            </div>

            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-8"
                style={{
                  background: `linear-gradient(to right, ${colors.babyBlue}, ${colors.aquaGreen})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                &quot;You&apos;re Not Going This Alone&quot;
              </h2>
              
              <blockquote 
                className="text-xl md:text-2xl leading-relaxed mb-8 italic"
                style={{ color: colors.babyBlue }}
              >
                &quot;This community changed my perspective on wellness completely. For the first time, 
                I felt understood and supported in my journey. The connections I&apos;ve made here have 
                become some of my strongest support systems.&quot;
              </blockquote>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: colors.ctaGradient }}
                  >
                    <span className="text-white font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: colors.babyBlue }}>Sarah J.</p>
                    <p className="text-sm" style={{ color: colors.babyBlue + 'AA' }}>Member since 2023</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: colors.aquaGreen }} />
                  ))}
                  <span className="ml-2" style={{ color: colors.babyBlue + 'CC' }}>5.0 • Over 12,000 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20"
        style={{
          background: `${colors.blue1}`
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: colors.babyBlue
              }}
            >
              Real Stories of Real People
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <blockquote 
                className="text-xl md:text-2xl leading-relaxed mb-8 italic"
                style={{ color: colors.babyBlue }}
              >
                &quot;I discovered this community during one of the most challenging periods of my life. 
                The support, resources, and genuine connections I found here helped me not just cope, 
                but truly thrive. I&apos;m forever grateful.&quot;
              </blockquote>

              <div className="flex items-center space-x-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.aquaGreen}, ${colors.skyBlue})`
                  }}
                >
                  <span className="text-white font-bold">MK</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.babyBlue }}>Maria K.</p>
                  <p className="text-sm" style={{ color: colors.babyBlue + 'AA' }}>Wellness advocate & community leader</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div 
                  className="rounded-2xl p-4 border"
                  style={{
                    backgroundColor: colors.white + '05',
                    borderColor: colors.white + '10'
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: colors.aquaGreen }}>2+</div>
                  <div className="text-sm" style={{ color: colors.babyBlue + 'CC' }}>Years Active</div>
                </div>
                <div 
                  className="rounded-2xl p-4 border"
                  style={{
                    backgroundColor: colors.white + '05',
                    borderColor: colors.white + '10'
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: colors.skyBlue }}>500+</div>
                  <div className="text-sm" style={{ color: colors.babyBlue + 'CC' }}>Connections</div>
                </div>
                <div 
                  className="rounded-2xl p-4 border"
                  style={{
                    backgroundColor: colors.white + '05',
                    borderColor: colors.white + '10'
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: colors.aquaGreen }}>15+</div>
                  <div className="text-sm" style={{ color: colors.babyBlue + 'CC' }}>Groups Joined</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div 
                className="rounded-3xl p-8 backdrop-blur-sm border"
                style={{
                  background: `linear-gradient(135deg, ${colors.aquaGreen}20, ${colors.skyBlue}20)`,
                  borderColor: colors.white + '10'
                }}
              >
                <Image 
                  src="/images/nature-wellness.jpg" 
                  alt="Person in nature representing wellness journey and personal growth"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto shadow-2xl object-cover"
                />
                <div 
                  className="absolute -bottom-4 -right-4 rounded-2xl p-4 shadow-xl"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.aquaGreen}, ${colors.skyBlue})`
                  }}
                >
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20"
        style={{
          background: `linear-gradient(to top, ${colors.blue1}, ${colors.blue2})`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{
              background: `linear-gradient(to right, ${colors.babyBlue}, ${colors.aquaGreen}, ${colors.skyBlue})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Ready to Connect?
          </h2>
          
          <p 
            className="text-xl md:text-2xl mb-12 leading-relaxed"
            style={{ color: colors.babyBlue }}
          >
            Join thousands of others who have found their path to wellness through our supportive community. 
            Your journey to better health starts with a single step.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="group px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-black"
              style={{
                background: colors.ctaGradient,
                boxShadow: `0 0 40px ${colors.aquaGreen}25`
              }}
            >
              Start Your Journey Today
              <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p 
              className="text-sm"
              style={{ color: colors.babyBlue + 'AA' }}
            >
              Free to join • No credit card required • Cancel anytime
            </p>
          </div>

          <div 
            className="mt-12 flex justify-center items-center space-x-8"
            style={{ color: colors.babyBlue + 'CC' }}
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>50K+ Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-current" style={{ color: colors.aquaGreen }} />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>
              
    </div>
  );
};

export default HealthWellnessLanding;