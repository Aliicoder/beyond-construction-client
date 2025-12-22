import clsx from "clsx";
import Title from "@/components/fragments/Title";
import socialMedia from "@/constants/socialMedia";
import navs from "@/constants/navs";
import Link from "next/link";
import Image from "next/image";
import patternUrl from "@/assets/patterns/pattern.png";

const Footer = () => {
  return (
    <div>
      <div className="py-[90px]">
        <Title text=" تواصل معنا" />
      </div>
      <div className="relative overflow-hidden py-[90px] bg-first border-t border-black text-white ">
        <div
          className={clsx(
            "relative z-10 container mx-auto px-[30px] gap-[30px] grid grid-cols-1",
            "md:grid-cols-3 md:pr-0"
          )}
        >
          <div className={clsx("hidden gap-[30px] flex-col", "md:flex")}>
            <div className="text-5xl">ماوراء البناء</div>
            <div>
              دراسة السوق العقاري وتلبية الاحتياجات التي تساعد
              <br /> في تطوير النشاط العقاري.
            </div>
            <ul className="flex gap-4 mt-4">
              {socialMedia.map(({ alt, src }) => (
                <li key={alt}>
                  <img className="size-[20px]" src={src} alt={alt} />
                </li>
              ))}
            </ul>
          </div>

          <div className={clsx("hidden flex-col j gap-8", "md:flex")}>
            <div className="text-3xl">روابط سريعة </div>
            <ul className="flex flex-col gap-2">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <Link href={nav.href}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="text-3xl">معلومات الاتصال</div>
            <div className="flex flex-col gap-2">
              <div> 966920000015+ {"  |  "} السبت - الخميس</div>
              <div>info@bctico.com</div>
            </div>
            <div className="text-3xl">المواقع</div>
            <div className="flex flex-col gap-2">
              <div>المملكة العربية السعودية - الرياض</div>
              <div>المملكة العربية السعودية - جدة</div>
            </div>
            <ul className={clsx("flex gap-4 pt-8", "md:hidden")}>
              {socialMedia.map(({ alt, src }) => (
                <li key={alt}>
                  <img className="size-[20px]" src={src} alt={alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Image
          width={215}
          height={197}
          className={clsx(
            `z-0 absolute object-contain left-0 top-0 -translate-1/3`,
            "md:w-[390px] md:h-[360]  "
          )}
          src={patternUrl}
          alt="pattern"
        />
      </div>
      <div
        className={clsx(
          "py-4 flex justify-center text-xs bg-white",
          "md:text-base"
        )}
      >
        © 2025 جميع الحقوق محفوظة شركة ماوراء البناءالعقارية
      </div>
    </div>
  );
};

export default Footer;
