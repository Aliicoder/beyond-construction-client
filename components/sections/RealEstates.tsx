"use client";
import { useMemo, useState } from "react";
import clsx from "clsx";
import Title from "@/components/fragments/Title";
import RealEstate from "@/components/cards/RealEstate";
import usePagination from "@/hooks/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IPaginationBar, IRealEstate } from "@/types";
import { emptyEstate } from "@/constants/realEstate";
import { motion } from "framer-motion";
import { fadeInVarients, viewport } from "@/constants/variants";

const PaginationBar = ({ page, totalPages, setPage }: IPaginationBar) => {
  return (
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
};

const RealEstates = ({ realEstates }: { realEstates: IRealEstate[] }) => {
  const [condition, setCondition] = useState<"all" | "sale" | "rent">("all");
  const [city, setCity] = useState<"all" | "riyadh" | "jeddah">("all");
  const filteredRealEstates = useMemo(() => {
    return realEstates.filter(
      (estate) =>
        (condition === "all" || estate.condition === condition) &&
        (city === "all" || estate.city === city)
    );
  }, [realEstates, condition, city]);

  const { curRealEstates, page, setPage, totalPages, perPage } =
    usePagination(filteredRealEstates);

  return (
    <section
      className={clsx(
        "container mx-auto flex flex-col items-center gap-12 pt-16 md:pt-24"
      )}
    >
      <Title text="العقارات المتاحة" />

      <div className="p-8 w-full flex flex-wrap gap-4 justify-center border-b md:justify-start">
        <Select
          onValueChange={(value) => {
            setCondition(value as any);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[180px] border border-black bg-white">
            <SelectValue placeholder="النوع" />
          </SelectTrigger>

          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>النوع</SelectLabel>
              <SelectItem value="all">الكل</SelectItem>
              <SelectItem value="sale">للبيع</SelectItem>
              <SelectItem value="rent">للإيجار</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => {
            setCity(value as any);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[180px] border border-black bg-white">
            <SelectValue placeholder="الموقع" />
          </SelectTrigger>

          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>الموقع</SelectLabel>
              <SelectItem value="all">الكل</SelectItem>
              <SelectItem value="riyadh">الرياض</SelectItem>
              <SelectItem value="jeddah">جدة</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <motion.div
        variants={fadeInVarients}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        {curRealEstates.map((estate) => (
          <RealEstate key={estate.id} realEstate={estate} />
        ))}
        {/* fill empty cards to keep grid shape */}
        {Array.from({
          length: perPage - curRealEstates.length,
        }).map((_, index) => (
          <RealEstate
            key={`placeholder-${page}-${index}`}
            className="invisible pointer-events-none"
            realEstate={emptyEstate}
          />
        ))}
      </motion.div>

      <PaginationBar page={page} totalPages={totalPages} setPage={setPage} />
    </section>
  );
};

export default RealEstates;
