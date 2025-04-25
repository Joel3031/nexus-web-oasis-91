
import React from 'react';
import CloudNavbar from './CloudNavbar';
import { Footer } from './CloudFooter';

interface CloudLayoutProps {
  children: React.ReactNode;
}

export default function CloudLayout({ children }: CloudLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CloudNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
