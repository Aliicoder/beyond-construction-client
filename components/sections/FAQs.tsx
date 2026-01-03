"use client";
import Questions from "@/constants/questions";
import { useState } from "react";
import Title from "../fragments/Title";
import FAQ from "../cards/FAQ";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <section className="container mx-auto flex flex-col gap-12 pt-16 md:gap-16 md:pt-24">
      <Title text="الأسئلة الشائعة" />
      <div className="flex flex-col">
        {Questions.map((block, index) => (
          <FAQ
            key={index}
            activeIndex={activeIndex}
            block={block}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
