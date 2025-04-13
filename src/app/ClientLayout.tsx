"use client";

import { BrowserLanguageProvider } from "./hooks/contexts/useBrowserLanguage";
import ProvidersCookies from "./provider/cookies/useCookies";
import Footer from "@/components/Footer/Footer";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("@/components/NavBar/Navbar"), {
  ssr: false
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvidersCookies>
      <BrowserLanguageProvider>
        <Navbar />
        <main>{children}</main>
        <div className="border-t border-gray-800" />
        <Footer />
      </BrowserLanguageProvider>
    </ProvidersCookies>
  );
} 