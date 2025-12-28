import RealEstate from "@/components/sections/RealEstate";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <main className="min-h-screen bg-second">
      <Header />
      <RealEstate id={id} />
      <Footer />
    </main>
  );
};

export default page;
