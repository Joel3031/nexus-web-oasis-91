
import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* Temporary cloud logo in footer */}
            <div className="bg-white p-2 rounded flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 h-8 w-8 rounded flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-primary">CloudArchitect</span>
            </div>
            <p className="text-gray-300">
              We design and build scalable, secure, and high-performance cloud architectures tailored to your business goals.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/products/cloud/custom-architecture" className="text-gray-300 hover:text-white transition-colors">Custom Architecture Design</Link></li>
              <li><Link to="/products/cloud/multi-cloud" className="text-gray-300 hover:text-white transition-colors">Multi-Cloud Strategies</Link></li>
              <li><Link to="/products/cloud/end-to-end" className="text-gray-300 hover:text-white transition-colors">End-to-End Setup</Link></li>
              <li><Link to="/products/cloud/iac" className="text-gray-300 hover:text-white transition-colors">Infrastructure as Code</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/products/cloud/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/products/cloud/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/products/cloud/documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/products/cloud/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Riyadh, Saudi Arabia</li>
              <li>Dubai, UAE</li>
              <li>info@cloudarchitect.com</li>
              <li>+966 123 456 789</li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} CloudArchitect - A Nexus Global Product. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
