import { IThirdButtonProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";

const ThirdBtn = ({
  text,
  icon,
  href,
  width = "full",
  type = "submit",
  onClick,
  disabled,
}: IThirdButtonProps) => {
  const className = clsx(
    "gap-4 mt-4 p-2 md:py-1 flex justify-center items-center outline outline-black bg-first text-white rounded-sm md:rounded-md border",
    "hover:scale-95 cursor-pointer transition-all",
    `w-${width}`
  );

  const content = (
    <>
      <div className="hidden mr-1 md:block">{text}</div>
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
