import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";

const GameNew = ({ createGame, currentUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [newGame, setNewGame] = useState({
    title: "",
    image: "",
    genre: "",
    platform: "",
    notes: "",
    user_id: currentUser?.id || "",
  });

 
  useEffect(() => {
    if (location.state && location.state.prefill) {
      const { title, image, genre, platform } = location.state.prefill;
      setNewGame((prevGame) => ({
        ...prevGame,
        title: title || "",
        image: image || "",
        genre: genre || "",
        platform: platform || "",
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setNewGame((prevGame) => ({
      ...prevGame,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameData = { ...newGame, user_id: currentUser?.id || "" };
    createGame(gameData);
    navigate("/mygames");
  };

  return (
    <>
      <div className="add-a-game-title">
        <img src={require("../assets/addagame.png")} alt="bubble" />
      </div>
      {newGame.image && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={newGame.image}
            alt={newGame.image}
            height="250px"
            width="250px"
          />
        </div>
      )}

      <form className="new-game-form" onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "50rem" }}>
          <FormGroup>
            <Input
              id="game-title"
              type="text"
              name="title"
              placeholder="Game Title"
              onChange={handleChange}
              value={newGame.title}
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-image"
              type="text"
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
              value={newGame.image}
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-genre"
              type="text"
              name="genre"
              placeholder="genre, Action, RPG, etc."
              onChange={handleChange}
              value={newGame.genre}
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-platform"
              type="text"
              name="platform"
              placeholder="Platform, Playstation, Xbox, etc."
              onChange={handleChange}
              value={newGame.platform}
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-notes"
              type="textarea"
              name="notes"
              placeholder="Notes (required)"
              onChange={handleChange}
              value={newGame.notes}
              style={{ height: "5rem", width: "18rem", fontSize: "18px" }}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="user_id"
              name="user_id"
              onChange={handleChange}
              value={newGame.user_id || currentUser?.id}
              type="hidden"
            />
          </FormGroup>

          <Button
            type="submit"
            className="pixel-btn"
            style={{
              height: "50px",
              width: "100px",
              marginTop: "20px",
              fontSize: ".8rem",
              textAlign: "center",
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Add Game
          </Button>
        </div>
      </form>
    </>
  );
};

export default GameNew;
