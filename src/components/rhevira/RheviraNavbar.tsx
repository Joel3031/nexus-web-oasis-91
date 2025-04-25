
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/products/rhevira' },
  { name: 'Services', path: '/products/rhevira/services' },
  { name: 'Solutions', path: '/products/rhevira/solutions' },
  { name: 'Resources', path: '/products/rhevira/resources' },
  { name: 'About Us', path: '/products/rhevira/about' },
];

export default function RheviraNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/products/rhevira" className="flex items-center">
            <img
              src="/lovable-uploads/736b1fef-d61e-40ce-9f4b-e908f13c9134.png"
              alt="RHEVIRA Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 mt-4">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
