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
import "./App.css";
import mockGames from "./mockGames";
import mockUsers from "./mockUsers";
import Search from "./components/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import "./App.css";

const App = () => {
  const [games, setGames] = useState(mockGames);

  console.log(games);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameindex" element={<GameIndex games={ games } />} />
        <Route path="/gameshow/:id" element={<GameShow games={games} />} />
        <Route path="/gamenew" element={<GameNew />} />
        <Route path="/gameedit" element={<GameEdit />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App
