import RealEstate from "@/components/sections/RealEstate";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="fixed z-50 inset-0 ">
      <main className="size-full overflow-y-auto bg-second hide-scroll">
        <Header />
        <RealEstate id={id} />
        <Footer />
      </main>
    </div>
  );
}
