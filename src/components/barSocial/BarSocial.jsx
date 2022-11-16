import React from "react";
import "./barSocial.css";
import git from "./../../../src/assets/git.svg";
import instagram from "./../../../src/assets/instagram.svg";
import linkedin from "./../../../src/assets/linkedin.svg";
import twitter from "./../../../src/assets/twitter.svg";

export default function BarSocial() {
  return (
    <section className="section__barSocial">
      <li className="section__li--social">
        <a href="">
          <img className="section__img--git" src={git} />
        </a>
      </li>
      <li className="section__li--social">
        <a href="">
          <img className="section__img" src={instagram} />
        </a>
      </li>
      <li className="section__li--social">
        <a href="">
          <img className="section__img" src={linkedin} />
        </a>
      </li>
      <li className="section__li--social">
        <a href="">
          <img className="section__img" src={twitter} />
        </a>
      </li>
      <li className="section__li--text">
        <a href=""></a>
      </li>
    </section>
  );
}
