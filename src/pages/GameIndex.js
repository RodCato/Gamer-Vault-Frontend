import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";

const GameIndex = ({ games, deleteGame }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortedGames, setSortedGames] = useState([]);

  const handleDelete = (id) => {
    deleteGame(id);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search");
    setSearchTerm(search || "");
  }, [location.search]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = games.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  }, [games, searchTerm]);

  useEffect(() => {
    let sorted = filteredGames;

    if (sortBy === "title") {
      sorted = [...filteredGames].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortBy === "date") {
      sorted = [...filteredGames].sort((a, b) =>
        new Date(b.dateAdded) - new Date(a.dateAdded)
      );
    }

    setSortedGames(sorted);
  }, [filteredGames, sortBy]);

  const handleSearch = (searchValue) => {
    const queryParams = new URLSearchParams();
    queryParams.set("search", searchValue);
    const newSearch = queryParams.toString();

    window.history.pushState({}, "", `?${newSearch}`);

    setSearchTerm(searchValue);
    setSortBy("");
    setSortedGames([]);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <SearchComponent searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Button onClick={() => setSortBy("title")}>
          Sort by Title
        </Button>
        <Button onClick={() => setSortBy("date")}>
          Sort by Date Added
        </Button>
      </div>
      <main className="card-columns">
        {sortedGames.map((game, index) => {
          return (
            <div key={index}>
              <br />
              <br />
              <Card className="eachCard">
                <img alt={`profile of the game ${game.title}`} src={game.image} />
                <CardBody className="card-body">
                  <CardTitle style={{ fontWeight: "600" }}>{game.title}</CardTitle>
                  <div className="button-container">
                    <Button className="pixel-btn">
                      <NavLink to={`/game/${game.id}`} className="nav-link">
                        See Game Details
                      </NavLink>
                    </Button>
                   
                  </div>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default GameIndex;
