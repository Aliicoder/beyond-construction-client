"use client";
import { useRealEstates } from "@/context/RealEstates";
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
import { useEffect, useState } from "react";
import Skeleton from "@/components/skeletons/RealEstates";
import { fakeData } from "@/constants/real-estates";
import { IRealEstate } from "@/types";

const RealEstates = ({ realEstates }: { realEstates: IRealEstate[] }) => {
  const [showSkeleton, _] = useState(false);

  const { curRealEstates, page, setPage, totalPages } =
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
        {realEstates.length === 0 && showSkeleton
          ? fakeData.map((estate) => (
              <Skeleton key={estate.id} realEstate={estate} />
            ))
          : realEstates.length > 0 &&
            curRealEstates.map((estate) => (
              <RealEstate key={estate.id} realEstate={estate} />
            ))}
      </div>

      <Pagination dir="ltr">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink onClick={() => setPage((p) => Math.max(1, p - 1))}>
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
