
import React from 'react';
import RheviraNavbar from './RheviraNavbar';
import { Footer } from './RheviraFooter';

interface RheviraLayoutProps {
  children: React.ReactNode;
}

export default function RheviraLayout({ children }: RheviraLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <RheviraNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
