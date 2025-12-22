import clsx from "clsx";
import Title from "@/components/fragments/Title";
import socialMedia from "@/constants/socialMedia";

const Footer = () => {
  return (
    <div>
      <div className="py-[90px]">
        <Title text=" تواصل معنا" />
      </div>
      <div className="py-[90px] bg-first border-t border-black ">
        <div className="container mx-auto gap-[30px] grid columns-3">
          <div className="gap-[30px] flex flex-col justify-center text-white">
            <div className="text-6xl">ماوراء البناء</div>
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

          <div></div>
        </div>
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
