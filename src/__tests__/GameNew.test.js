import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GameNew from "../pages/GameNew";

describe("GameNew", () => {
  test("renders the page with a button", () => {
    render(
      <MemoryRouter>
        <GameNew createGame={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText("Add Game")).toBeInTheDocument();
  });
});
