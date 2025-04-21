import { useState, useEffect } from 'react';
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

const heroItems = [
  {
    id: 1,
    title: "Accelerate Your Banking as a Service (BaaS) Transformation with Finexsus – 260+ APIs in Just 8 Weeks!",
    description: "Nexus Global's Finexsus is a leading Banking as a Service (BaaS) provider in the MENA region, offering a fully integrated, API-driven platform that enables banks and fintechs to launch next-gen financial services in just 8 weeks. With 260+ ready-to-use APIs, Finexsus empowers businesses to seamlessly implement digital banking, payments, lending, compliance, and more—all while ensuring regulatory compliance, security, and scalability.",
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: "Tailored Digital Solutions for Scalable Growth",
    description: "At Nexus Global, we deliver custom software and digital solutions designed for scalability, security, and efficiency. Specializing in Banking as a Service (BaaS) and fintech innovations, we create tailored applications, integrations, and automation tools to help businesses streamline operations and drive growth. Whether you're a financial institution, fintech startup, or enterprise, we ensure your digital transformation is seamless and future-ready.",
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

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

  return (
    <section className="relative bg-gradient-to-r from-[#455062] to-[#455062]/80 min-h-[80vh]">
      <Carousel className="w-full h-full" opts={{ align: "start", loop: true }}>
        <CarouselContent ref={emblaRef}>
          {heroItems.map((item, idx) => (
            <CarouselItem key={item.id}>
              <div className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#455062]/90 to-[#455062]/40" />
                </div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                  <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      {item.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" className="bg-white text-[#455062] hover:bg-gray-100">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="absolute left-4 z-20 bg-white/90 border-none hover:bg-white" />
        <CarouselNext className="absolute right-4 z-20 bg-white/90 border-none hover:bg-white" />
      </Carousel>
    </section>
  );
}
