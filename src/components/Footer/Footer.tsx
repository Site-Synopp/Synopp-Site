"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Logo from "../../../public/icons/logo.svg"
import { PrimaryButton } from "../Commons/PrimaryButton/PrimaryButton"
import ArrowRight from "../../../public/icons/ArrowUpRight.svg"
import { useTranslation } from "react-i18next"
import { Link as ScrollLink } from "react-scroll"
import { ArrowUp } from "lucide-react"

function Footer() {
  const { t } = useTranslation("FOOTER")
  const { t: tNav } = useTranslation("NAVBAR")

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-primary-700 text-white w-full">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {t("READY_TO_BRING_YOUR_PROJECTS_TO_LIFE")}
            <br />
            {t("LET_TALK")}
          </h2>
          <p className="text-gray-400 text-lg mb-8"> {t("CTA_DESCRIPTION")} </p>
          <ScrollLink to="Contact" spy={true} smooth={true} offset={-100} duration={800} className="inline-flex">
            <PrimaryButton className="text-sm md:text-base py-2 px-5 rounded-lg" icon={ArrowRight.src}>
              {t("START_YOUR_PROJECT")}
            </PrimaryButton>
          </ScrollLink>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Footer Navigation and Links */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Navigation Links - First Column */}
          <div className="space-y-4">
            <ScrollLink
              to="WhatWeDo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="block text-white hover:text-accent-purple transition-colors"
            >
              {tNav("WHAT_WE_DO")}
            </ScrollLink>
            <ScrollLink
              to="WhyUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="block text-white hover:text-accent-purple transition-colors"
            >
              {tNav("WHY_US")}
            </ScrollLink>
            <ScrollLink
              to="OurProcess"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="block text-white hover:text-accent-purple transition-colors"
            >
              {tNav("OUR_PROCESS")}
            </ScrollLink>
            <ScrollLink
              to="TechStack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="block text-white hover:text-accent-purple transition-colors"
            >
              {tNav("THE_STACK_WE_USE")}
            </ScrollLink>
          </div>

          {/* Legal Links - Second Column */}
          <div className="space-y-4">
            <a href="/privacy-policy" className="block text-white hover:text-accent-purple transition-colors">
              {t("PRIVACY_POLICY")}
            </a>
            <a href="terms-and-conditions" className="block text-white hover:text-accent-purple transition-colors">
              {t("TERMS_AND_CONDITIONS")}
            </a>
            <a href="cookie-policy" className="block text-white hover:text-accent-purple transition-colors">
              {t("COOKIE_POLICY")}
            </a>
            <a href="rgpd-rights" className="block text-white hover:text-accent-purple transition-colors">
              {t("GDPR_RIGHTS")}
            </a>
          </div>

          {/* Logo Column - Only visible on desktop */}
          <div className="hidden md:flex md:justify-end md:col-span-2">
            <Image src={Logo || "/placeholder.svg"} alt="Synopp Logo" width={101} height={24}  className="self-start"/>
          </div>
        </div>

        {/* Logo - Only visible on mobile */}
        <div className="flex justify-start mt-12 md:hidden">
          <Image src={Logo || "/placeholder.svg"} alt="Synopp Logo" width={101} height={24} />
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex justify-between items-center mt-12">
          <p className="text-gray-400 text-sm"> {t("COPYRIGHT")} </p>
          <button
            onClick={scrollToTop}
            className="text-white flex items-center gap-2 hover:text-accent-purple transition-colors"
            aria-label="Back to top"
          >
            <span> {t("BACK_TO_TOP")} </span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
