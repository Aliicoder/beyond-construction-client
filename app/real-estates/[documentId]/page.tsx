import RealEstate from "@/components/sections/RealEstate";
const page = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;
  return <RealEstate documentId={documentId} />;
};

export default page;
