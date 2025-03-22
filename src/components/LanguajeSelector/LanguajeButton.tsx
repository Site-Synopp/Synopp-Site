"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

// Hooks
import { useBrowserLanguageState } from "@/app/hooks/contexts/useBrowserLanguage"

// Components


// Utils
import { LANGUAGES } from "./data"
import LanguageSelector from "./LanguajeSelector"

export function LanguageButton() {
  const [isOpenDialog, setOpenDialog] = useState(false)
  const { browserLanguage } = useBrowserLanguageState()
  const { t } = useTranslation("LANGUAJES")
  const currentLanguage = LANGUAGES.find((lang) => lang.key === browserLanguage) || LANGUAGES[0]

  return (
    <>
      <motion.button
        onClick={() => setOpenDialog(!isOpenDialog)}
        className="flex items-center gap-3  rounded px-4 py-2 h-9 w-[89px] text-white"
        whileHover={{ borderColor: "#9333ea" }}
        whileTap={{ scale: 0.98 }}
        aria-haspopup="dialog"
        aria-expanded={isOpenDialog}
      >
        <div className="h-[24px] w-[24px] rounded-full overflow-hidden">
          <Image
            src={currentLanguage.src || "/placeholder.svg"}
            alt={`${t(currentLanguage.key)} flag`}
            width={24}
            height={24}
            className="object-cover"
          />
        </div>  
        <motion.div animate={{ rotate: isOpenDialog ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>

      <LanguageSelector isOpenDialog={isOpenDialog} setOpenDialog={setOpenDialog} />
    </>
  )
}
