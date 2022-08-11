import React, { useEffect, useState } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import axios from "axios";

const Portfolio = () => {
  let id = 0;

  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await axios.get(`/projectData`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const projects = data?.map(function (projects) {
    let projectImage = projects.image;

    return (
      <div key={projects?.id} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={projects.title} src={projectImage} style={{height:140, width:220}}/>
          <div style={{ textAlign: "center" }}>{projects.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
