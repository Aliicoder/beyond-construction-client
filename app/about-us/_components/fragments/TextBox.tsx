"use client";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";
import clsx from "clsx";

const TextBox = () => {
  return (
    <motion.p
      variants={fadeInVarients}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={clsx("max-w-[920px] p-4 text-center", "md:text-2xl")}
    >
      شركة سعودية ذات مسؤولية محدودة انطلقت في مطلع عام 2012م تأسست على أيدي ذوي
      الخبرة والاختصاص في المجال العقاري، حيث ولدت فكرة إنشاء الشركة من خلال
      دراسة السوق العقاري في المملكة العربية السعودية وتلبية الاحتياجات التي
      تساعد في تطوير النشاط العقاري.
    </motion.p>
  );
};

export default TextBox;
