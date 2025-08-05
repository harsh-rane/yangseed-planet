'use client';
import { useState } from 'react';
import { colors } from '@/app/constants/design-style';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className={`w-full bg-transparent absolute top-0 left-0 right-0 z-50  `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Image
              src="/image 329.png"
              alt="Yangseed Planet Logo"
              width={40}
              height={40}
            />
            <span className="text-white font-inter font-medium text-xl">
              <Link 
                href={"/"}
              >
              <Image
                src="/Group 1216193939.svg"
                alt="Yangseed Planet Logo"
                width={80}
                height={80}
              />
              </Link>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/community" 
              className="text-white font-inter font-medium hover:text-[#52F5E5] transition-colors duration-300"
            >
              Community
            </Link>
            <a 
              href="#store" 
              className="text-white font-inter font-medium hover:text-[#52F5E5] transition-colors duration-300"
            >
              Store
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white font-inter font-medium px-6 py-2 hover:text-[#52F5E5] transition-colors duration-300">
              Login
            </button>
            <button 
              className={`bg-white text-${colors.blue2} font-inter font-medium px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Become a Member
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#002259]">
            <div className="flex flex-col space-y-4">
              <a href="#community" className="text-white font-inter font-medium py-2">
                Community
              </a>
              <a href="#store" className="text-white font-inter font-medium py-2">
                Store
              </a>
              <button className="text-white font-inter font-medium py-2 text-left">
                Login
              </button>
              <button 
                className="bg-gradient-to-r from-[#52F5E5] to-[#00B1D5] text-white font-inter font-medium px-6 py-2 rounded-full w-fit"
                style={{
                  background: colors.ctaGradient
                }}
              >
                Become a Member
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;