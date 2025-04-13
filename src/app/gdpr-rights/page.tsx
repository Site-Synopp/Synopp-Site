"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function GDPRRights() {
  const { t } = useTranslation("GDPR_RIGHTS")

  return (
    <motion.div
      className="bg-primary-700 text-white mt-20"
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
        <h1 className="text-4xl md:text-6xl font-bold text-center pt-12 md:pt-24 pb-8 md:pb-16">{t("TITLE")}</h1>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Introduction */}
          <section className="max-w-2xl mx-auto text-center">
            <p className="text-sm md:text-base text-gray-300">
              {t("INTRO_TEXT")}{" "}
              <Link href="mailto:dpo@synapp.io" className="text-accent-purple hover:underline">
                {t("DPO_EMAIL")}
              </Link>
              .
            </p>
          </section>

          {/* 1. Right of Access */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_1_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_1_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("ACCESS_POINT_1")}</li>
              <li>{t("ACCESS_POINT_2")}</li>
              <li>{t("ACCESS_POINT_3")}</li>
            </ul>
            <p className="mt-4 text-sm md:text-base text-gray-400">{t("ACCESS_RESPONSE_TIME")}</p>
          </section>

          {/* 2. Right to Rectification */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_2_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_2_CONTENT")}</p>
          </section>

          {/* 3. Right to Erasure */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_3_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_3_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("ERASURE_POINT_1")}</li>
              <li>{t("ERASURE_POINT_2")}</li>
              <li>{t("ERASURE_POINT_3")}</li>
            </ul>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              {t("ERASURE_EXCEPTIONS")}{" "}
              <Link
                href="https://www.legifrance.gouv.fr/"
                className="text-titles hover:underline"
              >
                {t("FRENCH_COMMERCIAL_CODE")}
              </Link>
              ).
            </p>
          </section>

          {/* 4. Right to Restrict Processing */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_4_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_4_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("RESTRICT_POINT_1")}</li>
              <li>{t("RESTRICT_POINT_2")}</li>
            </ul>
          </section>

          {/* 5. Right to Data Portability */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_5_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_5_CONTENT")}</p>
          </section>

          {/* 6. Right to Object */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_6_TITLE")}</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <span className="font-semibold text-titles">{t("DIRECT_MARKETING_TITLE")}:</span> {t("DIRECT_MARKETING_CONTENT")}{" "}
                <Link href="mailto:dpo@synapp.io" className="text-accent-purple hover:underline">
                  {t("DPO_EMAIL")}
                </Link>{" "}
                ({t("STOP_IMMEDIATELY")}).
              </li>
              <li>
                <span className="font-semibold text-titles">{t("LEGITIMATE_INTERESTS_TITLE")}:</span> {t("LEGITIMATE_INTERESTS_CONTENT")}
              </li>
            </ul>
          </section>

          {/* 7. Automated Decisions */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_7_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_7_CONTENT")}</p>
          </section>

          {/* 8. Right to Withdraw Consent */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_8_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_8_CONTENT")}</p>
          </section>

          {/* How to Exercise Your Rights */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{t("HOW_TO_EXERCISE_TITLE")}</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li className="text-sm md:text-gray-400">
                <span className="font-semibold text-titles">{t("EMAIL_TITLE")}:</span> {t("EMAIL_INTRO")}{" "}
                <Link href="mailto:dpo@synapp.io" className="text-accent-purple hover:underline">
                  {t("DPO_EMAIL")}
                </Link>{" "}
                {t("WITH")}:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  <li>{t("EMAIL_REQUIREMENT_1")}</li>
                  <li>{t("EMAIL_REQUIREMENT_2")}</li>
                </ul>
              </li>
              <li className="text-sm md:text-base">
                <span className="font-semibold">{t("RESPONSE_TIME_TITLE")}:</span>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  <li>{t("RESPONSE_TIME_CONTENT")}</li>
                </ul>
              </li>
              <li className="text-sm md:text-gray-400">
                <span className="font-semibold text-titles">{t("NO_FEES_TITLE")}: </span>
               
                  {t("NO_FEES_CONTENT")}
                
              </li>
            </ol>
          </section>

          {/* Complaints */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{t("COMPLAINTS_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("COMPLAINTS_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <span className="font-semibold text-titles">{t("SYNAPP_DPO_TITLE")}:</span>{" "}
                <Link href="mailto:dpo@synapp.io" className="text-accent-purple hover:underline">
                  {t("DPO_EMAIL")}
                </Link>
              </li>
              <li>
                <span className="font-semibold text-titles">{t("CNIL_TITLE")}:</span><br/>
                <Link href="https://www.cnil.fr/fr/plaintes" className="text-titles hover:underline">
                  {t("ONLINE_COMPLAINT_FORM")}
                </Link><br/>
                | {t("ADDRESS")}: {t("CNIL_ADDRESS")}
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{t("CONTACT_TITLE")}</h2>
            <div className="space-y-1 text-sm md:text-base text-gray-400">
              <p className="font-semibold">{t("SYNAPP_DPO")}</p>
              <p>
                {t("EMAIL")}:{" "}
                <Link href="mailto:dpo@synapp.io" className="text-accent-purple hover:underline">
                  {t("DPO_EMAIL")}
                </Link>
              </p>
              <p>{t("ADDRESS")}: {t("COMPANY_ADDRESS")}</p>
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-400">{t("POST_NOTE")}</p>
            <h3 className="mt-6">{t("LAST_UPDATED")}: {t("UPDATE_DATE")}</h3>
          </section>
        </div>
      </main>
    </motion.div>
  )
}
