'use client';
import { colors } from '@/app/constants/design-style';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerLinks = {
    company: [
      { name: 'Home', href: '#' },
      { name: 'Community', href: '#community' },
      { name: 'Store', href: '#store' },
      { name: 'Blogs', href: '#blogs' },
      { name: 'About Us', href: '#about' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Terms of Use', href: '#' }
    ]
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35zm7.718 0c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  return (
    <footer 
      className={`${className}`}
      style={{
        background: `linear-gradient(180deg, ${colors.blue1} 0%, ${colors.blue2} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#52F5E5] to-[#00B1D5] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-white font-inter font-medium text-xl">
                Yangseed Planet
              </span>
            </div>

            <p 
              className="text-[#BED1FF] font-inter mb-8 max-w-md"
              style={{
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                lineHeight: '1.6'
              }}
            >
              With 20+ years of experience, my wife Dr. Olivia and I
              have helped thousands find their path to optimal health. 
              At Yangseed, we help you overcome other related
              recommendations and provide a solid framework.
            </p>

            <button 
              className="inline-flex items-center px-6 py-3 text-white font-inter font-medium rounded-full border border-white hover:bg-white hover:text-[#001122] transition-all duration-300"
              style={{
                fontSize: 'clamp(14px, 1.5vw, 16px)'
              }}
            >
              Contact Us
            </button>
          </div>

          <div>
            <h3 className="text-white font-inter font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-[#BED1FF] font-inter hover:text-white transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(14px, 1.5vw, 16px)'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-inter font-semibold text-lg mb-6">
              Legal
            </h3>
            <ul className="space-y-4 mb-8">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-[#BED1FF] font-inter hover:text-white transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(14px, 1.5vw, 16px)'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-white font-inter font-semibold text-base mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full bg-gradient-to-r from-[#52F5E5] to-[#00B1D5] text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 lg:mt-16">
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </div>
          </a>

          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div 
        className="border-t border-[#002259] py-6"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p 
            className="text-center text-[#BED1FF] font-inter"
            style={{
              fontSize: 'clamp(12px, 1.5vw, 14px)'
            }}
          >
            Yangseed Planet © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;