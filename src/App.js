import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GameEdit from "./pages/GameEdit";
import GameIndex from "./pages/GameIndex";
import GameNew from "./pages/GameNew";
import GameShow from "./pages/GameShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import mockGames from "./mockGames";
import mockUsers from "./mockUsers";
import Search from "./components/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import "./App.css";

const App = () => {
  const [games, setGames] = useState(mockGames);
  const [currentUser, setCurrentUser] = useState(mockUsers);

  const createGame = (newGame) => {
    const updatedGames = [...games, newGame];
    setGames(updatedGames);
  };

  const updateGame = (updatedGame) => {
    const updatedGames = games.map((game) =>
      game.id === updatedGame.id ? updatedGame : game
    );
    setGames(updatedGames);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gameindex"
          element={<GameIndex games={games} />}
        />
        <Route
          path="/gameshow/:id"
          element={<GameShow games={games} />}
        />
        <Route
          path="/gamenew"
          element={<GameNew createGame={createGame} />}
        />
        <Route
          path="/gameedit/:id"
          element={<GameEdit games={games} updateGame={updateGame} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
