
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Beyond the Basics: What We Deliver
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Application Deployment Pipeline */}
          <Card className="border-t-4 border-t-primary shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Application Deployment Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 rounded-full p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Automated Code Integration</p>
                    <p className="text-gray-600">Each code push triggers an end-to-end pipeline, ensuring code quality and vulnerability checks.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 rounded-full p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Smooth Build & Delivery</p>
                    <p className="text-gray-600">Code moves through rigorous build, test, and containerization processes for reliable delivery.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 rounded-full p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Robust Deployment</p>
                    <p className="text-gray-600">We orchestrate deployments to production environments with zero downtime, ensuring stability and scalability.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Explore Application Automation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Infrastructure Automation Pipeline */}
          <Card className="border-t-4 border-t-accent shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">Infrastructure Automation Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent/10 rounded-full p-1">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Infrastructure as Code</p>
                    <p className="text-gray-600">We eliminate manual server provisioning by automating infrastructure deployment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent/10 rounded-full p-1">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Cloud-Ready Scaling</p>
                    <p className="text-gray-600">Our system rapidly configures, tests, and launches infrastructure across leading cloud platforms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent/10 rounded-full p-1">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Security First</p>
                    <p className="text-gray-600">Built-in vulnerability scans protect your infrastructure from the ground up.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Discover Infrastructure Automation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
