import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("renders the home page", () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders the game index page", () => {
    render(<BrowserRouter><App /></BrowserRouter>
      );
    userEvent.click(screen.getByRole("link", { name: "Browse" }));
    expect(screen.getByText("Browse")).toBeInTheDocument();
  });

  

  
});
