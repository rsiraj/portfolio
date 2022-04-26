import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import sassLogo from "../../assets/sass.svg";
import jsLogo from "../../assets/javascript.svg";
import reactLogo from "../../assets/react.svg";
import bsLogo from "../../assets/bootstrap.svg";
import nodeLogo from "../../assets/nodejs.svg";
import mysqlLogo from "../../assets/mysql.svg";
import mdbLogo from "../../assets/mongodb.svg";
import awsLogo from "../../assets/aws.svg";

const front = [
  {
    skill: "HTML 5",
    image: htmlLogo,
  },
  {
    skill: "CSS",
    image: cssLogo,
  },
  {
    skill: "SASS",
    image: sassLogo,
  },
  {
    skill: "JavaScript",
    image: jsLogo,
  },
  {
    skill: "ReactJS",
    image: reactLogo,
  },
  {
    skill: "Bootstrap",
    image: bsLogo,
  },
];
const back = [
  {
    skill: "NodeJS",
    image: nodeLogo,
  },
  {
    skill: "MySQL",
    image: mysqlLogo,
  },
  // {
  //   skill: "MongoDB",
  //   image: mdbLogo,
  // },
  {
    skill: "Amazon Web Services",
    image: awsLogo,
  },
];
const Skills = () => {
  return (
    <section id="skills">
      <h5>Constantly Learning and Adding to</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__child">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {front.map(({ skill, image }, index) => {
              return (
                <article className="skills__details" key={index}>
                  <div>
                    <img src={image} alt={skill} />
                    <h4>{skill}</h4>
                    <BsPatchCheckFill className="skills__details-icon" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="skills__child">
          <h3>Backend Development</h3>
          <div className="skills__content">
            {back.map(({ skill, image }, index) => {
              return (
                <article className="skills__details" key={index}>
                  <div>
                    <img src={image} alt={skill} />
                    <h4>{skill}</h4>
                    <BsPatchCheckFill className="skills__details-icon" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
