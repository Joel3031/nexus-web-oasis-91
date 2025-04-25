
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Shield, Zap } from 'lucide-react';

const RheviraProduct = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Fast. Flawless. Future-Ready
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Achieve compliance, quality, and accelerated delivery with RHEVIRA's automated DevOps CI/CD pipeline framework.
              </p>
              <Button size="lg" className="rounded-full">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Accelerated Delivery</h3>
                <p className="text-gray-600">
                  Automate your deployment pipeline and reduce time-to-market with our advanced CI/CD tools.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Built-in Compliance</h3>
                <p className="text-gray-600">
                  Meet industry standards with our pre-configured security and compliance frameworks.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-gray-600">
                  Ensure code quality and stability with automated testing and monitoring solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your DevOps Journey?</h2>
              <p className="text-lg mb-8 text-white/90">
                Join leading organizations that trust RHEVIRA for their CI/CD pipeline needs.
              </p>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule a Demo <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RheviraProduct;
