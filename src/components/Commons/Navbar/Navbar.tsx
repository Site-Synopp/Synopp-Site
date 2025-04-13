"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../../public/images/Logo.svg";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import ArrowRight from "../../../../public/icons/ArrowUpRight.svg";

export default function Navbar() {
  const { t } = useTranslation("NAVBAR");
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavClick = (to: string) => {
    console.log('pathname --> ', pathname);
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
  };

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
            <button onClick={() => router.push('/')}>
              <Image
                src={Logo}
                alt="Synopp Logo"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer"
              />
            </button>
          </div>

          {isLoaded && (
            <div className="hidden md:flex items-center space-x-8">
              {pathname === '/' ? (
                <>
                  <ScrollLink
                    to="HeroSection"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="text-white hover:text-accent-yellow transition-colors cursor-pointer"
                  >
                    {t("HOME")}
                  </ScrollLink>
                  <ScrollLink
                    to="Features"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="text-white hover:text-accent-yellow transition-colors cursor-pointer"
                  >
                    {t("FEATURES")}
                  </ScrollLink>
                  <ScrollLink
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="text-white hover:text-accent-yellow transition-colors cursor-pointer"
                  >
                    {t("CONTACT")}
                  </ScrollLink>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleNavClick('HeroSection')}
                    className="text-white hover:text-accent-yellow transition-colors"
                  >
                    {t("HOME")}
                  </button>
                  <button
                    onClick={() => handleNavClick('Features')}
                    className="text-white hover:text-accent-yellow transition-colors"
                  >
                    {t("FEATURES")}
                  </button>
                  <button
                    onClick={() => handleNavClick('Contact')}
                    className="text-white hover:text-accent-yellow transition-colors"
                  >
                    {t("CONTACT")}
                  </button>
                </>
              )}
              <PrimaryButton
                className="text-sm"
                icon={ArrowRight.src}
                onClick={() => handleNavClick('Contact')}
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