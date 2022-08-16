import React from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-reveal";

const Loading = () => {
  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={2000}>
            <ul className="social">
              <p className="button btn github-btn">
                <i className="fa fa-spinner"></i>Loading...
              </p>
            </ul>
          </Fade>
        </div>
      </div>
    </header>
  );
};

export default Loading;
