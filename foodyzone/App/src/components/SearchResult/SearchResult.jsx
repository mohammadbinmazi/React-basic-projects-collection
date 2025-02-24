import React from "react";
import { BASE_URL } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-[75vh] flex flex-wrap justify-center gap-6 p-6">
      {data?.map(({ name, image, text, price }) => (
        <div
          key={name}
          className="relative w-[340px]  bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md flex overflow-hidden p-3 h-50"
        >
          <img
            src={BASE_URL + image}
            alt={name}
            className="w-30 h-30 rounded-lg object-cover m-3"
          />

          <div className="flex flex-col justify-between flex-1 p-3">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <p className="text-gray-200 text-sm mb-10">{text}</p>
          </div>

          <div className="absolute bottom-2 right-2 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-md mt-5">
            <button> ${price.toFixed(2)}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
