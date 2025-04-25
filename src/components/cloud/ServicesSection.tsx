
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cloud, Lock, Server, Globe } from 'lucide-react';

const services = [
  {
    title: "Custom Cloud Architecture Design",
    description: "We design cloud environments from the ground up — built to scale with your business. Whether you're starting fresh with a greenfield project or migrating from on-premise infrastructure, our architectures prioritize performance, cost-efficiency, and flexibility. Every setup is tailored to your business goals, ensuring you get a high-performing, future-proof foundation that supports rapid growth and innovation.",
    icon: <Cloud className="h-12 w-12 text-primary" />,
    cta: "Design Your Architecture"
  },
  {
    title: "Multi-Cloud & Hybrid Strategies",
    description: "Why limit yourself to one cloud? We create multi-cloud strategies that give you the freedom to leverage the best features of AWS, Azure, Google Cloud, Oracle Cloud (OCI), or any combination that suits your needs. Need to keep certain workloads on-premise for compliance or performance reasons? We'll integrate your existing infrastructure seamlessly with your cloud environments — delivering the best of both worlds without sacrificing performance or security.",
    icon: <Globe className="h-12 w-12 text-primary" />,
    cta: "Explore Multi-Cloud Options"
  },
  {
    title: "End-to-End Cloud Setup",
    description: "Don't waste time figuring out the complexities of cloud infrastructure — we've got it covered. From configuring your network, compute power, and storage to setting up security protocols and monitoring tools, we handle the entire setup process from start to finish. Our goal? To get you operational faster, with a fully optimized environment that supports your business from day one.",
    icon: <Server className="h-12 w-12 text-primary" />,
    cta: "Get Started with Setup"
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Manual configurations are a thing of the past. We implement Infrastructure as Code (IaC) using powerful tools like Terraform, Pulumi, and native cloud templates. This approach automates the deployment of all your cloud resources — making setups faster, repeatable, and error-free. Need to scale up or make changes? No problem — with IaC, you can modify infrastructure as easily as updating code.",
    icon: <Code className="h-12 w-12 text-primary" />,
    cta: "Automate Your Infrastructure"
  },
  {
    title: "Security-First Approach",
    description: "Security isn't an afterthought — it's at the core of everything we build. Our cloud architectures come with built-in, enterprise-grade security measures. We enable multi-factor authentication (MFA) and single sign-on (SSO) for extra security. Control, monitor, and restrict access — all in one place.",
    icon: <Lock className="h-12 w-12 text-primary" />,
    cta: "Enhance Your Security"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-primary text-center">
            What We Offer
          </h2>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="bg-blue-50 p-8 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <Button variant="outline" className="group">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Security subsections */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-primary">Our Security-First Approach Includes:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-4">End-to-End Encryption</h4>
                <p className="text-gray-700">
                  Protect data at rest and in transit with industry-standard encryption like AES-256
                  and TLS/SSL. Even if intercepted, your data remains unreadable to unauthorized
                  users. Your business stays secure and compliant — always.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Compliance-Ready Setups</h4>
                <p className="text-gray-700">
                  From GDPR to HIPAA, we ensure your cloud infrastructure meets industry
                  regulations from day one. Built-in security controls keep your data safe and
                  audit-ready. Avoid fines, protect trust, and stay compliant effortlessly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Automated Threat Detection</h4>
                <p className="text-gray-700">
                  Stay ahead of attacks with AI-powered, real-time monitoring that detects
                  vulnerabilities instantly. Automated responses isolate threats before they cause
                  damage. You focus on growth — we handle the security.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Identity and Access Management (IAM)</h4>
                <p className="text-gray-700">
                  Ensure only the right people access your cloud resources with precise role-based
                  permissions. We enable multi-factor authentication (MFA) and single
                  sign-on (SSO) for extra security. Control, monitor, and restrict access — all in
                  one place.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Design Your Cloud Infrastructure</h3>
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Book a Free Consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
