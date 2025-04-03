import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BrowserLanguageProvider } from "./hooks/contexts/useBrowserLanguage";
import { InterFont } from "./fonts/fonts";
import Navbar from "../components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProvidersCookies from "./provider/cookies/useCookies";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synopp",
  description: "Synopp",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${InterFont.variable} bg-primary-700`}>
       <head>
         <link rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProvidersCookies>
          <BrowserLanguageProvider>
            <Navbar />
            <main>{children}</main>
            <div className="border-t border-gray-800" />
            <Footer />
          </BrowserLanguageProvider>
        </ProvidersCookies>
      </body>
    </html>
  );
}
