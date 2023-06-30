import React, { useState } from "react";
import { Card, CardBody, CardTitle, Button, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY; 
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&search=${searchQuery}`
      );
      const data = await response.json();
      const gamesArray = data.results;

      const filteredGamesArray = gamesArray.filter((game) => {
        return !gameAlreadyPresent(game);
      });

      setSearchResults(filteredGamesArray);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const gameAlreadyPresent = (game) => {
    return game.name.toLowerCase().includes("example");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchSearchResults();
  };

  const handleSaveGame = (game) => {
    navigate("/gamenew", {
      state: {
        prefill: {
          title: game.name,
          image: game.background_image,
          genre: game.genres[0]?.name,
          platform: game.platforms[0]?.platform.name,
        },
      },
    });
  };

  return (
    <>
      <form className="form" onSubmit={handleSearch}>
        <div className="input">
          <Label for="name"></Label>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter a game..."
            className="search-input"
          />
        </div>
        <Button type="submit">Search</Button>
      </form>
      <div className="search-results">
        {searchResults.map((game) => (
          <div key={game.id} className="search-result">
            <Card className="eachCard">
              <div className="game-image">
                <img src={game.background_image} alt={game.name} />
              </div>
              <CardBody className="card-body">
                <CardTitle style={{ fontWeight: "600" }}>{game.name}</CardTitle>
                <div className="button-container">
                  <Button
                    className="pixel-btn"
                    onClick={() => handleSaveGame(game)}
                  >
                    Save
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchComponent;
