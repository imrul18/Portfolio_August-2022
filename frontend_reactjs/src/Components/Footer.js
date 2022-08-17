import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

const Footer = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await axios.get(`/footerData`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const networks = data?.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url} target="_new">
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2022 Imrul Afnan</li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
