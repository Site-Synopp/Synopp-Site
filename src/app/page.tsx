"use client";

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
    </>
   /*  <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold bg-gradient-to-t from-[#E2E1E4] via-[#EBEBED] to-[#F2F2F3] text-transparent bg-clip-text">
        {t("SUBTITLE_GREETING_PART_1")}
      </h1>
      <h1 className="text-4xl font-bold bg-gradient-to-t from-[#BFBEC3] via-[#CAC9CD] to-[#D4D4D7] text-transparent bg-clip-text">
        {t("SUBTITLE_GREETING_PART_2")}
      </h1>
      <br />
      <p className="text font-bold  text-primary-100">{t("BUTTON")}</p>
    </div> */
  );
}
