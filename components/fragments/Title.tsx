import lineIcon from "@/assets/icons/line.png";
import clsx from "clsx";
import Image from "next/image";
interface TitleProps {
  text: string;
}
const Title = ({ text }: TitleProps) => {
  return (
    <div className="container mx-auto flex justify-center text-black">
      <div className="relative">
        <img
          className={clsx(
            "z-0 w-[67px] h-[10px] absolute left-1/2 top-1/2 -translate-x-1/2",
            "md:w-[95px] md:h-[20px]"
          )}
          src={lineIcon.src}
          alt=""
        />
        <span
          className={clsx("relative z-10  text-lg font-bold", "md:text-3xl")}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Title;
