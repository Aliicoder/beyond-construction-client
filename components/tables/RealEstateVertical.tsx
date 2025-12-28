import { IRealEstate } from "@/types";

const RealEstateVerticalTable = ({
  realEstate,
}: {
  realEstate: IRealEstate;
}) => {
  return (
    <table className="hidden w-full border-collapse text-right lg:block ">
      <thead className="bg-first text-white">
        <tr>
          <th className="px-6 py-4 text-sm font-semibold">الوحدة</th>
          <th className="px-6 py-4 text-sm font-semibold">النوع</th>
          <th className="px-6 py-4 text-sm font-semibold">المساحة</th>
          <th className="px-6 py-4 text-sm font-semibold">السعر</th>
          <th className="px-6 py-4 text-sm font-semibold">الموقع</th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-gray-50 transition">
          <td className="px-6 py-4 font-medium text-gray-800 border-l border-gray-200">
            {realEstate.id}
          </td>
          <td className="px-6 py-4 text-gray-600 border-l border-gray-200">
            {realEstate.type}
          </td>
          <td className="px-6 py-4 text-gray-600 border-l border-gray-200">
            <span>{realEstate.width}</span>
            <span className="px-2">x</span>
            <span>{realEstate.height}</span>
          </td>
          <td className="px-6 py-4 text-first font-semibold border-l border-gray-200">
            {realEstate.price}
          </td>
          <td className="px-6 p-4 text-gray-600 truncate w-[15ch]">
            {realEstate.location}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RealEstateVerticalTable;
