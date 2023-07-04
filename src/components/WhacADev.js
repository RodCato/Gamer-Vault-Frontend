import React, { useEffect, useState } from "react";
import gamingJess from "../assets/gaming-jess.png";
import gamingVance from "../assets/gaming-vance.png";
import gamingCRod from "../assets/gaming-crod.png";
import bomb from "../assets/bomb.png";

const WhacADev = ({ score, setScore, gameOver, setGameOver }) => {
  const [currDevTile, setCurrDevTile] = useState(null);
  const [currBombTile, setCurrBombTile] = useState(null);
  // const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGame();
  }, []);

  function setGame() {
    setInterval(setDev, 2500);
    setInterval(setBomb, 2000);
  }

  function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
  }

  function getRandomDevImage() {
    const DevImages = [
      { url: gamingJess, className: "Dev-image-1" },
      { url: gamingVance, className: "Dev-image-2" },
      { url: gamingCRod, className: "Dev-image-3" },
    ];
    const randomIndex = Math.floor(Math.random() * DevImages.length);
    return DevImages[randomIndex];
  }

  function setDev() {
    if (gameOver) {
      return;
    }
    if (currDevTile) {
      setCurrDevTile(null);
    }

    let num = getRandomTile();
    if (currBombTile && currBombTile.id === num) {
      return;
    }

    setCurrDevTile(num);
  }

  function setBomb() {
    if (gameOver) {
      return;
    }
    if (currBombTile) {
      setCurrBombTile(null);
    }

    let num = getRandomTile();
    if (currDevTile && currDevTile === num) {
      return;
    }

    setCurrBombTile(num);
  }

  function selectTile(event) {
    if (gameOver) {
      return;
    }
    const selectedTileId = event.currentTarget.id;
    if (selectedTileId === currDevTile) {
      setScore((prevScore) => prevScore + 1);
    } else if (selectedTileId === currBombTile) {
      setScore(score.toString());
      setGameOver(true);
    }
  }

  return (
    <div>
      {/* <div id="score">{gameOver ? "GAME OVER" : score}</div> */}

      <div id="board" data-testid="board">
        {[...Array(9)].map((_, index) => (
          <div
            className="tile"
            key={index}
            id={index.toString()}
            onClick={selectTile}
            style={{
              width: "180px",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: `url(${require("../assets/hammer.png")}), auto`,
            }}
          >
            {index.toString() === currDevTile && (
              <img
                src={getRandomDevImage().url}
                className={`img ${getRandomDevImage().className}`}
                alt="Dev"
                style={{
                  width: "100px",
                  height: "100px",
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserDrag: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
            {index.toString() === currBombTile && (
              <img
                src={bomb}
                className="img"
                alt="Bomb"
                style={{
                  width: "100px",
                  height: "100px",
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserDrag: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                  position: "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhacADev;
