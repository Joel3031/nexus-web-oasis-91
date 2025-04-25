
import React from 'react';
import CloudLayout from '@/components/cloud/CloudLayout';
import HeroSection from '@/components/cloud/HeroSection';
import WhyCloudSection from '@/components/cloud/WhyCloudSection';
import YourCloudSection from '@/components/cloud/YourCloudSection';
import ServicesSection from '@/components/cloud/ServicesSection';
import ProcessSection from '@/components/cloud/ProcessSection';
import BenefitsSection from '@/components/cloud/BenefitsSection';
import FaqSection from '@/components/cloud/FaqSection';

const CloudProduct = () => {
  return (
    <CloudLayout>
      <HeroSection />
      <WhyCloudSection />
      <YourCloudSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <FaqSection />
    </CloudLayout>
  );
};

export default CloudProduct;
