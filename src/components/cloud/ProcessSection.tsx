
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, PenTool, Upload, BarChart } from 'lucide-react';

const processSteps = [
  {
    title: "Assessment & Strategy",
    description: "Understand your business needs, workloads, and goals to design a custom cloud strategy.",
    icon: <Search className="h-10 w-10 text-primary" />
  },
  {
    title: "Cloud Architecture Design",
    description: "Plan a robust, secure, and scalable infrastructure tailored to your preferred cloud platform.",
    icon: <PenTool className="h-10 w-10 text-primary" />
  },
  {
    title: "Deployment & Automation",
    description: "Implement Infrastructure as Code for fast, repeatable, and error-free cloud deployments.",
    icon: <Upload className="h-10 w-10 text-primary" />
  },
  {
    title: "Optimization & Support",
    description: "Monitor, optimize, and continuously improve your setup for performance and cost-efficiency.",
    icon: <BarChart className="h-10 w-10 text-primary" />
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            From Planning to Deployment — We've Got You Covered
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Talk to an Expert <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
