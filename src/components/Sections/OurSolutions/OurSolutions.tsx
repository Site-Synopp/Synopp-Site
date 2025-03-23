"use client";

import type React from "react";

import { useState } from "react";
import { useLottie } from "lottie-react";
import animationData from "../../../../public/animations/Synopp.json";
import { SolutionCard } from "./Cards";
import { solutionData } from "./data";

const OurSolutions = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <section className="bg-primary-700 text-white py-16 relative overflow-hidden z-10 w-full lg:h-[110vh]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent-purple text-xs md:text-sm tracking-wider uppercase mb-5 font-bold">
            WHAT WE DO
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-t from-[#BFBEC3] via-[#E2E1E4] to-[#F2F2F3] text-transparent bg-clip-text">
            Our Solutions
          </h1>
          <p className="text-label-supporting-text text-base md:text-lg mb-8 max-w-4xl mx-auto">
            Explore our custom digital solutions that turn your ideas into
            game-changing results.
          </p>
        </div>
      </div>

      {/* Desktop layout - Lottie animation with positioned cards - KEEPING ORIGINAL STYLING */}
      <div className="hidden lg:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[650px] xl:h-[750px] w-[750px] xl:w-[950px] relative">
        <div className="lottie">{View}</div>

        {/* Elementos izquierdos */}
        {/* Elemento superior izquierdo */}
        <SolutionCard
          title={solutionData[0].title}
          description={solutionData[0].description}
          className="top-5 left-[-45px] xl:left-[-60px]"
        />

        {/* Elemento Central izquierdo */}
        <SolutionCard
          title={solutionData[1].title}
          description={solutionData[1].description}
          className="top-[11rem] left-[-8rem] xl:top-[14.5rem] xl:left-[-10rem]"
        />

        {/* Elemento inferior izquierdo */}
        <SolutionCard
          title={solutionData[2].title}
          description={solutionData[2].description}
          className="top-[20.7rem] left-[-45px] xl:top-[27.5rem] xl:left-[-60px]"
        />

        {/* Elementos derechos */}
        {/* Elemento superior derecho */}
        <SolutionCard
          title={solutionData[3].title}
          description={solutionData[3].description}
          className="top-5 right-[-45px] xl:right-[-60px]"
        />

        {/* Elemento Central derecho */}
        <SolutionCard
          title={solutionData[4].title}
          description={solutionData[4].description}
          className="top-[11rem] right-[-8rem] xl:top-[14.5rem] xl:right-[-10rem]"
        />

        {/* Elemento inferior derecho */}
        <SolutionCard
          title={solutionData[5].title}
          description={solutionData[5].description}
          className="top-[20.7rem] right-[-45px] xl:top-[27.5rem] xl:right-[-60px]"
        />
      </div>

      {/* Mobile and Tablet layout - Grid system */}
      <div className="lg:hidden container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionData.map((solution) => (
            <div key={solution.id} className="flex justify-center">
              <SolutionCardResponsive
                title={solution.title}
                description={solution.description}
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
}: {
  title: string;
  description: string;
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
      className="w-full max-w-[380px] h-[160px] rounded-xl bg-[#060416] border border-[#353344] gap-4"
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
        <h3 className="text-white text-base xl:text-lg font-bold">{title}</h3>
        <p className="text-white text-xs xl:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default OurSolutions;
