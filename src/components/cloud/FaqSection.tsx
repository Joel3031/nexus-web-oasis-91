
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What cloud platforms do you support?",
    answer: "We specialize in AWS, Azure, Oracle Cloud (OCI), and Google Cloud Platform (GCP) — and can help you choose the right one for your business."
  },
  {
    question: "Can you migrate our existing infrastructure to the cloud?",
    answer: "Absolutely. We handle everything — from assessment and planning to a seamless, secure migration."
  },
  {
    question: "How do you ensure our cloud setup is secure?",
    answer: "We follow industry best practices for access control, data encryption, compliance, and ongoing monitoring to ensure end-to-end security."
  },
  {
    question: "How long does a typical cloud setup take?",
    answer: "It depends on the complexity of your requirements, but we typically deliver initial architectures in 2-4 weeks and complete implementations in 4-12 weeks."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes, we offer flexible support packages that include monitoring, optimization, troubleshooting, and continuous improvement of your cloud infrastructure."
  }
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 bg-primary text-white p-10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build a Smarter Cloud Setup?</h3>
            <p className="text-lg mb-8">
              Let Nextgen AI help you design, deploy, and optimize a cloud infrastructure that grows with you.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              Get Your Free Cloud Strategy Consultation Today! <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
