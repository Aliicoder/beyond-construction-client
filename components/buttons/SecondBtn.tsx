import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface FirstButtonProps {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  className?: string;
  width?: "full" | "fit";
  onClick?: () => void;
  type?: "button" | "submit";
}

const SecondBtn = ({
  text,
  icon,
  href,
  width = "full",
  type = "submit",
  onClick,
  disabled,
}: FirstButtonProps) => {
  const className = clsx(
    "mt-4 px-4 py-3 pr-5 flex justify-between items-center bg-first text-white rounded-md border",
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
