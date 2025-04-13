"use client";

import type React from "react";
import { useState } from "react";
import { SolutionCard } from "./Cards";
import { solutionData } from "./data";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import GradientText from "@/components/Commons/Title/Title";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LottieAnimation = dynamic(() => import("@/components/Sections/OurSolutions/LottieAnimation"), {
  ssr: false,
});

const OurSolutions = () => {
  const { t } = useTranslation("OUR_SERVICES");

  return (
    <section
      id="WhatWeDo"
      className="bg-primary-700 text-white py-16 relative overflow-hidden z-10 w-full lg:h-[110vh]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent-purple text-xs md:text-sm tracking-wider uppercase mb-5 font-bold">
            {t("SOLUTIONS.SUBTITLE")}
          </p>
          <GradientText> {t("SOLUTIONS.TITLE")}</GradientText>
          <p className="text-label-supporting-text text-base md:text-lg mb-8 max-w-4xl mx-auto">
            {t("SOLUTIONS.DESCRIPTION")}
          </p>
        </div>
      </div>

      {/* Desktop layout - Lottie animation with positioned cards - KEEPING ORIGINAL STYLING */}
      <div className="hidden lg:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[650px] xl:h-[750px] w-[750px] xl:w-[950px] relative">
        <Suspense fallback={<div className="h-[650px] w-[750px]" />}>
          <LottieAnimation />
        </Suspense>

        {/* Left elements */}
        {/* Top left element */}
        <SolutionCard
          title={t(`SOLUTIONS.${solutionData[0].id}.TITLE`)}
          description={t(`SOLUTIONS.${solutionData[0].id}.DESCRIPTION`)}
          className="top-5 left-[-45px] xl:left-[-60px]"
          icon={solutionData[0].icon || ""}
        />

        {/* Central left element */}
        <SolutionCard
          title={t(`SOLUTIONS.${solutionData[1].id}.TITLE`)}
          description={t(`SOLUTIONS.${solutionData[1].id}.DESCRIPTION`)}
          className="top-[11rem] left-[-8rem] xl:top-[14.5rem] xl:left-[-10rem]"
          icon={solutionData[1].icon || ""}
        />

        {/* Bottom left element */}
        <SolutionCard
          title={t(`SOLUTIONS.${solutionData[2].id}.TITLE`)}
          description={t(`SOLUTIONS.${solutionData[2].id}.DESCRIPTION`)}
          className="top-[20.7rem] left-[-45px] xl:top-[27.5rem] xl:left-[-60px]"
          icon={solutionData[2].icon || ""}
        />

        {/* Right elements */}
        {/* Top right element */}
        <SolutionCard
          title={t(`SOLUTIONS.${solutionData[3].id}.TITLE`)}
          description={t(`SOLUTIONS.${solutionData[3].id}.DESCRIPTION`)}
          className="top-5 right-[-45px] xl:right-[-60px]"
          icon={solutionData[3].icon || ""}
        />

        {/* Central right element */}
        <SolutionCard
          title={t(`SOLUTIONS.${solutionData[4].id}.TITLE`)}
          description={t(`SOLUTIONS.${solutionData[4].id}.DESCRIPTION`)}
          className="top-[11rem] right-[-8rem] xl:top-[14.5rem] xl:right-[-10rem]"
          icon={solutionData[4].icon || ""}
        />

        {/* Bottom right element */}
        <SolutionCard
          title={t(`SOLUTIONS.${solutionData[5].id}.TITLE`)}
          description={t(`SOLUTIONS.${solutionData[5].id}.DESCRIPTION`)}
          className="top-[20.7rem] right-[-45px] xl:top-[27.5rem] xl:right-[-60px]"
          icon={solutionData[5].icon || ""}
        />
      </div>

      {/* Mobile and Tablet layout - Grid system */}
      <div className="lg:hidden container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionData.map((solution) => (
            <div key={solution.id} className="flex justify-center">
              <SolutionCardResponsive
                title={t(`SOLUTIONS.${solution.id}.TITLE`)}
                description={t(`SOLUTIONS.${solution.id}.DESCRIPTION`)}
                icon={solution.icon || ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Responsive version of the card without absolute positioning
const SolutionCardResponsive = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  const [mouseEffect, setMouseEffect] = useState({
    x: 0,
    y: 0,
    alpha: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;
    const alpha = 0.35;

    setMouseEffect({ x, y, alpha });
  };

  const handleMouseLeave = () => {
    setMouseEffect({ x: 0, y: 0, alpha: 0 });
  };

  return (
    <div
      className="w-full max-w-[380px] h-[160px] rounded-2xl bg-[#060416] border border-[#353344] gap-4"
      style={{
        transform: `rotateY(${mouseEffect.x}deg) rotateX(${mouseEffect.y}deg)`,
        boxShadow: `${-mouseEffect.x * 0.4}px ${
          mouseEffect.y * 0.4
        }px 20px rgba(152, 60, 192, ${mouseEffect.alpha})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col p-4 justify-around h-full">
        <div className="flex items-center gap-2">
          <Image src={icon} alt={title} width={24} height={24} />
          <h3 className="text-white text-base xl:text-lg font-bold">{title}</h3>
        </div>

        <p className="text-primary-secondary-disabled  text-xs xl:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OurSolutions;
