import Image, { StaticImageData } from "next/image";
import React from "react";

interface SliderProps {
  data: {
    alt: string;
    src: StaticImageData;
    width: number;
    height: number;
  }[];
  className?: string;
  rtl?: boolean;
}
const Slider = ({ data }: SliderProps) => {
  return (
    <div
      className="container mx-auto slider mb-[20px] overflow-hidden"
      style={
        {
          "--width": "150px",
          "--height": "200px",
          "--quntity": data.length,
        } as React.CSSProperties
      }
    >
      <ul className="list">
        {data.map(({ alt, src, width, height }, index) => (
          <li
            style={
              {
                "--index": index,
              } as React.CSSProperties
            }
            key={index}
            className="item"
          >
            <img className="size-full object-contain" src={src.src} alt={alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
