import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [Score, SetScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [error, SetError] = useState("");
  const [rules, SetRules] = useState(false);
  const GenerateRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min) + min);
    console.log(number);

    return number;
  };
  const roleDice = () => {
    const randomNumber = GenerateRandomNumber(1, 7);
    SetCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      SetScore((prev) => prev + randomNumber);
    } else {
      SetScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    SetScore(0);
  };

  return (
    <main>
      <div className="flex justify-between items-end mr-30 ml-28">
        <TotalScore score={Score} />
        <NumberSelector error={error} />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="flex-col justify-items-center mt- py-6 gap-2">
        <button
          onClick={resetScore}
          className="flex flex-col  justify-center items-center text-white px-2 py-1 text-[18px] hover:bg-white hover:text-black hover:border-b-black cursor-pointer S w-46 bg-black border-1 rounded-sm"
        >
          Reset Score
        </button>
        <button
          className="flex flex-col justify-center items-center text-white px-2 py-1 text-[18px] hover:bg-white hover:text-black hover:border-b-black cursor-pointer S mt-2 w-46 gap-10 bg-black border-1 rounded-sm"
          onClick={() => SetRules((prev) => !prev)}
        >
          Instructions {SetRules ? "show" : "hide"}
        </button>
        {rules && <Rules />}
      </div>
    </main>
  );
};

export default GamePlay;
