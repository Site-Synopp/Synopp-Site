"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { setCookieConsent } from "@/utils/actions";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { SecondaryButton } from "../SecondaryButton/SecondaryButton";
import { useTranslation } from "react-i18next";

interface CookiePreferencesProps {
  onClose: () => void;
}

export default function CookiePreferences({ onClose }: CookiePreferencesProps) {
  const { t } = useTranslation("COOKIE_MODAL");
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
  });

  const handleSavePreferences = async () => {
    await setCookieConsent(preferences);
    onClose();
    window.location.reload();
  };

  const handleOnlyNecessary = async () => {
    await setCookieConsent({
      essential: true,
      analytics: false,
    });
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0 bg-black backdrop-blur-sm bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-[474px] rounded-3xl bg-[#121121] p-6 text-white shadow-lg mt-20 md:mt-0"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="mb-3 text-xl font-semibold font-haas top-3">
          {t("TITLE_PREFERENCES")}
        </h2>

        <p className="mb-6 text-sm text-gray-300 leading-relaxed">
          {t("DESCRIPTION_PREFERENCES")}
          <a
            href="/privacy-policy"
            className="underline text-white hover:text-gray-200 transition-colors"
          >
            {t("PRIVACY_POLICY")}
          </a>
          .
        </p>

        <div className="mb-8 space-y-6 text-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{t("ESSENTIAL_TITLE")}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {t("ESSENTIAL_DESCRIPTION")}
              </p>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                checked={preferences.essential}
                onChange={() => {}} // Essential cookies can't be disabled
                className="peer sr-only"
                disabled
              />
              <div className="h-6 w-11 rounded-full border border-gray-700 bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white/50 after:transition-all after:content-[''] peer-checked:bg-transparent peer-checked:after:translate-x-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{t("ANALYTICS_TITLE")}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {t("ANALYTICS_DESCRIPTION")}
              </p>
            </div>
            <motion.label
              className="relative inline-flex cursor-pointer items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() =>
                  setPreferences((prev) => ({
                    ...prev,
                    analytics: !prev.analytics,
                  }))
                }
                className="peer sr-only"
              />
              <div className="h-6 w-11 cursor-pointer rounded-full bg-gray-700/50 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#6C5CE7] peer-checked:after:translate-x-full"></div>
            </motion.label>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
           <SecondaryButton onClick={handleOnlyNecessary} className="w-full justify-center  md:w-auto md:justify-start">{t("ONLY_NECESSARY")}</SecondaryButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <PrimaryButton className="w-full justify-center md:w-auto md:justify-start" onClick={handleSavePreferences}>
              {t("ACCEPT_ALL")}
            </PrimaryButton>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
