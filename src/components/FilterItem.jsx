import React from "react";
import MyButton from "./MyButton";

const FilterItem = ({ name, arr, fun }) => {
  return (
    <div className="mx-5 my-4">
      <p className="text-center mb-4">{name}</p>
      <div className="flex gap-3 flex-wrap justify-center">
        {arr.map((item) => {
          return <MyButton item={item} fun={fun} />;
        })}
      </div>
    </div>
  );
};

export default FilterItem;
