import React from "react";
import { Link } from "react-router-dom";
import folderpixel from "../assets/folderpixel.png";
import lipixel from "../assets/lipixel.png";
import twitterpixel from "../assets/twitterpixel.png";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";

const CRod = () => {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="each-member-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "75%",
        }}
      >
        <Card
          className="each-member-card"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "90%",
          }}
        >
          <CardImg
            className="each-member-img"
            alt=""
            src={require("../assets/crodpng.png")}
            style={{
              borderRadius: "50px 0 0 50px",
              width: "50%",
              height: "auto",
            }}
          />
          <CardBody
            className="each-member-body"
            style={{ height: "100%", width: "50%" }}
          >
            <CardTitle className="each-member-title">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "400",
                  fontSize: "9vh",
                  filter: "drop-shadow(7px 7px 7px #0f0f0f)",
                  marginTop: "2rem",
                }}
              >
                <p align="center">
                  <a href="https://github.com/RodCato">
                    <img src="https://readme-typing-svg.herokuapp.com/?lines=🪄%20Hi,%20I'm%20Catalino%20(aka%20C%20Rod)%20;🪄%20Full%20Stack%20Web%20Developer;🪄%20Multi-Potentialite%20Extraordinaire;🪄%20Thanks%20for%20stopping%20by🙌🏽!&font=Josefin%20Sans&center=true&width=650&height=90&weight=700&color=0c7dff&vCenter=true&size=35%42" />
                  </a>
                </p>
              </div>
            </CardTitle>
            <CardSubtitle
              className="card-title"
              style={{
                fontWeight: "300",
                fontSize: "2.5rem",
                marginBlock: "2rem",
                padding: "3rem 0 3rem 0",
              }}
            >
              ⚡️ Full-Stack Web Developer and Engineer 🪄
              <br />
            </CardSubtitle>
            <div
              className="sm-icons"
              style={{ marginBottom: "0", paddingBlock: "0" }}
            >
              <Link to="https://crod.co" target="_blank">
                <img
                  alt="portfolio"
                  src={folderpixel}
                  style={{ height: "4rem", width: "4rem" }}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/catalinorodriguez"
                target="_blank"
              >
                <img
                  alt="LinkedIn"
                  src={lipixel}
                  style={{ height: "3rem", width: "3rem" }}
                />
              </Link>
              <Link to="https://twitter.com/croddev" target="_blank">
                <img
                  alt="Crod Twitter Profile"
                  src={twitterpixel}
                  style={{ height: "3rem", width: "3rem" }}
                />
              </Link>
            </div>
            <CardText className="each-member-bio">
              <p>
                👋🏽My name is Catalino Rodriguez (aka C Rod), and I am a US Army
                Combat Medic Veteran⛑️. Currently, I am expanding my skill set
                in Full Stack Web Development at{" "}
                <a
                  href="https://learnacademy.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(53, 12, 167)", textDecoration: "none" }}
                >
                  LEARN academy
                </a>{" "}
                I bring a unique blend of problem-solving skills, creativity,
                and real-world experience to the table. With a passion for
                helping others, I thrive on finding innovative solutions that
                address the needs of both clients and end-users. Through my
                military background and growth mindset, I have honed my ability
                to work well under pressure, adapt to rapidly changing
                environments, and collaborate effectively with diverse teams. I
                am excited to apply my technical expertise and dedication to
                creating impactful web solutions that make a difference.
              </p>
              <ul className="emojicr-bullets" style={{ color: "#1a1919" }}>
                In my free time, I enjoy:
                <li>solving CodeWar Kata's</li>
                <li>
                  <a
                    href="https://www.codewars.com/r/pi9_Uw"
                    target="_blank"
                    style={{
                      color: "rgb(53, 27, 125)",
                      textDecoration: "none",
                    }}
                  >
                    Practicing Kata's
                  </a>
                </li>
                <li>Battling Foe's on Mario Kart</li>
                <li>Spending time with family</li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default CRod;
