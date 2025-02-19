import React, { useState } from "react";

function NumberSelector({ error }) {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <div>
      <p>{error}</p>
      <div className="flex gap-[24px]">
        {arrNumber.map((value, i) => (
          <div
            key={i}
            className={`border w-[72px] h-[72px] grid place-content-center text-[24px] font-bold 
          cursor-pointer transition-all duration-200 
          ${
            selectedNumber === value
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <p className="text-[24px] font-bold">select number</p>
      </div>
    </div>
  );
}

export default NumberSelector;
