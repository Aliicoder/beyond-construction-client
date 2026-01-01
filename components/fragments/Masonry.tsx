"use client";
import prototypes from "@/constants/prototypes";
import clsx from "clsx";

const Masonry = () => {
  return (
    <div className="flex justify-center reveal">
      <div
        dir="ltr"
        className={clsx(
          "gap-8 px-4 columns-2 md:gap-16 md:columns-3",
          "md:p-[30px] max-h-[1028px]"
        )}
      >
        {prototypes.map(({ src, alt, heights, className }, index) => (
          <div
            key={index}
            className={clsx(
              "break-inside-avoid mb-8 ",
              className,
              "md:mb-16 md:block"
            )}
            style={
              {
                "--small-height": `${heights.small}px`,
                "--large-height": `${heights.large}px`,
              } as React.CSSProperties
            }
          >
            <img
              src={src}
              alt={alt}
              className={clsx(
                `w-full h-[var(--small-height)] rounded-md object-cover border border-black`,
                `md:w-full md:h-[var(--large-height)]`
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
