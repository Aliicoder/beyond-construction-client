"use client";
import { motion } from "framer-motion";

const LineSvg = () => {
  return (
    <svg
      className="absolute left-1/2 top-1/2 -translate-x-1/2 md:w-[95px] md:h-[20px]"
      width="61"
      height="17"
      viewBox="0 0 61 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M6.52319 9.99985C15.725 6.22673 38.0075 0.944365 53.5232 9.99985"
        stroke="#BC9063"
        strokeWidth="10"
        strokeLinecap="butt" // ← IMPORTANT
        strokeLinejoin="round"
        strokeDasharray="100"
        strokeDashoffset="100"
        initial={{ strokeDashoffset: 100 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export default LineSvg;
