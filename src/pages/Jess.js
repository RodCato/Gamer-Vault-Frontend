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

const Jess = () => {
  return (
    <main>
      <div className="each-member-container">
        <Card className="each-member-card" style={{width:"30rem"}}>
          <CardImg
            className="each-member-img"
            alt=""
            src={require("../assets/jesspng.png")} style={{width:"30rem"}}
          />
          <CardBody className="each-member-body" style={{height:"25rem"}}>
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

export default Jess;
