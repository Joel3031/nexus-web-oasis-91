
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
      <main className="flex-grow relative flex justify-center px-0 md:px-0">
        {/* Faint pattern background overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ea66b358-ff9b-4023-a193-5c6cb08db95c.png')] opacity-10 bg-cover bg-center bg-no-repeat z-0" />
        {/* Glass card container for main content */}
        <div className="relative z-10 w-full max-w-full mx-auto bg-card shadow-none p-0 md:p-0 min-h-screen mt-0 mb-0 border-none">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
