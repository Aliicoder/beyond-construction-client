"use client";
import Title from "@/components/fragments/Title";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";

const About = () => {
  return (
    <section
      className={clsx(
        "mx-auto container flex flex-col items-center gap-12 pt-16",
        "md:pt-24 md:gap-16"
      )}
    >
      <Title text="من نحن" />
      <motion.p
        variants={fadeInVarients}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={clsx("max-w-[920px] p-4 text-center", "md:text-2xl")}
      >
        شركة سعودية ذات مسؤولية محدودة انطلقت في مطلع عام 2012م تأسست على أيدي
        ذوي الخبرة والاختصاص في المجال العقاري، حيث ولدت فكرة إنشاء الشركة من
        خلال دراسة السوق العقاري في المملكة العربية السعودية وتلبية الاحتياجات
        التي تساعد في تطوير النشاط العقاري.
      </motion.p>
    </section>
  );
};

export default About;
