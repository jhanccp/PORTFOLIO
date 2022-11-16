import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import BarSocial from "./components/barSocial/BarSocial";
import AboutMe from "./components/aboutMe/AboutMe";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
    <NavBar />
    <div className="animate__animated animate__bounceInLeft">
      <div className="body">
        <Home />
        <AboutMe />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
    <BarSocial />
  </React.StrictMode>
);
