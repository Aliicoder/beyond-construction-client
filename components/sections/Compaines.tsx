import Title from "@/components/fragments/Title";
import companies from "@/constants/companies";

const Companies = () => {
  return (
    <section className="flex flex-col pt-12 gap-16 md:pt-24 md:gap-16">
      <Title text="الشركات التابعة" />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 items-center">
        {companies.map((company, index) => (
          <div key={index} className="p-4 flex justify-center items-center">
            <img
              height={company.height}
              width={company.width}
              src={company.src.src}
              alt={company.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
