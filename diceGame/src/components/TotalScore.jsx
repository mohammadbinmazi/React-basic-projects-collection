import React from "react";

function TotalScore({ score }) {
  return (
    <div className="text-center max-w-[200px]">
      <h1 className="text-[100px] font-bold ml-6  ">{score}</h1>
      <p className="text-[24px] mt-[-28px]  ">Total Score</p>
    </div>
  );
}

export default TotalScore;
