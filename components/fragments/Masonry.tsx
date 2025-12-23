"use client";
import prototypes from "@/constants/prototypes";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import clsx from "clsx";
import Image from "next/image";

const Masonry = () => {
  let breakpoint = useTailwindBreakpoint();
  return (
    <div className="container mx-auto flex justify-center">
      <div
        dir="ltr"
        className="gap-8 px-[30px] columns-2 md:gap-16 md:columns-3 "
      >
        {prototypes.map((prototype, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-8 md:mb-16"
            style={{
              display:
                breakpoint == "sm" && prototype.height.small === 0
                  ? "none"
                  : "block",
            }}
          >
            <img
              src={prototype.src}
              alt={prototype.alt}
              style={{
                height:
                  breakpoint === "lg"
                    ? prototype.height.large
                    : prototype.height.small,
                width: "100%",
              }}
              className="rounded-md object-cover outline outline-black block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
