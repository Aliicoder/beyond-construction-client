import RealEstate from "@/components/sections/RealEstate";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
const page = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;
  return (
    <main className="min-h-screen bg-second">
      <Header />
      <RealEstate documentId={documentId} />
      <Footer />
    </main>
  );
};

export default page;
