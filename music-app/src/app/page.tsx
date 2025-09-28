import React from 'react';
import Header from '@/components/homepage/Header';
import NavLinks from '@/components/homepage/NavLinks';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <Header />
      <NavLinks />
    </div>
  );
}