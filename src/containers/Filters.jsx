import React from "react";
import { FilterItem } from "../components";

const status = ["Alive", "Dead", "unknown"];
const gender = ["Male", "Female", "Genderless", "unknown"];
const species = [
  "Human",
  "Humanoid",
  "Alien",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Planet",
  "Robot",
  "Cronenberg",
];

const Filters = ({ setStatus, setSpecies, setGender }) => {
  return (
    <div className="col-span-3 text-zinc-200 white-glassmorphism md:mr-10 md:ml-20 border-none rounded-lg shadow-xl overflow-hidden pb-4 max-w-md mx-3 h-fit">
      <p className="text-center bg-pink-500 py-2">Filters</p>
      <div className="flex flex-col justify-center items-center">
        <FilterItem name={"Status"} fun={setStatus} arr={status} />
        <FilterItem name={"Gender"} fun={setGender} arr={gender} />
        <FilterItem name={"Species"} fun={setSpecies} arr={species} />
        <button
          className="px-4 py-2 underline"
          onClick={() => {
            setGender("");
            setSpecies("");
            setStatus("");
          }}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
