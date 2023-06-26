import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "../pages/SignIn";

describe("SignIn", () => {
  it("should render the login form", () => {
    render(<SignIn />);

    const emailInput = screen.getByPlaceholderText(
      "supermariobros@pipeville.com"
    );
    const passwordInput = screen.getByPlaceholderText("PeachyDaisy123");
    const submitButton = screen.getByText("Submit");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
