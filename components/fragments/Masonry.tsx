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
        {prototypes.map(({ src, alt, heights, className }, index) => (
          <div
            key={index}
            className={clsx(
              "break-inside-avoid mb-8",
              className,
              "md:mb-16 md:block!"
            )}
          >
            <img
              src={src}
              alt={alt}
              style={{
                height: breakpoint === "lg" ? heights.large : heights.small,
                width: "100%",
              }}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
