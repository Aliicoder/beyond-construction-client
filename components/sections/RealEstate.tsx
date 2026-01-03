import Title from "@/components/fragments/Title";
import Form from "@/components/forms/Book";
import RealEstateVerticalTable from "@/components/tables/RealEstateVertical";
import { getRealEstates } from "@/lib/strapi/realEstates";
import clsx from "clsx";
import Back from "@/components/buttons/Back";
import RealEstateHorizontalTable from "@/components/tables/RealEstateHorizontal";
import Image from "next/image";
import placeholderPath from "@/assets/images/placeholder.webp";
const RealEstate = async ({ documentId }: { documentId: string }) => {
  const realEstates = await getRealEstates();
  if (!realEstates) throw new Error("لا يوجد عقارات");
  const realEstate = realEstates.find(
    (realEstate) => realEstate.documentId === documentId
  );
  if (!realEstate) throw new Error("لا يوجد عقار");
  return (
    <section className={clsx("mx-auto container flex flex-col items-center")}>
      <Back />
      <div className={clsx("flex flex-col items-center gap-12", "md:gap-16")}>
        <Title text="حجز العقار" />
        <div className="flex flex-col rounded-lg overflow-hidden border border-black">
          <div
            className={clsx(
              "w-[250px] md:w-[300px] lg:w-auto flex flex-col-reverse",
              "lg:flex-row"
            )}
          >
            <Form documentId={realEstate.documentId} />
            <div
              className={clsx(
                "relative h-[150px]",
                "md:h-[170px] lg:h-[545px]"
              )}
            >
              <Image
                fill
                className="static! object-cover"
                src={realEstate?.images[0]?.url || placeholderPath}
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
