"use client";
import clsx from "clsx";
import Questions from "@/constants/questions";
import { useState } from "react";
import Title from "../fragments/Title";
import crossIconPath from "@/assets/icons/black-cross.svg";
import Image from "next/image";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <section className="container mx-auto flex flex-col gap-12 pt-16 md:gap-16 md:pt-24">
      <Title text="الأسئلة الشائعة" />
      <div className=" flex flex-col">
        {Questions.map((item, index) => (
          <div
            key={index}
            className={clsx(index != Questions.length - 1 && "border-b")}
          >
            <div
              onClick={() =>
                setActiveIndex((prev) => (prev === index ? -1 : index))
              }
              key={index}
              className="gap-4 p-4 flex justify-between items-center cursor-pointer"
            >
              <p className={clsx("md:text-lg font-bold", "max-md:text-sm")}>
                {item.question}
              </p>
              <Image
                className={clsx(
                  "size-3 md:size-4",
                  activeIndex === index && "rotate-45",
                  "transition-all duration-700"
                )}
                src={crossIconPath}
                alt=""
              />
            </div>
            {activeIndex === index && (
              <div className="p-4">
                <p className="text-sm md:text-base">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
