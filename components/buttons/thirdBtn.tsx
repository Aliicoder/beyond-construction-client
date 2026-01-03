import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface ThirdButtonProps {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  className?: string;
  width?: "full" | "fit";
  onClick?: () => void;
  type?: "button" | "submit";
}

const ThirdBtn = ({
  text,
  icon,
  href,
  width = "full",
  type = "submit",
  onClick,
  disabled,
}: ThirdButtonProps) => {
  const className = clsx(
    "mt-4 p-2 md:py-1 flex justify-center items-center outline outline-black bg-first text-white rounded-sm md:rounded-md border",
    "hover:scale-95 cursor-pointer transition-all",
    `w-${width}`
  );

  const content = (
    <>
      <div className="hidden md:block">{text}</div>
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

export default ThirdBtn;
