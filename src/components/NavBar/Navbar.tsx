"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
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

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Register react-scroll events
  useEffect(() => {
    if (!isClient) return;

    // Register begin and end events for animations
    Events.scrollEvent.register("begin", (to) => {
      console.log("Scroll begin to", to);
    });

    Events.scrollEvent.register("end", (to) => {
      console.log("Scroll end to", to);
      setActiveLink(to);
    });

    // Clean up events when component unmounts
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [isClient]);

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

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Clean up
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
        <ScrollLink
          to="HeroSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
          className="text-xl font-bold gradient-text cursor-pointer"
        >
          <Image
            src="/icons/logo.svg"
            alt="Synopp"
            width={100}
            height={100}
            priority
          />
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-8 font-bold"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              activeClass="active-link"
              className="text-sm text-white hover:text-accent-yellow  transition-colors cursor-pointer"
              onClick={() => {
                setActiveLink(link.href);
                closeMenu();
              }}
            >
              <span
                className={activeLink === link.href ? "text-accent-yellow" : ""}
              >
                {t(link.translationKey)}
              </span>
            </ScrollLink>
          ))}
        </nav>

        <div className="items-center ml-4 hidden md:flex">
          <LanguageButton />
          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
          >
            <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
          </ScrollLink>
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
                  <ScrollLink
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    activeClass="active-link"
                    className="text-base hover:text-accent-yellow transition-colors cursor-pointer text-white"
                    onClick={() => {
                      setActiveLink(link.href);
                      closeMenu();
                    }}
                  >
                    <span
                      className={
                        activeLink === link.href ? "text-accent-yellow" : ""
                      }
                    >
                      {t(link.translationKey)}
                    </span>
                  </ScrollLink>
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
                <ScrollLink
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="cursor-pointer"
                  onClick={closeMenu}
                >
                  <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
                </ScrollLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
