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

const CRod = () => {
  return (
    <main>
      <div className="each-member-container">
        <Card className="each-member-card">
          <CardImg
            className="each-member-img"
            alt=""
            src={require("../assets/crodpng.png")}
          />
          <CardBody className="each-member-body" style={{height:"20rem"}}>
            <CardTitle
              style={{
                fontWeight: "800",
                fontSize: "3rem",
                marginBlock: "2rem",
              }}
            >
              {/* A title */}
            </CardTitle>
            <CardSubtitle
              className="card-title"
              style={{
                fontWeight: "500",
                fontSize: "1.5rem",
                marginBlock: "2rem",
              }}
            >
              :wave::skin-tone-4: My name is Catalino Rodriguez (aka C Rod), and I am a US Army Combat Veteran:military_helmet:. Currently, I am expanding my skill set in Full Stack Web Development at LEARN Academy. I bring a unique blend of problem-solving skills, creativity, and real-world experience to the table. With a passion for helping others, I thrive on finding innovative solutions that address the needs of both clients and end-users. Through my military background and growth mindset I have honed my ability to work well under pressure, adapt to rapidly changing environments, and collaborate effectively with diverse teams. I am excited to apply my technical expertise and dedication to creating impactful web solutions that make a difference.

                https://github.com/RodCato
            </CardSubtitle>
            <CardText className="each-member-title"></CardText>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default CRod;
