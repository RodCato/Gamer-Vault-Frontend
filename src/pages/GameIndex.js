import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const GameIndex = ({ games }) => {
  console.log(games);
  return (
    <main className="card-columns">
      {games?.map((game, index) => {
        return (
          <div key={index}>
            <br />
            <br />
            <Card className="eachCard">
              <img alt={`profile of the game ${game.title}`} src={game.image} />

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
  );
};

export default GameIndex;
