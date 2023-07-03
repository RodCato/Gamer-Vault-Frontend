import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    if (isMenuOpen) {
      document.addEventListener("click", closeMenu);
    }
  
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);

  const renderAuthButtons = () => {
    if (currentUser) {
      return (
        <>
          <Link to="/mygames">
            <button className="pixel-btn" role="button">
              My Games
            </button>
          </Link>
          <Link to="/gamenew">
            <button className="pixel-btn" role="button">
              Add Game
            </button>
          </Link>
          <Link to="/">
            <button className="pixel-btn" role="button" onClick={handleClick}>
              Log Off
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
        <button
          className="burger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">
            <button className="pixel-btn" role="button">
              Home
            </button>
          </Link>
          <Link to="/games">
            <button className="pixel-btn" role="button">
              Browse
            </button>
          </Link>
          {renderAuthButtons()}
        </div>
      </nav>
    </>
  );
};

export default Header;