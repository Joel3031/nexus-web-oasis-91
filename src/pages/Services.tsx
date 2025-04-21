
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Design, build, and launch tailored solutions that meet your customer's unique needs. Our experienced developers create robust applications using cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    icon: "💻",
    link: "/services/custom-software"
  },
  {
    id: 2,
    title: "AI Development & Enablement",
    description: "Leverage AI strategically to optimize workflows, automate processes, and enhance business efficiency. We implement machine learning solutions for predictive analytics and intelligent automation.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    icon: "🤖",
    link: "/services/ai-development"
  },
  {
    id: 3,
    title: "Product Design",
    description: "A 14-day structured workshop to refine your product vision, strategy, and business goals. Our UX/UI experts craft intuitive interfaces that delight users and drive engagement.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    icon: "🎨",
    link: "/services/product-design"
  },
  {
    id: 4,
    title: "Cloud Setup & Architecture Design",
    description: "Design and deploy scalable, secure, and cost-efficient cloud infrastructure. Our certified architects build resilient systems that grow with your business.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    icon: "☁️",
    link: "/services/cloud-setup"
  },
  {
    id: 5,
    title: "Dedicated Team",
    description: "Build your product with expert BAs, architects, developers, and DBAs for seamless execution. Our collaborative teams integrate with your organization to deliver exceptional results.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    icon: "👥",
    link: "/services/dedicated-team"
  },
  {
    id: 6,
    title: "DevOps Services",
    description: "Streamline development with CI/CD pipelines, automated deployments, and infrastructure management. Our DevOps experts optimize your delivery pipeline for speed and reliability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: "⚙️",
    link: "/services/devops"
  }
];

export default function Services() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary">Our Services</h1>
          <p className="text-lg text-gray-600">
            Discover our comprehensive range of services designed to accelerate your digital transformation journey. 
            From custom software development to AI enablement, we offer end-to-end solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover-scale overflow-hidden border-t-4 border-t-primary">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">{service.description}</CardDescription>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary font-medium story-link"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8">
              Our team of experts is ready to help you navigate your digital transformation journey.
              Let's discuss how our services can address your specific business challenges.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
