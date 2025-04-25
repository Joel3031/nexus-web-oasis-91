
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShieldCheck, Rocket, Lock, Zap } from 'lucide-react';

export default function WhyUsSection() {
  const reasons = [
    {
      id: 1,
      title: "Tailored Strategies",
      description: "We believe every business is unique — that's why we design DevOps solutions specifically aligned with your goals, infrastructure, and growth plans. No cookie-cutter approaches, only personalized strategies that deliver measurable results.",
      icon: <CheckCircle2 className="h-10 w-10 text-green-500" />
    },
    {
      id: 2,
      title: "Proven Expertise",
      description: "Our team of certified DevOps engineers brings years of hands-on experience across various industries. From startups to enterprises, we've optimized workflows, improved reliability, and accelerated delivery pipelines — and we're ready to do the same for you.",
      icon: <ShieldCheck className="h-10 w-10 text-blue-500" />
    },
    {
      id: 3,
      title: "End-to-End Support",
      description: "We're with you at every stage of your DevOps journey — from initial strategy and architecture planning to deployment, monitoring, and continuous optimization. You focus on innovation while we handle the heavy lifting.",
      icon: <Rocket className="h-10 w-10 text-purple-500" />
    },
    {
      id: 4,
      title: "Security-First Approach",
      description: "Security isn't an afterthought — it's integrated into everything we do. We embed proactive security checks, vulnerability scanning, and data protection measures throughout your DevOps lifecycle, ensuring your systems remain resilient against threats.",
      icon: <Lock className="h-10 w-10 text-red-500" />
    },
    {
      id: 5,
      title: "Continuous Innovation",
      description: "Technology evolves fast — and so should your DevOps processes. We continuously adapt and integrate the latest automation tools, frameworks, and best practices to keep your pipelines agile, efficient, and future proof.",
      icon: <Zap className="h-10 w-10 text-yellow-500" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Why Nextgen AI Stands Out in DevOps
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-24 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Custom Solutions. Expert Execution. Unmatched Performance.
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex flex-col md:flex-row gap-6 items-start hover-scale transition p-4">
              <div className="md:w-16 flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg">
            <Link to="/contact">Partner with DevOps Experts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
