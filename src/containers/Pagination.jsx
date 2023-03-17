import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, data }) => {
  return (
    <ReactPaginate
      pageCount={data?.pages}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="text-slate-200 flex justify-center items-center py-20"
      previousLabel={"Prev"}
      previousClassName="px-4 py-2 bg-pink-500 rounded-md mr-2"
      nextClassName="px-4 py-2 bg-pink-500 rounded-md ml-2"
      pageClassName="mx-2"
      pageLinkClassName="px-3 py-2 hover:bg-amber-300 hover:text-slate-900 rounded-md transition-all duration-300"
      activeClassName="bg-amber-300 text-slate-900 py-[6px] rounded-md"
      onPageChange={(item) => {
        setPageNumber(item.selected + 1);
      }}
    />
  );
};

export default Pagination;
