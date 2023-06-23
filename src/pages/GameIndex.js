import React from "react";
import { Card, CardBody, CardTitle, Button, NavLink } from "reactstrap";

const GameIndex = ({ games }) => {
  console.log(games);
  return (
    <main className="game-index-cards">
      {games?.map((game, index) => {
        return (
          <Card
            style={{
              width: "14rem",
            }}
            key={index}
          >
            <img
              alt={`profile of a game named ${game.title}`}
              src={game.image}
            />
            <CardBody>
              <CardTitle tag="h5">{game.title}</CardTitle>
              <Button>
                <NavLink href={`/gameshow/${game.id}`}>More Details</NavLink>
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};

export default GameIndex;
