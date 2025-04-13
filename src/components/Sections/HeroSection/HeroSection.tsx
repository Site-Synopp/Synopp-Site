"use client";
import { PrimaryButton } from "@/components/Commons/PrimaryButton/PrimaryButton";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowRight from "../../../../public/icons/ArrowUpRight.svg";
import MobileHeroImage from "../../../../public/images/HeroDashboardMobile.png";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import GradientText from "@/components/Commons/Title/Title";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";

const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
  loading: () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      className="h-[500px] w-full bg-gradient-to-b from-[#03001400] via-[#03001480] to-[#040014] rounded-lg"
    />
  )
});

export default function HeroSection() {
  const { t } = useTranslation("HERO_SECTION");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-[-1px]">
        <Image
          src="/images/SquaresBackground.svg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>

      <section
        id="HeroSection"
        className="pt-32 lg:pb-0 md:pt-40 md:pb-24 px-4 relative w-[100%] flex flex-col lg:justify-between min-h-[100vh]"
      >
        <div className="container mx-auto text-center max-w-4xl z-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent-yellow text-xs md:text-sm tracking-wider uppercase mb-5 font-bold">
              {t("SUBTITLE")}
            </p>
            <GradientText>
              {t("TITLE_GREETING_PART_1")}
              <br />
              {t("TITLE_GREETING_PART_2")}
            </GradientText>
            <p className="text-label-supporting-text text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {t("DESCRIPTION")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { visualDuration: 0.4 },
            }}
          >
            <ScrollLink
              to="Contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="inline-flex"
            >
              <PrimaryButton
                className="text-sm md:text-lg py-2 px-5 rounded-lg justify-self-center mx-auto"
                icon={ArrowRight.src}
              >
                {t("BUTTON")}
              </PrimaryButton>
            </ScrollLink>
          </motion.div>
        </div>

        {/* Desktop version (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto hidden md:block mt-[25px]"
        >
          <Suspense>
            {isLoaded && <LottieAnimation />}
          </Suspense>
          <div className="absolute inset-0 bg-gradient-to-b from-[#03001400] via-[#03001480] to-[#040014] z-10 rounded-lg pointer-events-none" />
        </motion.div>

        {/* Mobile version (hidden on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative md:hidden min-h-[300px]"
        >
          <div className="absolute left-0 right-0 top-0 bottom-0 ">
            <div className="absolute right-0 left-0 inset-0 bg-gradient-to-b from-[#03001400] to-[#040014] z-10 rounded-lg pointer-events-none"></div>
            <div className="aspect-[9/16] w-[85%] mx-auto relative min-h-[500px]">
              <Image
                src={MobileHeroImage || "/placeholder.svg"}
                alt="Mobile Dashboard Preview"
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
