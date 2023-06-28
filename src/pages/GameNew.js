import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const GameNew = ({ createGame, currentUser }) => {
  const navigate = useNavigate();

  const [newGame, setNewGame] = useState({
    title: "",
    image: "",
    genre: "",
    platform: "",
    notes: "",
    user_id: currentUser?.id || "",
  });

  const handleChange = (e) => {
    setNewGame((prevGame) => ({
      ...prevGame,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const gameData = { ...newGame, user_id: currentUser?.id || "" };
    createGame(gameData);
    navigate("/gameindex");
  };

  return (
    <>
      <div className="add-a-game-title">
        <img src={require("../assets/addagame.png")} alt="bubble" />
      </div>
      <form className="new-game-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FormGroup>
            <Input
              id="game-title"
              type="text"
              name="title"
              placeholder="Game Title"
              onChange={handleChange}
              value={newGame.title}
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
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-notes"
              type="textarea"
              name="notes"
              placeholder="Notes"
              onChange={handleChange}
              value={newGame.notes}
              style={{ height: "5rem", width: "18rem", fontSize: "18px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="user_id" hidden>
              User Id
            </Label>
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
