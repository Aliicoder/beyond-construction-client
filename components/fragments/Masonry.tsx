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
          <img
            key={index}
            src={prototype.src}
            alt={prototype.alt}
            style={{
              height:
                breakpoint == "lg"
                  ? prototype.height.large
                  : prototype.height.small,
              width: "100%",
              display:
                breakpoint == "sm" && prototype.height.small == 0
                  ? "none"
                  : "block",
            }}
            className={clsx(
              `break-inside-avoid rounded-md object-cover outline outline-black mb-8`,
              "md:mb-16"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Masonry;
