import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const Header = ({ data }) => {
  console.log("Header", data);
  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{data?.name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{data?.description}.</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a
                href="#portfolio"
                className="smoothscroll button btn project-btn"
              >
                <i className="fa fa-book"></i>Project
              </a>
              <a
                href={data?.github}
                target="_new"
                className="button btn github-btn"
              >
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
