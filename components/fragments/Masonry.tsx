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
        className={clsx(
          "gap-8 px-4 columns-2 md:gap-16 md:columns-3",
          "md:p-[30px]"
        )}
      >
        {prototypes.map(({ src, alt, heights, onSmallScreenHide }, index) =>
          breakpoint === "sm" && onSmallScreenHide ? null : (
            <img
              key={index}
              src={src}
              alt={alt}
              style={{
                height: breakpoint == "lg" ? heights.large : heights.small,
                width: "100%",
              }}
              className={clsx(
                `break-inside-avoid rounded-md object-cover outline outline-black mb-8`,
                "md:mb-16"
              )}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Masonry;
