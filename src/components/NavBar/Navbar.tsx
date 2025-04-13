"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { PrimaryButton } from "../Commons/PrimaryButton/PrimaryButton";
import { LanguageButton } from "../LanguajeSelector/LanguajeButton";

// Animation constants
const HEADER_ANIMATION = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5 },
};

// Navigation links
const NAV_LINKS = [
  { href: "WhatWeDo", translationKey: "WHAT_WE_DO" },
  { href: "WhyUs", translationKey: "WHY_US" },
  { href: "OurProcess", translationKey: "OUR_PROCESS" },
  { href: "TechStack", translationKey: "THE_STACK_WE_USE" },
  { href: "Contact", translationKey: "CONTACT_US" },
];

const Navbar = () => {
  const { t } = useTranslation("NAVBAR");
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavClick = (to: string) => {
    if (pathname !== '/') {
      router.push('/');
      // Esperamos a que la página se cargue antes de hacer scroll
      const handleScroll = () => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      // Usamos un timeout más largo para asegurar que la página se haya cargado
      setTimeout(handleScroll, 1000);
    } else {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveLink(to);
    closeMenu();
  };

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <motion.header
      {...HEADER_ANIMATION}
      className="fixed top-6 left-0 right-0 z-50 transition-all duration-300 max-w-[90%] rounded-[20px] mx-auto border-[1px] border-[#EFEDFD66] bg-[rgba(255,255,255,0.05)] py-3.5 backdrop-blur-md"
      role="banner"
    >
      <div
        className={`${
          isOpen ? "absolute" : "relative"
        } md:relative container mx-auto px-4 flex justify-between items-center z-30`}
      >
        <button
          onClick={() => handleNavClick('HeroSection')}
          className="text-xl font-bold gradient-text cursor-pointer"
        >
          <Image
            src="/icons/logo.svg"
            alt="Synopp"
            width={100}
            height={100}
            priority
          />
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-8 font-bold"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-white hover:text-accent-yellow transition-colors cursor-pointer"
            >
              <span
                className={activeLink === link.href ? "text-accent-yellow" : ""}
              >
                {t(link.translationKey)}
              </span>
            </button>
          ))}
        </nav>

        <div className="items-center ml-4 hidden md:flex">
          <LanguageButton />
          <button
            onClick={() => handleNavClick('Contact')}
            className="cursor-pointer"
          >
            <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card-bg p-4"
            id="mobile-menu"
          >
            <nav
              className="flex flex-col space-y-4 h-[calc(100vh-200px)] mt-20 items-center gap-10 font-bold"
              aria-label="Mobile Navigation"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-base hover:text-accent-yellow transition-colors cursor-pointer text-white"
                  >
                    <span
                      className={
                        activeLink === link.href ? "text-accent-yellow" : ""
                      }
                    >
                      {t(link.translationKey)}
                    </span>
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <LanguageButton />
              </motion.div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <button
                  onClick={() => handleNavClick('Contact')}
                  className="cursor-pointer"
                >
                  <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
