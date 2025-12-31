import RealEstate from "@/components/sections/RealEstate";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;
  return (
    <div className="fixed z-30 inset-0 ">
      <main className="size-full overflow-y-auto bg-second hide-scroll">
        <Header />
        <RealEstate documentId={documentId} />
        <Footer />
      </main>
    </div>
  );
}
