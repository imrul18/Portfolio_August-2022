import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
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

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
