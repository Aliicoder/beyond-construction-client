import TextBox from "@/app/(home)/_components/fragments/TextBox";
import HeroImg from "@/app/(home)/_components/fragments/HeroImg";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <HeroImg />
      <TextBox />
    </section>
  );
};

export default Hero;
