import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CRod from "../pages/CRod";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn().mockImplementation(({ children, ...rest }) => (
    <a {...rest}>{children}</a>
  )),
}));

describe("CRod Component", () => {
    test("renders CRod component with the picture and content", () => {
      const { getByAltText, getByText} = render(
        <MemoryRouter>
          <CRod />
        </MemoryRouter>
      );
  
      const picture = getByAltText("");
      expect(picture).toBeInTheDocument();
      expect(picture.src).toContain("/crodpng.png");
  
      
      const subtitle = getByText("⚡️ Software Developer Extraordinaire");
      expect(subtitle).toBeInTheDocument();
  
    });
  });