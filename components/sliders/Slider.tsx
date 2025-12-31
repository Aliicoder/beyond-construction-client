import { StaticImageData } from "next/image";
import React from "react";

interface SliderProps {
  data: {
    alt: string;
    src: StaticImageData;
  }[];
  className?: string;
  rtl?: boolean;
}
const Slider = ({ data }: SliderProps) => {
  return (
    <div
      className=" relative slider mb-[20px] overflow-hidden"
      style={
        {
          "--width": "100px",
          "--height": "200px",
          "--quntity": data.length,
        } as React.CSSProperties
      }
    >
      <ul className=" list">
        {data.map(({ alt, src }, index) => (
          <li
            style={
              {
                "--index": index,
              } as React.CSSProperties
            }
            key={index}
            className="p-2 md:p-0 item"
          >
            <img className="size-full object-contain" src={src.src} alt={alt} />
          </li>
        ))}
      </ul>
      <div className="absolute inset-0 gradient" />
    </div>
  );
};

export default Slider;
