'use client';

import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import Home from '@/app/components/HomePage';
import FeaturesSection from '@/app/components/Features';
import TargetAudienceSection from '@/app/components/TargetAudience';
import BlogSection from '@/app/components/Blog';
import TestimonialsSection from '@/app/components/Testominial';
import FAQSection from '@/app/components/FAQ';
import ContactSection from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <div className={`${inter.className} min-h-screen bg-[#001122]`}>
      <Header />
      <main>
        <Home />
        <FeaturesSection />
        <TargetAudienceSection />
        <BlogSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}