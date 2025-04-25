
import React from 'react';
import { Link } from 'react-router-dom';

export function DevopsFooter() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DevOps Services</h3>
            <p className="text-gray-300 mb-4">
              Nextgen AI provides DevOps Consulting Services that boost your business by reducing costs while speeding releases and creating resilient high-performance systems.
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <span className="font-bold text-lg">DevOps Services</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Infrastructure Management</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Operational Management</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Capacity Management</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Release Management</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Security Integration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Tools We Use</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Docker & Kubernetes</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Jenkins & GitLab CI</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Terraform & Ansible</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Prometheus & Grafana</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">AWS, Azure & GCP</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-4">Ready to transform your operations with cutting-edge DevOps solutions?</p>
            <Link 
              to="/contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 inline-block"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Nextgen AI. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-blue-400 transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
