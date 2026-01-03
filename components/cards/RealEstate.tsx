import riyalIcon from "@/assets/icons/riyal-currency.svg";
import locationIcon from "@/assets/icons/location.svg";
import buildingIcon from "@/assets/icons/building.svg";
import sizeIcon from "@/assets/icons/size.svg";
import crossIconPath from "@/assets/icons/cross-white.svg";
import clsx from "clsx";
import { RealEstateProps } from "@/types";
import Link from "next/link";
import { buildingTypes } from "@/constants/emptyEstate";
import Button from "../buttons/thirdBtn";
import Image from "next/image";
import placeholderImgPath from "@/assets/images/placeholder.webp";

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
        <Image
          fill
          className="static! object-cover"
          src={images[0]?.url || placeholderImgPath}
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
          <Image
            width={4}
            height={4}
            className="md:size-4"
            src={locationIcon}
            alt="location icon"
          />
          <div className={clsx("line-clamp-1 text-xs", "md:text-sm")}>
            {location}
          </div>
        </div>
        <div id="details" className={clsx("flex gap-2 opacity-70", "md:gap-4")}>
          <div className="gap-2 flex items-center">
            <Image
              width={10}
              height={10}
              className="md:size-4"
              src={buildingIcon}
              alt="building type icon"
            />
            <div className={clsx("text-xs", "md:text-sm")}>
              {buildingTypes[type]}
            </div>
          </div>
          <div className="gap-2 flex items-center">
            <Image
              width={7}
              height={7}
              className="md:size-[10px]"
              src={sizeIcon.src}
              alt="size-icon"
            />
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
              <Image
                width={8}
                height={8}
                className="md:hidden"
                src={crossIconPath}
                alt="more"
              />
            }
            width="fit"
            text="احجز الآن"
          />
          <div className="gap-1 p-2 flex items-center">
            <div className={clsx("font-bold text-xs", "md:text-sm")}>
              {new Number(price).toLocaleString("en-US")}
            </div>
            <Image
              width={12}
              height={12}
              className="md:size-4"
              src={riyalIcon}
              alt="Riyal currency symbol"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RealEstate;
