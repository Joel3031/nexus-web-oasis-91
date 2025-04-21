
import Layout from '@/components/layout/Layout';

export default function AboutUs() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">About Us</h1>
        <p className="text-lg mb-8">
          Learn about our company vision, mission, and the team behind Nexus Global's innovative solutions.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">About Us Page Coming Soon</h2>
          <p>We're currently updating this page with our company history, mission, vision, and team information.</p>
        </div>
      </div>
    </Layout>
  );
}
