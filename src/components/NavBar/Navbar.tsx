"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { PrimaryButton } from "../Commons/PrimaryButton/PrimaryButton"
import { LanguageButton } from "../LanguajeSelector/LanguajeButton"

// Animation constants
const HEADER_ANIMATION = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5 },
}

// Navigation links
const NAV_LINKS = [
  { href: "#about", translationKey: "WHY_US" },
  { href: "#services", translationKey: "WHAT_WE_DO" },
  { href: "#process", translationKey: "OUR_PROCESS" },
  { href: "#tech-stack", translationKey: "THE_STACK_WE_USE" },
]

const Navbar = () => {
  const { t } = useTranslation("NAVBAR")
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.header
      {...HEADER_ANIMATION}
      className="fixed top-6 left-0 right-0 z-50 transition-all duration-300 md:max-w-[90%] md:rounded-[20px] mx-auto md:border-[1px] border-[#EFEDFD66]  md:bg-[rgba(255,255,255,0.05)] py-3.5 backdrop-blur-md"
      role="banner"
    >
      <div className={`${isOpen ? 'absolute' : 'relative'}  md:relative container mx-auto px-4 flex justify-between items-center z-30`}>
        <Link href="/" className="text-xl font-bold gradient-text">
          <Image src="/icons/logo.svg" alt="Synopp" width={100} height={100} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-bold" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-accent-yellow transition-colors">
              {t(link.translationKey)}
            </Link>
          ))}
        </nav>

        <div className="items-center ml-4 hidden md:flex">
          <LanguageButton />
          <Link href="#contact">
            <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
          </Link>
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
          <>
          <motion.div
           
            className="relative md:hidden bg-card-bg top-full left-0 right-0 p-4 h-[100vh] md:bg-[rgba(0,0,0,1)] "
            id="mobile-menu"
          >
             <div className="absolute top-[-50px] left-0 w-full h-full bg-primary-700" >
              <Image src="/images/SquaresBackground.svg" alt="Hero Image" fill className="object-cover"/>
            </div>

            <nav
              className="absolute inset-0 flex flex-col space-y-4 h-[100vh] mt-20 items-center gap-10 font-bold"
              aria-label="Mobile Navigation"
            >

              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-base hover:text-accent-yellow transition-colors"
                    onClick={closeMenu}
                  >
                    {t(link.translationKey)}
                  </Link>
                </motion.div>
              ))}

              <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
                <LanguageButton />
              </motion.div>

              <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
                <Link href="#contact" onClick={closeMenu}>
                  <PrimaryButton>{t("CONTACT_US")}</PrimaryButton>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar