import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { toast } from "react-toastify";

import { Fade, Slide } from "react-reveal";

const Contact = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await axios.get(`/contactData`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [message, setMessage] = useState({
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    if (
      message?.contactName.length < 1 ||
      message?.contactEmail.length < 1 ||
      message?.contactSubject.length < 1 ||
      message?.contactMessage.length < 1
    ) {
      toast.error("Please fill all * fields 😊");
    } else {
      await axios.post(`/sendMail`, message);
      document.getElementById("contactForm").reset();
      setMessage({
        contactName: "",
        contactEmail: "",
        contactSubject: "",
        contactMessage: "",
      });
      toast.success("Sent Message Successfully 😊");
    }
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{data?.contactmessage}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form onSubmit={sendMail} id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">
                    Subject<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="12"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {data?.name}
                <br />
                {data?.street} <br />
                {data?.city}, {data?.state} {data?.zip}
                <br />
                <span>{data?.phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Posts</h4>
              <ul>
                {data?.post?.map((posts) => {
                  return (
                    <li>
                      <span>
                        {posts?.post}
                        <br />
                        <a href={posts?.url} target="new">
                          {posts?.type}
                        </a>
                      </span>
                      <br />

                      <b>
                        <p>{moment(posts?.updated_at).fromNow()}</p>
                      </b>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
