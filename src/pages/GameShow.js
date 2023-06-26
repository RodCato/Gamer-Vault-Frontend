import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";

const GameShow = ({ games }) => {
  const { id } = useParams();
  let currentGame = games?.find((game) => game.id === +id);
  return (
    <main>
      {currentGame && (
        <>
        <div className="show-container">
          <Card className="show-card">
            <CardImg className="show-img" alt="" src={currentGame.image} />
            <CardBody className="show-body">
              <CardTitle style={{fontWeight:"800", fontSize:"3rem", marginBlock: "2rem"}}>{currentGame.title}</CardTitle>
              <CardSubtitle className="card-title" style={{fontWeight:"500", fontSize:"1.5rem", marginBlock: "2rem"}}>
                Game Genre: {currentGame.genre} <br /> Game Platform:{" "}
                {currentGame.platform}
              </CardSubtitle>
              <CardText className="card-title">{currentGame.notes}</CardText>
            </CardBody>
          </Card>
          </div>
        </>
      )}
    </main>
  );
};

export default GameShow;
