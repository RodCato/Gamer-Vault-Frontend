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


const App = () => {
  const [games, setGames] = useState(mockGames);

  console.log(games);
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameindex" element={<GameIndex />} />
          <Route path="/gameshow" element={<GameShow />} />
          <Route path="/gamenew" element={<GameNew />} />
          <Route path="/gameedit" element={<GameEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
