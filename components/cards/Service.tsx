"use client";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import crossIconPath from "@/assets/icons/cross-white.svg";
import patternPath from "@/assets/patterns/pattern.svg";
import clsx from "clsx";
import Image from "next/image";
interface ServiceProps {
  index: number;
  service: {
    title: string;
    description: string;
  };
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Pattern = ({ index }: { index: number }) => {
  let rotate = index * 20;
  let isEven = index % 2 === 0;
  return (
    <Image
      width={215}
      height={197}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={clsx(
        `z-0 absolute object-contain left-0 top-0 -translate-1/2`,
        "md:w-[390px] md:h-[360]  ",
        isEven && "left-full"
      )}
      src={patternPath}
      alt="pattern"
    />
  );
};

const Service = ({
  index,
  service,
  activeIndex,
  setActiveIndex,
}: ServiceProps) => {
  let breakpoint = useTailwindBreakpoint();
  return (
    <div className={clsx("p-4 w-full", "md:w-1/2")}>
      <div
        onClick={() => setActiveIndex(index)}
        className={clsx(
          "relative p-8 flex flex-col rounded-md overflow-hidden bg-first text-white outline outline-black",
          "md:gap-3 md:p-12"
        )}
      >
        <div className="z-10 flex justify-between items-center">
          <h2 className={clsx("font-bold", "md:text-lg")}>{service.title}</h2>
          <Image
            width={14}
            height={14}
            className={clsx(
              breakpoint !== "sm" && "hidden",
              activeIndex === index && "rotate-45",
              "transition-all duration-700"
            )}
            src={crossIconPath.src}
            alt="close icon"
          />
        </div>
        <p
          className={clsx(
            "z-10 max-h-0 text-sm transition-all ease-in-out duration-700 overflow-hidden",
            "md:text-base md:line-clamp-3 md:p-0 md:m-4",
            (activeIndex === index || breakpoint !== "sm") &&
              "max-h-[400px] p-4"
          )}
        >
          {service.description}
        </p>
        <Pattern index={index} />
      </div>
    </div>
  );
};

export default Service;
