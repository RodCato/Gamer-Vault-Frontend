import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameIndex from "../pages/GameIndex";
import mockGames from "../mockGames"

describe("<GameIndex />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        render(
            <BrowserRouter>
                <GameIndex games={mockGames} />
            </BrowserRouter>,
            div
        );
    });

     it("renders game cards", () => {
       const div = document.createElement("div");
       render(
         <BrowserRouter>
           <GameIndex games={mockGames} />
         </BrowserRouter>,
         div
       );
       mockGames.forEach((game) => {
         expect(
           screen.getByAltText(`profile of a game named ${game.title}`)
         ).toBeInTheDocument();
       });
     });
});