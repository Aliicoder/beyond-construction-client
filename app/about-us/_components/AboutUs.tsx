import clsx from "clsx";
import Title from "@/components/shared/Title";
import TextBox from "./fragments/TextBox";

const About = () => {
  return (
    <section
      className={clsx(
        "mx-auto container flex flex-col items-center gap-12 pt-16",
        "md:pt-24 md:gap-16"
      )}
    >
      <Title text="من نحن" />
      <TextBox />
    </section>
  );
};

export default About;
