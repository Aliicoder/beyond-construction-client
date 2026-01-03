"use client";
import Title from "@/components/fragments/Title";
import companies from "@/constants/companies";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";

const Companies = () => {
  return (
    <section
      className={clsx("flex flex-col pt-12 gap-16", "md:pt-24 md:gap-16")}
    >
      <Title text="الشركات التابعة" />
      <motion.div
        variants={fadeInVarients}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto container grid grid-cols-2 md:grid-cols-4 items-center"
      >
        {companies.map(({ src, alt }, index) => (
          <div key={index} className="p-4 flex justify-center items-center">
            <img
              src={src}
              alt={alt}
              className="size-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Companies;
