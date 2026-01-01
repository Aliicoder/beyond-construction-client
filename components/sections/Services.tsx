"use client";
import { useState } from "react";
import Title from "@/components/fragments/Title";
import Service from "@/components/cards/Service";
import services from "@/constants/services";

const Services = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <section className="container mx-auto flex flex-col pt-16 gap-12 md:pt-24 md:gap-16">
      <Title text="خدماتنا" />
      <div className="flex flex-wrap reveal">
        {services.map(({ id, title, description }, index) => (
          <Service
            key={id}
            cardId={id}
            index={index}
            activeId={activeId}
            title={title}
            description={description}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
