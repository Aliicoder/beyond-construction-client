import clsx from "clsx";
import Title from "@/components/shared/Title";
import Logos from "./fragments/Logos";

const Companies = () => {
  return (
    <section
      className={clsx(
        "mx-auto container flex flex-col pt-12 gap-16",
        "md:pt-24 md:gap-16"
      )}
    >
      <Title text="الشركات التابعة" />
      <Logos />
    </section>
  );
};

export default Companies;
