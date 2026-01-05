import { IThirdButtonProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";

const ThirdBtn = ({
  text,
  disabled,
  icon,
  href,
  type,
  width,
  onClick,
}: IThirdButtonProps) => {
  const className = clsx(
    "gap-4 mt-4 p-2 flex justify-center items-center outline outline-black bg-first text-white rounded-sm border",
    "md:rounded-md",
    "hover:scale-95 cursor-pointer transition-all",
    `w-${width}`
  );

  const content = (
    <>
      {text && <div className="hidden mr-1 md:block">{text}</div>}
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
    <button type={type} disabled={disabled} className={className}>
      {content}
    </button>
  );
};

export default ThirdBtn;
