export interface PaginationProps {
  info: {
    pages: number;
    count: number;
    prev: number;
    next: number;
  };
  handleClickPrev: () => void;
  handleClickNext: () => void;
}
