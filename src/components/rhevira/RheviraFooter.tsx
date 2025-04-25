
import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/lovable-uploads/736b1fef-d61e-40ce-9f4b-e908f13c9134.png"
              alt="RHEVIRA Logo"
              className="h-12 mb-6 bg-white p-2 rounded"
            />
            <p className="text-gray-300">
              Automating the complete deployment lifecycle from code commit to production for faster releases, improved quality, and rock-solid security.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/rhevira/application" className="text-gray-300 hover:text-white transition-colors">Application Pipeline</Link></li>
              <li><Link to="/products/rhevira/infrastructure" className="text-gray-300 hover:text-white transition-colors">Infrastructure Automation</Link></li>
              <li><Link to="/products/rhevira/security" className="text-gray-300 hover:text-white transition-colors">Security Solutions</Link></li>
              <li><Link to="/products/rhevira/monitoring" className="text-gray-300 hover:text-white transition-colors">Monitoring Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/products/rhevira/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/products/rhevira/documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/products/rhevira/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/products/rhevira/webinars" className="text-gray-300 hover:text-white transition-colors">Webinars</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Riyadh, Saudi Arabia</li>
              <li>Dubai, UAE</li>
              <li>info@rhevira.com</li>
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
          <p>© {currentYear} RHEVIRA - A Nexus Global Product. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
