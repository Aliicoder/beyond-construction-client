import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface SliderProps {
  direction?: number;
  data: {
    alt: string;
    src: string;
    width: number;
    height: number;
  }[];
  className?: string;
  rtl?: boolean;
  scales: {
    large: { width: number; height: number };
    medium: { width: number; height: number };
    small: { width: number; height: number };
  };
}
const Slider = ({
  direction = 1,
  data,
  className,
  scales,
  rtl,
}: SliderProps) => {
  return (
    <div
      className={cn("slider ", className)}
      style={
        {
          "--quntity": data.length,
          "--width-large": `${scales.large.width}px`,
          "--height-large": `${scales.large.height}px`,
          "--width-medium": `${scales.medium.width}px`,
          "--height-medium": `${scales.medium.height}px`,
          "--width-small": `${scales.small.width}px`,
          "--height-small": `${scales.small.height}px`,
        } as React.CSSProperties
      }
    >
      <div className="list">
        {data.map((partenr, index) => (
          <div
            style={
              {
                "--index": index,
                "--direction": direction,
              } as React.CSSProperties
            }
            key={index}
            className={cn(rtl ? "item-rtl" : "item-ltr")}
          >
            <Image
              src={partenr.src}
              alt={partenr.alt}
              width={partenr.width}
              height={partenr.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
