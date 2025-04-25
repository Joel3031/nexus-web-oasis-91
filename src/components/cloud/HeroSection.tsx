
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="absolute inset-0 opacity-10 bg-[url('/cloud-pattern.svg')] bg-center bg-no-repeat bg-contain"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Build a Cloud Foundation That Grows with You...
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Take the guesswork out of cloud setup. We design and build scalable, secure,
            and high-performance cloud architectures tailored to your business goals — whether
            you're starting fresh or migrating from on-premises infrastructure.
          </p>
          <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
