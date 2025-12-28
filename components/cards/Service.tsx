"use client";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import crossIconPath from "@/assets/icons/cross.png";
import patternPath from "@/assets/patterns/pattern.png";
import clsx from "clsx";
import Image from "next/image";
interface ServiceProps {
  title: string;
  index: number;
  cardId: number;
  description: string;
  activeId: number;
  setActiveId: (id: number) => void;
}
const Service = ({
  cardId,
  activeId,
  index,
  title,
  description,
  setActiveId,
}: ServiceProps) => {
  let breakpoint = useTailwindBreakpoint();
  let isActive = activeId == cardId;
  let rotate = index * 20;
  let isEven = index % 2 === 0;

  return (
    <div className="p-4 w-full md:w-1/2">
      <div
        onClick={() => {
          if (breakpoint == "lg") return;
          else setActiveId(cardId);
        }}
        className={clsx(
          "relative overflow-hidden p-8 flex flex-col rounded-sm cursor-pointer bg-first text-white outline outline-black",
          "md:gap-3 md:cursor-default md:p-12"
        )}
      >
        <div className="relative z-10 flex justify-between items-center ">
          <h2 className={clsx("font-bold", "md:text-lg")}>{title}</h2>
          <img
            className={clsx(
              "size-[14px]",
              breakpoint == "lg" && "hidden",
              isActive && "rotate-45",
              "transition-all duration-700"
            )}
            src={crossIconPath.src}
            alt=""
          />
        </div>
        <p
          className={clsx(
            "transition-all duration-700 relative h-0 z-10 text-sm line-clamp-2",
            "md:text-base",
            isActive || breakpoint == "lg" ? "h-fit my-4" : "h-0"
          )}
        >
          {description}
        </p>
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
      </div>
    </div>
  );
};

export default Service;
