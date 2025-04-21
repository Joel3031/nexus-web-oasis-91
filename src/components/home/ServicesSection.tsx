
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Using direct image URLs to ensure they load correctly
const services = [
  {
    id: 1,
    name: "Custom Software Development",
    description: "Design, build, and launch tailored solutions that meet your customer's unique needs.",
    icon: "💻",
    link: "/services/custom-software",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "AI Development & Enablement",
    description: "Leverage AI strategically to optimize workflows, automate processes, and enhance business efficiency.",
    icon: "🤖",
    link: "/services/ai-development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Product Design",
    description: "A 14-day structured workshop to refine your product vision, strategy, and business goals.",
    icon: "🎨",
    link: "/services/product-design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Cloud Setup & Architecture Design",
    description: "Design and deploy scalable, secure, and cost-efficient cloud infrastructure.",
    icon: "☁️",
    link: "/services/cloud-setup",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Dedicated Team",
    description: "Build your product with expert BAs, architects, developers, and DBAs for seamless execution.",
    icon: "👥",
    link: "/services/dedicated-team",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "DevOps Services",
    description: "Streamline development with CI/CD pipelines, automated deployments, and infrastructure management.",
    icon: "⚙️",
    link: "/services/devops",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end digital transformation services tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center rounded-xl shadow hover-scale bg-gray-50 transition group">
              {/* Service image with error handling */}
              <div className="w-full h-40 overflow-hidden rounded-t-xl relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'; // Fallback image
                  }}
                />
                {/* Subtle overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
              </div>
              <div className="flex flex-col flex-grow px-6 py-4 w-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary text-center">{service.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-center">{service.description}</p>
                <Link 
                  to={service.link}
                  className="
                    mt-2
                    px-4 py-2
                    rounded-md
                    border border-primary 
                    bg-primary/10
                    text-primary
                    font-semibold 
                    text-center
                    transition 
                    hover:bg-primary/20 
                    hover:text-primary-foreground
                    inline-block
                    w-full
                  "
                >
                  Explore Service
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

