"use client";
import { useState } from "react";
import Title from "@/components/fragments/Title";
import Service from "@/components/cards/Service";
import services from "@/constants/services";

const Services = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <section>
      <section className="py-[90px]">
        <Title text="خدماتنا" />
      </section>
      <div className="container mx-auto flex flex-wrap">
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
