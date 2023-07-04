import React from "react";
import { render } from "@testing-library/react";
import WhacADev from "../components/WhacADev"; 
import { BrowserRouter } from "react-router-dom";

jest.mock("../assets/bomb.png", () => "path/to/bomb.png");

describe("WhacADev", () => {
    test("renders without crashing", () => {
      render(<WhacADev />);
    });
  
    test("renders the board", () => {
      const { getByTestId } = render(<WhacADev />);
      const boardElement = getByTestId("board");
      expect(boardElement).toBeInTheDocument();
    });
  
   
  });