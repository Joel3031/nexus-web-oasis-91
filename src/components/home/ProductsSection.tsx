import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Finexus",
    description: "Leading Banking as a Service (BaaS) Provider in MENA Region",
    icon: "💼",
    color: "bg-blue-100 text-blue-800",
    link: "/products/finexus"
  },
  {
    id: 2,
    name: "Payzo Books",
    description: "The World's First AI-Powered Accounting System – ZATCA Integrated",
    icon: "📊",
    color: "bg-green-100 text-green-800",
    link: "/products/payzo-books"
  },
  {
    id: 3,
    name: "Payzo HR",
    description: "AI-Based HR System – From Recruitment to Payroll",
    icon: "👥",
    color: "bg-purple-100 text-purple-800",
    link: "/products/payzo-hr"
  },
  {
    id: 4,
    name: "RHEVIRA",
    description: "Achieve compliance, quality, and accelerated delivery with RHEVIRA's automated DevOps CI/CD pipeline framework.",
    icon: "🚀",
    color: "bg-orange-100 text-orange-800",
    link: "/products/rhevira"
  },
  {
    id: 6,
    name: "GrowK",
    description: "Save & Invest in Digital Gold – Starting from 100 SAR",
    icon: "💰",
    color: "bg-yellow-100 text-yellow-800",
    link: "/products/growk"
  },
  {
    id: 7,
    name: "Sentinel360",
    description: "Comprehensive Cybersecurity Solutions for Ultimate Protection",
    icon: "🛡️",
    color: "bg-red-100 text-red-800",
    link: "/products/sentinel360"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed to transform your business operations and drive sustainable growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={product.link}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className={cn("text-3xl mb-4 w-16 h-16 flex items-center justify-center rounded-xl", product.color)}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
                
                <div className="mt-6 text-sm font-medium text-accent group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
