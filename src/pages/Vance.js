import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";

const Vance = () => {
  return (
    <main>
      <div className="each-member-container">
        <Card className="each-member-card">
          <CardImg
            className="each-member-img"
            alt=""
            src={require("../assets/vancepng.png")}
          />
          <CardBody className="each-member-body">
            <CardTitle
              style={{
                fontWeight: "800",
                fontSize: "3rem",
                marginBlock: "2rem",
              }}
            >
              A title
            </CardTitle>
            <CardSubtitle
              className="card-title"
              style={{
                fontWeight: "500",
                fontSize: "1.5rem",
                marginBlock: "2rem",
              }}
            >
              about me: <br /> whatever:{" "}
            </CardSubtitle>
            <CardText className="each-member-title"></CardText>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default Vance;
