"use client";
import Image from "next/image";
import heroImg from "@/assets/images/hero-img.webp";
import clsx from "clsx";
import TextBox from "../fragments/TextBox";

const HeroImg = () => (
  <div
    className={clsx(
      `w-full h-[200px] bg-cover border-b border-black`,
      "md:h-[570px]"
    )}
  >
    <Image
      fill
      className="static! object-cover"
      src={heroImg}
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
