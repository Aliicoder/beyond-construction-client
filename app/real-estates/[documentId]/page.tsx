import RealEstate from "@/app/real-estates/[documentId]/_components/RealEstate";
import leftUpArrow from "@/assets/icons/left-up-arrow.svg";
import Link from "next/link";

const page = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;
  return (
    <RealEstate
      documentId={documentId}
      GoBack={
        <div className="py-4 px-8 container mx-auto flex items-center justify-end cursor-pointer">
          <Link className="font-semibold underline" href="/real-estates">
            رجوع
            <div className="size-[10px] md:w-[14px] md:h-[14px] rotate-12">
              <img
                className="rotate-12 size-full object-contain"
                src={leftUpArrow.src}
                alt="up-left-arrow"
              />
            </div>
          </Link>
        </div>
      }
    />
  );
};

export default page;
