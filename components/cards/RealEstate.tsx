import riyalIcon from "@/assets/icons/riyal-currency.svg";
import locationIcon from "@/assets/icons/location.svg";
import buildingIcon from "@/assets/icons/building.svg";
import sizeIcon from "@/assets/icons/size.svg";
import crossIcon from "@/assets/icons/cross-white.svg";
import clsx from "clsx";
import { RealEstateProps } from "@/types";
import Link from "next/link";
import { buildingTypes } from "@/constants/emptyEstate";
import Button from "@/components/buttons/ThirdBtn";
import placeholderImg from "@/assets/images/placeholder.webp";

const RealEstate = ({ realEstate, className }: RealEstateProps) => {
  const { documentId, location, type, price, width, height, images } =
    realEstate;

  return (
    <Link
      scroll={false}
      href={`/real-estates/${documentId}`}
      key={documentId}
      className={clsx(
        "flex flex-col h-full outline rounded-sm outline-black overflow-hidden",
        className
      )}
    >
      <div className={clsx("relative h-[100px]", "md:h-[200px]")}>
        <img
          className="size-full object-cover"
          src={images[0]?.url || placeholderImg.src}
          alt="real estate"
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
          <div className="w-[4px] h-[4px] md:size-4">
            <img
              className="size-full object-contain"
              src={locationIcon.src}
              alt="location icon"
            />
          </div>
          <div className={clsx("line-clamp-1 text-xs", "md:text-sm")}>
            {location}
          </div>
        </div>
        <div id="details" className={clsx("flex gap-2 opacity-70", "md:gap-4")}>
          <div className="gap-2 flex items-center">
            <div className="size-[10px] md:size-4">
              <img
                className="size-full object-contain"
                src={buildingIcon.src}
                alt="building type icon"
              />
            </div>
            <div className={clsx("text-xs", "md:text-sm")}>
              {buildingTypes[type]}
            </div>
          </div>
          <div className="gap-2 flex items-center">
            <div className="size-[7px] md:size-[10px]">
              <img src={sizeIcon.src} alt="size-icon" />
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
          <Button
            icon={
              <div className="size-[8px]">
                <img className="md:hidden" src={crossIcon.src} alt="more" />
              </div>
            }
            width="fit"
            text="احجز الآن"
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
    </Link>
  );
};

export default RealEstate;
