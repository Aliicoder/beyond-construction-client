import heroImg from "@/assets/images/hero-img.webp";
import clsx from "clsx";
import TextBox from "@/components/fragments/TextBox";

const HeroImg = () => (
  <div
    className={clsx(
      `w-full h-[200px] bg-cover border-b border-black`,
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

const Hero = () => {
  return (
    <section className="flex flex-col">
      <HeroImg />
      <TextBox />
    </section>
  );
};

export default Hero;
