import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import Search from "../components/Search";

const GameIndex = ({ games, deleteGame }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
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

  const handleSearch = (searchValue) => {
    const queryParams = new URLSearchParams();
    queryParams.set("search", searchValue);
    const newSearch = queryParams.toString();

    // Update the URL with the new search parameter
    window.history.pushState({}, "", `?${newSearch}`);

    setSearchTerm(searchValue);
  };

  return (
    <div>
      <div className="browse-search-bar">
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>

      <main className="card-columns">
        {filteredGames.map((game, index) => {
          return (
            <div key={index}>
              <br />
              <br />
              <Card className="eachCard">
                <img
                  alt={`profile of the game ${game.title}`}
                  src={game.image}
                />

                <CardBody className="card-body">
                  <CardTitle style={{ fontWeight: "600" }}>
                    {game.title}
                  </CardTitle>

                  <div className="button-container">
                    <Button className="pixel-btn">
                      <NavLink to={`/gameshow/${game.id}`} className="nav-link">
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
