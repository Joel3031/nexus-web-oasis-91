import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, MapPin, Clock, Award } from 'lucide-react';

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced Full Stack Developer to join our Dubai team. The ideal candidate will have a strong background in React, Node.js, and cloud technologies."
  },
  {
    id: 2,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our team as a DevOps Engineer to build and maintain our CI/CD pipelines and cloud infrastructure. Experience with AWS, Kubernetes, and Terraform is required."
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4+ years",
    description: "We're seeking a talented UX/UI Designer to create exceptional user experiences for our products. The ideal candidate will have a strong portfolio of digital products."
  },
  {
    id: 4,
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our AI team to develop innovative machine learning solutions for financial services. Experience with Python, TensorFlow, and NLP is required."
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced Product Manager to lead our fintech product development. The ideal candidate will have a background in financial services."
  },
  {
    id: 6,
    title: "QA Automation Engineer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our team to build and maintain our automated testing framework. Experience with Selenium, Cypress, and CI/CD integration is required."
  }
];

const benefits = [
  {
    title: "Flexible Work Arrangements",
    description: "Balance your work and personal life with flexible scheduling and remote work options.",
    icon: "🕒"
  },
  {
    title: "Competitive Compensation",
    description: "Receive a competitive salary package with performance-based bonuses and equity options.",
    icon: "💰"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance coverage for you and your family, plus wellness programs.",
    icon: "❤️"
  },
  {
    title: "Professional Development",
    description: "Access to training, conferences, certifications, and educational reimbursement.",
    icon: "📚"
  },
  {
    title: "Global Opportunities",
    description: "Work across our global offices with opportunities for international assignments.",
    icon: "🌏"
  },
  {
    title: "Innovation Culture",
    description: "Dedicated time for personal projects and hackathons to foster innovation.",
    icon: "💡"
  }
];

export default function Careers() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary">Careers at Nexus Global</h1>
          <p className="text-lg text-gray-600">
            Join our team of talented professionals and be part of our mission to transform businesses through technology.
            We offer a collaborative environment where innovation thrives and careers flourish.
          </p>
        </div>

        <div className="relative mb-20 rounded-lg overflow-hidden min-h-[370px] shadow-lg">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('/lovable-uploads/9c0006f5-915b-487f-93e2-1beebace474e.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#455062]/90 to-white/80" />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-center px-10 py-12 lg:px-20 lg:py-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Global Team
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Make an impact in the fintech industry by joining Nexus Global. We're constantly looking for exceptional talent across technology, design, and business roles.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#455062] hover:bg-gray-100 font-medium w-fit"
            >
              View Open Positions
            </Button>
          </div>
        </div>

        <Tabs defaultValue="openings" className="mb-20">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="openings">Open Positions</TabsTrigger>
            <TabsTrigger value="benefits">Benefits & Perks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="openings" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((position) => (
                <Card key={position.id} className="hover-scale">
                  <CardHeader>
                    <CardTitle>{position.title}</CardTitle>
                    <CardDescription>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-sm">
                          <Award className="h-4 w-4 mr-1 text-gray-500" />
                          {position.experience}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <Button variant="outline" className="mt-2 w-full sm:w-auto">
                      <span>Apply Now</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="benefits" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Don't See the Right Role?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We're always looking for talented professionals to join our team. Send us your resume and tell us how you can contribute to Nexus Global.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
