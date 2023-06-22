import React, { useState } from "react";
import SignIn from "../pages/SignIn";

const Header = () => {
  return (
    <>
      <nav id="nav">
        <a href="/">
          <button className="button-perspective" role="button">
            Home
          </button>
        </a>
        <a href="/GameIndex">
          <button className="button-perspective" role="button">
            Browse
          </button>
        </a>
        <a href="/SignUp">
          <button className="button-perspective" role="button">
            Sign Up
          </button>
        </a>
        <a href="/SignIn">
          <button className="button-perspective" role="button">
            Login
          </button>
        </a>
      </nav>
    </>
  );
};

export default Header;
