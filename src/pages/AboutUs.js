import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import lipixel from "../assets/lipixel.png";
import igpixel from "../assets/igpixel.png";
import folderpixel from "../assets/folderpixel.png";
import twitterpixel from "../assets/twitterpixel.png";
import { Link } from "react-router-dom";


const AboutUs = () => {
  const teamMembers = [
    {
      name: "Jessica Ricks",
      title: "Product and Project Manager",
      image: require("../assets/jesspng.png"),
      pokemon: require("../assets/bulbaprof.png"),
      bio: (
        <>
          Master product<br/> &amp; project juggler, <br/>Mountain
          conqueror, <br/>Pasta admirer.
        </>
      ),
      portfolio: "https://jricks86.github.io/portfolio/",
      li: "https://www.linkedin.com/in/jricks86/",
      ig: null,
      twitter: null,
      page: "/Jess",
    },
    {
      name: "Catalino Rodriguez",
      title: "Tech Lead",
      image: require("../assets/crodpng.png"),
      pokemon: require("../assets/squirtleprof.png"),
      bio: (
        <>
          Unrivaled <br/>Joy-con/keyboard maestro, <br/>Master of
          codewar katas, <br/>Mario Kart expert.
        </>
      ),
      portfolio: "https://crod.co/",
      li: "https://www.linkedin.com/in/catalinorodriguez/",
      ig: null,
      twitter: "https://twitter.com/CRodDev",
      page: "/CRod",
    },
    {
      name: "Vance Apostol",
      title: "Design Lead",
      image: require("../assets/vancepng.png"),
      pokemon: require("../assets/charprof.png"),
      bio: (
        <>
          Pixel wizard, <br/>Pancake thief, <br/>
          <a
            href="https://www.instagram.com/reel/CtZKmYKAKdv/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#4c4e64" }}
          >
            LVL 99 Roller skater
          </a>
        </>
      ),
      portfolio: "https://lotus.haleakaladesign.com/lotus/",
      li: "https://www.linkedin.com/in/vancea/",
      ig: "https://www.instagram.com/vanceplants/",
      twitter: null,
      page: "/Vance",
    },
  ];

  return (
    <main className="about-us">
      {teamMembers.map((member, index) => (
        <div key={index}>
          <br />
          <br />
          <Card
            style={{ width: "21rem", height: "53rem" }}
            className="eachCard"
          >
            <img
              alt={`profile of the member ${member.name}`}
              src={member.image}
              style={{ width: "21rem", height: "28rem" }}
            />

            <CardBody className="about-body">
              <CardTitle className="about-name">{member.name}</CardTitle>

              <CardTitle style={{ fontSize: "1.5rem", paddingTop: ".5rem" }}>
                {member.title}
              </CardTitle>
              <CardTitle>
                <Link to={member.page}>
                  <img
                    alt={`starter pokemon of the member ${member.name}`}
                    src={member.pokemon} style={{cursor:`url(${require("../assets/pokeball.png")}), auto`}}
                  />
                </Link>
              </CardTitle>

              <CardSubtitle className="about-bio">
                <br /> &ldquo;{member.bio}&ldquo;
              </CardSubtitle>
              <div className="sm-icons">
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={`portfolio of ${member.name}`}
                    src={folderpixel}
                    style={{ height: "50px", width: "50px" }}
                  />
                </a>

                <a href={member.li} target="_blank" rel="noopener noreferrer">
                  <img
                    alt={`li to ${member.name}`}
                    src={lipixel}
                    style={{ height: "50px", width: "50px" }}
                  />
                </a>

                {member.ig !== null && member.ig !== undefined && (
                  <a href={member.ig} target="_blank" rel="noopener noreferrer">
                    <img
                      alt={`ig to ${member.name}`}
                      src={igpixel}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </a>
                )}

                {member.twitter !== null && member.twitter !== undefined && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt={`twitter to ${member.name}`}
                      src={twitterpixel}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </a>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </main>
  );
};

export default AboutUs;
