import React from "react";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div class="text-container">
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
