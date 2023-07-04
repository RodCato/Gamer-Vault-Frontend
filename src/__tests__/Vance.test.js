import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Vance from "../pages/Vance";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest
    .fn()
    .mockImplementation(({ children, ...rest }) => <a {...rest}>{children}</a>),
}));

describe("Vance Component", () => {
  test("renders Vance component with the picture and content", () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Vance />
      </MemoryRouter>
    );

    const picture = getByAltText("");
    expect(picture).toBeInTheDocument();
    expect(picture.src).toContain("/vancepng.png");

    const textRegex = /As a versatile professional/;
    const text = getByText(textRegex);
    expect(text).toBeInTheDocument();
  });
});
