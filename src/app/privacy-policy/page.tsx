"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const { t } = useTranslation("PRIVACY_POLICY")
  
  return (
    <motion.div
      className="bg-primary-700 text-white mt-40"
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "flex-start",
      }}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    > 
    
      {/* Main content */}
      <main className="mx-auto max-w-[90%] md:max-w-7xl px-4 md:px-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center pb-8 md:pb-16 ">{t("TITLE")}</h1>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_1_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">
              {t("SECTION_1_CONTENT")}
            </p>
          </section>

          {/* 2. Data Controller */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_2_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_2_INTRO")}
            </p>
            <div className="space-y-1">
              <p className="text-sm md:text-base font-semibold">{t("CONTACT_DETAILS")}:</p>
              <p className="text-sm md:text-base text-gray-400">{t("ADDRESS")}: {t("COMPANY_ADDRESS")}</p>
              <p className="text-sm md:text-base text-gray-400">
                {t("EMAIL")}:{" "}
                <Link href="mailto:info@synopp.io" className="text-accent-purple hover:underline">
                  {t("COMPANY_EMAIL")}
                </Link>
              </p>
              <p className="text-sm md:text-base text-gray-400">{t("PHONE")}: {t("COMPANY_PHONE")}</p>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm md:text-base font-semibold">{t("DPO_TITLE")}:</p>
              <p className="text-sm md:text-base text-gray-400">
                {t("EMAIL")}:{" "}
                <Link href="mailto:dpo@synopp.io" className="text-accent-purple hover:underline">
                  {t("DPO_EMAIL")}
                </Link>
              </p>
            </div>
          </section>

          {/* 3. Data We Collect */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_3_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_3_INTRO")}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <span className="font-semibold text-gray-25 ">{t("IDENTITY_DATA_TITLE")}:</span> {t("IDENTITY_DATA_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("CONTACT_DATA_TITLE")}:</span> {t("CONTACT_DATA_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("TECHNICAL_DATA_TITLE")}:</span> {t("TECHNICAL_DATA_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("USAGE_DATA_TITLE")}:</span> {t("USAGE_DATA_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("MARKETING_DATA_TITLE")}:</span> {t("MARKETING_DATA_CONTENT")}
              </li>
            </ul>
          </section>

          {/* 4. How We Collect Your Personal Data */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_4_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_4_INTRO")}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <span className="font-semibold text-gray-25">{t("DIRECT_INTERACTION_TITLE")}:</span> {t("DIRECT_INTERACTION_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("AUTOMATED_TECH_TITLE")}:</span> {t("AUTOMATED_TECH_CONTENT")}
              </li>
            </ul>
          </section>

          {/* 5. Purposes of Processing */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_5_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_5_INTRO")}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("PURPOSE_1")}</li>
              <li>{t("PURPOSE_2")}</li>
              <li>{t("PURPOSE_3")}</li>
              <li>{t("PURPOSE_4")}</li>
            </ul>
          </section>

          {/* 6. Your Rights */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_6_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_6_INTRO")}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <span className="font-semibold text-gray-25">{t("RIGHT_ACCESS_TITLE")}:</span> {t("RIGHT_ACCESS_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("RIGHT_RECTIFICATION_TITLE")}:</span> {t("RIGHT_RECTIFICATION_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("RIGHT_ERASURE_TITLE")}:</span> {t("RIGHT_ERASURE_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("RIGHT_RESTRICT_TITLE")}:</span> {t("RIGHT_RESTRICT_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("RIGHT_PORTABILITY_TITLE")}:</span> {t("RIGHT_PORTABILITY_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("RIGHT_OBJECT_TITLE")}:</span> {t("RIGHT_OBJECT_CONTENT")}
              </li>
            </ul>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              {t("EXERCISE_RIGHTS_1")}{" "}
              <Link href="mailto:dpo@synopp.io" className="text-accent-purple hover:underline">
                {t("DPO_EMAIL")}
              </Link>
              .
            </p>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_7_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_7_CONTENT_1")}
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_7_CONTENT_2")}
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_7_CONTENT_3_A")}
              <Link href="/cookies" className="text-titles hover:underline">
                {t("SECTION_7_CONTENT_3_B")}
              </Link>
            </p>
          </section>

          {/* 8. Changes to the Privacy Policy */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_8_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">
              {t("SECTION_8_CONTENT")}
            </p>
          </section>

          {/* 9. Contact Us */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_9_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_9_INTRO")}
            </p>
            <div className="space-y-1 text-sm md:text-base text-gray-400">
              <p>
                {t("EMAIL")}:{" "}
                <Link href="mailto:info@synopp.io" className="text-accent-purple hover:underline"> 
                  {t("COMPANY_EMAIL")}
                </Link>
              </p>
              <p>{t("PHONE")}: {t("COMPANY_PHONE")}</p>
              <p>{t("ADDRESS")}: {t("COMPANY_ADDRESS")}</p>
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              {t("COMPLAINT_RIGHT")}
              <Link href="https://www.cnil.fr" className="block text-titles hover:underline">
                {t("CNIL_WEBSITE")}
              </Link>
            </p>
            <h3 className="mt-6">
                {t("LAST_UPDATED")}: {t("UPDATE_DATE")}
            </h3>
          </section>
        </div>
      </main>
    </motion.div>
  )
}