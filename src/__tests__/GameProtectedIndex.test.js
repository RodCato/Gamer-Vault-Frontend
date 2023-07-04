import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameProtectedIndex from "../pages/GameProtectedIndex";

describe("GameProtectedIndex", () => {
  const currentUser = { id: 1 };
  const games = [
    { id: 1, user_id: 1, title: "Game 1", image: "game1.png" },
    { id: 2, user_id: 1, title: "Game 2", image: "game2.png" },
    { id: 3, user_id: 2, title: "Game 3", image: "game3.png" },
  ];

  it("renders the page and loads the mygames.png image", () => {
    render(
      <BrowserRouter>
        <GameProtectedIndex currentUser={currentUser} games={games} />
      </BrowserRouter>
    );

    // Check if the page renders
    const pageTitle = screen.getByAltText("bubble");
    expect(pageTitle).toBeInTheDocument();

    // Check if the mygames.png image loads correctly
    const myGamesImage = screen.getByAltText("bubble");
    expect(myGamesImage).toHaveAttribute("src", "mygames.png");
  });
});
