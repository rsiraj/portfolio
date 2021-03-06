import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Gateway Redesign - Travel Guide",
    github: "https://github.com/rsiraj/gateway",
    demo: "https://rsiraj.github.io/gateway/index.html",
  },
  {
    id: 2,
    image: IMG2,
    title: "Social Justice - Doctors Against Disparities in Healthcare",
    github: "https://github.com/rsiraj/socialjustice",
    demo: "https://rsiraj.github.io/socialjustice/index.html",
  },
  {
    id: 3,
    image: IMG3,
    title: "HOPE Hacks - FitHub",
    github: "https://github.com/rsiraj/hopehacks",
    demo: "http://fithub.site",
  },
  {
    id: 4,
    image: IMG4,
    title: "Redesign - Tesla Clone",
    github: "https://github.com/rsiraj/teslaclone",
    demo: "http://c9tesla.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Ecommerce - Plant Heaven",
    github: "https://github.com/rsiraj/ecommercev2",
    demo: "https://plantheaven.herokuapp.com/",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Title of Project6",
  //   github: "https://github.com",
  //   demo: "http://fithub.site",
  // }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
