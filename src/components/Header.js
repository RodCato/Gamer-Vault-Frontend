import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  const current_user = true;
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/");
  };
  const renderAuthButtons = () => {
    if (currentUser) {
      return (
        <>
          <Link to="/">
            <button className="pixel-btn" role="button" onClick={handleClick}>
              Log Off
            </button>
          </Link>
          <Link to="/gamenew">
            <button className="pixel-btn" role="button">
              Add Game
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup">
            <button className="pixel-btn" role="button">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="pixel-btn" role="button">
              Login
            </button>
          </Link>
        </>
      );
    }
  };

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
        {renderAuthButtons()}
      </nav>
    </>
  );
};

export default Header;
