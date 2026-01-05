"use client";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";
import companies from "@/constants/companies";
import clsx from "clsx";

const Logos = () => {
  return (
    <motion.div
      variants={fadeInVarients}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={clsx("grid grid-cols-2 items-center", "md:grid-cols-4")}
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
  );
};

export default Logos;
