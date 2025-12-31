"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import leftUpArrowPath from "@/assets/icons/left-up-arrow.svg";

const Back = () => {
  const router = useRouter();
  return (
    <div className="py-4 px-8 container mx-auto flex items-center justify-end cursor-pointer">
      <div className="font-semibold underline" onClick={() => router.back()}>
        رجوع
        <Image
          width={10}
          height={10}
          className="rotate-12 object-contain md:w-[14px] md:h-[14px]"
          src={leftUpArrowPath}
          alt="up-left-arrow"
        />
      </div>
    </div>
  );
};

export default Back;
