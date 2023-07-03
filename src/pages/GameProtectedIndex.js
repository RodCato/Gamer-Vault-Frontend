import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

const GameProtectedIndex = ({ currentUser, games }) => {
  const { id } = useParams();
  const currentGame = games?.find((game) => game.id === +id);
  const userGames = games?.filter((game) => game.user_id === currentUser?.id);
  const isCurrentUserGame = currentGame && currentUser && currentGame.user_id === currentUser.id;

  return (
    <>
      <div className="my-games-title">
        <img src={require("../assets/mygames.png")} alt="bubble" />
      </div>
      {currentUser && (
        <main className="card-columns" style={{marginTop:"0"}}>
          {userGames?.map((game, index) => (
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
          ))}
        </main>
      )}
    </>
  );
};

export default GameProtectedIndex;
