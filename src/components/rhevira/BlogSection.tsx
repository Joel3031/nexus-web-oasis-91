
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    title: "5 Ways RHEVIRA Accelerates Your Development Pipeline",
    excerpt: "Learn how RHEVIRA can help you deliver code to production faster without sacrificing quality or security.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 15, 2023",
    readTime: "5 min read"
  },
  {
    title: "Securing Your CI/CD Pipeline: Best Practices",
    excerpt: "Discover how to implement security at every stage of your development pipeline with RHEVIRA.",
    image: "https://images.unsplash.com/photo-1559330140-bfc9a3a0d7b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 22, 2023",
    readTime: "7 min read"
  },
  {
    title: "Infrastructure as Code: The Future of Cloud Deployments",
    excerpt: "Explore how RHEVIRA's infrastructure automation can transform your cloud deployment strategy.",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "February 18, 2023",
    readTime: "6 min read"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Drive faster, safer, and smarter deployments with us.
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Resources and insights to help you get the most out of RHEVIRA.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            View All Articles <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-48"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 text-primary">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
