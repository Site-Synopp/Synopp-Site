"use client";
import { PrimaryButton } from "@/components/Commons/PrimaryButton/PrimaryButton";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowRight from "../../../../public/icons/ArrowUpRight.svg";
import MobileHeroImage from "../../../../public/images/HeroDashboardMobile.png";

import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import GradientText from "@/components/Commons/Title/Title";
import { useLottie } from "lottie-react";
import HeroAnimation from "../../../../public/animations/Hero.json";
import HeroAnimation2 from "../../../../public/animations/Hero_lines.json";
export default function HeroSection() {
  const { t } = useTranslation("HERO_SECTION");

  const defaultOptions = {
    animationData: HeroAnimation,
    loop: false,
  };
  const defaultOptions2 = {
    animationData: HeroAnimation2,
    loop: true,
  };


  const { View } = useLottie(defaultOptions);
  const { View: View2 } = useLottie(defaultOptions2);

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
          className="relative  mx-auto hidden md:block mt-[25px]"
        >
         <div className="lottie">{View}</div>
          <div className="lottie absolute top-0 left-0 w-full h-full z-[-1]">{View2}</div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#03001400] via-[#03001480] to-[#040014] z-10 rounded-lg pointer-events-none" />
        </motion.div>

        {/*  </div> */}

        {/* Mobile version (hidden on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute flex md:hidden w-full mt-auto flex-1 items-end justify-center top-[calc(50%+10px)] max-w-[95%]"
        >
          <div className="w-[90%] max-w-[320px] absolute top-[-130%]">
            <div className="absolute right-0 left-0 inset-0 bg-gradient-to-b from-[#03001400] via-[#040014d9] to-[#040014] z-10 rounded-lg pointer-events-none"></div>
            <div className="aspect-[9/16] w-full relative">
              <Image
                src={MobileHeroImage || "/placeholder.svg"}
                alt="Mobile Dashboard Preview"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 90vw"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
