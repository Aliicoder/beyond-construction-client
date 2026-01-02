"use client";
import prototypes from "@/constants/prototypes";
import clsx from "clsx";

const Masonry = () => {
  return (
    <div className="flex justify-center">
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
              "h-(--small-height) mb-8 break-inside-avoid rounded-md border overflow-hidden border-black",
              "md:mb-16 md:block md:h-(--large-height)",
              className
            )}
          >
            <img
              src={src}
              alt={alt}
              className={clsx(`w-full h-full object-cover`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
