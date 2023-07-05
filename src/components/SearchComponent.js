import React, { useState, useRef } from "react";
import { Card, CardBody, CardTitle, Button, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import microphone from "../assets/microphone.png";

const SearchComponent = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  const fetchSearchResults = async (query) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&search=${query}`
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
    fetchSearchResults(searchQuery);
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

  const handleVoiceSearch = async () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      searchInputRef.current.value = speechResult;
      setSearchQuery(speechResult);
      fetchSearchResults(speechResult);
    };

    recognition.onend = () => {
      recognition.stop();
    };
  };

  return (
    <>
      <form className="form" onSubmit={handleSearch}>
        <div className="input">
          <Label for="name"></Label>
          <Input
            id="search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter a game..."
            className="search-input"
            ref={searchInputRef}
            required
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button type="submit">Search</Button>
          <img
            src={microphone}
            alt="Voice Search"
            onClick={handleVoiceSearch}
            style={{ width: "10%", height: "10%", cursor: "pointer" }}
          />
        </div>
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
