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
    <div className="z-30 fixed inset-0 size-full overflow-y-auto bg-second hide-scroll">
      <RealEstate documentId={documentId} />
      <Footer />
    </div>
  );
}
