"use client";
import Button from "@/components/buttons/FirstBtn";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";
import clsx from "clsx";
import leftUpArrow from "@/assets/icons/left-up-arrow.svg";
import pattern from "@/assets/patterns/pattern.svg";

const TextBox = () => {
  return (
    <motion.div
      variants={fadeInVarients}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={clsx(
        "relative gap-8 mx-auto px-8 py-12 -mt-[80px] container flex flex-col overflow-hidden outline outline-black text-white bg-first",
        "md:rounded-md md:mt-[-250px] md:p-[100px]"
      )}
    >
      <h2 className={clsx("z-10 text-lg", "md:text-4xl")}>
        شركة ماوراء البناء العقارية
      </h2>
      <h1 className={clsx("z-10 max-w-[725px] text-sm ", "md:text-lg")}>
        ذوي الخبرة والاختصاص في المجال العقاري، حيث ولدت فكرة إنشاء الشركة من
        خلال دراسة السوق العقاري في المملكة العربية السعودية وتلبية الاحتياجات
        التي تساعد في تطوير النشاط العقاري.
      </h1>
      <Button
        text="تواصل معنا"
        href="/contact-us"
        icon={
          <div className={clsx("w-[10px] h-[10px]", "md:w-[14px] md:h-[14px]")}>
            <img
              className="size-full object-contain"
              src={leftUpArrow.src}
              alt="up-left-arrow"
            />
          </div>
        }
      />

      <div
        className={clsx(
          "absolute left-0 top-0 w-[215px] h-[197px] -translate-y-1/3 -translate-x-1/3 rotate-90",
          "md:w-[390px] md:h-[360px] md:bottom-0 md:top-auto md:translate-y-1/3 md:rotate-0"
        )}
      >
        <img
          className="size-full object-contain"
          src={pattern.src}
          alt="pattern"
        />
      </div>
    </motion.div>
  );
};

export default TextBox;
