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
      className={clsx(
        "w-[180px] flex flex-col outline rounded-sm outline-black ",
        "md:w-[300px]"
      )}
    >
      <img src={image.src} alt="real estate" />
      <div className="p-4 gap-4 flex flex-col bg-white">
        <div className="flex items-center gap-2 text-lg font-bold">
          <img className="size-4" src={locationIcon.src} alt="" />
          <div className="line-clamp-1">{location}</div>
        </div>
        <div className="flex gap-4 opacity-70">
          <div className="gap-2 flex items-center">
            <img
              className="size-[12px]"
              src={buildingIcon.src}
              alt="building-type-icon"
            />
            <span>{type}</span>
          </div>
          <div className="gap-2 flex items-center">
            <img className="size-[9px]" src={sizeIcon.src} alt="size-icon" />
            <span className="flex items-center gap-1">
              {size[0]} <div>x</div> {size[1]}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button>عرض التفاصيل</button>
          <div className="flex gap-2">
            <div className="text-lg font-bold">{price}</div>
            <img src={riyalIcon.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
