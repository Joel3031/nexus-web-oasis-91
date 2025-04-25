
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DevopsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/products/devops" className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <span className="font-bold text-lg">DevOps Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/products/devops" className="text-white hover:text-blue-300 transition-colors">Home</Link>
            <Link to="#services" className="text-white hover:text-blue-300 transition-colors">Services</Link>
            <Link to="#process" className="text-white hover:text-blue-300 transition-colors">Process</Link>
            <Link to="#tools" className="text-white hover:text-blue-300 transition-colors">Tools</Link>
            <Link to="#why-us" className="text-white hover:text-blue-300 transition-colors">Why Us</Link>
            <Link to="#faq" className="text-white hover:text-blue-300 transition-colors">FAQ</Link>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white">
            <Link to="/contact">Talk to an Expert</Link>
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/products/devops" className="text-white py-2 px-3 hover:bg-blue-800 rounded" onClick={toggleMenu}>Home</Link>
            <Link to="#services" className="text-white py-2 px-3 hover:bg-blue-800 rounded" onClick={toggleMenu}>Services</Link>
            <Link to="#process" className="text-white py-2 px-3 hover:bg-blue-800 rounded" onClick={toggleMenu}>Process</Link>
            <Link to="#tools" className="text-white py-2 px-3 hover:bg-blue-800 rounded" onClick={toggleMenu}>Tools</Link>
            <Link to="#why-us" className="text-white py-2 px-3 hover:bg-blue-800 rounded" onClick={toggleMenu}>Why Us</Link>
            <Link to="#faq" className="text-white py-2 px-3 hover:bg-blue-800 rounded" onClick={toggleMenu}>FAQ</Link>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
