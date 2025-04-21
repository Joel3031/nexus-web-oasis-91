
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Mohammed Al-Faisal",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Mohammed founded Nexus Global with a vision to transform banking and financial services in the MENA region."
  },
  {
    name: "Sarah Johnson",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    bio: "Sarah leads our technology strategy and oversees the development of our cutting-edge platforms."
  },
  {
    name: "Rajiv Mehta",
    position: "Chief Product Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Rajiv shapes our product vision and ensures our solutions meet the evolving needs of our clients."
  },
  {
    name: "Aisha Al-Mansouri",
    position: "CFO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Aisha oversees our financial operations and helps drive sustainable growth strategies."
  },
  {
    name: "David Chen",
    position: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "David leads our global engineering teams and ensures the technical excellence of our platforms."
  },
  {
    name: "Layla Rahman",
    position: "Head of Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Layla ensures our products deliver exceptional user experiences through thoughtful design."
  }
];

const milestones = [
  {
    year: "2015",
    title: "Founding",
    description: "Nexus Global was founded in Riyadh with a vision to transform banking technology in the MENA region."
  },
  {
    year: "2017",
    title: "First Major Client",
    description: "Secured our first major banking client and launched Finexsus, our Banking as a Service platform."
  },
  {
    year: "2018",
    title: "International Expansion",
    description: "Opened offices in Dubai and Bangalore to support our growing international client base."
  },
  {
    year: "2020",
    title: "Product Portfolio Expansion",
    description: "Launched Payzo Books and Payzo HR, expanding our product portfolio beyond fintech."
  },
  {
    year: "2022",
    title: "Series B Funding",
    description: "Secured $45 million in Series B funding to accelerate growth and product development."
  },
  {
    year: "2023",
    title: "Global Reach",
    description: "Expanded to serve clients across 15 countries with a team of over 300 professionals."
  }
];

export default function AboutUs() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary">About Nexus Global</h1>
          <p className="text-lg text-gray-600">
            Learn about our company vision, mission, and the team behind Nexus Global's innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
              alt="Nexus Global Office" 
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2015, Nexus Global began with a bold vision to transform financial services through technology. 
              What started as a small team in Riyadh has grown into a global organization with offices across the MENA region and India.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our journey has been defined by innovation, customer-centricity, and a commitment to excellence. 
              Today, we're proud to work with leading banks, financial institutions, and enterprises, helping them navigate their digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-primary">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and sustainable success.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-primary">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading technology partner for financial institutions and enterprises in emerging markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="team" className="mb-20">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="team">Leadership Team</TabsTrigger>
            <TabsTrigger value="milestones">Company Milestones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="team" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="milestones" className="mt-6">
            <div className="relative border-l-4 border-primary pl-6 py-2 ml-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-primary"></div>
                  <div className="mb-1 text-sm font-bold inline-block px-3 py-1 rounded bg-primary text-white">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-primary text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
            Explore opportunities to be part of our global team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/careers" 
              className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View Careers
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
