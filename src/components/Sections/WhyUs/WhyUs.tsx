"use client";

import { useTranslation } from "react-i18next";
import { ResponsiveCard } from "./ResponsiveCard";
import { advantages } from "./data";
import Image from "next/image";
import GradientText from "@/components/Commons/Title/Title";

const WhyUs = () => {
  const { t } = useTranslation("WHY_US");

  return (
    <section
      id="WhyUs"
      className="bg-primary-700 text-white py-16 relative overflow-hidden z-10 w-full"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent-teal text-xs md:text-sm tracking-wider uppercase mb-5 font-bold">
            {t("SUBTITLE")}
          </p>
          <GradientText>{t("TITLE")}</GradientText>
          <p className="text-label-supporting-text text-base md:text-lg mb-8 max-w-4xl mx-auto">
            {t("DESCRIPTION")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="flex justify-center">
              <ResponsiveCard
                icon={
                  <div className={`p-3 rounded-lg ${advantage.iconBgColor}`}>
                    {" "}
                    <Image
                      src={advantage.icon}
                      alt={advantage.id}
                      width={24}
                      height={24}
                    />{" "}
                  </div>
                }
                title={t(`ADVANTAGES.${advantage.id}.TITLE`)}
                description={t(`ADVANTAGES.${advantage.id}.DESCRIPTION`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
