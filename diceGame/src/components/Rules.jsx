import React from "react";

function Rules() {
  return (
    <div className="bg-pink-100 p-[20px] w-[500px] mt-6">
      <h2 className="text-[24px] ">How to play dice game</h2>
      <div>
        <p className="font-bold mt-[24px]">Select any number</p>
        <p className="font-bold mt-[24px]">Click on dice image</p>
        <p className="font-bold mt-[24px]">
          after click on dice if selected number is equal to dice number you
          will get same point as dice if you get wrong guess then 2 point will
          be dedcuted
        </p>
      </div>
    </div>
  );
}

export default Rules;
