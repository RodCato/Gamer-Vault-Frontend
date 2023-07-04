import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    );
  });
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Search"));
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
   it("should render an image", () => {
     render(
       <BrowserRouter>
         <Home />
       </BrowserRouter>
     );
     const image = screen.getByAltText("Ness");
     expect(image).toBeInTheDocument();
   });
});