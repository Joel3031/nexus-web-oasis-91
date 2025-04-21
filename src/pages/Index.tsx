
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import BaasSection from '@/components/home/BaasSection';
import OfficesSection from '@/components/home/OfficesSection';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <BaasSection />
        <OfficesSection />
      </div>
    </Layout>
  );
};

export default Index;
