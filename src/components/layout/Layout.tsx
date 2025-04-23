
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#171a1e] font-montserrat">
      <Header />
      <main className="flex-grow pt-20 relative flex justify-center px-1 md:px-4">
        {/* Faint pattern background overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ea66b358-ff9b-4023-a193-5c6cb08db95c.png')] opacity-5 bg-cover bg-center bg-no-repeat z-0" />
        {/* Glass card container for main content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto rounded-[2.2rem] bg-white bg-opacity-[0.95] shadow-[0_8px_44px_-12px_rgba(20,20,20,0.14)] p-3 md:p-8 min-h-[70vh] mt-4 mb-6 border border-gray-100">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
