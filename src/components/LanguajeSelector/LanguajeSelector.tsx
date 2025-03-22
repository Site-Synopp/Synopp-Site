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
          className="absolute right-[calc(50%-155px)] flex flex-col w-[280px] md:w-[330px] bottom-[30vh] h-[130px] bg-[#16112A] md:bg-[rgba(255,255,255,0.05)] justify-center text-lg z-10 rounded-lg backdrop-blur-[100px] md:right-[10px] md:top-[9vh] md:bottom-0 border-[1px] border-[#EFEDFD66]"
        >
          {LANGUAGES.map(({ key, src }, index) => {
            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => {
                  handleClick(key);
                }}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-start mt-3 md:mt-2 min-w-[90%] h-[50px] gap-[10px] pl-[10%] last-of-type:border-b-transparent"
              >
                <div className="flex flex-row justify-start items-center gap-4 ">
                  <div className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] ">
                    <Image
                      alt="Language icons"
                      src={src || "/placeholder.svg"}
                      className="object-fill w-full h-full"
                    />
                  </div>
                  <p className="text-sm md:text-lg">{t(key)}</p>
                  {browserLanguage === key && (
                    <motion.p
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >{`>`}</motion.p>
                  )}
                </div>
                {Number(index) !== LANGUAGES.length - 1 && (
                  <div className="flex flex-row justify-end items-center border-[0.5px] mt-2.5 md:mt-1 w-[90%] border-[#D9D9D959]"></div>
                )}
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
