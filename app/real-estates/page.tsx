import RealEstates from "@/components/sections/RealEstates";
import { getRealEstates } from "@/lib/strapi/realEstates";

const page = async () => {
  const realEstates = await getRealEstates();
  if (!realEstates) {
    throw new Error("لا يوجد عقارات");
  }
  return <RealEstates realEstates={realEstates} />;
};

export default page;
