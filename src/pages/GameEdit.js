import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useNavigate, useParams, Link } from "react-router-dom";

const GameEdit = ({ games, updateGame, currentUser, deleteGame, gameId }) => {
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
      setGameData({ ...game, user_id: currentUser?.id });
    }
  }, [games, gameId, currentUser]);

  const handleChange = (e) => {
    setGameData({ ...gameData, [e.target.name]: e.target.value });
  };

const handleSubmit = () => {
  updateGame({ ...gameData, id });
  navigate("/games");
};


  const handleDelete = () => {
    deleteGame(gameData.id);
    navigate("/mygames");
  };

  return (
    <>
      <div className="my-games-title">
        <img src={require("../assets/editgame.png")} alt="bubble" />
      </div>
      {gameData.image && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={gameData.image}
            alt={gameData.image}
            height="250px"
            width="250px"
          />
        </div>
      )}
      <Form className="edit-game-form">
        <div className="form-group">
          <FormGroup>
            <Input
              id="game-title"
              type="text"
              name="title"
              placeholder="Game Title"
              onChange={handleChange}
              value={gameData.title}
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
              value={gameData.image}
              required
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
              value={gameData.platform}
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
              value={gameData.notes}
              style={{ height: "5rem", width: "18rem", fontSize: "18px" }}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="user_id"
              name="user_id"
              onChange={handleChange}
              value={gameData.user_id || currentUser?.id}
              type="hidden"
            />
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
            <Link to="/mygames">
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
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default GameEdit;