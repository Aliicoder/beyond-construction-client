import Title from "@/components/shared/Title";
import Form from "@/components/forms/Book";
import RealEstateVerticalTable from "@/components/tables/RealEstateVertical";
import { getRealEstates } from "@/lib/strapi/realEstates";
import clsx from "clsx";
import RealEstateHorizontalTable from "@/components/tables/RealEstateHorizontal";
import { getEstateImage } from "@/lib/helpers/getEstateImg";
import ShareBtn from "@/components/buttons/ShareBtn";

const RealEstate = async ({
  documentId,
  GoBack,
}: {
  documentId: string;
  GoBack: React.ReactNode;
}) => {
  const realEstates = await getRealEstates();
  if (!realEstates) throw new Error("لا يوجد عقارات");
  const realEstate = realEstates.find(
    (realEstate) => realEstate.documentId === documentId
  );
  if (!realEstate) throw new Error("لا يوجد عقار");
  return (
    <section className={clsx("mx-auto container flex flex-col items-center")}>
      {GoBack}
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
              <div className="absolute top-2 right-2 flex items-center">
                <ShareBtn documentId={documentId} />
              </div>
              <img
                className="size-full object-cover"
                src={getEstateImage(realEstate?.images[0])}
                alt="real estate"
                loading="lazy"
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
