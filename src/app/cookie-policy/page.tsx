"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "react-i18next"


export default function CookiePolicy() {
  const { t } = useTranslation("COOKIE_POLICY")

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
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_1_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">
              {t("SECTION_1_INTRO")}{" "}
              <Link href="https://synapp.io" className="text-accent-purple hover:underline">
                {t("WEBSITE_URL")}
              </Link>
              . {t("SECTION_1_CONSENT")}
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-400">{t("SECTION_1_DISAGREE")}</p>
          </section>

          {/* 2. What Are Cookies? */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_2_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_2_CONTENT")}</p>
          </section>

          {/* 3. Types of Cookies We Use */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{t("SECTION_3_TITLE")}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">{t("TABLE_HEADER_CATEGORY")}</th>
                    <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">{t("TABLE_HEADER_PURPOSE")}</th>
                    <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">{t("TABLE_HEADER_DURATION")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 text-sm md:text-base">{t("ESSENTIAL_COOKIES")}</td>
                    <td className="py-3 px-4 text-sm md:text-base text-gray-400">{t("ESSENTIAL_COOKIES_PURPOSE")}</td>
                    <td className="py-3 px-4 text-sm md:text-base text-gray-400">{t("ESSENTIAL_COOKIES_DURATION")}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 text-sm md:text-base">{t("ANALYTICS_COOKIES")}</td>
                    <td className="py-3 px-4 text-sm md:text-base text-gray-400">{t("ANALYTICS_COOKIES_PURPOSE")}</td>
                    <td className="py-3 px-4 text-sm md:text-base text-gray-400">{t("ANALYTICS_COOKIES_DURATION")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Third-Party Cookies */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_4_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_4_INTRO")}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>{t("THIRD_PARTY_COOKIE_1")}</li>
              <li>{t("THIRD_PARTY_COOKIE_2")}</li>
              <li>{t("THIRD_PARTY_COOKIE_3")}</li>
            </ul>
            <p className="mt-4 text-sm md:text-base text-gray-400">{t("SECTION_4_PRIVACY_NOTICE")}</p>
          </section>

          {/* 5. How to Manage Cookies */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_5_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">{t("SECTION_5_INTRO")}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <span className="font-semibold text-gray-25">{t("BROWSER_SETTINGS_TITLE")}:</span> {t("BROWSER_SETTINGS_CONTENT")}
              </li>
              <li>
                <span className="font-semibold text-gray-25">{t("CONSENT_TOOLS_TITLE")}:</span> {t("CONSENT_TOOLS_CONTENT")}
              </li>
            </ul>
            <p className="mt-4 text-sm md:text-base text-gray-400">{t("BROWSER_GUIDES_INTRO")}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <Link href="https://support.google.com/chrome/answer/95647" className="text-titles hover:underline">
                  {t("CHROME_GUIDE")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  className="text-titles hover:underline"
                >
                  {t("FIREFOX_GUIDE")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  className="text-titles hover:underline"
                >
                  {t("SAFARI_GUIDE")}
                </Link>
              </li>
            </ul>
          </section>

          {/* 6. Changes to This Policy */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_6_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400">{t("SECTION_6_CONTENT")}</p>
          </section>

          {/* 7. Contact Us */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{t("SECTION_7_TITLE")}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              {t("SECTION_7_INTRO")}{" "}
              <Link href="mailto:dpo@synapp.io" className="text-accent-purple hover:underline">
                {t("DPO_EMAIL")}
              </Link>{" "}
              {t("OR_WRITE_TO")}
            </p>
            <div className="space-y-1 text-sm md:text-base text-gray-400">
              <p>{t("COMPANY_NAME")}</p>
              <p>{t("COMPANY_STREET")}</p>
              <p>{t("COMPANY_CITY")}</p>
            </div>
            <h3 className="mt-6">   
              {t("LAST_UPDATED")}: {t("UPDATE_DATE")}
            </h3>
          </section>
        </div>
      </main>
    </motion.div>
  )
}

