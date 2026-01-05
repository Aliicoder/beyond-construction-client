import clsx from "clsx";
import heroImg from "@/assets/images/hero-img.webp";

const HeroImg = () => (
  <div
    className={clsx(
      `w-full h-[300px] bg-cover border-b border-black`,
      "md:h-[570px]"
    )}
  >
    <img
      className="size-full object-cover"
      src={heroImg.src}
      alt="Hero image"
    />
  </div>
);

export default HeroImg;
