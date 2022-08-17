import axios from "axios";
import React, {  useEffect, useState } from "react";
import Fade from "react-reveal";

const About = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await axios.get(`/aboutData`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={data?.profilepic}
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{data?.bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{data?.name}</span>
                  <br />
                  <span>
                    {data?.street}
                    <br />
                    {data?.city} {data?.state}, {data?.zip}
                  </span>
                  <br />
                  <span>{data?.phone}</span>
                  <br />
                  <span>{data?.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={data?.resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
