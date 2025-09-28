"use client";

import "../lib/reflect-metadata";
import "@/styles/globals.css";
import { DIProvider } from "@/context/RecordContext";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DIProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col bg-gray-100">
          <Header />

          <main className="flex-grow container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              {children}
            </div>
          </main>

          <Footer />
        </body>
      </html>
    </DIProvider>
  );
}