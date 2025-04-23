
import React from 'react';
import { Link } from 'react-router-dom';

const productLinks = [
  { name: 'Finexus', path: '/products/finexus' },
  { name: 'Payzo Books', path: '/products/payzo-books' },
  { name: 'Payzo HR', path: '/products/payzo-hr' },
  { name: 'RHEVIRA', path: '/products/rhevira' },
  { name: 'GrowK', path: '/products/growk' },
  { name: 'Sentinel360', path: '/products/sentinel360' }
];

const serviceLinks = [
  { name: 'Custom Software Development', path: '/services/custom-software' },
  { name: 'AI Development & Enablement', path: '/services/ai-development' },
  { name: 'Product Design', path: '/services/product-design' },
  { name: 'Cloud Setup & Architecture', path: '/services/cloud-setup' },
  { name: 'Dedicated Team', path: '/services/dedicated-team' },
  { name: 'DevOps Services', path: '/services/devops' }
];

const officeLocations = [
  { country: 'Saudi Arabia', city: 'Riyadh' },
  { country: 'UAE', city: 'Dubai' },
  { country: 'India', city: 'Bangalore' },
  { country: 'India', city: 'Mumbai' },
  { country: 'India', city: 'Chennai' }
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Nexus Global</h3>
            <p className="text-gray-300 mb-4">
              Leading Banking as a Service (BaaS) Provider in the MENA region, offering custom software solutions and digital transformation services.
            </p>
            <div className="flex items-center mt-4">
              <img 
                src="/lovable-uploads/c6591758-4ece-446c-97ab-5331dce5873e.png"
                alt="Nexus Global Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="font-bold text-lg">NEXUS GLOBAL</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Offices</h3>
            <ul className="space-y-2">
              {officeLocations.map((office, index) => (
                <li key={index} className="text-gray-300">
                  {office.city}, {office.country}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Reach Out
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Nexus Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
