"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import ArrowRight from "../../../../public/icons/ArrowUpRight.svg";

export default function Navbar() {
  const { t } = useTranslation("NAVBAR");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Synopp Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {isLoaded && (
            <div className="hidden md:flex items-center space-x-8">
              <ScrollLink
                to="HeroSection"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="text-white hover:text-accent-yellow transition-colors"
              >
                {t("HOME")}
              </ScrollLink>
              <ScrollLink
                to="Features"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="text-white hover:text-accent-yellow transition-colors"
              >
                {t("FEATURES")}
              </ScrollLink>
              <ScrollLink
                to="Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="text-white hover:text-accent-yellow transition-colors"
              >
                {t("CONTACT")}
              </ScrollLink>
              <PrimaryButton
                className="text-sm"
                icon={ArrowRight.src}
              >
                {t("GET_STARTED")}
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
} 