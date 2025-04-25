
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Server, BarChart3, Clock, GitBranch, Lock, HeartPulse } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Infrastructure Management",
      description: "Automate provisioning, scaling, and management of servers and cloud environments.",
      icon: <Server className="h-10 w-10 text-blue-500" />
    },
    {
      id: 2,
      title: "Operational Management",
      description: "Ensure smooth, reliable performance with proactive monitoring and troubleshooting.",
      icon: <HeartPulse className="h-10 w-10 text-blue-500" />
    },
    {
      id: 3,
      title: "Capacity Management",
      description: "Predict and scale resources to meet demand without overspending.",
      icon: <BarChart3 className="h-10 w-10 text-blue-500" />
    },
    {
      id: 4,
      title: "Availability Management",
      description: "Minimize downtime with fault-tolerant systems and resilient architecture.",
      icon: <Clock className="h-10 w-10 text-blue-500" />
    },
    {
      id: 5,
      title: "Release Management",
      description: "Streamline releases with automated build, test, and deployment pipelines.",
      icon: <GitBranch className="h-10 w-10 text-blue-500" />
    },
    {
      id: 6,
      title: "Security Integration",
      description: "Implement end-to-end security measures to protect data and code.",
      icon: <Lock className="h-10 w-10 text-blue-500" />
    },
    {
      id: 7,
      title: "24/7 DevOps Support",
      description: "Round-the-clock monitoring, incident response, and performance optimization.",
      icon: <Shield className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 font-semibold rounded-full mb-4">COMPREHENSIVE SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Powering DevOps Excellence: Services Built for Performance
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-24 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our end-to-end services cover every aspect of your DevOps journey, from infrastructure setup to 24/7 support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg border border-slate-200 p-8 hover-scale transition shadow-md hover:shadow-xl">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg">
            <Link to="/contact">Explore Our Full Range of Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
