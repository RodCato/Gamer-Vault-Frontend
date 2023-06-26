import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav id="nav">
        <Link to="/">
          <button className="pixel-btn" role="button">
            Home
          </button>
        </Link>
        <Link to="/gameindex">
          <button className="pixel-btn" role="button">
            Browse
          </button>
        </Link>
        <Link to="/signup">
          <button className="pixel-btn" role="button">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="pixel-btn" role="button">
            Login
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Header;
