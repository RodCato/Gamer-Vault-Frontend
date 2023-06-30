import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import lipixel from "../assets/lipixel.png";
import igpixel from "../assets/igpixel.png";
import folderpixel from "../assets/folderpixel.png";
import twitterpixel from "../assets/twitterpixel.png"

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Jessica Ricks",
      title: "Product and Project Manager",
      image: require("../assets/moogle.png"),
      pokemon: require("../assets/bulbaprof.png"),
      bio: "Former mountain climber turned product and project juggler extraordinaire! Armed with a keyboard and a wicked sense of humor, this web development prodigy is here to make her online dreams a reality.",
      portfolio: " https://jricks86.github.io/portfolio/",
      li: "https://www.linkedin.com/in/jricks86/",
      ig: null,
      twitter: null,
    },
    {
      name: "Catalino Rodriguez",
      title: "Tech Lead",
      image: require("../assets/moogle.png"),
      pokemon: require("../assets/squirtleprof.png"),
      bio: "2 kids. other things and this that those we him hey they she her those pose crows pancakaes love asdasjdlksdhjflksdn ns nsgsklfdfng ndf gldfgklndfglkdf",
      portfolio: "https://crod.co/",
      li: "https://www.linkedin.com/in/catalinorodriguez/",
      ig: null,
      twitter: "https://twitter.com/CRodDev",
    },
    {
      name: "Vance Apostol",
      title: "Design Lead",
      image: require("../assets/moogle.png"),
      pokemon: require("../assets/charprof.png"),
      bio: "Aside from pixel wizardry, Vance is a pancake thief, level 99 roller skater and a master of pretending to meditate. His creative prowess extends beyond design, and into a world of whimsical hobbies.",
      portfolio: "https://lotus.haleakaladesign.com/lotus/",
      li: "https://www.linkedin.com/in/vancea/",
      ig: "https://www.instagram.com/vanceplants/",
      twitter: null,
    },
  ];

  return (
    <main className="about-us">
      {teamMembers.map((member, index) => (
        <div key={index}>
          <br />
          <br />
          <Card style={{ width: "21rem", height: "45rem" }} className="eachCard">
            <img
              alt={`profile of the member ${member.name}`}
              src={member.image}
              style={{ width: "14rem", height: "20rem", objectFit: "cover" }}
            />

            <CardBody className="about-body">
              <CardTitle className="about-name">{member.name}</CardTitle>

              <CardTitle style={{ fontSize: "1.5rem" }}>
                {member.title}
              </CardTitle>
              <CardTitle>
                <img
                  alt={`starter pokemon of the member ${member.name}`}
                  src={member.pokemon}
                />
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
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
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
