import { IFourthButtonProps } from "@/types";
import clsx from "clsx";
import { Link } from "lucide-react";

const FourthBtn = ({
  text,
  disabled,
  icon,
  href,
  type,
  width,
  onClick,
}: IFourthButtonProps) => {
  const className = clsx(
    "gap-4 p-2 flex justify-center items-center outline outline-black bg-white rounded-sm border",
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
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {content}
    </button>
  );
};

export default FourthBtn;
