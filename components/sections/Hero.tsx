import Image from "next/image";
import leftUpArrowPath from "@/assets/icons/left-up-arrow.svg";
import patternUrl from "@/assets/patterns/pattern.png";
import heroImg from "@/assets/images/hero-lg.jpg";
import clsx from "clsx";
import Button from "@/components/buttons/FirstBtn";
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
          "relative container mx-auto px-8 py-12 flex flex-col gap-8 outline-1 rounded-xs overflow-hidden",
          "text-white outline-black bg-first ",
          "md:mt-[-300px] md:p-[100px]"
        )}
      >
        <h2 className={clsx("z-10 text-lg", "md:text-4xl")}>
          شركة ماوراء البناء العقارية
        </h2>
        <h1 className={clsx("z-10 max-w-[725px] text-sm ", "md:text-lg")}>
          ذوي الخبرة والاختصاص في المجال العقاري، حيث ولدت فكرة إنشاء الشركة من
          خلال دراسة السوق العقاري في المملكة العربية السعودية وتلبية الاحتياجات
          التي تساعد في تطوير النشاط العقاري.
        </h1>
        <Button
          text="تواصل معنا"
          icon={
            <Image
              width={10}
              height={10}
              className="object-contain md:w-[14px] md:h-[14px]"
              src={leftUpArrowPath}
              alt="up-left-arrow"
            />
          }
        />
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
