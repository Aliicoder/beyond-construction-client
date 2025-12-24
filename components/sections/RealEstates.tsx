import React from "react";
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
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const RealEstates = () => {
  return (
    <section
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
        {realEstates.map((realEstate) => (
          <RealEstate key={realEstate.id} {...realEstate} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default RealEstates;
