
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function BaasSection() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Modern reddish gradient + overlayed sleek image */}
      <div className="absolute inset-0 -z-10">
        <img
          // Stylish fintech/thematic image (example Unsplash ID: photo-1494891848038-7bd202a2afeb)
          src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="w-full h-full object-cover object-center opacity-60"
          draggable={false}
        />
        {/* Reddish + slight navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f81568cc] via-[#f88865bb] to-[#001F4D99] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl bg-white/10 p-10 md:p-14 shadow-xl backdrop-blur-lg border border-white/20 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Accelerate Your Banking Transformation with Finexsus
            </h2>
            <p className="text-lg opacity-90 mb-8 text-white/90">
              Launch next-generation financial services in just 8 weeks with our fully integrated, API-driven Banking as a Service (BaaS) platform. Finexsus delivers 260+ ready-to-use APIs for seamless implementation of digital banking services.
            </p>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span>260+ ready-to-use APIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span>Compliant with regulatory standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span>Enterprise-grade security</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span>Scalable architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 text-xl">✓</span>
                <span>Implementation in just 8 weeks</span>
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
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm shadow-lg relative z-10">
            <div className="aspect-video bg-gradient-to-br from-black/20 to-black/5 rounded-md p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2 text-white">260+</div>
                <div className="text-2xl font-medium mb-4 text-white">APIs</div>
                <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                  {['Payments', 'Accounts', 'Cards', 'Loans', 'KYC', 'Reports'].map((api) => (
                    <div 
                      key={api} 
                      className="bg-white/20 px-2 py-1 rounded text-sm font-medium text-white"
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
