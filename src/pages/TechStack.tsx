
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';

const frontendTech = [
  { name: "React", icon: "⚛️", description: "Building responsive user interfaces" },
  { name: "Next.js", icon: "▲", description: "Server-side rendering and static site generation" },
  { name: "TypeScript", icon: "🔷", description: "Type-safe JavaScript development" },
  { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
  { name: "React Native", icon: "📱", description: "Cross-platform mobile applications" },
  { name: "Redux", icon: "🔄", description: "State management for complex applications" }
];

const backendTech = [
  { name: "Node.js", icon: "🟢", description: "Server-side JavaScript runtime" },
  { name: "Spring Boot", icon: "☕", description: "Enterprise Java applications" },
  { name: ".NET Core", icon: "🔵", description: "Cross-platform C# development" },
  { name: "Python", icon: "🐍", description: "AI, data processing, and automation" },
  { name: "GraphQL", icon: "📊", description: "Efficient API query language" },
  { name: "FastAPI", icon: "⚡", description: "High-performance Python web framework" }
];

const databaseTech = [
  { name: "PostgreSQL", icon: "🐘", description: "Robust relational database" },
  { name: "MongoDB", icon: "🍃", description: "Flexible document database" },
  { name: "Redis", icon: "🔴", description: "In-memory data structure store" },
  { name: "Elasticsearch", icon: "🔍", description: "Distributed search and analytics" },
  { name: "DynamoDB", icon: "📋", description: "Managed NoSQL database service" },
  { name: "Firestore", icon: "🔥", description: "Scalable document database for mobile and web" }
];

const cloudTech = [
  { name: "AWS", icon: "☁️", description: "Comprehensive cloud infrastructure" },
  { name: "Azure", icon: "🔷", description: "Microsoft's cloud computing platform" },
  { name: "Google Cloud", icon: "🌐", description: "Google's cloud services platform" },
  { name: "Kubernetes", icon: "🚢", description: "Container orchestration and management" },
  { name: "Docker", icon: "🐳", description: "Containerization platform" },
  { name: "Terraform", icon: "🏗️", description: "Infrastructure as code tool" }
];

const devOpsTech = [
  { name: "GitHub Actions", icon: "⚙️", description: "CI/CD automation" },
  { name: "Jenkins", icon: "🔧", description: "Open-source automation server" },
  { name: "Prometheus", icon: "📊", description: "Monitoring and alerting" },
  { name: "Grafana", icon: "📈", description: "Metrics visualization and monitoring" },
  { name: "ELK Stack", icon: "📑", description: "Logging and analytics platform" },
  { name: "ArgoCD", icon: "🚀", description: "GitOps continuous delivery tool" }
];

export default function TechStack() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary">Our Tech Stack</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore the cutting-edge technologies we use to build robust, scalable, and secure solutions.
            Our expertise spans multiple domains, from frontend development to cloud infrastructure and DevOps.
          </p>
          
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1600&q=80" 
              alt="Technology Workspace" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Modern Technology Stack</h2>
                <p className="text-white/90 max-w-md">
                  We leverage the latest technologies to deliver high-quality solutions that drive business growth
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="frontend" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 w-full">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendTech.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {backendTech.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="database" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {databaseTech.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cloud" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudTech.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="devops" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devOpsTech.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Custom Technology Solutions</h2>
          <p className="mb-6">
            We select the best technologies based on your specific requirements and business goals.
            Our experts continuously evaluate emerging technologies to ensure we deliver optimal solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors duration-200"
          >
            Discuss Your Technology Requirements
          </a>
        </div>
      </div>
    </Layout>
  );
}

function TechCard({ tech }: { tech: { name: string; icon: string; description: string } }) {
  return (
    <Card className="hover-scale">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{tech.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{tech.name}</h3>
            <p className="text-gray-600">{tech.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
