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

const Skills = () => {
  return (
    <section id="skills">
      <h5>Constantly Learning and Adding to</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__child">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div>
                <img src={htmlLogo} alt="HTML 5 Logo" />
                <h4>HTML 5</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={cssLogo} alt="CSS 3 Logo" />
                <h4>CSS</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={sassLogo} alt="SASS Logo" />
                <h4>SASS</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={jsLogo} alt="JavaScript Logo" />
                <h4>JavaScript</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={reactLogo} alt="React Logo" />
                <h4>ReactJS</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={bsLogo} alt="BootStrap Logo" />
                <h4>Bootstrap</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>
          </div>
        </div>

        <div className="skills__child">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div>
                <img src={nodeLogo} alt="NodeJS Logo" />
                <h4>NodeJS</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={mysqlLogo} alt="MySQL Logo" />
                <h4>MySQL</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={mdbLogo} alt="MongoDB Logo" />
                <h4>MongoDB</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>

            <article className="skills__details">
              <div>
                <img src={awsLogo} alt="AWS Logo" />
                <h4>AWS</h4>
                <BsPatchCheckFill className="skills__details-icon" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
