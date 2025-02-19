import React from "react";

const Startgame = ({ toggle }) => {
  return (
    <section className="max-w-[1180px] flex m-auto h-screen items-center justify-center">
      <div>
        <img src="./images/dices.png" alt="" className="w-140" />
      </div>
      <div className="">
        <h1 className="font-bold text-2xl text-[94px] whitespace-nowrap">
          DICE GAME
        </h1>
        <div className="flex justify-end">
          <button
            className="flex flex-col justify-center items-center text-white px-2 py-1 text-[18px] hover:bg-white hover:text-black hover:border-b-black cursor-pointer S w-46 gap-10 bg-black border-1 rounded-sm "
            onClick={toggle}
          >
            Play Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Startgame;
