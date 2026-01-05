"use client";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";
import FAQCard from "@/components/cards/FAQ";
import QuestionsData from "@/constants/questions";
import { useState } from "react";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <motion.div
      variants={fadeInVarients}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="flex flex-col"
    >
      {QuestionsData.map((block, index) => (
        <FAQCard
          key={index}
          activeIndex={activeIndex}
          block={block}
          index={index}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </motion.div>
  );
};

export default Questions;
