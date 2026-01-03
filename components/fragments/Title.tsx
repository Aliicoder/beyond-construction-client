import clsx from "clsx";
import LineSvg from "../svgs/LineSvg";
import { TitleProps } from "@/types";

const Title = ({ text }: TitleProps) => {
  return (
    <div className="relative flex justify-center">
      <LineSvg />
      <span className={clsx("z-10 font-bold", "md:text-2xl")}>{text}</span>
    </div>
  );
};

export default Title;
