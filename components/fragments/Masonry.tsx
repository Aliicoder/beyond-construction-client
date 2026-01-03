"use client";
import prototypes from "@/constants/prototypes";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInVarients } from "@/constants/variants";

const Masonry = () => {
  return (
    <motion.div
      variants={fadeInVarients}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}
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
              className
            )}
          >
            <Image src={src} alt={alt} fill className="static! object-cover" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Masonry;
