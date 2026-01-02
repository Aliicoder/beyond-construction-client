import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface FirstButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
  href?: string;
  onClick?: () => void;
}

const FirstBtn = ({ text, icon, href, onClick }: FirstButtonProps) => {
  const classes = clsx(
    "mt-4 gap-6 pl-6 py-4 pr-8 flex justify-between items-center outline outline-black rounded-md cursor-pointer transition-all",
    "bg-white text-black hover:scale-95 md:w-fit border border"
  );

  const content = (
    <>
      <div className={clsx("text-sm font-bold md:text-lg")}>{text}</div>
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
