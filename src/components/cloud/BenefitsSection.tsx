
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Database, DollarSign, Layers } from 'lucide-react';

const benefits = [
  {
    title: "Tailored to Your Business",
    description: "Whether you're a startup or an enterprise, we design cloud solutions that fit your specific needs.",
    icon: <Users className="h-10 w-10 text-primary" />
  },
  {
    title: "Deep Multi-Cloud Expertise",
    description: "AWS, Azure, GCP, Oracle Cloud — we bring the right strategy for the right platform.",
    icon: <Database className="h-10 w-10 text-primary" />
  },
  {
    title: "Performance Meets Cost-Efficiency",
    description: "No wasted resources — just optimized performance, scalability, and reliability.",
    icon: <DollarSign className="h-10 w-10 text-primary" />
  },
  {
    title: "Future-Proof Design",
    description: "Built to adapt as your business evolves and technology advances.",
    icon: <Layers className="h-10 w-10 text-primary" />
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Expert Cloud Architects. Proven DevOps Approach. Future-Ready Infrastructure.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl flex">
                <div className="mr-5">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Let's Talk! <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
