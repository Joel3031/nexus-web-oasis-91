
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="absolute inset-0 opacity-10 bg-[url('/public/lovable-uploads/736b1fef-d61e-40ce-9f4b-e908f13c9134.png')] bg-center bg-no-repeat bg-contain"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Fast. Flawless. Future-Ready.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            We automate the complete deployment lifecycle from code commit to live production ensuring faster releases,
            improved quality, and rock-solid security.
          </p>
          <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
