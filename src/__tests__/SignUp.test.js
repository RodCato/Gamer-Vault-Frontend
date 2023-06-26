import React from "react";
import { render } from "@testing-library/react";
import SignUp from "../pages/SignUp";

describe("SignUp", () => {
  it("should update state on email input change", () => {
    const { getByPlaceholderText } = render(<SignUp />);
    const emailInput = getByPlaceholderText("Enter your email");

    const testEmail = "test@example.com";
    emailInput.value = testEmail;
    emailInput.dispatchEvent(new Event("input", { bubbles: true }));

    expect(emailInput.value).toBe(testEmail);
  });
});
