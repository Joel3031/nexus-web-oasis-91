
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NoCompromiseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            No Compromises Needed with RHEVIRA.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-10">
            With RHEVIRA, you don't have to choose between performance,
            security, and scalability. RHEVIRA ensures your infrastructure stays
            secure, optimized, and resilient — all while accelerating critical
            operations like development, deployment, and data management.
            Empower your business with faster delivery, stronger security, and
            unmatched efficiency — all in one platform.
          </p>
          <div className="text-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Experience the flow <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
