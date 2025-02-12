import React from "react";

interface PaginationProps {
  page: number;
  isFetching: boolean;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  isFetching,
  onPageChange,
}) => {
  return (
    <div>
      <button
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        disabled={page === 1 || isFetching}
      >
        Previous Page
      </button>
      <span>Page {page}</span>
      <button onClick={() => onPageChange(page + 1)} disabled={isFetching}>
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
