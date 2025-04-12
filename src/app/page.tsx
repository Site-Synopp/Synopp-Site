"use client";

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import("@/components/Sections/HeroSection/HeroSection"), {
  ssr: false
});

const OurSolutions = dynamic(() => import("@/components/Sections/OurSolutions/OurSolutions"), {
  ssr: false
});

const WhyUs = dynamic(() => import("@/components/Sections/WhyUs/WhyUs"), {
  ssr: false
});

const OurProcess = dynamic(() => import("@/components/Sections/OurProcess/OurProcess"), {
  ssr: false
});

const TechStack = dynamic(() => import("@/components/Sections/TechStack/TechStack"), {
  ssr: false
});

const ContactUs = dynamic(() => import("@/components/Sections/ContactUs/ContactUs"), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurSolutions />
      <WhyUs />
      <OurProcess />
      <TechStack />
      <ContactUs />
    </>
  );
}
