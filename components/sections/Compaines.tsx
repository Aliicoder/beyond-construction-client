import Title from "@/components/fragments/Title";
import partenrs from "@/constants/partenrs";

const Compaines = () => {
  return (
    <section className="flex flex-col pt-12 gap-16 md:pt-24 md:gap-16">
      <Title text="الشركات التابعة" />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 items-center">
        {partenrs.map((partenr, index) => (
          <div key={index} className="p-4 flex justify-center items-center">
            <img
              height={partenr.height}
              width={partenr.width}
              src={partenr.src.src}
              alt={partenr.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Compaines;
