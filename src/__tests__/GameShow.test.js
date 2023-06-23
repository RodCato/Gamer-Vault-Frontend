import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import GameShow from "../pages/GameShow";
import mockGames from "../mockGames";

describe("<GameShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/Gameshow/1"]}>
        <Routes>
          <Route
            path="/Gameshow/:id"
            element={<GameShow Games={mockGames} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });

  it("renders Game Card", () => {
    render(
      <MemoryRouter initialEntries={["/Gameshow/1"]}>
        <Routes>
          <Route
            path="/Gameshow/:id"
            element={<GameShow games={mockGames} />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Genre/i)).toBeInTheDocument();
  });
});
