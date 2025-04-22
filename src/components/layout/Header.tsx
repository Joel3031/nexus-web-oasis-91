
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Careers', path: '/careers' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'About Us', path: '/about-us' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F0F10]/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c6591758-4ece-446c-97ab-5331dce5873e.png" 
              alt="Nexus Global Logo" 
              className="h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 transform scale-x-0 transition-transform duration-300 origin-left",
                    hoveredItem === item.name ? "scale-x-100" : ""
                  )}
                />
              </Link>
            ))}
            <Button 
              asChild 
              variant="default" 
              className="ml-4 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-medium"
            >
              <Link to="/contact">Reach Out</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0F0F10] border-t border-gray-800">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Reach Out
          </Link>
        </div>
      </div>
    </header>
  );
}
