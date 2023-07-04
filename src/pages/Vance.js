import React from "react";
import { Link } from "react-router-dom";
import folderpixel from "../assets/folderpixel.png";
import lipixel from "../assets/lipixel.png";
import igpixel from "../assets/igpixel.png";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";

const Vance = () => {
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
            src={require("../assets/vancepng.png")}
            style={{
              borderRadius: "50px 0 0 50px",
              width: "50%",
              height: "auto",
            }}
          />
          <CardBody className="each-member-body" style={{ height: "100%", width: "50%", borderTop: "none"
 }}>
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
                <span style={{ color: "#1A1919", fontStyle: "italic" }}>V</span>
                <span style={{ color: "#1A1919" }}>a</span>
                <span style={{ color: "#1A1919" }}>n</span>
                <span style={{ color: "#85A8BA" }}>c</span>
                <span style={{ color: "#1A1919" }}>e</span>
                <span style={{ color: "#DBF0CC" }}> </span>
                &nbsp;
                <span style={{ color: "#E35E54", fontStyle: "italic" }}>A</span>
                <span style={{ color: "#1A1919", fontStyle: "italic" }}>p</span>
                <span style={{ color: "#1A1919" }}>o</span>
                <span style={{ color: "#1A1919" }}>s</span>
                <span style={{ color: "#1A1919", fontStyle: "italic" }}>t</span>
                <span style={{ color: "#936ED4" }}>o</span>
                <span style={{ color: "#1A1919", fontStyle: "italic" }}>l</span>
              </div>
            </CardTitle>
            <CardSubtitle
              className="card-title"
              style={{
                fontWeight: "300",
                fontSize: "2.5rem",
                margin: "2.5rem 0 0 0",
                padding: "3rem 0 3rem 0",
              }}
            >
              Full-Stack developer
              <br />
              & UX/UI Designer
            </CardSubtitle>
            <div
              className="sm-icons"
              style={{ padding: "0" }}
            >
              <Link
                to="https://lotus.haleakaladesign.com/lotus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="portfolio"
                  src={folderpixel}
                  style={{ height: "4rem", width: "4rem" }}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/vancea/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn"
                  src={lipixel}
                  style={{ height: "3rem", width: "3rem" }}
                />
              </Link>
              <Link
                to="https://www.instagram.com/vanceplants/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Instagram Profile"
                  src={igpixel}
                  style={{ height: "3rem", width: "3rem" }}
                />
              </Link>
            </div>
            <CardText className="each-member-bio">
              As a versatile professional, I've had the privilege of exploring
              various career paths such as military, sales, audio engineering,
              and bartending. However, my attraction to technology and design
              led me to enroll in a 4-month full-stack boot camp at{" "}
              <a
                href="https://learnacademy.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgb(53, 12, 167)",
                  textDecoration: "none",
                }}
              >
                LEARN Academy
              </a>{" "}
              to hone my skills and pursue my dreams. Passionate about
              practicing altruism, I strive to be the best version of myself
              to contribute positively to everyone around me. During my free
              time, I enjoy the simple things in life, which include wearing
              comfortable, baggy clothes, being silly and sharing laughs with
              loved ones until we can't breathe. 🤣
            </CardText>
            <div style={{textAlign:"center"}}> In my free time, I enjoy:</div>

            <div className="emoji-bullets" style={{ color: "#1a1919" }}>
              <ul>
                <li>Pretending to meditate</li>
                <li>
                  <a
                    href="https://www.instagram.com/p/Cs37P7KA8ig/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgb(53, 27, 125)",
                      textDecoration: "none",
                    }}
                  >
                    Roller skating
                  </a>
                </li>
                <li>Indulging in anime</li>
                <li>Eating sushi (with saké!)</li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default Vance;