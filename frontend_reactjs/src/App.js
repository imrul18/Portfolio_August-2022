import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Components/Loading";

axios.defaults.baseURL = "http://api.imrul.xyz/api";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    headerData: null,
    aboutData: null,
    contactData: null,
    footerData: null,
    projectData: null,
    resumeData: null,
  });

  const fetchData = async () => {
    var tempData = {};
    var res = await axios.get(`/headerData`);
    tempData = { ...tempData, headerData: res.data };
    res = await axios.get(`/aboutData`);
    tempData = { ...tempData, aboutData: res.data };
    res = await axios.get(`/contactData`);
    tempData = { ...tempData, contactData: res.data };
    res = await axios.get(`/footerData`);
    tempData = { ...tempData, footerData: res.data };
    res = await axios.get(`/projectData`);
    tempData = { ...tempData, projectData: res.data };
    res = await axios.get(`/resumeData`);
    tempData = { ...tempData, resumeData: res.data };
    console.log(res);

    setData(tempData);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header data={data.headerData} />
          <About data={data.aboutData} />
          <Resume data={data.resumeData} />
          <Portfolio data={data.projectData} />
          <Contact data={data.aboutData} />
          <Footer data={data.footerData} />
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
