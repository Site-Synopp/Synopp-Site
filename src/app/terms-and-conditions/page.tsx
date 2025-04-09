"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const { t } = useTranslation("TERMS_AND_CONDITIONS")

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
      <main className="mx-auto max-w-7xl px-4 md:px-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center pt-12 md:pt-24 pb-8 md:pb-16">{t("TITLE")}</h1>

        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_1_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_1_CONTENT")}</p>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_2_TITLE")}</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <span className="font-semibold text-gray-25">{t("CLIENT_TITLE")}:</span> {t("CLIENT_DEFINITION")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("CONTENT_TITLE")}:</span> {t("CONTENT_DEFINITION")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("SERVICES_TITLE")}:</span> {t("SERVICES_DEFINITION")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("USER_TITLE")}:</span> {t("USER_DEFINITION")}
              </li>
            </ul>
          </section>

          {/* 3. Use of the Website */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_3_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_3_INTRO")}</p>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("PROHIBITED_ACTIONS_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("PROHIBITED_ACTION_1")}</li>
              <li>{t("PROHIBITED_ACTION_2")}</li>
              <li>{t("PROHIBITED_ACTION_3")}</li>
              <li>{t("PROHIBITED_ACTION_4")}</li>
            </ul>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_4_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_4_INTRO")}</p>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("YOU_MAY_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("YOU_MAY_1")}</li>
              <li>{t("YOU_MAY_2")}</li>
            </ul>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("YOU_MAY_NOT_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("YOU_MAY_NOT_1")}</li>
              <li>{t("YOU_MAY_NOT_2")}</li>
              <li>{t("YOU_MAY_NOT_3")}</li>
            </ul>
          </section>

          {/* 5. Limitation of Liability */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_5_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_5_INTRO")}</p>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("LIABILITY_EXCLUSIONS_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("LIABILITY_EXCLUSION_1")}</li>
              <li>{t("LIABILITY_EXCLUSION_2")}</li>
              <li>{t("LIABILITY_EXCLUSION_3")}</li>
            </ul>
          </section>

          {/* 6. Linking to Our Website */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_6_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_6_INTRO")}</p>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("LINKING_RESTRICTIONS_INTRO")}:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("LINKING_RESTRICTION_1")}</li>
              <li>{t("LINKING_RESTRICTION_2")}</li>
              <li>{t("LINKING_RESTRICTION_3")}</li>
            </ul>
            <p className="text-sm md:text-base text-gray-400">{t("LINKING_PERMISSION_NOTICE")}</p>
          </section>

          {/* 7. Links from Our Website */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_7_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_7_CONTENT")}</p>
          </section>

          {/* 8. Data Protection */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_8_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">
              {t("SECTION_8_CONTENT_1")}{" "}
              <Link href="/privacy-policy" className="text-titles hover:underline">
                {t("PRIVACY_POLICY")}
              </Link>{" "}
              {t("AND")}{" "}
              <Link href="/cookie-policy" className="text-titles hover:underline">
                {t("COOKIE_POLICY")}
              </Link>
              .
            </p>
          </section>

          {/* 9. Governing Law & Jurisdiction */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_9_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_9_CONTENT")}</p>
          </section>

          {/* 10. Changes to These Terms */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_10_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_10_CONTENT")}</p>
          </section>

          {/* 11. Contact Us */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_11_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">
              {t("CONTACT_INTRO")}{" "}
              <Link href="mailto:info@synapp.io" className="text-accent-purple hover:underline">
                {t("CONTACT_EMAIL")}
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
