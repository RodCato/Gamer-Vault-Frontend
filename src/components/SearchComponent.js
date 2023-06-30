import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const SearchComponent = ({ handleSearch }) => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    try {
      const apiKey = '5d37a51f335c471490ba1b0276d510f8'; // Replace with your actual API key
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&search=${searchQuery}`
      );
      const data = await response.json();
      const gamesArray = data.results;
      setSearchResults(gamesArray);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchSearchResults();
    }
  };

  const handleSaveGame = (game) => {
    // Replace with your save game logic
    console.log('Saving game:', game);
    navigate('/gamenew', {
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
      <div className="form">
        <div className="input">
          <Label for="name"></Label>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown} // Handle keydown event
            placeholder="Enter a game..."
            className="search-input"
          />
        </div>
        <Button onClick={fetchSearchResults}>Search</Button>
      </div>
      <div className="search-results">
        {searchResults.map((game) => (
          <div key={game.id} className="search-result">
            <Card className="eachCard">
              <div className="game-image">
                <img src={game.background_image} alt={game.name} />
              </div>
              <CardBody className="card-body">
                <CardTitle style={{ fontWeight: '600' }}>{game.name}</CardTitle>
                <div className="button-container">
                  <Button className="pixel-btn" onClick={() => handleSaveGame(game)}>
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
