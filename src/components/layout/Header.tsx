import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

// Main menu config
const menuItems = [
  { name: 'Work', path: '/work' },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      {
        title: "Product Scope",
        desc: "15-day process to align the product with your business goals.",
        icon: "/lovable-uploads/bf81bcad-0871-401c-a85b-a9e4bace043c.png", // Demo image, replace with icons for production
      },
      {
        title: "UX / UI",
        desc: "Design an easy-to-use engaging and functional product.",
        icon: "/lovable-uploads/bf81bcad-0871-401c-a85b-a9e4bace043c.png",
      },
      {
        title: "MVP Builder",
        desc: "Go to market quickly with a high-quality MVP.",
        icon: "/lovable-uploads/bf81bcad-0871-401c-a85b-a9e4bace043c.png",
      },
      {
        title: "Dedicated Teams",
        desc: "Build your product with a dedicated team of developers.",
        icon: "/lovable-uploads/bf81bcad-0871-401c-a85b-a9e4bace043c.png",
      },
      {
        title: "Custom Software Development",
        desc: "Lean frameworks for innovative, custom software.",
        icon: "/lovable-uploads/bf81bcad-0871-401c-a85b-a9e4bace043c.png",
      },
      {
        title: "AI Development & Enablement",
        desc: "ML and Generative AI to ensure your business is future-ready.",
        icon: "/lovable-uploads/bf81bcad-0871-401c-a85b-a9e4bace043c.png",
      },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Careers', path: '/careers' },
  { name: 'Tech', path: '/tech-stack' },
  { name: 'Blog', path: '/blog' },
  { name: 'Podcast', path: '/podcast' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // For submenu open state (desktop)
  const [submenuHovered, setSubmenuHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-navbar transition-all border-b border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo example */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c6591758-4ece-446c-97ab-5331dce5873e.png" 
              alt="Nexus Global Logo" 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 ml-2">
            {menuItems.map(item => (
              item.submenu ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => { setHoveredItem(item.name); setSubmenuHovered(true); }}
                  onMouseLeave={() => { setHoveredItem(null); setSubmenuHovered(false); }}
                >
                  <span
                    className={cn(
                      "px-4 py-2 rounded-lg font-extrabold font-poppins text-base tracking-tight transition-all duration-150 cursor-pointer flex items-center gap-1",
                      hoveredItem === item.name
                        ? "bg-navbar-contrast text-primary"
                        : "text-[#1a1a1a] hover:bg-navbar-contrast hover:text-primary"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                  {/* Submenu */}
                  {(hoveredItem === item.name || submenuHovered) && (
                    <div
                      className="absolute left-0 mt-3 w-[450px] animate-fade-in bg-white bg-opacity-90 shadow-lg drop-shadow-menu rounded-2xl p-7 z-50 flex flex-col gap-4"
                      style={{ border: '1px solid #f3f3fa'}}
                      onMouseEnter={() => setSubmenuHovered(true)}
                      onMouseLeave={() => setSubmenuHovered(false)}
                    >
                      <div className="grid grid-cols-2 gap-7">
                        {item.submenu.map((sub, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <img
                              src={sub.icon}
                              alt=""
                              className="w-7 h-7 mt-1 select-none pointer-events-none"
                              style={{ filter: idx%2===0 ? "hue-rotate(190deg) brightness(1.5)" : "hue-rotate(360deg) brightness(0.9)" }}
                            />
                            <div>
                              <div className="font-bold font-poppins text-lg text-primary leading-[1.2]">{sub.title}</div>
                              <div className="text-sm text-[#555] font-montserrat font-normal mt-1">{sub.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg font-semibold font-poppins text-base tracking-tight transition-all duration-150",
                    hoveredItem === item.name
                      ? "bg-navbar-contrast text-primary"
                      : "text-[#1a1a1a] hover:bg-navbar-contrast hover:text-primary"
                  )}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </Link>
              )
            ))}
            {/* CTA */}
            <Link
              to="/contact"
              className="ml-5 px-7 py-2 font-bold font-poppins bg-accent text-white rounded-full text-base shadow-md transition-all duration-150 hover:bg-primary"
              style={{
                letterSpacing: "1.6px",
                boxShadow: "0 4px 16px 0 rgba(248,21,104,0.14), 0 1.5px 9px 0 rgba(39,60,245,0.09)",
              }}
            >
              BOOK A CALL
            </Link>
          </nav>

          {/* Mobile Nav button just for completeness (not refactored in this step) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-navbar-contrast focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Replace with Lucide "menu"/"x" icons as needed; kept simple here */}
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
              className="block px-4 py-2 rounded-full font-montserrat font-bold text-base text-gray-900 bg-white shadow-md mb-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-4 py-2 rounded-full font-montserrat font-bold text-base bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Reach Out
          </Link>
        </div>
      </div>
    </header>
  );
}
