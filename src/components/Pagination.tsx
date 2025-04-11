import { CircleArrowRight, CircleArrowLeft } from "lucide-react";
import { PaginationProps } from "../types/Info";

const Pagination = ({
  info,
  handleClickPrev,
  handleClickNext,
}: PaginationProps) => {
  const hasPrevPage = !!info?.prev;
  const hasNextPage = !!info?.next;
  return (
    <div className="p-2 flex justify-end gap-4">
      <button
        onClick={handleClickPrev}
        className={!hasPrevPage ? "cursor-not-allowed" : "cursor-pointer"}
        disabled={!hasPrevPage}
      >
        <CircleArrowLeft
          color={!hasPrevPage ? "#B2B2B2" : "#101828"}
          size={32}
        />
      </button>
      <button
        onClick={handleClickNext}
        className={!hasNextPage ? "cursor-not-allowed" : "cursor-pointer"}
        disabled={!hasNextPage}
      >
        <CircleArrowRight
          color={!hasNextPage ? "#B2B2B2" : "#101828"}
          size={32}
        />
      </button>
    </div>
  );
};

export default Pagination;
