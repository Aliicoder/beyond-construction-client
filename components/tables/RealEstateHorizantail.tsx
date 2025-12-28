import { IRealEstate } from "@/types";

const RealEstateHorizantailTable = ({
  realEstate,
}: {
  realEstate: IRealEstate;
}) => {
  return (
    <table className="w-full text-right border-collapse lg:hidden">
      <tbody className="divide-y">
        <tr>
          <th className="px-4 py-3 bg-first text-white">الوحدة</th>
          <td className="px-4 py-3">{realEstate.id}</td>
        </tr>
        <tr>
          <th className="px-4 py-3 bg-first text-white">النوع</th>
          <td className="px-4 py-3">{realEstate.type}</td>
        </tr>
        <tr>
          <th className="px-4 py-3 bg-first text-white">المساحة</th>
          <td className="px-4 py-3">
            {realEstate.width} × {realEstate.height}
          </td>
        </tr>
        <tr>
          <th className="px-4 py-3 bg-first text-white">السعر</th>
          <td className="px-4 py-3 font-semibold">{realEstate.price}</td>
        </tr>
        <tr>
          <th className="px-4 py-3 bg-first text-white">الموقع</th>
          <td className="px-4 py-3 truncate max-w-[20ch]">
            {realEstate.location}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RealEstateHorizantailTable;
