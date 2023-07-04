import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import Header from "../components/Header";

describe("Header", () => {
  test("renders navigation buttons correctly when user is logged in", () => {
    const currentUser = { name: "John" };
    const logout = jest.fn();
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <Header currentUser={currentUser} logout={logout} />
      </BrowserRouter>
    );

    const myGamesButton = getByRole("button", { name: "My Games" });
    expect(myGamesButton).toBeInTheDocument();

    const addGameButton = getByRole("button", { name: "Add Game" });
    expect(addGameButton).toBeInTheDocument();

    const logOffButton = getByRole("button", { name: "Log Off" });
    expect(logOffButton).toBeInTheDocument();

    fireEvent.click(logOffButton);
    expect(logout).toHaveBeenCalled();
  });

  test("renders navigation buttons correctly when user is not logged in", () => {
    const currentUser = null;
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <Header currentUser={currentUser} />
      </BrowserRouter>
    );

    
    const signUpButton = getByRole("button", { name: "Sign Up" });
    expect(signUpButton).toBeInTheDocument();

    
    const loginButton = getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
});
