import clsx from "clsx";
import Title from "@/components/shared/Title";
import Content from "./fragments/Content";
import { getRealEstates } from "@/lib/strapi/realEstates";

const RealEstates = async () => {
  const realEstates = await getRealEstates();
  if (!realEstates) {
    throw new Error("لا يوجد عقارات");
  }
  return (
    <section
      className={clsx(
        "gap-12 pt-16 mx-auto container flex flex-col",
        "md:pt-24"
      )}
    >
      <Title text="العقارات المتاحة" />
      <Content realEstates={realEstates} />
    </section>
  );
};

export default RealEstates;
