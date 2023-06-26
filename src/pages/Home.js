import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="bubble">
          <Link to="/aboutus">
            <img src={require("../assets/pixel-speech-bubble.png")} alt="bubble" />
          </Link>
        </div>
        <div className="ness">
          <img src={require("../assets/ness.png")} alt="Ness" />
        </div>
        <div className="text-container">
          <h1>GAMER VAULT</h1>
        </div>
      </div>
      <div className="search">
        <Search />
      </div>
    </>
  );
};

export default Home;
