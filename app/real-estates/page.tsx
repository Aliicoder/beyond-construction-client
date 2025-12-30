import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RealEstates from "@/components/sections/RealEstates";
import { getRealEstates } from "@/lib/strapi/real-estates";

const page = async () => {
  const realEstates = await getRealEstates();
  return (
    <main className="min-h-screen bg-second hide-scroll">
      <Header />
      <RealEstates realEstates={realEstates} />
      <Footer />
    </main>
  );
};

export default page;
