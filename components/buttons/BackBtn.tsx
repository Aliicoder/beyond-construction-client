"use client";
import { useRouter } from "next/navigation";
import leftUpArrow from "@/assets/icons/left-up-arrow.svg";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div className="py-4 px-8 container mx-auto flex items-center justify-end cursor-pointer">
      <div className="font-semibold underline" onClick={() => router.back()}>
        رجوع
        <div className="size-[10px] md:w-[14px] md:h-[14px] rotate-12">
          <img
            className="rotate-12 size-full object-contain"
            src={leftUpArrow.src}
            alt="up-left-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default BackBtn;
