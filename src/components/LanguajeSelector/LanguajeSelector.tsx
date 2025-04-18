"use client";

// NextJS
import type React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Hooks
import { useBrowserLanguageState } from "@/app/hooks/contexts/useBrowserLanguage";

// Utils
import { LANGUAGES } from "./data";

// Types
interface DialogsProps {
  isOpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageSelector: React.FC<DialogsProps> = ({
  isOpenDialog,
  setOpenDialog,
}) => {
  const { browserLanguage, handleBrowserLanguage } = useBrowserLanguageState();
  const { t } = useTranslation("LANGUAJES");

  const handleClick = (key: string) => {
    handleBrowserLanguage(key);
    setOpenDialog(!isOpenDialog);
  };

  return (
    <AnimatePresence>
      {isOpenDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-[-170px] pb-3 right-[calc(50%-45px)] flex flex-col w-[96px] bottom-[calc(33%-65px)] h-[165px] bg-[#16112A] justify-center text-lg z-10 rounded-[20px] backdrop-blur-[100px] md:right-[0px] md:top-[5vh] md:bottom-0 border-[1px] border-[#EFEDFD66]"
        >
          {LANGUAGES.map(({ key, src }) => {
            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => {
                  handleClick(key);
                }}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-start self-center mt-3 md:mt-3 min-w-[65px] h-[50px]"
              >
                <div className="flex flex-row items-center gap-1 justify-center min-h-[39px]"
                style={{
                  padding: "10%",
                  borderRadius: "10px",
                  border: browserLanguage === key ? "1px solid #818CF8" : "none",
                }}>
                  <div className="h-[24px] w-[24px]">
                    <Image
                      alt="Language icons"
                      src={src || "/placeholder.svg"}
                      className="object-fill w-full h-full"
                    />
                  </div>
                  <p className="text-sm md:text-base text-white font-medium">{t(key)}</p>
                </div>
              </motion.button>
            );
          })}
          <motion.div
            className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 h-[20px] w-[25px] md:bottom-auto md:left-auto md:top-[-18px] md:right-[20px] md:rotate-180"
            initial={{ y: -5 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 300,
            }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageSelector;
