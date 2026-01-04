"use client";
import {
  buildingTypes,
  cityTypes,
  conditionTypes,
} from "@/constants/realEstate";
import { IRealEstate } from "@/types";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Images from "@/components/overlays/Images";

const RealEstateVerticalTable = ({
  realEstate,
}: {
  realEstate: IRealEstate;
}) => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showImages ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showImages]);

  return (
    <>
      {showImages && (
        <Images realEstate={realEstate} setShowImages={setShowImages} />
      )}
      <table
        className={clsx(
          "w-full text-right border-collapse text-xs bg-white",
          "md:text-base lg:hidden"
        )}
      >
        <tbody className="divide-y">
          <tr>
            <th className="px-4 py-3 bg-first text-white">الصور</th>
            <td
              onClick={() => setShowImages(true)}
              className="px-4 py-3 underline cursor-pointer text-green-600"
            >
              عرض الصور ({realEstate.images.length})
            </td>
          </tr>

          <tr>
            <th className="px-4 py-3 bg-first text-white">الحالة</th>
            <td className="px-4 py-3">
              {conditionTypes[realEstate.condition]}
            </td>
          </tr>

          <tr>
            <th className="px-4 py-3 bg-first text-white">النوع</th>
            <td className="px-4 py-3">{buildingTypes[realEstate.type]}</td>
          </tr>

          <tr>
            <th className="px-4 py-3 bg-first text-white">المساحة</th>
            <td className="px-4 py-3">
              {realEstate.width} × {realEstate.height}
            </td>
          </tr>

          <tr>
            <th className="px-4 py-3 bg-first text-white">السعر</th>
            <td className="px-4 py-3 font-semibold">
              {new Number(realEstate.price).toLocaleString("en-US")}
            </td>
          </tr>
          <tr>
            <th className="px-4 py-3 bg-first text-white">المدينة</th>
            <td className="px-4 py-3">{cityTypes[realEstate.city]}</td>
          </tr>
          <tr>
            <th className="px-4 py-3 bg-first text-white">الموقع</th>
            <td className="px-4 py-3 truncate max-w-[20ch]">
              {realEstate.location}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RealEstateVerticalTable;
