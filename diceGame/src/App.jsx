import React, { useState } from "react";
import Startgame from "./components/Startgame";
import GamePlay from "./components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? <GamePlay /> : <Startgame toggle={toggleGame} />}
    </div>
  );
}

export default App;
