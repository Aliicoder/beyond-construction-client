import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import RealEstates from "@/components/sections/RealEstates";

const page = () => {
  return (
    <main className="min-h-screen bg-second">
      <Header />
      <RealEstates />
      <Footer />
    </main>
  );
};

export default page;
