import { IRealEstate } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import closeIcon from "@/assets/icons/close.svg";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import clsx from "clsx";

const Images = ({
  realEstate,
  setShowImages,
}: {
  realEstate: IRealEstate;
  setShowImages: (show: boolean) => void;
}) => {
  const breakPoint = useTailwindBreakpoint();
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        onClick={() => setShowImages(false)}
        className="absolute top-6 right-6 z-50"
      >
        <img src={closeIcon.src} alt="close" />
      </button>
      <Carousel dir="ltr" className="w-full max-w-4xl px-10">
        <CarouselContent>
          {realEstate.images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={img.url}
                  alt={`real-estate-${index}`}
                  className="max-h-[80vh] w-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={clsx(
            breakPoint == "sm" &&
              "translate-x-full left-2 top-full translate-y-1/2 bg-white/80 hover:bg-white"
          )}
        />
        <CarouselNext
          className={clsx(
            breakPoint == "sm" &&
              "-translate-x-full right-2 top-full translate-y-1/2 bg-white/80 hover:bg-white"
          )}
        />
      </Carousel>
    </div>
  );
};

export default Images;
