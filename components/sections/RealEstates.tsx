"use client";
import Title from "@/components/fragments/Title";
import RealEstate from "@/components/cards/RealEstate";
import clsx from "clsx";
import usePagination from "@/hooks/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { IPaginationBar, IRealEstate } from "@/types";
import { emptyEstate } from "@/constants/emptyEstate";

const PaginationBar = ({ page, totalPages, setPage }: IPaginationBar) => (
  <Pagination dir="ltr">
    <PaginationContent>
      <PaginationItem>
        <PaginationLink
          className="w-auto h-auto p-2 bg-white border border-black rounded-sm cursor-pointer"
          onClick={() => setPage(Math.max(1, page - 1))}
        >
          السابق
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink>{page}</PaginationLink>
      </PaginationItem>

      <PaginationEllipsis />

      <PaginationItem>
        <PaginationLink>{totalPages}</PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          className="w-auto h-auto p-2 bg-white border border-black rounded-sm cursor-pointer"
          onClick={() => setPage(Math.min(totalPages, page + 1))}
        >
          التالي
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

const RealEstates = ({ realEstates }: { realEstates: IRealEstate[] }) => {
  const { curRealEstates, page, setPage, totalPages, perPage } =
    usePagination(realEstates);

  return (
    <section
      className={clsx(
        "container mx-auto flex flex-col items-center gap-12 pt-16 md:pt-24"
      )}
    >
      <Title text="العقارات المتاحة" />

      <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {curRealEstates.map((estate) => (
          <RealEstate key={estate.id} realEstate={estate} />
        ))}
        {/* fill with empty cards to maintain grid structure */}
        {Array.from({
          length: perPage - curRealEstates.length,
        }).map((_, index) => (
          <RealEstate
            key={`placeholder-${page}-${index}`}
            className="invisible pointer-events-none"
            realEstate={emptyEstate}
          />
        ))}
      </div>
      <PaginationBar page={page} totalPages={totalPages} setPage={setPage} />
    </section>
  );
};

export default RealEstates;
