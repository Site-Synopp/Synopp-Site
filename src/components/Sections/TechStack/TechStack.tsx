"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { techCategories } from "./data";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const TechStackSection: React.FC = () => {
  const { t } = useTranslation("TECH_STACK");
  // State for desktop: first element selected
  const [activeCategoryDesktop, setActiveCategoryDesktop] =
    useState<string>("UX_UI_DESIGN");

  // State for mobile: all categories open by default
  const [openCategoriesMobile, setOpenCategoriesMobile] = useState<string[]>(
    techCategories.map((category) => category.category)
  );

  const handleCategoryClickDesktop = (category: string) => {
    setActiveCategoryDesktop(category);
  };

  const handleCategoryClickMobile = (category: string) => {
    setOpenCategoriesMobile(
      (prev) =>
        prev.includes(category)
          ? prev.filter((cat) => cat !== category)
          : [...prev, category] 
    );
  };

  return (
    <section className="bg-primary-700 py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Title and subtitle (centered) */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <p className="text-accent-yellow text-xs md:text-sm tracking-wider uppercase mb-5 font-bold">
            {t("SUBTITLE")}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-t from-[#BFBEC3] via-[#E2E1E4] to-[#F2F2F3] text-transparent bg-clip-text pb-1">
            {t("TITLE")}
          </h1>
          <p className="text-label-supporting-text text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {t("DESCRIPTION")}
          </p>
        </motion.div>

        {/* Main container */}
        <motion.div variants={itemVariants}>
          {/* On mobile and tablet: Category list with technologies below (accordion) */}
          <div className="lg:hidden space-y-4">
            {techCategories.map((category, index) => (
              <div key={index}>
                <div
                  className={`flex items-center space-x-3 cursor-pointer py-3 px-4 transition-all duration-300 border-l-4 max-w-[95%] mx-auto ${
                    openCategoriesMobile.includes(category.category)
                      ? "border-[#9777E8] bg-gradient-to-r from-[#1A0C43] to-[#1A0C4300]"
                      : "border-transparent hover:bg-[#17151F]"
                  }`}
                  onClick={() => handleCategoryClickMobile(category.category)}
                >
                  <motion.span
                    animate={{
                      rotate: openCategoriesMobile.includes(category.category)
                        ? 90
                        : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-xl"
                  >
                    →
                  </motion.span>
                  <h2 className="text-white text-xl font-semibold">
                    {t(`TECH_CATEGORIES.${category.category}`)}
                  </h2>
                </div>

                {/* Technologies below the category (only on mobile and tablet) */}
                {openCategoriesMobile.includes(category.category) &&
                  category.tools.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-3 sm:grid-cols-3 gap-6 mt-4 pl-8"
                    >
                      {category.tools.map((tool, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-start"
                        >
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-[#17151F] rounded-xl flex items-center justify-center shadow-lg">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              className="w-10 h-10 object-contain"
                              width={100}
                              height={100}
                            />
                          </div>
                          <p className="text-white text-sm mt-2 ">{tool.name}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
              </div>
            ))}
          </div>

          {/* On desktop: Two columns (categories on the left, technologies on the right) */}
          <div className="hidden lg:flex lg:space-x-12">
            {/* Left column: Category list */}
            <div className="lg:w-1/3 space-y-4">
              {techCategories.map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 cursor-pointer py-3 px-4 transition-all duration-300 border-l-4 ${
                    activeCategoryDesktop === category.category
                      ? "border-[#9777E8] bg-gradient-to-r from-[#1A0C43] to-[#1A0C4300]"
                      : "border-transparent hover:bg-[#17151F]"
                  }`}
                  onClick={() => handleCategoryClickDesktop(category.category)}
                >
                  <motion.span className="text-white text-xl lg:rotate-0">
                    →
                  </motion.span>
                  <h2 className="text-white text-xl font-semibold">
                    {t(`TECH_CATEGORIES.${category.category}`)}
                  </h2>
                </div>
              ))}
            </div>

            {/* Right column: Selected category title and technologies */}
            <div className="lg:w-2/3">
              {activeCategoryDesktop && (
                <motion.div
                  key={activeCategoryDesktop}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Selected category title */}
                  <h2 className="text-white text-2xl font-semibold mb-6">
                    {t(`TECH_CATEGORIES.${activeCategoryDesktop}`)}
                  </h2>

                  {/* Technologies */}
                  {techCategories.find(
                    (cat) => cat.category === activeCategoryDesktop
                  )?.tools.length ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-4 gap-6"
                    >
                      {techCategories
                        .find((cat) => cat.category === activeCategoryDesktop)
                        ?.tools.map((tool, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-start"
                          >
                            <div className="w-16 h-16 bg-[#17151F] rounded-xl flex items-center justify-center shadow-lg">
                              <Image
                                src={tool.icon}
                                alt={tool.name}
                                className="w-10 h-10 object-contain"
                                width={100}
                                height={100}
                              />
                            </div>
                            <p className="text-white text-sm mt-2">
                              {tool.name}
                            </p>
                          </motion.div>
                        ))}
                    </motion.div>
                  ) : (
                    <p className="text-[#A0AEC0] text-lg">
                      No technologies available for this category.
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
