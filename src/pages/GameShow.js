import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg} from "reactstrap"

const GameShow = ({ games }) => {
    const { id } = useParams()
    let currentGame = games?.find((game) => game.id === +id)
    console.log(currentGame);
    return (
      <main>
        {currentGame && (
          <>
            <Card>
              <CardImg
                alt=""
                src={currentGame.image}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">{currentGame.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Game Genre: {currentGame.genre} <br /> Game Platform: {currentGame.platform}
                </CardSubtitle>
                <CardText>
                  Description
                </CardText>
              </CardBody>
            </Card>
          </>
        )}
      </main>
    );
}

export default GameShow