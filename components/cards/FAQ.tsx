import clsx from "clsx";
import Questions from "@/constants/questions";
import crossIcon from "@/assets/icons/cross-black.svg";
import { IFAQProps } from "@/types";

const FAQ = ({ index, block, activeIndex, setActiveIndex }: IFAQProps) => {
  return (
    <div
      className={clsx(
        "overflow-hidden",
        index != Questions.length - 1 && "border-b"
      )}
    >
      <div
        onClick={() =>
          setActiveIndex((prev: number) => (prev === index ? -1 : index))
        }
        className="gap-4 p-4 flex justify-between items-center cursor-pointer"
      >
        <p className={clsx("md:text-lg font-bold", "max-md:text-sm")}>
          {block.question}
        </p>
        <div
          className={clsx(
            "size-3 md:size-4",
            "transition-all duration-700",
            activeIndex === index && "rotate-45"
          )}
        >
          <img
            className="size-full object-contain"
            src={crossIcon.src}
            alt="cross icon"
          />
        </div>
      </div>
      <p
        className={clsx(
          "max-h-0 text-sm transition-all ease-in-out duration-700",
          "md:text-base",
          activeIndex === index && "max-h-[400px] p-4"
        )}
      >
        {block.answer}
      </p>
    </div>
  );
};

export default FAQ;
