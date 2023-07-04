import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";

describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
      div
    );
  });

  it("should render images for each team member", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
      div
    );

    const teamMembers = [
      {
        name: "Jessica Ricks",
        image: require("../assets/jesspng.png"),
        pokemon: require("../assets/bulbaprof.png"),
      },
      {
        name: "Catalino Rodriguez",
        image: require("../assets/crodpng.png"),
        pokemon: require("../assets/squirtleprof.png"),
      },
      {
        name: "Vance Apostol",
        image: require("../assets/vancepng.png"),
        pokemon: require("../assets/charprof.png"),
      },
    ];

    teamMembers.forEach((member) => {
      const profileImage = screen.getByAltText(
        `profile of the member ${member.name}`
      );
      const pokemonImage = screen.getByAltText(
        `starter pokemon of the member ${member.name}`
      );

      expect(profileImage).toBeInTheDocument();
      expect(profileImage.getAttribute("src")).toContain(member.image);

      expect(pokemonImage).toBeInTheDocument();
      expect(pokemonImage.getAttribute("src")).toContain(member.pokemon);
    });
  });
    
});