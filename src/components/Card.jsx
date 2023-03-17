import React from "react";

const Card = ({ data }) => {
  let status;
  if (data.status === "Alive") {
    status = "bg-green-700";
  } else if (data.status === "Dead") {
    status = "bg-rose-600";
  } else {
    status = "bg-gray-500";
  }
  return (
    <div className=" w-72 mx-[1%] my-2 flex flex-col overflow-hidden blue-glassmorphism rounded-xl transition-all duration-300 ease-linear shadow-lg group">
      <div className="h-64 overflow-hidden">
        <img
          src={data.image}
          className="w-full object-cover scale-110 group-hover:scale-100 duration-300 transition-all"
        />
      </div>
      <p className="font-semibold text-lg pl-4 py-4 text-slate-50">
        {data.name}
      </p>
      <p className="pl-4 text-sm text-slate-200">Last location</p>
      <p className="pl-4 text-md pb-5 text-slate-100">{data.location.name}</p>
      <span
        className={`py-1 px-2 text-sm rounded-md ${status} w-fit text-sm text-white absolute ml-4 mt-4`}
      >
        {data.status}
      </span>
    </div>
  );
};

export default Card;
