
import React from 'react';

export default function ToolsSection() {
  const toolCategories = [
    {
      id: 1,
      name: "Containerization Tools",
      tools: ["Docker", "Kubernetes", "Podman", "OpenShift"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Infrastructure Automation",
      tools: ["Terraform", "Ansible", "Puppet", "Chef"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "CI/CD Tools",
      tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      name: "Test Automation",
      tools: ["Selenium", "JUnit", "Cypress", "Postman"],
      image: "https://images.unsplash.com/photo-1580894732930-0babd100d356?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      name: "Monitoring Tools",
      tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 6,
      name: "Coding & Scripting",
      tools: ["Python", "Go", "Bash", "PowerShell"],
      image: "https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 7,
      name: "Database/Data Storage",
      tools: ["MongoDB", "PostgreSQL", "Redis", "Cassandra"],
      image: "https://images.unsplash.com/photo-1633412802994-5c104777c8c6?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 8,
      name: "Cloud Platforms",
      tools: ["AWS", "Azure", "Google Cloud", "Oracle Cloud"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white" id="tools">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
            Built with the Best Tools
          </h2>
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1 w-24 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Power your DevOps pipeline with the best tools for faster, smarter, and reliable delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category) => (
            <div key={category.id} className="bg-slate-700 bg-opacity-50 rounded-lg p-6 hover-scale transition backdrop-blur-sm border border-blue-900/50">
              <div className="rounded-lg overflow-hidden mb-6 h-40">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&w=300&q=80';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">{category.name}</h3>
              <ul className="space-y-2">
                {category.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-center text-blue-100">
                    <span className="mr-2">•</span> {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
