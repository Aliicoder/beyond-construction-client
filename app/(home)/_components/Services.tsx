"use client";
import { useState } from "react";
import Title from "@/components/shared/Title";
import services from "@/constants/services";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";
import Service_card from "@/components/cards/Service";
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="container mx-auto flex flex-col pt-16 gap-12 md:pt-24 md:gap-16">
      <Title text="خدماتنا" />
      <motion.div
        variants={fadeInVarients}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-wrap group"
      >
        {services.map((service, index) => (
          <Service_card
            key={index}
            index={index}
            service={service}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
