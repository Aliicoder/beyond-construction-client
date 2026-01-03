import Button from "@/components/buttons/FirstBtn";
import { motion } from "framer-motion";
import { fadeInVarients } from "@/constants/variants";
import clsx from "clsx";
import Image from "next/image";
import leftUpArrowPath from "@/assets/icons/left-up-arrow.svg";
import patternUrl from "@/assets/patterns/pattern.svg";

const HeroPattern = () => (
  <Image
    width={215}
    height={197}
    className={clsx(
      "absolute left-0 top-0 -translate-y-1/3 -translate-x-1/3 rotate-90",
      "md:w-[390px] md:h-[360px] md:bottom-0 md:top-auto md:translate-y-1/3 md:rotate-0"
    )}
    src={patternUrl}
    alt="pattern"
  />
);
const TextBox = () => {
  return (
    <motion.div
      variants={fadeInVarients}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}
      className={clsx(
        "relative container mx-auto px-8 py-12 flex flex-col gap-8 overflow-hidden outline outline-black text-white bg-first",
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
          <Image
            width={10}
            height={10}
            className="object-contain md:w-[14px] md:h-[14px]"
            src={leftUpArrowPath}
            alt="up-left-arrow"
          />
        }
      />
      <HeroPattern />
    </motion.div>
  );
};

export default TextBox;
