import Title from "@/components/fragments/Title";
import Form from "@/components/forms/Book";
import RealEstateVerticalTable from "@/components/tables/RealEstateVertical";
import { getRealEstates } from "@/lib/strapi/realEstates";
import clsx from "clsx";
import Back from "@/components/buttons/Back";
import RealEstateHorizontalTable from "@/components/tables/RealEstateHorizontal";
const RealEstate = async ({ documentId }: { documentId: string }) => {
  const realEstates = await getRealEstates();
  if (!realEstates) throw new Error("لا يوجد عقارات");
  const realEstate = realEstates.find(
    (realEstate) => realEstate.documentId === documentId
  );
  if (!realEstate) throw new Error("لا يوجد عقار");
  return (
    <section className={clsx("container mx-auto flex flex-col items-center")}>
      <Back />
      <div className={clsx("flex flex-col items-center gap-12", "md:gap-16")}>
        <Title text="حجز العقار" />
        <div className="flex flex-col border border-black rounded-lg overflow-hidden">
          <div
            className={clsx(
              "w-[250px] md:w-[300px] lg:w-auto flex flex-col-reverse",
              "lg:flex-row"
            )}
          >
            <Form documentId={realEstate.documentId} />
            <div className="h-[150px] md:h-[170px] lg:h-[545px]">
              <img
                className="h-full w-full object-cover"
                src={realEstate.images[0].url}
                alt="real estate"
              />
            </div>
          </div>
          <RealEstateVerticalTable realEstate={realEstate} />
          <RealEstateHorizontalTable realEstate={realEstate} />
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
