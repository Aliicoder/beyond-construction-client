"use client";
import Filters from "./Filters";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import RealEstate from "@/components/cards/RealEstate";
import { useMemo, useState } from "react";
import usePagination from "@/hooks/usePagination";
import { fadeInVarients, viewport } from "@/constants/variants";
import RealEstateCard from "@/components/cards/RealEstate";
import { emptyEstate } from "@/constants/realEstate";
import PaginationBar from "./PaginationBar";

const Content = ({ realEstates }: { realEstates: any[] }) => {
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
    <>
      <Filters
        setCondition={setCondition}
        setCity={setCity}
        setPage={setPage}
      />

      <motion.div
        variants={fadeInVarients}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={clsx(
          "gap-4 p-4 mx-auto grid grid-cols-2",
          "md:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {curRealEstates.map((estate) => (
          <RealEstate key={estate.id} realEstate={estate} />
        ))}
        {/* fill empty cards to keep grid shape */}
        {Array.from({
          length: perPage - curRealEstates.length,
        }).map((_, index) => (
          <RealEstateCard
            key={`placeholder-${page}-${index}`}
            className="invisible pointer-events-none"
            realEstate={emptyEstate}
          />
        ))}
      </motion.div>

      <PaginationBar page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default Content;
