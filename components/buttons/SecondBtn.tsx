import { ISecondButtonProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const SecondBtn = ({
  text,
  icon,
  href,
  width = "full",
  type = "submit",
  onClick,
  disabled,
}: ISecondButtonProps) => {
  const className = clsx(
    "mt-4 px-4 py-3 pr-5 flex justify-between items-center bg-first text-white rounded-md border outline outline-black",
    "hover:scale-95 cursor-pointer transition-all",
    `w-${width}`
  );

  const content = (
    <>
      <div>{text}</div>
      {icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {content}
    </button>
  );
};

export default SecondBtn;
