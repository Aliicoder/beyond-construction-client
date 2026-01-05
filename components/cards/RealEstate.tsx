import riyalIcon from "@/assets/icons/riyal-currency.svg";
import locationIcon from "@/assets/icons/location.svg";
import sizeIcon from "@/assets/icons/size.svg";
import crossIcon from "@/assets/icons/cross-white.svg";
import clsx from "clsx";
import { RealEstateProps } from "@/types";
import { buildingTypes } from "@/constants/realEstate";
import { getEstateImage } from "@/lib/helpers/getEstateImg";
import buildingIcon from "@/assets/icons/building.svg";
import Third_btn from "@/components/buttons/ThirdBtn";
import ShareBtn from "@/components/buttons/ShareBtn";
const RealEstate = ({ realEstate, className }: RealEstateProps) => {
  const { documentId, location, type, price, width, height, images } =
    realEstate;

  return (
    <div
      key={documentId}
      className={clsx(
        "max-w-[283px] flex flex-col h-full outline rounded-sm overflow-hidden outline-black",
        className
      )}
    >
      <div className={clsx("relative h-[100px]", "md:h-[200px]")}>
        <div className="absolute top-2 right-2 flex items-center">
          <ShareBtn documentId={documentId} />
        </div>
        <img
          className="size-full object-cover"
          src={getEstateImage(images[0])}
          alt="real estate"
          loading="lazy"
        />
      </div>
      <div
        id="wrapper"
        className={clsx("p-2 gap-2 flex flex-col bg-white", "md:p-4")}
      >
        <div
          id="location"
          className="gap-2 flex items-center text-lg font-bold"
        >
          <div className="size-2 md:size-3">
            <img
              className="size-full object-contain"
              src={locationIcon.src}
              alt="location icon"
              loading="lazy"
            />
          </div>
          <div className={clsx("line-clamp-1 text-xs", "md:text-sm")}>
            {location}
          </div>
        </div>
        <div id="details" className={clsx("flex gap-2 opacity-70", "md:gap-4")}>
          <div className="gap-2 flex items-center relative">
            <div className="size-[7px] md:size-3">
              <img
                className="size-full object-contain"
                src={buildingIcon.src}
                alt="size-icon"
              />
            </div>
            <div className={clsx("text-xs", "md:text-sm")}>
              {buildingTypes[type]}
            </div>
          </div>
          <div className="gap-2 flex items-center">
            <div className="size-[7px] md:size-2">
              <img
                className="size-full object-contain"
                src={sizeIcon.src}
                alt="size-icon"
              />
            </div>
            <span
              className={clsx("gap-1 flex items-center text-xs", "md:text-sm")}
            >
              {width} <span>x</span> {height}
            </span>
          </div>
        </div>
        <div
          id="foot"
          className={clsx("flex justify-between items-end", "md:mt-4")}
        >
          <Third_btn
            href={`/real-estates/${documentId}`}
            icon={
              <div className="size-[8px] md:size-3">
                <img
                  className="size-full object-contain"
                  src={crossIcon.src}
                  alt="more"
                />
              </div>
            }
            width="fit"
          />

          <div className="gap-1 p-2 flex items-center">
            <div className={clsx("font-bold text-xs", "md:text-sm")}>
              {new Number(price).toLocaleString("en-US")}
            </div>
            <div className="size-[12px] md:size-4">
              <img
                className="size-full object-contain"
                src={riyalIcon.src}
                alt="Riyal currency symbol"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
