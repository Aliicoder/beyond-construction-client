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

const FirstBtn = ({
  text,
  icon,
  className,
  textClassName,
  href,
  onClick,
}: FirstButtonProps) => {
  const classes = clsx(
    "mt-4 gap-6 pl-6 py-4 pr-8 flex justify-between items-center rounded-xs cursor-pointer transition-all",
    "hover:scale-95",
    "bg-white text-black border border-black",
    "md:w-fit",
    className
  );

  const content = (
    <>
      <div className={clsx("text-sm md:text-lg", textClassName)}>{text}</div>
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
