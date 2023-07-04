import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, useParams, useNavigate } from "react-router-dom";
import GameEdit from "../pages/GameEdit";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("GameEdit", () => {
  const updateGameMock = jest.fn();

  beforeEach(() => {
    useParams.mockReturnValue({ id: "1" });
    useNavigate.mockReturnValue(jest.fn());
  });

  it("updates the game data and navigates on form submission", () => {
    const { container, getByText } = render(
      <Router>
      <GameEdit games={[]} updateGame={updateGameMock} currentUser={{ id: "123" }} gameId="1" />
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
      user_id: "123",
      id: "1",
    });
  });
});