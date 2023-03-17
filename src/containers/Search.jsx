import React from "react";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <div className="flex justify-center pb-10">
      <input
        type="text"
        onChange={(item) => {
          setPageNumber(1);
          setSearch(item.target.value);
        }}
        placeholder="search for character..."
        className=" w-[60%] mr-4 py-2 px-6 text-sm outline-none max-w-xl white-glassmorphism text-slate-200 rounded-md shadow-lg border-solid border-[1px] border-slate-600"
      />
      <button className="bg-pink-500 hover:bg-rose-500 text-white rounded-md px-6 transition-all duration-300 shadow-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
