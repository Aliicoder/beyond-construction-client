import Title from "@/components/fragments/Title";
import Form from "@/components/forms/Book";
import RealEstateVerticalTable from "@/components/tables/RealEstateVertical";
import RealEstateHorizantailTable from "@/components/tables/RealEstateHorizantail";
import { getRealEstates } from "@/lib/strapi/real-estates";
const RealEstate = async ({ id }: { id: string }) => {
  const realEstates = await getRealEstates();
  if (!realEstates) return null;
  const realEstate = realEstates.find(
    (realEstate) => realEstate.id === Number(id)
  );
  if (!realEstate) return null;
  return (
    <section className="container mx-auto flex flex-col items-center gap-12 pt-16 md:gap-16 md:pt-24">
      <Title text="حجز العقار" />
      <div className="flex flex-col border border-black rounded-lg overflow-hidden">
        <div className="flex lg:flex-row flex-col-reverse ">
          <Form />
          <div className="h-auto lg:h-[var(--book-form-height)] lg:aspect-square">
            <img
              className="w-full h-full object-contain"
              src={realEstate.images[0].url}
              alt="real estate"
            />
          </div>
        </div>
        <RealEstateVerticalTable realEstate={realEstate} />
        <RealEstateHorizantailTable realEstate={realEstate} />
      </div>
    </section>
  );
};

export default RealEstate;
