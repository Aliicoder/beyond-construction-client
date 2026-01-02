"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className="relative flex justify-center">
      <motion.svg
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
          strokeLinecap="square"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
      <span className={clsx("z-10 font-bold", "md:text-2xl")}>{text}</span>
    </div>
  );
};

export default Title;
