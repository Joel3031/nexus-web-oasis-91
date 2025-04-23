
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background font-poppins">
      <Header />
      <main className="flex-grow pt-20 relative flex justify-center px-1 md:px-4">
        {/* Faint pattern background overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ea66b358-ff9b-4023-a193-5c6cb08db95c.png')] opacity-10 bg-cover bg-center bg-no-repeat z-0" />
        {/* Glass card container for main content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto rounded-3xl bg-card shadow-[0_8px_44px_-12px_rgba(20,20,20,0.10)] p-4 md:p-12 min-h-[70vh] mt-6 mb-8 border border-gray-200">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
