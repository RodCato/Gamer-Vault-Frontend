import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import GameEdit from "./pages/GameEdit"
import GameIndex from "./pages/CatIndex"
import GameNew from "./pages/GameNew"
import GameShow from "./pages/GameShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"

import mockGames from "./mockGames"

const App = () => {
  const [games, setGames] = useState(mockGames)

  console.log(games)
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<GameIndex />} />
      <Route path="/catshow" element={<GameShow />} />
      <Route path="/catnew" element={<GameNew />} />
      <Route path="/catedit" element={<GameEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
)
}

export default App