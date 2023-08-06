export type PaginationProps = {
  className?: string;
  onClick?: () => void;
  totalPage: number;
  currentPage: number;
  onSelectPage: (index: number) => void;
};
