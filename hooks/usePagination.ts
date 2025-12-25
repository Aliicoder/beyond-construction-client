import { useState } from "react";

const PER_PAGE = 8;
export default function usePagination(realEstates: any[]) {
  const [page, setPage] = useState(1);
  let start = (page - 1) * PER_PAGE,
    end = start + PER_PAGE;
  return {
    curRealEstates: realEstates.slice(start, end),
    setPage,
    page,
    totalPages: Math.ceil(realEstates.length / PER_PAGE),
  };
}
