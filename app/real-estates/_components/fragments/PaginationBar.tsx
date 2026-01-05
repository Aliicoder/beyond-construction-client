import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const PaginationBar = ({ page, totalPages, setPage }: any) => {
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

export default PaginationBar;
