"use client";
import prototypes from "@/constants/prototypes";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";

const Masonry = () => {
  return (
    <motion.div
      dir="ltr"
      variants={fadeInVarients}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="flex justify-center"
    >
      <div
        className={clsx(
          "gap-8 px-4 columns-2",
          "md:gap-16 md:p-[30px] md:columns-3"
        )}
      >
        {prototypes.map(({ src, alt, heights, className }, index) => (
          <div
            key={index}
            style={
              {
                "--small-height": `${heights.small}px`,
                "--large-height": `${heights.large}px`,
              } as React.CSSProperties
            }
            className={clsx(
              "w-full h-(--small-height) mb-8 break-inside-avoid rounded-md border overflow-hidden border-black",
              "md:mb-16 md:block md:h-(--large-height)",
              "md:hover:scale-105 transition-all duration-300",
              className
            )}
          >
            <img src={src} alt={alt} className="size-full object-cover" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Masonry;
