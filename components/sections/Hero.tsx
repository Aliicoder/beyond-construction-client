import Image from "next/image";
import leftUpArrowPath from "@/assets/icons/left-up-arrow.svg";
import patternUrl from "@/assets/patterns/pattern.png";
import heroImg from "@/assets/images/hero-lg.jpg";
import clsx from "clsx";
const Hero = () => {
  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: `url(${heroImg.src})`,
        }}
        className={clsx(
          `w-full h-[200px] bg-no-repeat bg-cover border-b border-black`,
          "md:h-[570px]"
        )}
      />
      <div
        className={clsx(
          "relative container mx-auto px-[30px] py-[60px] flex flex-col gap-[30px] bg-first outline-1 outline-black rounded-xs text-white overflow-hidden",
          "md:mt-[-300px] md:p-[100px]"
        )}
      >
        <h2 className={clsx("z-10 text-2xl", "md:text-6xl")}>
          شركة ماوراء البناء العقارية
        </h2>
        <h1 className={clsx("z-10 max-w-[725px] ", "md:text-2xl")}>
          ذوي الخبرة والاختصاص في المجال العقاري، حيث ولدت فكرة إنشاء الشركة من
          خلال دراسة السوق العقاري في المملكة العربية السعودية وتلبية الاحتياجات
          التي تساعد في تطوير النشاط العقاري.
        </h1>
        <button
          className={clsx(
            "z-10 mt-4 gap-[20px] px-6 py-4 flex justify-between items-center bg-white text-black outline-1 outline-black rounded-xs",
            "hover:scale-95 cursor-pointer transition-all",
            "md:text-2xl md:w-fit"
          )}
        >
          تواصل معنا
          <Image
            width={10}
            height={10}
            className="object-contain md:w-[14px] md:h-[14px]"
            src={leftUpArrowPath}
            alt="up-left-arrow"
          />
        </button>
        <Image
          width={215}
          height={197}
          className={clsx(
            "z-0 absolute object-contain left-0 top-0 -translate-y-1/3 -translate-x-1/3 rotate-90",
            "md:w-[390px] md:h-[360] md:bottom-0 md:top-auto md:translate-y-1/3  md:rotate-0"
          )}
          src={patternUrl}
          alt="pattern"
        />
      </div>
    </div>
  );
};

export default Hero;
