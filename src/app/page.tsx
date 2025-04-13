import ContactUs from "@/components/Sections/ContactUs/ContactUs";
import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import OurProcess from "@/components/Sections/OurProcess/OurProcess";
import OurSolutions from "@/components/Sections/OurSolutions/OurSolutions";
import TechStack from "@/components/Sections/TechStack/TechStack";
import WhyUs from "@/components/Sections/WhyUs/WhyUs";

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
