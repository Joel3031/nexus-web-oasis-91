
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-blue-900 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545987796-200677ee1011?q=80')] bg-cover bg-center mix-blend-overlay z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              DevOps Solutions Built for Speed, Agility, and Growth
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Nextgen AI provides DevOps Consulting Services that boost your
              business by reducing costs while speeding releases while creating resilient
              high-performance systems effortlessly.
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
          className="relative block w-full h-12 text-slate-50 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
