
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function WhyRhevirahSection() {
  const benefits = [
    {
      title: "Accelerated Time-to-Market",
      description: "Streamline releases from days to minutes."
    },
    {
      title: "Enhanced Security",
      description: "Every step ensures quality checks and vulnerability scans."
    },
    {
      title: "Cost-Efficient Scaling",
      description: "Automate infrastructure provisioning to cut costs and optimize cloud resources."
    },
    {
      title: "Resilient & Scalable",
      description: "Empower your business with self-healing, scalable systems."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why RHEVIRA
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              In a world where speed and security are everything, RHEVIRA is
              your secret weapon. We automate the tedious, so you can focus on
              the extraordinary.
              <br /><br />
              Whether you're building the next big app or scaling your
              infrastructure, we're here to make sure it's done right—fast, secure,
              and effortlessly.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 rounded-full p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">{benefit.title}:</p>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Unlock the power of automation with RHEVIRA <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transform rotate-6"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="DevOps Automation"
                  className="object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Continuous Innovation</h3>
              <p className="text-gray-700">
                Our platform constantly evolves to incorporate the latest DevOps practices and technologies, ensuring your business stays ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
