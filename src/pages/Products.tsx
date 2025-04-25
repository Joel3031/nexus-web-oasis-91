
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Finexsus',
    description: 'Leading Banking as a Service (BaaS) Provider in MENA Region',
    icon: '💳',
    link: '/products/finexsus'
  },
  {
    title: 'Payzo Books',
    description: 'The World\'s First AI-Powered Accounting System – ZATCA Integrated',
    icon: '📊',
    link: '/products/payzo-books'
  },
  {
    title: 'Payzo HR',
    description: 'AI-Based HR System – From Recruitment to Payroll',
    icon: '👥',
    link: '/products/payzo-hr'
  },
  {
    title: 'RHEVIRA',
    description: 'Achieve compliance, quality, and accelerated delivery with RHEVIRA\'s automated DevOps CI/CD pipeline framework.',
    icon: '🔄',
    link: '/products/rhevira'
  },
  {
    title: 'Cloud Setup & Architecture',
    description: 'Build a cloud foundation that grows with you - scalable, secure and high-performance cloud architectures.',
    icon: '☁️',
    link: '/products/cloud'
  },
  {
    title: 'GrowK',
    description: 'Save & Invest in Digital Gold – Starting from 100 SAR',
    icon: '💰',
    link: '/products/growk'
  },
  {
    title: 'Sentinel360',
    description: 'Comprehensive Cybersecurity Solutions for Ultimate Protection',
    icon: '🔒',
    link: '/products/sentinel360'
  }
];

export default function Products() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Our Products</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Explore our range of innovative products designed to transform your business operations and accelerate digital growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover-scale overflow-hidden border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{product.icon}</div>
                <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">{product.description}</CardDescription>
                <Link 
                  to={product.link} 
                  className="inline-flex items-center text-primary font-medium story-link"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
