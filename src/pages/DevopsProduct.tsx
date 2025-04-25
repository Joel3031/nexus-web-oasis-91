
import React from 'react';
import DevopsLayout from '@/components/devops/DevopsLayout';
import HeroSection from '@/components/devops/HeroSection';
import TransformSection from '@/components/devops/TransformSection';
import ProcessSection from '@/components/devops/ProcessSection';
import ServicesSection from '@/components/devops/ServicesSection';
import ToolsSection from '@/components/devops/ToolsSection';
import WhyUsSection from '@/components/devops/WhyUsSection';
import FaqSection from '@/components/devops/FaqSection';

export default function DevopsProduct() {
  return (
    <DevopsLayout>
      <HeroSection />
      <TransformSection />
      <ProcessSection />
      <ServicesSection />
      <ToolsSection />
      <WhyUsSection />
      <FaqSection />
    </DevopsLayout>
  );
}
