
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    name: "Custom Software Development",
    description: "Design, build, and launch tailored solutions that meet your customer's unique needs.",
    icon: "💻",
    link: "/services/custom-software"
  },
  {
    id: 2,
    name: "AI Development & Enablement",
    description: "Leverage AI strategically to optimize workflows, automate processes, and enhance business efficiency.",
    icon: "🤖",
    link: "/services/ai-development"
  },
  {
    id: 3,
    name: "Product Design",
    description: "A 14-day structured workshop to refine your product vision, strategy, and business goals.",
    icon: "🎨",
    link: "/services/product-design"
  },
  {
    id: 4,
    name: "Cloud Setup & Architecture Design",
    description: "Design and deploy scalable, secure, and cost-efficient cloud infrastructure.",
    icon: "☁️",
    link: "/services/cloud-setup"
  },
  {
    id: 5,
    name: "Dedicated Team",
    description: "Build your product with expert BAs, architects, developers, and DBAs for seamless execution.",
    icon: "👥",
    link: "/services/dedicated-team"
  },
  {
    id: 6,
    name: "DevOps Services",
    description: "Streamline development with CI/CD pipelines, automated deployments, and infrastructure management.",
    icon: "⚙️",
    link: "/services/devops"
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
            <div key={service.id} className="flex flex-col">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{service.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <Link 
                to={service.link}
                className="text-accent font-medium hover:underline flex items-center mt-2"
              >
                Learn more
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
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
