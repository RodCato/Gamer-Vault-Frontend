import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GameEdit from "../pages/GameEdit";

describe("GameEdit", () => {
  const updateGameMock = jest.fn();

  it("updates the game data and navigates on form submission", () => {
    const { container, getByText } = render(
      <Router>
        <GameEdit games={[]} updateGame={updateGameMock} />
      </Router>
    );

    const gameTitleInput = container.querySelector("#game-title");
    const updateButton = getByText("Update Game");

    fireEvent.change(gameTitleInput, { target: { value: "Updated Title" } });
    fireEvent.click(updateButton);

    expect(updateGameMock).toHaveBeenCalledWith({
      title: "Updated Title",
      image: "",
      genre: "",
      platform: "",
      notes: "",
    });
  });
});
