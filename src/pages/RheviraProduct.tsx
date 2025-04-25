
import React from 'react';
import RheviraLayout from '@/components/rhevira/RheviraLayout';
import HeroSection from '@/components/rhevira/HeroSection';
import NoCompromiseSection from '@/components/rhevira/NoCompromiseSection';
import AboutSection from '@/components/rhevira/AboutSection';
import ServicesSection from '@/components/rhevira/ServicesSection';
import TechStackSection from '@/components/rhevira/TechStackSection';
import FoundationSection from '@/components/rhevira/FoundationSection';
import WhyRhevirahSection from '@/components/rhevira/WhyRhevirahSection';
import BlogSection from '@/components/rhevira/BlogSection';

const RheviraProduct = () => {
  return (
    <RheviraLayout>
      <HeroSection />
      <NoCompromiseSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <FoundationSection />
      <WhyRhevirahSection />
      <BlogSection />
    </RheviraLayout>
  );
};

export default RheviraProduct;
