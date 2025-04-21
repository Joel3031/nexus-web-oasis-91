
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const heroItems = [
  {
    id: 1,
    title: "Accelerate Your Banking as a Service (BaaS) Transformation with Finexsus – 260+ APIs in Just 8 Weeks!",
    description: "Nexus Global's Finexsus is a leading Banking as a Service (BaaS) provider in the MENA region, offering a fully integrated, API-driven platform that enables banks and fintechs to launch next-gen financial services in just 8 weeks. With 260+ ready-to-use APIs, Finexsus empowers businesses to seamlessly implement digital banking, payments, lending, compliance, and more—all while ensuring regulatory compliance, security, and scalability."
  },
  {
    id: 2,
    title: "Tailored Digital Solutions for Scalable Growth",
    description: "At Nexus Global, we deliver custom software and digital solutions designed for scalability, security, and efficiency. Specializing in Banking as a Service (BaaS) and fintech innovations, we create tailored applications, integrations, and automation tools to help businesses streamline operations and drive growth. Whether you're a financial institution, fintech startup, or enterprise, we ensure your digital transformation is seamless and future-ready."
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Scroll when active index changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetElement = container.children[activeIndex] as HTMLElement;
      
      if (targetElement) {
        container.scrollTo({
          left: targetElement.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Handle manual scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      
      // Find which item is most visible
      const newIndex = Math.round(scrollLeft / containerWidth);
      if (newIndex !== activeIndex && newIndex < heroItems.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-accent min-h-[80vh] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {heroItems.map((item, index) => (
            <div 
              key={item.id}
              className="min-w-full w-full flex-shrink-0 snap-center px-4"
            >
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {item.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots navigation */}
        <div className="flex justify-center mt-12 space-x-2">
          {heroItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
