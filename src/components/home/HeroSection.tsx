
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

// Placeholder images from the provided list, banking/fintech-related.
const heroImages = [
  '/public/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg', // tech laptop
  '/public/lovable-uploads/photo-1518770660439-4636190af475.jpg', // circuit board
];

const heroItems = [
  {
    id: 1,
    title: "Accelerate Your Banking as a Service (BaaS) Transformation with Finexsus – 260+ APIs in Just 8 Weeks!",
    description: "Nexus Global's Finexsus is a leading Banking as a Service (BaaS) provider in the MENA region, offering a fully integrated, API-driven platform that enables banks and fintechs to launch next-gen financial services in just 8 weeks. With 260+ ready-to-use APIs, Finexsus empowers businesses to seamlessly implement digital banking, payments, lending, compliance, and more—all while ensuring regulatory compliance, security, and scalability.",
    image: heroImages[0]
  },
  {
    id: 2,
    title: "Tailored Digital Solutions for Scalable Growth",
    description: "At Nexus Global, we deliver custom software and digital solutions designed for scalability, security, and efficiency. Specializing in Banking as a Service (BaaS) and fintech innovations, we create tailored applications, integrations, and automation tools to help businesses streamline operations and drive growth. Whether you're a financial institution, fintech startup, or enterprise, we ensure your digital transformation is seamless and future-ready.",
    image: heroImages[1]
  }
];

export default function HeroSection() {
  // Use Embla Carousel ref for programmatic control:
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  // Sync Embla's selected index to local state:
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Auto-scroll every 8s
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  // Manual slide navigation for dots:
  const goTo = (idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
  };

  return (
    <section className="relative bg-gradient-to-r from-primary to-accent min-h-[80vh] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent ref={emblaRef}>
            {heroItems.map((item, idx) => (
              <CarouselItem key={item.id}>
                <div className="relative max-w-4xl mx-auto">
                  {/* Hero image background for first tile */}
                  {idx === 0 && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
                        alt="Banking tech background"
                        className="w-full h-full object-cover object-center rounded-xl shadow-2xl"
                        style={{ filter: 'brightness(0.4) blur(2px)' }}
                      />
                      {/* Overlay for legibility */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80 rounded-xl" />
                    </div>
                  )}
                  <div className={`relative z-10 ${idx === 0 ? 'p-8' : ''}`}>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg animate-fade-in">
                      {item.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed animate-fade-in">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-4 animate-fade-in">
                      <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-white text-white hover:bg-white/10"
                      >
                        <Link to="/services">Explore Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 relative z-20">
            <CarouselPrevious
              className="relative left-0 right-auto mx-2 bg-white/90 border-none text-primary shadow-md !h-8 !w-8 rounded-full p-0"
              style={{ minWidth: "2rem", minHeight: "2rem" }}
            >
              {/* Downsize the arrow icon */}
              <span className="flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </CarouselPrevious>
            {/* Dots navigation */}
            <div className="flex justify-center items-center space-x-2">
              {heroItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
                    index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext
              className="relative right-0 left-auto mx-2 bg-white/90 border-none text-primary shadow-md !h-8 !w-8 rounded-full p-0"
              style={{ minWidth: "2rem", minHeight: "2rem" }}
            >
              {/* Downsize the arrow icon */}
              <span className="flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
