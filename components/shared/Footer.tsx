import clsx from "clsx";
import Title from "@/components/fragments/Title";
import socialMedia from "@/constants/socialMedia";
import navs from "@/constants/navs";
import Link from "next/link";
import pattern from "@/assets/patterns/pattern.svg";

const Pattern = () => (
  <div
    className={clsx(
      `z-0 w-[215px] h-[197px] absolute object-contain left-0 top-0 -translate-1/3`,
      "md:w-[390px] md:h-[360px]"
    )}
  >
    <img className="size-full object-contain" src={pattern.src} alt="pattern" />
  </div>
);

const Footer = () => {
  return (
    <section
      className={clsx("gap-12 pt-16 flex flex-col", "md:gap-16 md:pt-24")}
    >
      <Title text=" تواصل معنا" />
      <div className="flex flex-col">
        <div
          id="contact-wrapper"
          className="relative py-24 border-t overflow-hidden bg-first border-black text-white"
        >
          <div
            className={clsx(
              "z-10 relative mx-auto container grid grid-cols-1",
              "md:grid-cols-3 md:pr-0"
            )}
          >
            <div
              id="company-info"
              className={clsx("gap-8 p-8 hidden flex-col", "md:flex")}
            >
              <div className={clsx("text-base font-bold", "md:text-2xl")}>
                ماوراء البناء
              </div>
              <div className={clsx("text-sm", "md:text-base")}>
                دراسة السوق العقاري وتلبية الاحتياجات التي تساعد
                <br /> في تطوير النشاط العقاري.
              </div>
              <ul className="gap-4 flex">
                {socialMedia.map(({ alt, src }) => (
                  <li key={alt} className="w-[20px] h-[20px]">
                    <img
                      className="size-full object-contain"
                      width={20}
                      height={20}
                      src={src}
                      alt={alt}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="quick-links"
              className={clsx("gap-8 p-8 hidden flex-col", "md:flex")}
            >
              <div className={clsx("text-base font-bold", "md:text-2xl")}>
                روابط سريعة
              </div>
              <ul className="gap-2 flex flex-col">
                {navs.map((nav) => (
                  <li key={nav.name}>
                    <Link href={nav.href}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div id="contact-column" className="gap-8 p-8 flex flex-col">
              <div className={clsx("text-base font-bold", "md:text-2xl")}>
                معلومات الاتصال
              </div>
              <div className="gap-2 flex flex-col">
                <div className={clsx("text-sm", "md:text-base")}>
                  966920000015+ {"  |  "} الأحد - الخميس
                </div>
                <div className={clsx("text-sm", "md:text-base")}>
                  aqar@bctico.com
                </div>
              </div>
              <div className={clsx("text-base font-bold", "md:text-2xl")}>
                الفروع
              </div>
              <div className="gap-2 flex flex-col">
                <div className={clsx("text-sm", "md:text-base")}>
                  المملكة العربية السعودية - الرياض
                </div>
                <div className={clsx("text-sm", "md:text-base")}>
                  المملكة العربية السعودية - جدة
                </div>
              </div>
              <ul className={clsx("gap-4 pt-8 flex", "md:hidden")}>
                {socialMedia.map(({ alt, src }) => (
                  <li key={alt} className="w-[20px] h-[20px]">
                    <img
                      className="size-full object-contain"
                      src={src}
                      alt={alt}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Pattern />
        </div>
        <div
          id="copyright"
          className={clsx(
            "py-4 flex justify-center text-xs bg-white",
            "md:text-base"
          )}
        >
          © 2025 جميع الحقوق محفوظة شركة ماوراء البناءالعقارية
        </div>
      </div>
    </section>
  );
};

export default Footer;
