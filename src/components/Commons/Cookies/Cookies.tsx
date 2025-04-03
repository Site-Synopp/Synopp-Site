"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import CookiePreferences from "./CookiesPreferences";
import { setCookieConsent } from "@/utils/actions";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { SecondaryButton } from "../SecondaryButton/SecondaryButton";
import { useTranslation } from "react-i18next";

export default function CookieModal() {
  const { t } = useTranslation("COOKIE_MODAL");
  const [isOpen, setIsOpen] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);

  const handleAcceptAll = async () => {
    await setCookieConsent({
      essential: true,
      analytics: true,
    });
    setIsOpen(false);
    window.location.reload();
  };

  const handleOnlyNecessary = async () => {
    await setCookieConsent({
      essential: true,
      analytics: false,
    });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  if (showPreferences) {
    return <CookiePreferences onClose={() => setIsOpen(false)} />;
  }

  return (
    <motion.div
      className="fixed z-50 p-4 md:p-6 md:pb-8 lg:p-8 lg:pb-10 top-0 bg-black backdrop-blur-sm bg-opacity-50"
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "flex-start",
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
    >
      <motion.div
        className="relative justify-center align-center content-center w-full md:max-w-xl lg:max-w-2xl rounded-3xl bg-[#030014] p-6 text-white shadow-lg border border-primary-100 border-opacity-60 top-[calc(100vh-440px)] md:top-[calc(100vh-300px)] max-h-[320px] sm:max-h-80 md:max-h-52"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="mb-3 text-base font-semibold">
          {t("TITLE")}
        </h2>

        <p className="mb-6 text-sm text-gray-300 leading-relaxed">
          {t("DESCRIPTION")}
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <SecondaryButton
            className="w-full min-w-[120px] justify-center"
              onClick={() => setShowPreferences(true)}
              hasBorder={false}
            >
              {t("MANAGE_COOKIES")}
            </SecondaryButton>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <SecondaryButton className="w-full min-w-[120px] justify-center" onClick={handleOnlyNecessary}>
                {t("ONLY_NECESSARY")}
              </SecondaryButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <PrimaryButton
                className="w-full min-w-[120px] justify-center"
                onClick={handleAcceptAll}
                icon="/icons/Cookie.svg"
                iconWidth={16}
                iconHeight={16}
                isLeftSide
              >
                {t("ACCEPT_ALL")}
              </PrimaryButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
