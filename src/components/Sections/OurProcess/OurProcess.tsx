"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { processSteps } from "./data";


// Animaciones
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineGrow = {
  hidden: { height: 0 },
  visible: { height: "100%" },
};

const OurProcess = () => {
  const { t } = useTranslation("OUR_PROCESS");
  return (
    <section className="bg-primary-700 text-white py-16 relative overflow-hidden z-10 w-full min-h-screen">
      {/* Background image for desktop */}
      <div className="hidden lg:block absolute inset-0 z-0  w-[87%] h-[350px] mx-auto top-[-5px]">
        <Image
          src="/images/OurProcessBackground.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-[-10px]">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-green text-xs md:text-sm tracking-wider uppercase mb-5 font-bold">
            {t("SUBTITLE")}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-t from-[#BFBEC3] via-[#E2E1E4] to-[#F2F2F3] text-transparent bg-clip-text">
            {t("TITLE_PART1")}
            <br />
            {t("TITLE_PART2")}
          </h1>
          <p className="text-label-supporting-text text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {t("DESCRIPTION")}
          </p>
        </motion.div>

        {/* Desktop Layout - Contenedor con ancho máximo para evitar que se estire demasiado */}
        <div className="hidden lg:flex justify-center">
          <div className="relative max-w-7xl w-full">
            {/* Vertical timeline line - Fijada al centro exacto */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-700 top-0 bottom-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={lineGrow}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {processSteps.map((step, index) => (
              <ProcessStepDesktop key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-700 top-0 bottom-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={lineGrow}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {processSteps.map((step, index) => (
              <ProcessStepTablet
                key={step.id}
                step={{
                  ...step,
                  number: parseInt(step.number),
                }}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical timeline line */}
            <motion.div
              className="absolute left-10 w-[2px] bg-gray-700 top-0 bottom-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={lineGrow}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {processSteps.map((step, index) => (
              <ProcessStepMobile key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStepDesktop = ({
  step,
}: {
  step: {
    id: string;
    number: string;
    image: string;
    dotColor: string;
  };
  index: number;
}) => {
  const { t } = useTranslation("OUR_PROCESS");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div
      ref={ref}
      className="flex items-start justify-between mb-32 relative max-w-screen-xl mx-auto"
    >
      {/* Número y título a la izquierda */}
      <motion.div
        className="w-[40%] pr-8 text-right flex items-center justify-start pl-4"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <div className="flex items-center justify-end mb-2">
            <div className="flex items-center justify-end mb-2 border border-gray-700 rounded-full py-1 px-2 mr-4 mt-2">
              <span className="text-4xl font-bold text-gray-500 min-w-[30px] text-center">
                {step.number}
              </span>
            </div>
            <h3 className="text-4xl font-bold">{t(`PROCESS_STEPS.${step.id}.TITLE`)}</h3>
          </div>
        </div>
      </motion.div>

      {/* Círculo indicador en la línea de tiempo */}
      <PulsingDot
        step={step}
        isInView={isInView}
        key={step.id}
        dotWidth={5}
        dotHeight={5}
      />

      {/* Descripción e imagen a la derecha */}
      <motion.div
        className="w-[40%] pl-8"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-gray-400 mb-8 text-lg">{t(`PROCESS_STEPS.${step.id}.DESCRIPTION`)}</p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={step.image || "/placeholder.svg"}
            alt={t(`PROCESS_STEPS.${step.id}.TITLE`)}
            width={500}
            height={375}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

// Corregí la alineación de los puntos para mobile y tablet, centrados sobre la línea
// Se actualizó el contenedor flex y las posiciones en cada vista

interface ProcessStep {
  number: number;
  image: string;
  dotColor: string;
  id: string;
}

const ProcessStepTablet = ({ step }: { step: ProcessStep; index: number }) => {
  const { t } = useTranslation("OUR_PROCESS");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="flex mb-24 relative items-center">
      {/* Número y título a la izquierda */}
      <motion.div
        className="w-1/3 pr-4 flex items-start justify-start text-right pl-4"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-end mb-2 border border-gray-700 rounded-full py-1 px-2 mr-4 mt-2">
              <span className="text-2xl font-bold text-gray-500  min-w-[25px] text-center">
                {step.number}
              </span>
            </div>
            <h3 className="text-2xl font-bold">{t(`PROCESS_STEPS.${step.id}.TITLE`)}</h3>
          </div>
        </div>
      </motion.div>

      {/* Círculo indicador centrado sobre la línea */}
      <div className="w-1/3 flex items-center justify-center">
        <PulsingDot
          step={step}
          isInView={isInView}
          key={step?.number?.toString()}
          dotWidth={5}
          dotHeight={5}
        />
      </div>

      {/* Descripción e imagen a la derecha */}
      <motion.div
        className="w-1/3 pl-4"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-gray-400 mb-4">{t(`PROCESS_STEPS.${step.id}.DESCRIPTION`)}</p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={step.image || "/placeholder.svg"}
            alt={t(`PROCESS_STEPS.${step.id}.TITLE`)}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};
// Componente para pasos en mobile centrado correctamente
const ProcessStepMobile = ({
  step,
}: {
  step: {
    number: string;
    image: string;
    dotColor: string;
    id: string;
  };
  index: number;
}) => {
  const { t } = useTranslation("OUR_PROCESS");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref} className="mb-16 relative flex items-start">
      {/* Círculo indicador centrado sobre la línea */}
      <div className="w-10 flex justify-center relative">
        <PulsingDot
          step={step}
          isInView={isInView}
          key={step.number}
          dotWidth={5}
          dotHeight={5}
        />
      </div>

      <motion.div
        className="flex-1 pl-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center mb-3  mt-[-5px]">
          <div className="flex items-center justify-end  border border-gray-700 rounded-full py-1 px-2 mr-4">
            <span className="text-xl font-bold text-gray-500 min-w-[20px] text-center">
              {step.number}
            </span>
          </div>
          <h3 className="text-xl font-bold">{t(`PROCESS_STEPS.${step.id}.TITLE`)}</h3>
        </div>
        <p className="text-gray-400 mb-4">{t(`PROCESS_STEPS.${step.id}.DESCRIPTION`)}</p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={step.image || "/placeholder.svg"}
            alt={t(`PROCESS_STEPS.${step.id}.TITLE`)}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

interface PulsingDotProps {
  step: {
    dotColor: string;
  };
  isInView: boolean;
  key: string;
  dotWidth: number;
  dotHeight: number;
}

function PulsingDot({
  step,
  isInView,
  dotWidth,
  dotHeight,
}: PulsingDotProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Pulsing Rings (triggered by isInView) */}
      {isInView && (
        <>
          <motion.div
            className={`absolute w-${dotWidth * 2} h-${
              dotHeight * 2
            } rounded-full bg-green-500 opacity-20  right-[0px] md:right-auto`}
            animate={{ scale: [0, 1.5], opacity: [0.7, 0] }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            className={`absolute w-${dotWidth * 4} h-${
              dotHeight * 4
            } rounded-full bg-green-500 opacity-10  right-[0px]  md:right-auto`}
            animate={{ scale: [0, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
        </>
      )}

      {/* Main Dot */}
      <motion.div
        className={`w-${dotWidth} h-${dotHeight} rounded-full ${step.dotColor} z-10 absolute right-[10px] md:right-[0px] md:relative`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
}

export default OurProcess;
