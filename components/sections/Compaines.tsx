import Title from "@/components/fragments/Title";
import partenrs from "@/constants/partenrs";

const Compaines = () => {
  return (
    <section className="py-[90px]">
      <Title text="الشركات التابعة" />
      <div className="container mx-auto mt-[90px] flex flex-wrap items-center justify-center gap-[60px]">
        {partenrs.map((partenr, index) => (
          <div key={index}>
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
