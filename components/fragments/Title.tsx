import lineIcon from "@/assets/icons/line.svg";
import clsx from "clsx";
import Image from "next/image";
interface TitleProps {
  text: string;
}
const Title = ({ text }: TitleProps) => {
  return (
    <div className="container mx-auto flex justify-center text-black">
      <div id="box" className="relative">
        <Image
          width={67}
          height={10}
          className={clsx(
            "z-0 absolute left-1/2 top-1/2 -translate-x-1/2",
            "md:w-[95px] md:h-[20px]"
          )}
          src={lineIcon.src}
          alt="underline"
        />
        <span className={clsx("relative z-10 font-bold", "md:text-2xl")}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default Title;
