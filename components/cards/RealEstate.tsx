import riyalIcon from "@/assets/icons/riyal-currency.svg";
import locationIcon from "@/assets/icons/location.svg";
import buildingIcon from "@/assets/icons/building.svg";
import sizeIcon from "@/assets/icons/size.svg";
import crossIconPath from "@/assets/icons/cross-black.svg";
import clsx from "clsx";
import { IRealEstate } from "@/types";
import Link from "next/link";
import { buildingTypes } from "@/constants/realEstates";
import Button from "../buttons/thirdBtn";
interface RealEstateProps {
  realEstate: IRealEstate;
  className?: string;
}
const RealEstate = ({ realEstate, className }: RealEstateProps) => {
  const { documentId, location, type, price, width, height, images } =
    realEstate;

  return (
    <Link
      scroll={false}
      href={`/real-estates/${documentId}`}
      key={documentId}
      className={clsx(
        "flex flex-col h-full outline rounded-sm outline-black",
        className
      )}
    >
      <div className="h-[100px] md:h-[200px]">
        <img
          className="w-full h-full object-cover"
          src={images[0].url}
          alt="real estate"
        />
      </div>
      <div className="p-2 gap-2 flex flex-col bg-white md:p-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          <img className="size-2 md:size-4" src={locationIcon.src} alt="" />
          <div className="line-clamp-1 text-xs md:text-sm">{location}</div>
        </div>
        <div className="flex gap-2 opacity-70 md:gap-4">
          <div className="gap-2 flex items-center">
            <img
              className="size-2 md:size-4"
              src={buildingIcon.src}
              alt="building-type-icon"
            />
            <div className="text-xs md:text-sm">{buildingTypes[type]}</div>
          </div>
          <div className="gap-2 flex items-center">
            <img className="size-2 " src={sizeIcon.src} alt="size-icon" />
            <span className="flex items-center gap-1 text-xs md:text-sm">
              {width} <div>x</div> {height}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-end ">
          <Button
            icon={
              <img
                className="size-3 md:hidden"
                src={crossIconPath.src}
                alt=""
              />
            }
            width="fit"
            text="احجز الآن"
          />
          <div className="p-2 flex items-center gap-1 bg-second rounded-lg">
            <div className="font-bold text-xs md:text-sm">{price}</div>
            <img className="size-3 md:size-4 " src={riyalIcon.src} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RealEstate;
