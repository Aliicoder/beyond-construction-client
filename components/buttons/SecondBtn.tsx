import { ISecondButtonProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";

const SecondBtn = ({
  form,
  text,
  icon,
  fashion = "normal",
  href,
  width = "full",
  type = "submit",
  onClick,
  disabled,
}: ISecondButtonProps) => {
  const className = clsx(
    "px-4 py-3 pr-5 flex justify-between items-center rounded-md border ",
    "hover:scale-95 cursor-pointer transition-all",
    fashion === "normal"
      ? "bg-first text-white"
      : "bg-white text-black outline outline-black",
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
      form={form}
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
