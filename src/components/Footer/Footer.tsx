"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../../public/icons/logo.svg";
import { PrimaryButton } from "../Commons/PrimaryButton/PrimaryButton";
import ArrowRight from "../../../public/icons/ArrowUpRight.svg";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const { t } = useTranslation("FOOTER");
  const { t: tNav } = useTranslation("NAVBAR");
  return (
    <footer className="bg-primary-700 text-white max-w-[95%] mx-auto">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            {t("CTA_TITLE_1")}
            <br />
            {t("CTA_TITLE_2")}
          </h2>
          <p className="text-gray-400 text-lg mb-8">{t("CTA_DESCRIPTION")}</p>
          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="inline-flex "
          >
            <PrimaryButton
              className="text-sm md:text-lg py-2 px-5 rounded-lg justify-self-center mx-auto"
              icon={ArrowRight.src}
            >
              {t("CTA_BUTTON")}
            </PrimaryButton>
          </ScrollLink>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Footer Navigation and Logo */}
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Navigation Links - Mobile: 2x2 Grid, Desktop: Row */}
          <div className="grid grid-cols-2 md:flex md:space-x-12 gap-y-6 mb-12 md:mb-0 gap-x-12">
            <ScrollLink
              to="WhyUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="text-white hover:text-accent-purple transition-colors"
            >
              {tNav("WHY_US")}
            </ScrollLink>
            <ScrollLink
              to="WhatWeDo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="text-white hover:text-accent-purple transition-colors"
            >
              {tNav("WHAT_WE_DO")}
            </ScrollLink>
            <ScrollLink
              to="OurProcess"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="text-white hover:text-accent-purple transition-colors"
            >
              {tNav("OUR_PROCESS")}
            </ScrollLink>
            <ScrollLink
              to="TechStack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="text-white hover:text-accent-purple transition-colors"
            >
              {tNav("THE_STACK_WE_USE")}
            </ScrollLink>
          </div>

          {/* Logo and Copyright - Mobile: Stacked, Desktop: Side by Side */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center mb-4 md:mb-2">
              <Image src={Logo} alt="Synopp Logo" width={101} height={20} />
            </div>
            <p className="text-gray-400 text-sm">
              {t("COPYRIGHT")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
