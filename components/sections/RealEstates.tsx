"use client";
import { realEstates } from "@/constants/real-estates";
import Title from "@/components/fragments/Title";
import RealEstate from "@/components/cards/RealEstate";
import clsx from "clsx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import usePagination from "@/hooks/usePagination";

const RealEstates = () => {
  const { curRealEstates, page, setPage, totalPages } =
    usePagination(realEstates);
  return (
    <section
      id="real-estates"
      className={clsx(
        "container mx-auto flex flex-col items-center gap-12 pt-16 md:gap-16 md:pt-24"
      )}
    >
      <Title text="العقارات المتاحة " />
      <div
        className={clsx(
          "grid grid-cols-2 flex-wrap justify-center gap-4 p-4",
          "md:gap-[30px] md:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {curRealEstates.map((realEstate, i) => (
          <RealEstate key={i} {...realEstate} />
        ))}
      </div>
      <Pagination dir="ltr">
        <PaginationContent>
          <PaginationItem className="px-2 bg-white rounded-sm outline outline-black">
            <PaginationLink
              onClick={() => setPage((curPage) => Math.max(curPage - 1, 1))}
              href="#"
              aria-label="السابق"
            >
              السابق
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#real-estates">{page}</PaginationLink>
          </PaginationItem>

          <PaginationItem className="-m-5">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#real-estates">{totalPages}</PaginationLink>
          </PaginationItem>

          <PaginationItem
            onClick={() =>
              setPage((curPage) => Math.min(curPage + 1, totalPages))
            }
            className="px-2 bg-white rounded-sm outline outline-black"
          >
            <PaginationLink href="#real-estates" aria-label="التالي">
              التالي
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default RealEstates;
