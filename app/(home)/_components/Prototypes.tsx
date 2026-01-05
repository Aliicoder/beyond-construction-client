import Title from "@/components/shared/Title";
import Masonry from "@/app/(home)/_components/fragments/Masonry";
import clsx from "clsx";

const Prototypes = () => {
  return (
    <section
      className={clsx("container mx-auto flex flex-col gap-12", "md:gap-16")}
    >
      <Title text="نماذج من عقاراتنا" />
      <Masonry />
    </section>
  );
};

export default Prototypes;
