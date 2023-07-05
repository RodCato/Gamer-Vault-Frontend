import React from "react";
import { Link } from "react-router-dom";
import folderpixel from "../assets/folderpixel.png";
import lipixel from "../assets/lipixel.png";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";

const Jess = () => {
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
            alt="picture of Jessica"
            src={require("../assets/jesspng.png")}
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
            <CardTitle
              style={{
                fontWeight: "500",
                fontSize: "5rem",
                marginTop: "5rem",
                fontFamily: "fantasy",
                fontStyle: "italic",
                backgroundImage:
                  "linear-gradient(90deg, rgba(2,0,36,1) 5%, rgba(126,11,190,1) 40%, rgba(19,155,182,1) 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Jessica Ricks
            </CardTitle>
            <CardSubtitle
              className="card-title"
              style={{
                fontWeight: "500",
                fontSize: "3rem",
                marginBlock: "3rem",
                fontFamily: "fantasy",
                color: "black",
              }}
            >
              Full Stack Web Developer
            </CardSubtitle>
            <div
              className="sm-icons"
              style={{ marginBottom: "0", paddingBlock: "0" }}
            >
              <Link
                to="https://jricks86.github.io/portfolio/"
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
                to="https://www.linkedin.com/in/jricks86/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn"
                  src={lipixel}
                  style={{ height: "3rem", width: "3rem" }}
                />
              </Link>
            </div>
            <CardText
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              Hello, I'm Jess! I am currently a full stack web developer at
              LEARN Academy and also a Cyber Systems Operations Technician in
              the Air Force Reserve. Throughout my military experience, I have
              gained expertise in IT tier 1 support and developed leadership
              skills through various roles and responsibilities. As well as my
              experience in administrative support has sharpened my attention to
              detail, task management, and organizational skills. I have always
              had a passion for web development and am excited to utilize my new
              skills to create dynamic, user-friendly websites and applications.
              <br />
              <br />
              💫 In my free time, I enjoy just hanging out with friends and
              family or conquering a good escape room 🤔💡 <br /> That is, when
              I'm not following around my very busy and talented teenage
              daughter to various sporting events ⛹🏽‍♀️ 🏃🏽‍♀️ and band performances 🥁
            </CardText>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default Jess;
