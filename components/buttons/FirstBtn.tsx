import clsx from "clsx";
import Link from "next/link";
import { IFirstButtonProps } from "@/types";

const FirstBtn = ({
  width = "fit",
  fashion = "normal",
  text,
  icon,
  href,
  onClick,
  justify = "between",
}: IFirstButtonProps) => {
  const classes = clsx(
    "gap-6 px-5 py-3 w-full flex justify-between items-center border rounded-md cursor-pointer transition-all",
    "hover:scale-95 md:w-fit",
    fashion === "normal"
      ? "bg-white text-black"
      : "text-white outline outline-white",
    `justify-${justify}`
  );

  const content = (
    <>
      <div
        className={clsx(
          "text-sm font-bold md:text-lg",
          justify === "center" ? "pr-0" : "pr-2"
        )}
      >
        {text}
      </div>
      {icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default FirstBtn;
