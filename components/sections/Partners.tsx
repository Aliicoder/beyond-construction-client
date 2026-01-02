import Title from "@/components/fragments/Title";
import Slider from "@/components/sliders/Slider";
import partenrs from "@/constants/partenrs";
import clsx from "clsx";
const Partners = () => {
  return (
    <section
      className={clsx("container mx-auto pt-16 flex flex-col", "md:pt-24")}
    >
      <Title text="شركاء النجاح" />
      <Slider data={partenrs} />
    </section>
  );
};

export default Partners;
