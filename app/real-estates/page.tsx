import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RealEstates from "@/components/sections/RealEstates";
import { getRealEstates } from "@/lib/strapi/realEstates";
import ContactBar from "@/components/buttons/ContactBar";

const page = async () => {
  const realEstates = await getRealEstates();
  if (!realEstates) {
    throw new Error("لا يوجد عقارات");
  }
  return (
    <main className="min-h-screen bg-second hide-scroll">
      <ContactBar />
      <Header />
      <RealEstates realEstates={realEstates} />
      <Footer />
    </main>
  );
};

export default page;
