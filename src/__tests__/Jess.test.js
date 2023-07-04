import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Jess from "../pages/Jess";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn().mockImplementation(({ children, ...rest }) => (
    <a {...rest}>{children}</a>
  )),
}));

describe("Jess Component", () => {
    test("renders Jess component with the picture and content", () => {
      const { getByAltText, getByText, getByTestId } = render(
        <MemoryRouter>
          <Jess />
        </MemoryRouter>
      );
  
      const picture = getByAltText("picture of Jessica");
      expect(picture).toBeInTheDocument();
      expect(picture.src).toContain("/jesspng.png");
  
      
      const subtitle = getByText("Full Stack Web Developer");
      expect(subtitle).toBeInTheDocument();
  
    });
  });