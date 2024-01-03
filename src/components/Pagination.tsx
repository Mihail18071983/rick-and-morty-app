import styled from "@emotion/styled";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  pageCount: number;
  handlePageClick: (e: { selected: number }) => void;
  currentPage: number;
}

export default function Pagination({
  pageCount,
  handlePageClick,
  currentPage,
}: IPaginationProps) {
  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        containerClassName={"pagination"}
        forcePage={currentPage - 1}
      />
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .pagination li {
    margin: 0 5px;
  }

  .pagination a {
    cursor: pointer;
    color: #000;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .pagination a:hover {
    background-color: #ddd;
  }

  .pagination .selected a {
    background-color: #000;
    color: #fff;
  }

  .pagination .disabled a {
    color: #ccc;
    cursor: default;
  }
`;
