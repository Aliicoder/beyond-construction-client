import clsx from "clsx";
import patternSvg from "@/assets/patterns/pattern.svg";

const Pattern = () => {
  return (
    <div
      className={clsx(
        `z-0 w-[215px] h-[197px] absolute object-contain left-0 top-0 -translate-1/3`,
        "md:w-[390px] md:h-[360px]"
      )}
    >
      <img
        className="size-full object-contain"
        src={patternSvg.src}
        alt="pattern"
      />
    </div>
  );
};

export default Pattern;
