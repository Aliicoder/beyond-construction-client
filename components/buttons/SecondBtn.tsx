import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface FirstButtonProps {
  text: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const SecondBtn = ({ text, icon, href, onClick }: FirstButtonProps) => {
  const className = clsx(
    "w-full mt-4 px-4 py-3 pr-5 flex justify-between items-center bg-first text-white rounded-md border",
    "hover:scale-95 cursor-pointer transition-all"
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
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default SecondBtn;
