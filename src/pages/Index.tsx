
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import BaasSection from '@/components/home/BaasSection';
import OfficesSection from '@/components/home/OfficesSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <BaasSection />
      <OfficesSection />
    </Layout>
  );
};

export default Index;
