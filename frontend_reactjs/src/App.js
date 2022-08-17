import React, { useState } from "react";
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
