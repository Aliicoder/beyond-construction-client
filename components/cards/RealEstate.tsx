import { StaticImageData } from "next/image";
import riyalIcon from "@/assets/icons/riyal.png";
import locationIcon from "@/assets/icons/location.svg";
import buildingIcon from "@/assets/icons/building.svg";
import sizeIcon from "@/assets/icons/size.svg";
import clsx from "clsx";
interface RealEstateProps {
  id: number;
  location: string;
  type: string;
  price: string;
  image: StaticImageData;
  size: number[];
}
const RealEstate = ({
  id,
  location,
  type,
  price,
  size,
  image,
}: RealEstateProps) => {
  return (
    <div
      key={id}
      className={clsx("flex flex-col outline rounded-sm outline-black ", "")}
    >
      <img src={image.src} alt="real estate" />
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
            <div className="text-xs md:text-sm">{type}</div>
          </div>
          <div className="gap-2 flex items-center">
            <img className="size-2 " src={sizeIcon.src} alt="size-icon" />
            <span className="flex items-center gap-1 text-xs md:text-sm">
              {size[0]} <div>x</div> {size[1]}
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-col-reverse  justify-between items-center md:flex-row">
          <button className="w-full mt-4  px-2 py-1 bg-second outline rounded-sm  outline-black md:w-fit md:mt-0">
            احجز الآن
          </button>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="font-bold text-xs md:text-sm">{price}</div>
            <img className="size-4 md:size-6" src={riyalIcon.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
