import React from "react";
import "./home.css";

export default function Home() {
  return (
    <section className="section__home">
      <ul className="section__ul">
        <li className="section__li--greet"><label className="color">Hi</label>, my name is</li>
        <li className="section__li--name"><label className="color" >Jhan</label> Carlo Cossio.</li>
        <li className="section__li--profesion"><label className="color">Im</label> a developer of web software and experiences.</li>
        <li className="section__li--text">
          I am a web developer specialized in the creation of
          <br /> web experiences focused mainly on offering an excellent
          experience
        </li>
      </ul>
    </section>
  );
}
