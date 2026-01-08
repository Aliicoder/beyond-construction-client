"use client";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import crossIcon from "@/assets/icons/cross-white.svg";
import pattern from "@/assets/patterns/pattern.svg";
import clsx from "clsx";
import { IServiceProps } from "@/types";

const Pattern = ({ index }: { index: number }) => {
  let rotate = index * 20;
  let isEven = index % 2 === 0;
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={clsx(
        `z-0 absolute w-[215px] h-[360px] left-0 top-0 -translate-1/2 `,
        "md:w-[390px] md:h-[360]",
        isEven && "left-full"
      )}
    >
      <img
        className="size-full object-contain"
        src={pattern.src}
        alt="pattern"
      />
    </div>
  );
};

const Service = ({
  index,
  service,
  activeIndex,
  setActiveIndex,
}: IServiceProps) => {
  let breakpoint = useTailwindBreakpoint();
  return (
    <div className={clsx("p-4 w-full cursor-pointer", "md:w-1/2")}>
      <div
        onClick={() => setActiveIndex(index)}
        className={clsx(
          "relative flex flex-col rounded-md overflow-hidden bg-first text-white outline outline-black",
          "md:group-hover:opacity-75",
          "md:hover:opacity-100 md:hover:scale-105 transition-all duration-300"
        )}
      >
        <div className="z-10 p-8  flex justify-between items-center">
          <h2 className={clsx(" font-bold", "md:text-lg")}>{service.title}</h2>
          <div
            className={clsx(
              "w-[14px] h-[14px] transition-all duration-700",
              breakpoint !== "sm" && "hidden",
              activeIndex === index && "rotate-45"
            )}
          >
            <img
              className="size-full object-contain"
              src={crossIcon.src}
              alt="close icon"
            />
          </div>
        </div>
        <p
          className={clsx(
            "z-10 m-0 mt-0 max-h-0 text-sm transition-all ease-in-out duration-700 overflow-hidden",
            "md:text-base md:line-clamp-2",
            activeIndex === index && "max-h-[400px] p-8 pt-0",
            breakpoint !== "sm" && "max-h-[400px] m-8 p-0! pt-0 ml-12"
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
