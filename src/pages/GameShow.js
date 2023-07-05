import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";
import GameEdit from "./GameEdit";

const GameShow = ({ games, currentUser, deleteGame, updateGame }) => {
  const { id } = useParams();
  const [currentGame, setCurrentGame] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setCurrentGame(games?.find((game) => game.id === +id));
  }, [games, id]);

  const handleDelete = () => {
    deleteGame(currentGame.id);
  };

  const handleDeleteAndRedirect = () => {
    handleDelete();
    window.location.href = "/mygames"; 
  };

  const renderEditDeleteButtons = () => {
    if (currentUser && currentGame && currentUser.id === currentGame.user_id) {
      return (
        <div className="show-buttons">
          <Button className="pixel-btn" onClick={() => setEditMode(true)}>
            Edit Game
          </Button>
          <Button className="pixel-btn" onClick={handleDeleteAndRedirect}>
            Delete Game
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <main>
      {editMode ? (
        <GameEdit
          games={games}
          updateGame={updateGame}
          currentUser={currentUser}
          deleteGame={deleteGame}
        />
      ) : (
        currentGame && (
          <div className="show-container">
            <Card className="show-card">
              <CardImg className="show-img" alt="" src={currentGame.image} />
              <CardBody className="show-body">
                <CardTitle
                  style={{
                    fontWeight: "800",
                    fontSize: "3rem",
                    marginBlock: "2rem",
                  }}
                >
                  {currentGame.title}
                </CardTitle>
                <CardSubtitle
                  className="card-title"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.5rem",
                    marginBlock: "2rem",
                  }}
                >
                  Game Genre: {currentGame.genre} <br /> Game Platform:{" "}
                  {currentGame.platform}
                </CardSubtitle>
                <CardText className="card-title">{currentGame.notes}</CardText>
                {renderEditDeleteButtons()}
              </CardBody>
            </Card>
          </div>
        )
      )}
    </main>
  );
};

export default GameShow;
