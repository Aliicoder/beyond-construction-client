import { getRealEstates } from "@/lib/strapi/real-estates";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RealEstates from "@/components/sections/RealEstates";

const page = async () => {
  let realEstates = await getRealEstates();
  return (
    <main className="min-h-screen bg-second">
      <Header />
      <RealEstates realEstates={realEstates} />
      <Footer />
    </main>
  );
};

export default page;
