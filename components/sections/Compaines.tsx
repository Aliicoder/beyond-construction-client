import Title from "@/components/fragments/Title";
import companies from "@/constants/companies";
import clsx from "clsx";
import Image from "next/image";

const Companies = () => {
  return (
    <section
      className={clsx("flex flex-col pt-12 gap-16", "md:pt-24 md:gap-16")}
    >
      <Title text="الشركات التابعة" />
      <div className="mx-auto container grid grid-cols-2 md:grid-cols-4 items-center">
        {companies.map(({ width, height, src, alt }, index) => (
          <div key={index} className="p-4 flex justify-center items-center">
            <Image height={height} width={width} src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
