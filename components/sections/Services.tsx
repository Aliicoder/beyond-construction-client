"use client";
import { useState } from "react";
import Title from "@/components/fragments/Title";
import Service from "@/components/cards/Service";
import services from "@/constants/services";
import { motion } from "framer-motion";
import { fadeInVarients } from "@/constants/variants";
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="container mx-auto flex flex-col pt-16 gap-12 md:pt-24 md:gap-16">
      <Title text="خدماتنا" />
      <motion.div
        variants={fadeInVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        className="flex flex-wrap"
      >
        {services.map((service, index) => (
          <Service
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
