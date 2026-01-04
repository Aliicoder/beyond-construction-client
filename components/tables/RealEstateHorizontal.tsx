"use client";
import {
  buildingTypes,
  cityTypes,
  conditionTypes,
} from "@/constants/realEstate";
import { IRealEstate } from "@/types";
import { useState, useEffect } from "react";
import Images from "@/components/overlays/Images";
import clsx from "clsx";

const RealEstateHorizontalTable = ({
  realEstate,
}: {
  realEstate: IRealEstate;
}) => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showImages ? "hidden" : "auto";
  }, [showImages]);

  return (
    <>
      {showImages && (
        <Images realEstate={realEstate} setShowImages={setShowImages} />
      )}

      <table
        className={clsx(
          "hidden w-full border-collapse text-right bg-white",
          "lg:table"
        )}
      >
        <thead className="bg-first text-white">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold">الصور</th>
            <th className="px-6 py-4 text-sm font-semibold">الحالة</th>
            <th className="px-6 py-4 text-sm font-semibold">النوع</th>
            <th className="px-6 py-4 text-sm font-semibold">المساحة</th>
            <th className="px-6 py-4 text-sm font-semibold">السعر</th>
            <th className="px-6 py-4 text-sm font-semibold">المدينة</th>
            <th className="px-6 py-4 text-sm font-semibold">الموقع</th>
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-50 transition">
            <td
              onClick={() => setShowImages(true)}
              className="px-6 py-4 font-medium border-l border-gray-200 text-green-600 underline cursor-pointer"
            >
              عرض الصور ({realEstate.images.length})
            </td>

            <td className="px-6 py-4 border-l border-gray-200">
              {conditionTypes[realEstate.condition]}
            </td>

            <td className="px-6 py-4 border-l border-gray-200">
              {buildingTypes[realEstate.type]}
            </td>

            <td className="px-6 py-4 border-l border-gray-200">
              {realEstate.width} × {realEstate.height}
            </td>

            <td className="px-6 py-4 font-semibold border-l border-gray-200">
              {new Number(realEstate.price).toLocaleString("en-US")}
            </td>

            <td className="px-6 py-4 border-l border-gray-200">
              {cityTypes[realEstate.city]}
            </td>
            <td className="px-6 py-4 text-gray-600 truncate max-w-[25ch]">
              {realEstate.location}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RealEstateHorizontalTable;
