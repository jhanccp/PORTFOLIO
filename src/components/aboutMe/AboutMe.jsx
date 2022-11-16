import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <section className="section__aboutMe" id="section__aboutMe">
      <div>
        <p className="section__p--tittle">About Me</p>
        <p className="section__p--content">
          Hello my name is Jhan Carlo, I am currently a student and I live in
          Medellin-Colombia, I am a self-taught fronted developer. I started
          programming in 2020 with the python language, in 2021 I decided to
          venture into web development and started learning html and css Since
          then I have been improving my skills until today. My professional
          focus is mainly to create web experiences for different types of
          clients.
        </p>
        <div className="section__div--habilities">
          <ul className="div__ul--habilities">
            <li className="div__li--habilities">React</li>
            <li className="div__li--habilities">Node.js</li>
            <li className="div__li--habilities">Git & Github</li>
            <li className="div__li--habilities">Python</li>
          </ul>
        </div>
      </div>

      <div className="section__div--i">
        <img />
      </div>
    </section>
  );
}
