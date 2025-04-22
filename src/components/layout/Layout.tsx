
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0B]">
      <Header />
      <main className="flex-grow pt-20 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ea66b358-ff9b-4023-a193-5c6cb08db95c.png')] opacity-5 bg-cover bg-center bg-no-repeat" />
        <div className="relative">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
