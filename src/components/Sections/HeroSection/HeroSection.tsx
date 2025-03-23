"use client";
import { PrimaryButton } from "@/components/Commons/PrimaryButton/PrimaryButton";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowRight from "../../../../public/icons/ArrowUpRight.svg";
import HeroImage from "../../../../public/images/HeroDashboard.png";
import MobileHeroImage from "../../../../public/images/HeroDashboardMobile.png";

import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("HERO_SECTION");
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

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 relative w-[100%] h-[100vh] flex flex-col">
        <div className="container mx-auto text-center max-w-4xl z-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent-yellow text-xs md:text-sm tracking-wider uppercase mb-5 font-bold">
              {t("SUBTITLE")}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-t from-[#BFBEC3] via-[#E2E1E4] to-[#F2F2F3] text-transparent bg-clip-text">
              {t("TITLE_GREETING_PART_1")}
              <br />
              {t("TITLE_GREETING_PART_2")}
            </h1>
            <p className="text-label-supporting-text text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {t("DESCRIPTION")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <PrimaryButton
              className="text-sm md:text-lg py-2 px-5 rounded-lg justify-self-center"
              icon={ArrowRight.src}
            >
              {t("BUTTON")}
            </PrimaryButton>
          </motion.div>
        </div>

        {/* Desktop version (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex w-full max-w-[95%] mt-auto flex-1 items-end justify-center absolute top-[43%]"
        >
          <div className=" w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] ">
            <div className="aspect-[16/9] w-full relative">
              <Image
                src={HeroImage || "/placeholder.svg"}
                alt="Hero Image"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#03001400] via-[#03001480] to-[#030014] z-10 rounded-lg pointer-events-none" />
          </div>
        </motion.div>

        {/* Mobile version (hidden on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute flex md:hidden w-full mt-auto flex-1 items-end justify-center top-[39%] max-w-[95%]"
        >
          <div className="w-[90%] max-w-[320px] absolute top-[-130%]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#03001400] via-[#03001499] to-[#030014] z-10 rounded-lg pointer-events-none"></div>
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
