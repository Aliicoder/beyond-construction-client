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
import { IRealEstate } from "@/types";
import { fakeData } from "@/constants/real-estates";

const RealEstates = ({ realEstates }: { realEstates: IRealEstate[] }) => {
  const { curRealEstates, page, setPage, totalPages, perPage } =
    usePagination(realEstates);

  return (
    <section
      id="real-estates"
      className={clsx(
        "container mx-auto flex flex-col items-center gap-12 pt-16 md:pt-24"
      )}
    >
      <Title text="العقارات المتاحة" />

      <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {curRealEstates.map((estate) => (
          <RealEstate key={estate.id} realEstate={estate} />
        ))}

        {Array.from({
          length: perPage - curRealEstates.length,
        }).map((_, index) => (
          <RealEstate
            key={`placeholder-${index}`}
            className="invisible pointer-events-none"
            realEstate={fakeData[0]}
          />
        ))}
      </div>

      <Pagination dir="ltr">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              className="w-auto h-auto p-2 bg-white border border-black rounded-sm cursor-pointer"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
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
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              التالي
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default RealEstates;
