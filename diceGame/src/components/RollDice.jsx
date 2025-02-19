import React from "react";

function RollDice({ roleDice, currentDice }) {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="cursor-pointer" onClick={roleDice}>
        <img src={`./images/dice_${currentDice}.png`} alt="" />
      </div>
      <p className="text-[20px] font-medium">Click on the Dice to Roll</p>
    </div>
  );
}

export default RollDice;
