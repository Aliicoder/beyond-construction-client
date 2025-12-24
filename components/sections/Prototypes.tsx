import Title from "@/components/fragments/Title";
import Masonry from "@/components/fragments/Masonry";

const Prototypes = () => {
  return (
    <section className="container mx-auto flex flex-col gap-12 md:gap-16">
      <Title text="نماذج من عقاراتنا" />
      <Masonry />
    </section>
  );
};

export default Prototypes;
