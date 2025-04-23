
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const offices = [
  {
    id: 1,
    country: 'Saudi Arabia',
    city: 'Riyadh',
    address: 'Business Gate, Airport Road, Riyadh',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070&auto=format&fit=crop',
    mapUrl: 'https://maps.google.com'
  },
  {
    id: 2,
    country: 'UAE',
    city: 'Dubai',
    address: 'Dubai Internet City, Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    mapUrl: 'https://maps.google.com'
  },
  {
    id: 3,
    country: 'India',
    city: 'Bangalore',
    address: 'Whitefield, Bangalore',
    image: 'https://images.unsplash.com/photo-1565018054866-968e244673e7?q=80&w=2070&auto=format&fit=crop',
    mapUrl: 'https://maps.google.com'
  },
  {
    id: 4,
    country: 'India',
    city: 'Mumbai',
    address: 'Bandra Kurla Complex, Mumbai',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=2070&auto=format&fit=crop',
    mapUrl: 'https://maps.google.com'
  },
  {
    id: 5,
    country: 'India',
    city: 'Chennai',
    address: 'OMR, Chennai',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop',
    mapUrl: 'https://maps.google.com'
  }
];

export default function OfficesSection() {
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Global Presence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With offices across Saudi Arabia, UAE, and India, we deliver excellence wherever you are
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mb-8">
          {offices.map((office, index) => (
            <button
              key={office.id}
              className={cn(
                "py-3 px-4 text-left transition-all duration-300 border-b-2",
                activeOffice === index 
                  ? "border-accent text-accent font-medium" 
                  : "border-transparent text-gray-600 hover:text-gray-900"
              )}
              onClick={() => setActiveOffice(index)}
            >
              <span className="block text-sm">{office.country}</span>
              <span className="block text-lg font-semibold">{office.city}</span>
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div 
              className="h-64 lg:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${offices[activeOffice].image})` }}
            ></div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-primary">
                {offices[activeOffice].city}, {offices[activeOffice].country}
              </h3>
              <p className="text-gray-600 mb-6">
                {offices[activeOffice].address}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline">
                  <a href={offices[activeOffice].mapUrl} target="_blank" rel="noopener noreferrer">
                    View on Map
                  </a>
                </Button>
                <Button asChild>
                  <Link to="/contact">Contact This Office</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
