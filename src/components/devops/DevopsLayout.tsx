
import React from 'react';
import DevopsNavbar from './DevopsNavbar';
import { DevopsFooter } from './DevopsFooter';

interface DevopsLayoutProps {
  children: React.ReactNode;
}

export default function DevopsLayout({ children }: DevopsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      <DevopsNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <DevopsFooter />
    </div>
  );
}
