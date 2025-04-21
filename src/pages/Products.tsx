
import Layout from '@/components/layout/Layout';

export default function Products() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Our Products</h1>
        <p className="text-lg mb-8">
          Explore our range of innovative products designed to transform your business operations.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Products Coming Soon</h2>
          <p>We're currently updating this page with detailed information about our products.</p>
        </div>
      </div>
    </Layout>
  );
}
