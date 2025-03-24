"use client";
import { useState } from "react";
import type React from "react";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/Commons/PrimaryButton/PrimaryButton";
import { useTranslation } from "react-i18next";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactUs() {
  const { t } = useTranslation("CONTACT_US");
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error al enviar el mensaje");
      }

      setStatus("success");
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Ocurrió un error inesperado"
      );
    }
  };

  return (
    <section id="Contact" className="py-20 px-4 bg-primary-700 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-accent-teal text-xs md:text-sm tracking-wider uppercase mb-5 font-bold"
          >
            {t("SUBTITLE")}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-t from-[#BFBEC3] via-[#E2E1E4] to-[#F2F2F3] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t("TITLE")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-label-supporting-text text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            {t("DESCRIPTION")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] mx-auto gap-12 lg:gap-0 max-w-[95%] lg:max-w-[100%]">
          {/* Left Column - Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pr-8 mt-10"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-10">
              {t("PROCESS_STEPS.TITLE")}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[15px] top-[30px] bottom-[70px] lg:bottom-14 w-[2px] bg-gradient-to-b from-primary-600 to-primary-600"></div>

              {/* Step 1 */}
              <div className="flex mb-12">
                <div className="relative">
                  <div className="w-[25px] h-[25px] left-1 top-[8px]  rounded-full bg-primary-600 flex items-center justify-center z-10 relative"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg md:text-2xl font-semibold mb-2">
                    {t("PROCESS_STEPS.STEP_1.TITLE")}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-sm">
                    {t("PROCESS_STEPS.STEP_1.DESCRIPTION")}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex mb-12">
                <div className="relative">
                  <div className="w-[25px] h-[25px] left-1 top-1  rounded-full bg-primary-600 flex items-center justify-center z-10 relative"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg md:text-2xl font-semibold mb-2">
                    {t("PROCESS_STEPS.STEP_2.TITLE")}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-sm">
                    {t("PROCESS_STEPS.STEP_2.DESCRIPTION")}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex">
                <div className="relative">
                  <div className="w-[25px] h-[25px] left-1 top-1 rounded-full bg-primary-600 flex items-center justify-center z-10 relative"></div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg md:text-2xl font-semibold mb-2">
                    {t("PROCESS_STEPS.STEP_3.TITLE")}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-sm">
                    {t("PROCESS_STEPS.STEP_3.DESCRIPTION")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-10 border border-gray-800"
          >
            <h3 className="text-lg md:text-4xl font-bold mb-4">
              {t("RIGHT_TITLE")}
            </h3>
            <p className="text-gray-400 mb-8">{t("RIGHT_DESCRIPTION")}</p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#8a2be2]/10 rounded-lg p-8 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#8a2be2] mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h4 className="text-xl font-bold mb-2">
                  {t("SUCCESS_MESSAGE.TITLE")}
                </h4>
                <p className="text-gray-400">
                  {t("SUCCESS_MESSAGE.DESCRIPTION")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={t("FORM.FIRST_NAME")}
                      value={formState.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121022] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6C40DBB2]/50"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder={t("FORM.LAST_NAME")}
                      value={formState.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121022] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6C40DBB2]/50"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("FORM.EMAIL")}
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121022] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6C40DBB2]/50"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("FORM.PHONE")}
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121022] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6C40DBB2]/50"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={t("FORM.MESSAGE")}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#121022] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6C40DBB2]/50"
                  />
                </div>

                {status === "error" && (
                  <div className="text-red-500 text-sm">{errorMessage}</div>
                )}

                <PrimaryButton
                  disabled={status === "submitting"}
                  onClick={handleSubmit}
                  className="w-full items-center justify-center h-12"
                >
                  {status === "submitting"
                    ? t("FORM.SUBMITTING")
                    : t("FORM.SUBMIT")}
                </PrimaryButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
