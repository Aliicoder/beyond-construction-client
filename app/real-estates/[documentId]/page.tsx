import RealEstate from "@/components/sections/RealEstate";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ContactBar from "@/components/buttons/ContactBar";
const page = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;
  return (
    <main className="min-h-screen bg-second">
      <ContactBar />
      <Header />
      <RealEstate documentId={documentId} />
      <Footer />
    </main>
  );
};

export default page;
