
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const backgroundImage = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80";

export default function BaasSection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(120deg, #ea384c 0%, #f81568 100%),
          url('${backgroundImage}')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Accelerate Your Banking Transformation with Finexsus
            </h2>
            <p className="text-lg opacity-90 mb-8 text-white drop-shadow">
              Launch next-generation financial services in just 8 weeks with our fully integrated, API-driven Banking as a Service (BaaS) platform. Finexsus delivers 260+ ready-to-use APIs for seamless implementation of digital banking services.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span className="text-white">260+ ready-to-use APIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span className="text-white">Compliant with regulatory standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span className="text-white">Enterprise-grade security</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span className="text-white">Scalable architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span className="text-white">Implementation in just 8 weeks</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/products/finexus">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/20 hover:bg-white/30">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
          
          {/* Right side - API illustration */}
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm shadow-lg border border-white/10">
            <div className="aspect-video bg-white/10 rounded-md p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2 text-white">260+</div>
                <div className="text-2xl font-medium mb-4 text-white">APIs</div>
                <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                  {['Payments', 'Accounts', 'Cards', 'Loans', 'KYC', 'Reports'].map((api) => (
                    <div 
                      key={api} 
                      className="bg-white/20 px-2 py-1 rounded text-sm font-medium text-white/90"
                    >
                      {api}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center opacity-90">
              <p className="text-lg font-medium text-white">Leading BaaS Provider in MENA Region</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
