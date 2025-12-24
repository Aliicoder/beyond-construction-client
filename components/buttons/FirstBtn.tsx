import clsx from "clsx";
interface FirstButtonProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
}

const FirstBtn = ({ text, icon, className }: FirstButtonProps) => {
  return (
    <button
      className={clsx(
        "mt-4 gap-6 pl-6 py-4 pr-8 flex justify-between items-center rounded-xs cursor-pointer transition-all",
        "hover:scale-95 ",
        "bg-white text-black outline-1 outline-black",
        "md:w-fit",
        className
      )}
    >
      <div className={clsx("text-sm", "md:text-lg")}>{text}</div>
      {icon}
    </button>
  );
};

export default FirstBtn;
