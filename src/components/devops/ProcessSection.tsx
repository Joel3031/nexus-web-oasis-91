
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Assessment and Planning",
      description: "We evaluate your existing infrastructure, development workflows, and business objectives to craft a tailored DevOps strategy.",
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />
    },
    {
      id: 2,
      title: "Pilot Framework Creation",
      description: "We build a proof-of-concept (POC) to demonstrate the power of our approach — ensuring alignment with your goals.",
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />
    },
    {
      id: 3,
      title: "Process Implementation",
      description: "From automation scripts to CI/CD pipelines, we embed best practices for maximum efficiency and security.",
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />
    },
    {
      id: 4,
      title: "CI/CD Pipeline Setup",
      description: "We design and integrate continuous integration and delivery pipelines, enabling faster, error-free releases with minimal manual intervention.",
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-100" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Onboard. Optimize. Accelerate.
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-24 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our systematic approach ensures a smooth transition to a fully automated, high-performance DevOps environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg shadow-lg p-8 hover-scale transition">
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg">
            <Link to="/contact">Build Future-Ready DevOps</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
