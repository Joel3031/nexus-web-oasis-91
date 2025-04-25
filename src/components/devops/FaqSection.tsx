
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "What is DevOps, and why does my business need it?",
      answer: "DevOps combines development and operations to speed up software delivery, improve reliability, and enhance collaboration. It helps businesses release faster, reduce downtime, and stay competitive."
    },
    {
      id: "faq-2",
      question: "How can DevOps improve my existing infrastructure?",
      answer: "DevOps automates manual tasks, optimizes resource usage, and ensures scalable, resilient systems. It streamlines deployment, monitoring, and maintenance — reducing errors and operational costs."
    },
    {
      id: "faq-3",
      question: "How long does it take to implement DevOps in my business?",
      answer: "The timeline varies based on your current setup, goals, and project size. A basic setup might take a few weeks, while a full transformation can take a few months. We tailor the approach for faster, effective results."
    },
    {
      id: "faq-4",
      question: "What industries can benefit from DevOps?",
      answer: "DevOps works for any industry that relies on software or digital services — including tech startups, eCommerce, finance, healthcare, manufacturing, and more. If speed, reliability, and efficiency matter, DevOps helps."
    },
    {
      id: "faq-5",
      question: "Is DevOps secure?",
      answer: "Yes! Security is a key part of modern DevOps strategies. From secure coding practices to continuous vulnerability scans and compliance checks, we ensure security is integrated throughout the entire pipeline."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-100" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Frequently Asked Questions
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-24 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our DevOps services and approach.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-slate-200">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 p-8 bg-blue-600 rounded-lg text-white text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Build a Smarter DevOps Setup?</h3>
          <p className="text-lg mb-6 text-blue-100">
            Let Nextgen AI help you design, deploy, and optimize a DevOps pipeline that grows with you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition-colors duration-200"
          >
            Get Your Free DevOps Consultation Today!
          </a>
        </div>
      </div>
    </section>
  );
}
