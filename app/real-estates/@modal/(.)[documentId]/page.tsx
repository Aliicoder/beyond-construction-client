import RealEstate from "@/app/real-estates/[documentId]/_components/RealEstate";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BackBtn from "@/components/buttons/BackBtn";

export default async function Page({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;
  return (
    <div className="z-20 fixed inset-0 size-full overflow-y-auto bg-second hide-scroll">
      <Header />
      <RealEstate documentId={documentId} GoBack={<BackBtn />} />
      <Footer />
    </div>
  );
}
