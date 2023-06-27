import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const GameEdit = ({ games, updateGame, currentUser, deleteGame }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [gameData, setGameData] = useState({
    title: "",
    image: "",
    genre: "",
    platform: "",
    notes: "",
    user_id: currentUser?.id || "",
  });

  useEffect(() => {
    const game = games.find((game) => game.id === parseInt(id));
    if (game && game.user_id === currentUser?.id) {
      setGameData(game);
    }
  }, [games, id, currentUser]);

  const handleChange = (e) => {
    setGameData({ ...gameData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateGame(gameData);
    navigate("/gameindex");
  };

  const handleDelete = () => {
    deleteGame(gameData.id);
    navigate("/gameindex");
  };

  return (
    <>
      <div className="edit-game-title">
        <h1>Edit Game</h1>
      </div>
      <Form className="edit-game-form" style={{ height: "100vh" }}>
        <div className="form-group">
          <FormGroup>
            <Input
              id="game-title"
              type="text"
              name="title"
              placeholder="Game Title"
              onChange={handleChange}
              value={gameData.title}
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-image"
              type="text"
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
              value={gameData.image}
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-genre"
              type="text"
              name="genre"
              placeholder="Genre, Action, RPG, etc."
              onChange={handleChange}
              value={gameData.genre}
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-platform"
              type="text"
              name="platform"
              placeholder="Platform, Playstation, Xbox, etc."
              onChange={handleChange}
              value={gameData.platform}
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="game-notes"
              type="textarea"
              name="notes"
              placeholder="Notes"
              onChange={handleChange}
              value={gameData.notes}
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
              value={gameData.user_id || currentUser?.id}
              type="hidden"
            />
          </FormGroup>

          <Button
            onClick={handleSubmit}
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
            Update Game
          </Button>
          <Button
            onClick={handleDelete}
            type="button"
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
            Delete Game
          </Button>
        </div>
      </Form>
    </>
  );
};

export default GameEdit;
