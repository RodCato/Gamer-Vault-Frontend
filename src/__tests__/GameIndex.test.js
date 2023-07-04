import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameIndex from "../pages/GameIndex";

describe("<GameIndex />", () => {
  const games = [
    {
      id: 1,
      title: "Game 1",
      // Add other properties as needed
    },
    {
      id: 2,
      title: "Game 2",
      // Add other properties as needed
    },
    // Add more game objects as needed
  ];

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <GameIndex games={games} />
      </BrowserRouter>
    );
  });

  it("renders game cards", () => {
    render(
      <BrowserRouter>
        <GameIndex games={games} />
      </BrowserRouter>
    );
    games.forEach((game) => {
      expect(
        screen.getByAltText(`profile of the game ${game.title}`)
      ).toBeInTheDocument();
    });
  });
});
