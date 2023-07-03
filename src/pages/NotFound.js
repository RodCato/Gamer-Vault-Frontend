import React, { useState } from "react";
import WhacADev from "../components/WhacADev";

const NotFound = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <div className="not-found">
        <h1 style={{ fontSize: "17vw" }}>
          4<span style={{ color: "rgb(121, 159, 203)" }}>&#9001;</span>
          <span style={{ color: "rgb(249, 102, 94)" }}>
            {gameOver ? "☠️" : score}
          </span>
          <span style={{ color: "rgb(170, 240, 210)" }}>&#12297;</span>4
        </h1>
      </div>
      <body>
        <WhacADev score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} />
      </body>
    </>
  );
};

export default NotFound;
