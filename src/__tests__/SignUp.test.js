import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";

describe("SignUp Component", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
  });

  it("displays signup.gif", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const signupGif = screen.getByAltText("bubble");
    expect(signupGif).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
  
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Choose a password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");
  
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it("contains a submit button", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });

  it("resets the form after submission", () => {
    const signupMock = jest.fn();
    render(
      <BrowserRouter>
        <SignUp signup={signupMock} />
      </BrowserRouter>
    );
  
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Choose a password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");
    const submitButton = screen.getByRole("button", { name: "Submit" });
  
    userEvent.type(emailInput, "test@example.com");
    userEvent.type(passwordInput, "password");
    userEvent.type(confirmPasswordInput, "password");
  
    userEvent.click(submitButton);
  
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
    expect(confirmPasswordInput).toHaveValue("");
  });
  });

