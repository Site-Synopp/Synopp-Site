"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../Commons/PrimaryButton/PrimaryButton";
import { LanguageButton } from "../LanguajeSelector/LanguajeButton";

const Navbar = () => {
  const { t } = useTranslation("NAVBAR");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 md:max-w-[90%] md:rounded-[20px]  mx-auto  md:border-[1px] border-[#EFEDFD66] ${
        scrolled
          ? "md:bg-[rgba(255,255,255,0.05)] backdrop-blur-md py-3.5"
          : "md:bg-[rgba(255,255,255,0.05)] py-3.5"
      }`} // top-0
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold gradient-text">
          <Image src="./icons/logo.svg" alt="Synopp" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-bold">
          <Link
            href="#about"
            className="text-sm  hover:text-accent-yellow transition-colors"
          >
            {t("WHY_US")}
          </Link>
          <Link
            href="#services"
            className="text-sm hover:text-accent-yellow  transition-colors"
          >
            {t("WHAT_WE_DO")}
          </Link>
          <Link
            href="#process"
            className="text-sm hover:text-accent-yellow transition-colors"
          >
            {t("OUR_PROCESS")}
          </Link>
          <Link
            href="#tech-stack"
            className="text-sm hover:text-accent-yellow  transition-colors"
          >
            {t("THE_STACK_WE_USE")}
          </Link>
        </nav>
        
      {/* Desktop Navigation */}
        <div className="items-center ml-4 hidden md:flex">
        <LanguageButton />
          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-4 rounded-md text-sm transition-colors"
          >
            <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute md:hidden bg-card-bg top-full left-0 right-0 p-4 border-t border-gray-800 h-[100vh] md:bg-[rgba(0,0,0,1)] backdrop-blur-lg"
        >
          <nav className="flex flex-col space-y-4 h-[100vh] mt-20 items-center gap-10 font-bold">
            <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            >
            <Link
              href="#about"
              className="text-base hover:text-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("WHY_US")}
            </Link>
            </motion.div>
            <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            >
            <Link
              href="#services"
              className="text-base hover:text-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("WHAT_WE_DO")}
            </Link>
            </motion.div>
            <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <Link
              href="#process"
              className="text-base hover:text-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("OUR_PROCESS")}
            </Link>
            </motion.div>
            <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            >
            <Link
              href="#tech-stack"
              className="text-base hover:text-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
               {t("THE_STACK_WE_USE")}
            </Link>
            </motion.div>
            <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
            >
            <LanguageButton />
            </motion.div>
            <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm transition-colors inline-block"
              onClick={() => setIsOpen(false)}
            >
              <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
            </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
