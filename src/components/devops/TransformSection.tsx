
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TransformSection() {
  return (
    <section className="py-20 bg-white" id="transform">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left side: Image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl hover-scale transition">
              <img 
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80" 
                alt="DevOps Automation Pipeline" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right side: Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Transform Operations with End-to-End DevOps Automation
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-20 mb-8"></div>
            <p className="text-lg mb-6 text-slate-600">
              At Nextgen AI, we integrate automation, monitoring, and cloud-native solutions into a powerful, unified pipeline. From rapid onboarding to continuous integration, development, and deployment — we optimize the entire software delivery lifecycle across leading cloud platforms.
            </p>
            <p className="text-lg mb-8 text-slate-600">
              Our approach centers on end-to-end automation, driving scalability, improving team collaboration, and eliminating manual processes. With Nextgen AI's DevOps solutions, you'll achieve faster, more reliable releases — keeping your business flexible, resilient, and ahead of the curve.
            </p>
            <a href="#process" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors story-link">
              Explore our process
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
